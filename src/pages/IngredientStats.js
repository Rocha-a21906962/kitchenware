import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import Details from '../components/ingredient/Details.js';
import Photo from '../components/ingredient/Photo';
import StockDetails from '../components/ingredient/StockDetails';
import StockManagement from '../components/ingredient/StockManagement';
import LineChart from '../components/charts/LineChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import { Button } from 'semantic-ui-react';
import {faChartLine} from '@fortawesome/free-solid-svg-icons';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import { getRecipesWith, getOrdersWith, filterIngredients, filterRecipes } from '../helperFunctions';


const data1 = [
	{
		day: "Mar 1",
		city: "stock quantity",
		qty: 7
	},
	{
		day: "Mar 2",
		city: "stock quantity",
		qty: 13
	},
	{
		day: "Mar 3",
		city: "stock quantity",
		qty: 16.5
	},
	{
		day: "Mar 4",
		city: "stock quantity",
		qty: 14.5
	},
	{
		day: "Mar 5",
		city: "stock quantity",
		qty: 10
	},
	{
		day: "Mar 6",
		city: "stock quantity",
		qty: 7.5
	},
	{
		day: "Mar 7",
		city: "stock quantity",
		qty: 9.2
	},
	{
		day: "Mar 8",
		city: "stock quantity",
		qty: 14.5
	},
	{
		day: "Mar 9",
		city: "stock quantity",
		qty: 9.3
	},
	{
		day: "Mar 10",
		city: "stock quantity",
		qty: 8.3
	},
	{
		day: "Mar 11",
		city: "stock quantity",
		qty: 8.9
	},
	{
		day: "Mar 12",
		city: "stock quantity",
		qty: 5.6
	},
	{
		day: "Mar 13",
		city: "stock quantity",
		qty: 5.6
	},
	{
		day: "Mar 14",
		city: "stock quantity",
		qty: 5.6
	},
];


const data2 = [
	{
		day: "Mar 1",
		city: "daily usage",
		qty: 3.9
	},
	{
		day: "Mar 2",
		city: "daily usage",
		qty: 4.2
	},
	{
		day: "Mar 3",
		city: "daily usage",
		qty: 5.7
	},
	{
		day: "Mar 4",
		city: "daily usage",
		qty: 8.5
	},
	{
		day: "Mar 5",
		city: "daily usage",
		qty: 11.9
	},
	{
		day: "Mar 6",
		city: "daily usage",
		qty: 15.2
	},
	{
		day: "Mar 7",
		city: "daily usage",
		qty: 14
	},
	{
		day: "Mar 8",
		city: "daily usage",
		qty: 16.6
	},
	{
		day: "Mar 9",
		city: "daily usage",
		qty: 14.2
	},
	{
		day: "Mar 10",
		city: "daily usage",
		qty: 10.3
	},
	{
		day: "Mar 11",
		city: "daily usage",
		qty: 5.6
	},
	{
		day: "Mar 12",
		city: "daily usage",
		qty: 9.8
	},
	{
		day: "Mar 13",
		city: "daily usage",
		qty: 4.3
	},
	{
		day: "Mar 14",
		city: "daily usage",
		qty: 4.1
	},
];


const data3 = [
	{
		day: "Mar 1",
		city: "meals per day",
		qty: 9.9
	},
	{
		day: "Mar 2",
		city: "meals per day",
		qty: 7.2
	},
	{
		day: "Mar 3",
		city: "meals per day",
		qty: 6.7
	},
	{
		day: "Mar 4",
		city: "meals per day",
		qty: 8.5
	},
	{
		day: "Mar 5",
		city: "meals per day",
		qty: 11.9
	},
	{
		day: "Mar 6",
		city: "meals per day",
		qty: 8.2
	},
	{
		day: "Mar 7",
		city: "meals per day",
		qty: 7
	},
	{
		day: "Mar 8",
		city: "meals per day",
		qty: 9.6
	},
	{
		day: "Mar 9",
		city: "meals per day",
		qty: 6.2
	},
	{
		day: "Mar 10",
		city: "meals per day",
		qty: 4.3
	},
	{
		day: "Mar 11",
		city: "meals per day",
		qty: 5.6
	},
	{
		day: "Mar 12",
		city: "meals per day",
		qty: 7.8
	},
	{
		day: "Mar 13",
		city: "meals per day",
		qty: 3.3
	},
	{
		day: "Mar 14",
		city: "meals per day",
		qty: 2.1
	},
];


