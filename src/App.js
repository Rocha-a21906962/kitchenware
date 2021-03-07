import { Switch, Route } from 'react-router-dom';
import {Component, useState, useEffect} from 'react';

import GlobalStyles from "./components/GlobalStyles.js";
import Nav from './components/Nav.js';
import SideNav from './components/SideNav.js';
import AlertBubble from './components/AlertBubble.js';
import Dashboard from './pages/Dashboard.js';
import RecipeFeed from './pages/RecipeFeed.js';
import SearchPage from './pages/SearchPage.js';
import DeviceManagement from './pages/DeviceManagement.js';
import Pantry from './pages/Pantry.js';
import ToolManagement from './pages/ToolManagement.js';
import Stats from './pages/Stats.js';
import Orders from './pages/Orders.js';
import MealsAndEvents from './pages/MealsAndEvents.js';
import About from './pages/About.js';
import Settings from './pages/Settings.js';
import Favourites from './pages/Favourites.js';
/* temporary (just for testing) */
import IngredientList from './pages/IngredientList.js';
import Ingredient from './pages/Ingredient.js';
import IngredientStats from './pages/IngredientStats.js';
import RecipeList from './pages/RecipeList.js';
import Recipe from './pages/Recipe.js';
import RecipeStats from './pages/RecipeStats.js';
import IngredientCategoriesPage from "./pages/IngredientCategories";
import RecipeCategoriesPage from "./pages/RecipeCategories";

import meal_planning from './data/meal_planning';
import order_planning from './data/orders';
import ingredient_categories from './data/ingredient_categories';
import ingredients from './data/ingredients';
import recipe_categories from './data/recipe_categories';
import recipes from './data/recipes';
import ScrollToTop from './components/ScrollToTop.js';
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Burguer from "./components/buttons/Burguer";

import logo from "./img/reactlogo.png";
import pic from "./img/profile.png";
import { defaults, Line, Bar } from "react-chartjs-2";

const MainPanel = styled.div.attrs( props =>({
  className: props.className,
}))`
  width: 100vw;
  height: 100vh;
  border-top: 2px solid #000000;
  //#04BF00
  float: right;

  @media only screen and (max-width: 1200px) {
    right: 0;
    transform: ${({show}) => show ? 'translate3d(260px,0,0)' : 'translate3d(0,0,0)' };
    transition: .5s cubic-bezier(.685,.0473,.346,1);
  }
  
`;

const SideBar = styled.div.attrs( props =>({
  className: props.className,
}))`
  width: ${({show}) => show ? '230px' : '80px' };
  height: calc(100vh - 90px);
  position: fixed;
  background-color: #000000;
  background-image: linear-gradient(#000000 , #2d3436 );
  background-repeat: no-repeat;
  border-radius: 5px;
  margin-top: 80px;
  margin-left: 20px;
  z-index: 1024;
  transition-property: top,bottom,width;
  transition-duration: .2s,.2s,.35s;
  transition-timing-function: linear,linear,ease;
  
  ul{
    list-style: none;
    margin-top: 20px;
  }
  
  li{
    padding: 30px;
  }
  
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  
  i {
    color: #ffffff;
    font-size: 20px;
    width: 37px;
  }
  
  span {
    font-family: "Poppins";
    color: #ffffff;
    font-weight: 300;
    text-transform: uppercase;
    font-size: 12px;
    display: block;
    transition: .5s;
    opacity: ${({show}) => show ? 1 : 0 };
    transform: ${({show}) => show ? 'translate(0, 0, 0)' : 'translate(-25px, 0, 0)'
    };
  
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    border: 5px solid #000000;
    border-top: 5px solid transparent;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    left: 30px;
    transform: translate(50%);
    transition: .2s;
  }
    
    &.sidebar-wrapper {
      min-height: 100%;
      max-height: calc(100vh - 705px);
      z-index: 4;
      overflow: auto;
    }
  }

    @media only screen and (max-width: 1200px) {
      position: fixed;
      display: ${({show}) => show ? 'block' : 'none' };
      top: 0;
      height: 100vh;
      width: 260px!important;
      right: auto;
      left: 0;
      margin: 0;
      border-radius: 0;
      z-index: 1032;
      visibility: visible;
      overflow-y: visible;
      padding: 0;
      transition: .5s cubic-bezier(.685,.0473,.346,1);
      transform: ${({show}) => show ? 'translateZ(0);' : 'translate3d(-260px,0,0)' };
    }
`;

const NavBar = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 35px 0px 20px;
  
  i {
    color: #ffffff;
    font-size: 20px;
    margin-left: 30px;
  }
  
  button {
    background: transparent;
    border: none;
    outline: none;
  }
  
  p {
    font-family: "Poppins";
    color: #ffffff;
    font-size: 14px;
    text-transform: uppercase;
    margin-left: 83px;
    opacity: 1;
    transition: .6s;
  }
`;

const LeftNavContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  
  button {
    display: none;
  }

  @media only screen and (max-width: 1200px) {
    button {
      display: block;
      transition: .5s;
    }
  }
`;

const RightNavContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Photo = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  overflow: hidden;
  margin-left: 30px;
  
  img{
    width: 100%;
  }
`;

const Content = styled.div`
  padding: ${({show}) => show ? '80px 30px 30px 140px' : '80px 30px 30px 280px' };
  transition: .5s;

  @media only screen and (max-width: 1200px) {
    padding-left: 30px;
  }
`;

const Logo = styled.div`
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 15px;

  img {
    width: 35px;
    margin-left: 23px;
  }
  
  span {
    font-family: "Poppins";
    color: #ffffff;
    display: block;
    white-space: nowrap;
    font-size: 13px;
    text-transform: uppercase;
    overflow: hidden;
    margin-left: 10px;
    font-weight: 400;
    transition: .5s;

    opacity: ${({show}) => show ? 1 : 0 };
    transform: ${({show}) => show ? 'translate(0, 0, 0)' : 'translate(-25px, 0, 0)' };
  }
  
  &::after {
    content: '';
    position: absolute;
    display: flex;
    justify-content: center;
    height: 1px;
    width: ${({show}) => show ? '90%' : '70%' };
    background: #ffffff;
    left: 12px;
    bottom: 0;
  }