const IngredientStats = ({
    ingredientData,
    setIngredientData,
    ingredientCategories,
    recipeData,
    orders
}) => {

    /* Hook for chart visibility */
    const [visibleChart, setVisibleChart] = useState("1");
    const [chartData, setChartData] = useState(data1);

    let { ingredient_name } = useParams();
    const ingredient = ingredientData.filter(ingredient => ingredient.name === ingredient_name)[0];

    console.log("getRecipesWith");
    console.log(getRecipesWith(recipeData, ingredient.name));
    console.log("getOrdersWith");
    console.log(getOrdersWith(orders, ingredient.name));

    let search_string = 'a';

    let ingredient_filters = {
        stock_status: 'in_stock',
        categories: [],
        with_incoming_orders_only: false,
    }
    console.log("filterIngredients");
    console.log(filterIngredients(ingredientData, orders, ingredient_filters, search_string));
    
    let recipe_filters = {
        stock_status: 'in_stock',
        preparation_time: '<30',
        cooking_time: '<30',
        total_time: '<60',
        categories: [],
    }
    console.log("filterRecipes");
    console.log(filterRecipes(recipeData, ingredientData, recipe_filters, search_string));

    const onToggleVisibleChart = (event) => {
        // setVisibleChart(event.target.value)
        let new_data;
        switch (event.target.value) {
            case "1":
                new_data = data1;
                break;
            case "2":
                new_data = data2;
                break;
            case "3":
                new_data = data3;
                break;
            default:
                console.log("erro");
        };
        console.log(event.target.value);
        console.log(chartData);
        console.log(new_data);
        setChartData(new_data);
    }

    const categories = ingredient.categories.map((category) => {return category.name});

    return (
        <div className="content">
            
            <StyledIngredient>
                <StyledPhoto>
                    <div className="gradient_overlay"></div>
                    <img src={ingredient.image} alt={`${ingredient.name} image`}/>
                    
                    <div className="ingredient_name">
                        <div className="favourite_container">
                            <h2>{ingredient.name}</h2>
                        </div>
                        <h5>{categories.flat().join(' • ')}</h5>
                    </div>
                </StyledPhoto>
                <StyledHr></StyledHr>
                <StyledMainDetails>
                    <div>Nutrition info: <span>240</span> calories/{ingredient.unit}</div>
                    <div>|</div>
                    <div>Auto-order: <span>{ingredient.auto_order.value ? "Yes" : "No"}</span></div>
                    <div>|</div>
                    <div> Allergy-safe: <span>Yes</span></div>
                    <div>|</div>
                    <div>Recipes: <span>{getRecipesWith(recipeData, ingredient_name).length}</span></div>
                </StyledMainDetails>
                <StyledHr></StyledHr>
                <StyledDescription>
                    <h3>Ingredient short description</h3>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </h5>
                </StyledDescription>
                <StyledButtons>    
                    <Link to={`/ingredient/${ingredient.name}`}>
                        <Button name="" id=""><FontAwesomeIcon icon={faHome} />Main ingredient page</Button>
                    </Link>
                    {/* <Button className="to_do" name="" id="">Order history (opens pop-up)</Button> */}
                </StyledButtons>
                <StyledHr></StyledHr>
                <StyledDetails>
                    <h3>Forecasted consumption</h3>
                    <h5>7 days: 1.2 kg</h5>
                    <h5>30 days: 5.1 kg</h5>
                    <StyledSmallHr></StyledSmallHr>
                    <h3>Recent consumption</h3>
                    <h5>7 days: 1.1 kg</h5>
                    <h5>30 days: 6.3 kg</h5>
                    <StyledSmallHr></StyledSmallHr>
                    <h3>Incoming orders</h3>
                    <h5>None</h5>
                    <StyledSmallHr></StyledSmallHr>
                    <h3>Next order estimated in:</h3>
                    <h5>11 days</h5>
                </StyledDetails>
                <StyledDetails>
                    <StyledChart>
                        <div id="chart_1" className={`chart ${visibleChart != "1" ? 'hide' : ''}`}>
                            <LineChart 
                                data={chartData}
                                height={250}
                                position="day*qty" //{"day*quantity"}
                                color="city" //{"stock quantity"} 
                                />
                        </div>
                        <div className="chart_buttons">
                            <button name="" value="1" onClick={onToggleVisibleChart}>Stock qty</button>
                            <button name="" value="2" onClick={onToggleVisibleChart}>Daily usage</button>
                            <button name="" value="3" onClick={onToggleVisibleChart}>Meals per day</button>
                        </div>
                    </StyledChart>
                </StyledDetails>
                <StyledHr></StyledHr>
                {/* <StockDetails />
                <StockManagement /> */}
            </StyledIngredient>
        </div>
    )
}