`;

defaults.global.defaultFontFamily = "Poppins";
defaults.global.defaultFontSize = 12;
defaults.global.defaultFontColor = '#ffffff';

const Plot1 = () => {
  return <Line
    data={{
      labels: ['HTML', 'CSS', 'JS', 'C#', 'PYT', 'PHP', 'GO', 'RJS', 'VJS', 'AJS'],
      datasets: [{
        label: '# of votes',
        data: [42, 39, 33, 45, 47, 25, 22, 23, 50, 43, 22],
        // Como só têm uma cor, vai ficar default para todas as labels
        backgroundColor: ['#485461'],
        borderColor: [
          '#04BF00',
          '#04BF00',
          '#04BF00',
          '#04BF00',
          '#04BF00',
          '#04BF00',
          '#04BF00',
          '#04BF00',
          '#04BF00',
          '#04BF00'
        ],
        borderWidth: 3,
      }]
    }}
    options={{
      responsive: true,
      maintainAspectRatio: false,
      legend: { display: false },
      tooltips: {
        backgroundColor: "#fff",
        titleFontColor: "#4c4c4c",
        bodyFontColor: "#4c4c4c",
        enabled: true,
        mode: 'single',
        multiKeyBackground: "#E1548F"
        },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 20
          }
        },
      scales: {
        xAxes: [{
          gridLines: {
            color: "rgba(225, 84, 143, 0.1)",
            }
          }],
        yAxes: [{
          gridLines: {
            color: "rgba(225, 84, 143, 0.1)",
            }
          }]

        }
    }}
  />
}
const Plot2 = () => {
  return <Line
      data={{
        labels: ['JUL', 'AGO', 'OCT', 'NOV', 'DIC', 'ENE'],
        datasets: [{
          label: '# of Votes',
          data: [42, 39, 33, 45, 47, 25, 20],
          backgroundColor: [
            'transparent'
          ],
          borderColor: [
            '#E1548F',
            '#E1548F',
            '#E1548F',
            '#E1548F',
            '#E1548F',
            '#E1548F'
          ],
          borderWidth: 3,
        }]
      }}
      options={{
        responsive: true,
        legend: { display: false },
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: "#fff",
          titleFontColor: "#4c4c4c",
          bodyFontColor: "#4c4c4c",
          enabled: true,
          mode: 'single'
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 20
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              color: "rgba(225, 84, 143, 0.1)",
            }
          }],
          yAxes: [{
            gridLines: {
              color: "rgba(225, 84, 143, 0.1)",
            }
          }]

        }
      }}
  />
}
const Plot3 = () => {
  return <Bar
      data={{
        labels: ['USA', 'BRA', 'PER', 'ARG', 'BOL', 'PAR'],
        datasets: [{
          label: '# of Votes',
          data: [42, 39, 33, 45, 47, 25, 20],
          backgroundColor: [
            'transparent'
          ],
          borderColor: [
            '#0098f0',
            '#0098f0',
            '#0098f0',
            '#0098f0',
            '#0098f0',
            '#0098f0',
            '#0098f0',
            '#0098f0',
            '#0098f0',
            '#0098f0'
          ],
          borderWidth: 2,

        }]
      }}
      options={{
        responsive: true,
        legend: { display: false },
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: "#fff",
          titleFontColor: "#4c4c4c",
          bodyFontColor: "#4c4c4c",
          enabled: true,
          mode: 'single'
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 20
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              color: "rgba(0, 152, 240, 0.1)",
            }
          }],
          yAxes: [{
            gridLines: {
              color: "rgba(0, 152, 240, 0.1)",
            }
          }]

        }
      }}
  />
}
const Plot4 = () => {
  return <Line
      data={{
        labels: ['JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'],
        datasets: [{
          label: '# of Votes',
          data: [42, 39, 33, 45, 47, 25],
          backgroundColor: [
            'transparent'
          ],
          borderColor: [
            '#00f2c3',
            '#00f2c3',
            '#00f2c3',
            '#00f2c3',
            '#00f2c3',
            '#00f2c3',
            '#00f2c3',
            '#00f2c3',
            '#00f2c3',
            '#00f2c3'
          ],
          borderWidth: 2,

        }]
      }}
      options={{
        responsive: true,
        legend: { display: false },
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: "#fff",
          titleFontColor: "#4c4c4c",
          bodyFontColor: "#4c4c4c",
          enabled: true,
          mode: 'single'
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 20
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              color: "rgba(0, 242,195, 0.1)",
            }
          }],
          yAxes: [{
            gridLines: {
              color: "rgba(0, 242,195, 0.1)",
            }
          }]

        }
      }}
  />
}


const Row = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Card = styled.div.attrs( props =>({
  className: props.className,
}))`
  background-color: #2d3436;
  //cor de baixo...#485461
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.1);

  & .card-chart{
    overflow: hidden;
    height: auto;
  }
`;

const CardChartHeader = styled.div`
  padding: 10px;
  margin-bottom: 30px;

  span {
    color: white;
    font-family: "Poppins";
    font-size: 10px;
  }

  h6 {
    color: white;
    font-family: "Poppins";
    font-size: 16px;
  }
  
`;

const RowCom4Slots = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  padding-bottom: 10px;

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    background: #ffffff;
    margin: 0 auto;
    bottom: 0;
  }
`;

const CardHeaderTitle = styled.span`
    font-family: "Poppins";
    display: flex;
    justify-content: center;
    color: #ffffff;
    font-size: 10px;
`;

const CardHeaderSubtitle = styled.h6`
    font-family: "Poppins";
    display: flex;
    justify-content: flex-end;
    color: #ffffff;
    font-size: 20px;
`;

const Symbol = styled.div.attrs( props =>({
  className: props.className,
}))`

  height: 50px;
  width: 50px;
  
  & .fa-comments {
    background: #ff8d72;
    background-image: linear-gradient(to bottom left,#ff8d72,#ff6491,#ff8d72);
    background-size: 210% 210%;
    background-position: 100% 0;
    color: #fff;
    border-radius: 50%;
    padding: 12px;
  }
  
  & .fa-star {
    background: #e14eca;
    background-image: linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca);
    background-size: 210% 210%;
    background-position: 100% 0;
    color: #fff;
    border-radius: 50%;
    padding: 12px;
  }
  
  & .fa-user {
    background: #00f2c3;
    background-image: linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3);
    background-size: 210% 210%;
    background-position: 100% 0;
    color: #fff;
    border-radius: 50%;
    padding: 12px 14px;
  }
  
  & .fa-hourglass {
    background: #fd5d93;
    background-image: linear-gradient(to bottom left,#fd5d93,#ec250d,#fd5d93);
    background-size: 210% 210%;
    background-position: 100% 0;
    color: #fff;
    border-radius: 50%;
    padding: 12px 14px;
  }
`;

const CardFooter = styled.div`
  padding: 10px 0px 5px 10px;
  
  i {
    color: #a8a8a8;
  }
  
  span {
    font-family: "Poppins";
    color: #a8a8a8;
    margin-left: 10px;
    font-weight: 300;
    font-size: 13px;
  }
`;

const GridRowCharts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 20px;
  grid-gap: 20px;

  @media only screen and (max-width: 1200px) {
      grid-template-columns: repeat(2,1fr);
  }
`;


function App() {

  // const [mealPlanning, setMealPlanning] = useState(meal_planning());
  // const [orders, setOrders] = useState(order_planning());
  // const [ingredientData, setIngredientData] = useState(ingredients());
  // const [recipeData, setRecipeData] = useState(recipes());
  // /* We don't want the categories to mutate! */
  // const ingredientCategories = ingredient_categories();
  // const recipeCategories = recipe_categories();
  const [open, setOpen] = useState(true)

  useEffect(() => {
    console.log("Open")
  }, [open]);

  return (
    <div className="App" show={open}>
      <SideBar className="sidebar" show={open}>
        <div className="sidebar-wrapper">
          <Logo className="logo" show={open} >
            <img src={logo} alt="Logotipo" />
            <span>Kitchenware</span>
          </Logo>
          <div className="nav">
            <ul>
              <li>
                <a href="">
                  <i className="fas fa-tachometer-alt"></i>
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-qrcode"></i>
                  <span>Dispositivos</span>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fas fa-cash-register"></i>
                  <span>Utensílios</span>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fas fa-shopping-cart"></i>
                  <span>Dispensa</span>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fas fa-user-tie"></i>
                  <span>Receitas</span>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fas fa-users"></i>
                  <span>Encomendas</span>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fas fa-money-bill-wave"></i>
                  <span>Refeições</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </SideBar>
      <MainPanel show={open}>
        <NavBar className="navbar">
          <LeftNavContainer className="navbar-bar">
            <div onClick={() => setOpen(!open)}><Burguer></Burguer></div>
            <button id="boton-sidebar_fixed" onClick={() => setOpen(!open)}>
              <i className="fa fa-list-ul"></i>
            </button>
            <p>Dashboard</p>
          </LeftNavContainer>
          <RightNavContainer className="navbar-options">
            <i className="fas fa-search"></i>
            <i className="far fa-bell"></i>
            <Photo className="photo">
              <img src={pic} alt="profile"/>
            </Photo>
          </RightNavContainer>
        </NavBar>
        <Content class="content" show={!open}>
          <Row className="grid-row">
              <Card className="card card-chart">
                <CardChartHeader className="card_chart-header">
                    <span>Total de utilizadores</span>
                    <h6>Mensalmente</h6>
                </CardChartHeader>
                <div className="card-body">
                  <div className="card-area">
                    <Plot1></Plot1>
                  </div>
                </div>
              </Card>
          </Row>
          <RowCom4Slots>
            <Card>
              <CardHeader>
                <Symbol>
                  <i className="far fa-comments"></i>
                </Symbol>
                <div>
                  <CardHeaderTitle>Mensagem</CardHeaderTitle>
                  <CardHeaderSubtitle>10Gb</CardHeaderSubtitle>
                </div>
              </CardHeader>
              <CardFooter>
                <i className="far fa-comments"></i>
                <span>Atualiza</span>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Symbol>
                  <i className="far fa-star"></i>
                </Symbol>
                <div>
                  <CardHeaderTitle>Seguidores</CardHeaderTitle>
                  <CardHeaderSubtitle>+5k</CardHeaderSubtitle>
                </div>
              </CardHeader>
              <CardFooter>
                <i className="far fa-comments"></i>
                <span>Atualiza</span>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Symbol>
                  <i className="far fa-user"></i>
                </Symbol>
                <div>
                  <CardHeaderTitle>Usuarios</CardHeaderTitle>
                  <CardHeaderSubtitle>150000</CardHeaderSubtitle>
                </div>
              </CardHeader>
              <CardFooter>
                <i className="far fa-comments"></i>
                <span>Atualiza</span>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Symbol>
                  <i className="far fa-hourglass"></i>
                </Symbol>
                <div>
                  <CardHeaderTitle>Tempo</CardHeaderTitle>
                  <CardHeaderSubtitle>12h</CardHeaderSubtitle>
                </div>
              </CardHeader>
              <CardFooter>
                <i className="far fa-comments"></i>
                <span>Atualiza</span>
              </CardFooter>
            </Card>
          </RowCom4Slots>
          <GridRowCharts>
            <Card className="card card-chart">
              <CardChartHeader className="card_chart-header">
                <span>Total de Videos</span>
                <h6>Mensalmente</h6>
              </CardChartHeader>
              <div className="card-body">
                <div className="card-area">
                  <Plot2></Plot2>
                </div>
              </div>
            </Card>
            <Card className="card card-chart">
              <CardChartHeader className="card_chart-header">
                <span>Total de Likes</span>
                <h6>Mensalmente</h6>
              </CardChartHeader>
              <div className="card-body">
                <div className="card-area">
                  <Plot3></Plot3>
                </div>
              </div>
            </Card>
            <Card className="card card-chart">
              <CardChartHeader className="card_chart-header">
                <span>Total de Doações</span>
                <h6>Mensalmente</h6>
              </CardChartHeader>
              <div className="card-body">
                <div className="card-area">
                  <Plot4></Plot4>
                </div>
              </div>
            </Card>
          </GridRowCharts>
        </Content>
      </MainPanel>
    {/*  <GlobalStyles />*/}
    {/*  <AlertBubble />*/}
    {/*  <ScrollToTop>*/}
    {/*    <Switch>*/}
    {/*      <Route path="/" exact>*/}
    {/*        <Dashboard />*/}
    {/*      </Route>*/}
    {/*      <Route path="/device_management" exact>*/}
    {/*        <DeviceManagement />*/}
    {/*      </Route>*/}
    {/*      <Route path="/tool_management" exact>*/}
    {/*        <ToolManagement />*/}
    {/*      </Route>*/}
    {/*      <Route path="/pantry" exact>*/}
    {/*        <Pantry*/}
    {/*            ingredientData={ingredientData}*/}
    {/*            setIngredientData={setIngredientData}*/}
    {/*            ingredientCategories={ingredientCategories} />*/}
    {/*      </Route>*/}
    {/*      <Route path="/recipe_feed" exact>*/}
    {/*        <RecipeFeed*/}
    {/*            recipeData={recipeData}*/}
    {/*            setRecipeData={setRecipeData}*/}
    {/*            recipeCategories={recipeCategories} />*/}
    {/*      </Route>*/}
    {/*      <Route path="/orders" exact>*/}
    {/*        <Orders*/}
    {/*            orders={orders}*/}
    {/*            setOrders={setOrders}/>*/}
    {/*      </Route>*/}
    {/*      <Route path="/meals_and_events" exact>*/}
    {/*        <MealsAndEvents*/}
    {/*            mealPlanning={mealPlanning}*/}
    {/*            setMealPlanning={setMealPlanning}/>*/}
    {/*      </Route>*/}
    {/*      <Route path="/stats" exact>*/}
    {/*        <Stats />*/}
    {/*      </Route>*/}
    {/*      <Route path="/about" exact>*/}
    {/*        <About />*/}
    {/*      </Route>*/}
    {/*      <Route path="/settings" exact>*/}
    {/*        <Settings />*/}
    {/*      </Route>*/}
    {/*      <Route path="/search" exact>*/}
    {/*        <SearchPage />*/}
    {/*      </Route>*/}
    {/*      <Route path="/favourites" exact>*/}
    {/*        <Favourites*/}
    {/*            recipeData={recipeData}*/}
    {/*            setRecipeData={setRecipeData}*/}
    {/*            recipeCategories={recipeCategories}/>*/}
    {/*      </Route>*/}
    {/*      /!**/}
    {/*      <Route path="/profile" exact>*/}
    {/*        <Profile />*/}
    {/*      </Route>*/}
    {/*      *!/*/}
    {/*      <Route path="/ingredient_category/:category_name" exact>*/}
    {/*        <IngredientList*/}
    {/*            ingredientData={ingredientData}*/}
    {/*            setIngredientData={setIngredientData} */}
    {/*            ingredientCategories={ingredientCategories}*/}
    {/*            stats={false} />*/}
    {/*      </Route>*/}
    {/*      <Route path="/ingredient_category_stats/:category_name" exact>*/}
    {/*        <IngredientList*/}
    {/*            ingredientData={ingredientData}*/}
    {/*            setIngredientData={setIngredientData} */}
    {/*            ingredientCategories={ingredientCategories}*/}
    {/*            stats={true} />*/}
    {/*      </Route>*/}
    {/*      <Route path="/ingredient/:ingredient_name" exact>*/}
    {/*        <Ingredient*/}
    {/*            ingredientData={ingredientData}*/}
    {/*            setIngredientData={setIngredientData}*/}
    {/*            ingredientCategories={ingredientCategories} />*/}
    {/*      </Route>*/}
    {/*      <Route path="/ingredient_stats/:ingredient_name" exact>*/}
    {/*        <IngredientStats*/}
    {/*            ingredientData={ingredientData}*/}
    {/*            setIngredientData={setIngredientData}*/}
    {/*            ingredientCategories={ingredientCategories} />*/}
    {/*      </Route>*/}
    {/*      <Route path="/recipe_category/:category_name" exact>*/}
    {/*        <RecipeList */}
    {/*            recipeData={recipeData}*/}
    {/*            setRecipeData={setRecipeData}*/}
    {/*            recipeCategories={recipeCategories}*/}
    {/*            stats={false} />*/}
    {/*      </Route>*/}
    {/*      <Route path="/recipe_category_stats/:category_name" exact>*/}
    {/*        <RecipeList */}
    {/*            recipeData={recipeData}*/}
    {/*            setRecipeData={setRecipeData}*/}
    {/*            recipeCategories={recipeCategories}*/}
    {/*            stats={true} />*/}
    {/*      </Route>*/}
    {/*      <Route path="/recipe/:recipe_name" exact>*/}
    {/*        <Recipe*/}
    {/*            recipeData={recipeData}*/}
    {/*            setRecipeData={setRecipeData}*/}
    {/*            recipeCategories={recipeCategories} />*/}
    {/*      </Route>*/}
    {/*      <Route path="/recipe_stats/:recipe_name" exact>*/}
    {/*        <RecipeStats*/}
    {/*            recipeData={recipeData}*/}
    {/*            setRecipeData={setRecipeData}*/}
    {/*            recipeCategories={recipeCategories} />*/}
    {/*      </Route>*/}
    {/*      <Route path="/most_used_ingredients" exact>*/}
    {/*        <IngredientList*/}
    {/*            ingredientData={ingredientData}*/}
    {/*            setIngredientData={setIngredientData} */}
    {/*            ingredientCategories={ingredientCategories}*/}
    {/*            stats={true} />*/}
    {/*      </Route>*/}
    {/*      <Route path="/individual_ingredient_stats" exact>*/}
    {/*        <IngredientCategoriesPage*/}
    {/*            ingredientData={ingredientData}*/}
    {/*            setIngredientData={setIngredientData}*/}
    {/*            ingredientCategories={ingredientCategories} */}
    {/*            stats={true} />*/}
    {/*      </Route>*/}
    {/*      <Route path="/most_used_recipes" exact>*/}
    {/*        <RecipeList */}
    {/*            recipeData={recipeData}*/}
    {/*            setRecipeData={setRecipeData}*/}
    {/*            recipeCategories={recipeCategories}*/}
    {/*            stats={true} />*/}
    {/*      </Route>*/}
    {/*      <Route path="/individual_recipe_stats" exact>*/}
    {/*        <RecipeCategoriesPage */}
    {/*            recipeData={recipeData}*/}
    {/*            setRecipeData={setRecipeData}*/}
    {/*            recipeCategories={recipeCategories}*/}
    {/*            stats={true} />*/}
    {/*      </Route>*/}
    {/*    </Switch>*/}
    {/*  </ScrollToTop>*/}
    </div>
    );
}

export default App;