const StyledHr = styled.hr`
    width: 100%;
    margin: 1rem;
    border: 1px solid #2b2b2b;
`

const StyledSmallHr = styled.hr`
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #2b2b2b;
`

const StyledMainDetails = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding-left: 2rem;
    padding-right: 2rem;
    z-index: 4;
    color: white;
    p {
        padding: 1rem;
        font-size: 1rem;
        font-style: italic;
    }
    p span {
        font-size: 2rem;
        color: white;
        font-weight: 100;
        font-style: normal;
    }
`

const StyledIngredient = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    // border: 1px solid yellow;
    background-color: #000000dd;
    // padding-left: 1rem;
    // padding-right: 1rem;
`

const StyledChart = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: calc((100vw - 10rem)/2);
    height: 40vh;
    width: 50vw;
    background-color: #0a0a0a;
    .chart_buttons {
        display: flex;
        justify-content: center;
        width: 100%;
        background-color: #050505;
        button {
            width: 30%;
            font-size: 0.75rem;
            line-height: 0rem;
            white-space: nowrap;
            padding: 1rem;
        }
    }
`

const StyledPhoto = styled.div`
    position: relative;
    width: calc(100vw - 10rem);
    height: 25vh;
    img {
        position: absolute;
        display: block;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 2;
    }
    .gradient_overlay {
        position: absolute;
        display: block;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        // background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%); /* FF3.6+ */
        background: linear-gradient(to bottom,rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.65) 50%,rgba(0,0,0,0.95) 100%); /* W3C */
        z-index: 3;
  
    }
    .ingredient_name {
        position: absolute;
        left: 1rem;
        /* bottom: 1rem; */
        top: 4.25rem;
        display: flex;
        flex-direction: column;
        padding-left: 1rem;
        width: calc(100vw - 11rem);
        z-index: 5;
        h2 {
            font-size: 2rem;
            text-transform: capitalize;
            color: white;
            z-index: 5;
        }
        h5 {
            font-size: 1rem;
            color: #b2b2b2;
        }
        span {
            font-size: 3rem;
            font-style: normal;
        }
        .favourite_container {
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
    }

    .main_details {
        position: absolute;
        left: 0;
        bottom: 0;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        padding-left: 2rem;
        padding-right: 2rem;
        z-index: 4;
        color: white;
        p {
            padding: 1rem;
            font-size: 1rem;
            font-style: italic;
        }
        p span {
            font-size: 2rem;
            color: white;
            font-weight: 100;
            font-style: normal;
        }
    }
`

const StyledButtons = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    font-family: GTAmericaRegular;
    color: #b1b1b1;
    button {
        width: 16rem;
        font-size: 0.85rem;
        margin: 0.25rem;
        padding: 1rem;
        svg {
            margin-right: 0.45rem;
            height: 0.85rem;
        }
    }
`

const StyledDescription = styled.div`
    width: 80vw;
    padding-left: 1rem;
    margin-bottom: 1rem;
    font-family: GTAmericaRegular;
    color: #b1b1b1;
`

const StyledDetails = styled.div`
    width: 30vw;
    padding-left: 1rem;
    font-family: GTAmericaRegular;
    color: #b1b1b1;
    .stock_input {
        /* not working for now */
        transform: none;
        transition: transform 0.5s ease, opacity 0.5s ease;
    }
    .modified {
        /* not working for now */
        color: green;
    }
`

const StyledStockDetails = styled.div`
    color: white;
`

const StyledStockManagement = styled.div`
    color: white;
`

export default IngredientStats;