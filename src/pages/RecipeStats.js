import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faClock} from '@fortawesome/free-solid-svg-icons';
import {faChartLine} from '@fortawesome/free-solid-svg-icons';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {faShoePrints} from '@fortawesome/free-solid-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import { getStockOf, getRecipeAvailability, getCaloriesFor, getIngredientsFor } from '../helperFunctions';
import LineChart from '../components/charts/LineChart';


const data1 = [
	{
		month: "Jan",
		city: "Tokyo",
		temperature: 7
	},
	{
		month: "Feb",
		city: "Tokyo",
		temperature: 13
	},
	{
		month: "Mar",
		city: "Tokyo",
		temperature: 16.5
	},
	{
		month: "Apr",
		city: "Tokyo",
		temperature: 14.5
	},
	{
		month: "May",
		city: "Tokyo",
		temperature: 10
	},
	{
		month: "Jun",
		city: "Tokyo",
		temperature: 7.5
	},
	{
		month: "Jul",
		city: "Tokyo",
		temperature: 9.2
	},
	{
		month: "Aug",
		city: "Tokyo",
		temperature: 14.5
	},
	{
		month: "Sep",
		city: "Tokyo",
		temperature: 9.3
	},
	{
		month: "Oct",
		city: "Tokyo",
		temperature: 8.3
	},
	{
		month: "Nov",
		city: "Tokyo",
		temperature: 8.9
	},
	{
		month: "Dec",
		city: "Tokyo",
		temperature: 5.6
	},
];


const data2 = [
	{
		month: "Jan",
		city: "Tokyo",
		temperature: 3.9
	},
	{
		month: "Feb",
		city: "Tokyo",
		temperature: 4.2
	},
	{
		month: "Mar",
		city: "Tokyo",
		temperature: 5.7
	},
	{
		month: "Apr",
		city: "Tokyo",
		temperature: 8.5
	},
	{
		month: "May",
		city: "Tokyo",
		temperature: 11.9
	},
	{
		month: "Jun",
		city: "Tokyo",
		temperature: 15.2
	},
	{
		month: "Jul",
		city: "Tokyo",
		temperature: 17
	},
	{
		month: "Aug",
		city: "Tokyo",
		temperature: 16.6
	},
	{
		month: "Sep",
		city: "Tokyo",
		temperature: 14.2
	},
	{
		month: "Oct",
		city: "Tokyo",
		temperature: 10.3
	},
	{
		month: "Nov",
		city: "Tokyo",
		temperature: 5.6
	},
	{
		month: "Dec",
		city: "Tokyo",
		temperature: 9.8
	}
];


const data3 = [
	{
		month: "Jan",
		city: "Tokyo",
		temperature: 7
	},
	{
		month: "Jan",
		city: "London",
		temperature: 3.9
	},
	{
		month: "Feb",
		city: "Tokyo",
		temperature: 13
	},
	{
		month: "Feb",
		city: "London",
		temperature: 4.2
	},
	{
		month: "Mar",
		city: "Tokyo",
		temperature: 16.5
	},
	{
		month: "Mar",
		city: "London",
		temperature: 5.7
	},
	{
		month: "Apr",
		city: "Tokyo",
		temperature: 14.5
	},
	{
		month: "Apr",
		city: "London",
		temperature: 8.5
	},
	{
		month: "May",
		city: "Tokyo",
		temperature: 10
	},
	{
		month: "May",
		city: "London",
		temperature: 11.9
	},
	{
		month: "Jun",
		city: "Tokyo",
		temperature: 7.5
	},
	{
		month: "Jun",
		city: "London",
		temperature: 15.2
	},
	{
		month: "Jul",
		city: "Tokyo",
		temperature: 9.2
	},
	{
		month: "Jul",
		city: "London",
		temperature: 17
	},
	{
		month: "Aug",
		city: "Tokyo",
		temperature: 14.5
	},
	{
		month: "Aug",
		city: "London",
		temperature: 16.6
	},
	{
		month: "Sep",
		city: "Tokyo",
		temperature: 9.3
	},
	{
		month: "Sep",
		city: "London",
		temperature: 14.2
	},
	{
		month: "Oct",
		city: "Tokyo",
		temperature: 8.3
	},
	{
		month: "Oct",
		city: "London",
		temperature: 10.3
	},
	{
		month: "Nov",
		city: "Tokyo",
		temperature: 8.9
	},
	{
		month: "Nov",
		city: "London",
		temperature: 5.6
	},
	{
		month: "Dec",
		city: "Tokyo",
		temperature: 5.6
	},
	{
		month: "Dec",
		city: "London",
		temperature: 9.8
	}
];



const RecipeStats = ({
    recipeData,
    setRecipeData,
    recipeCategories,
    ingredientData,
    setIngredientData
}) => {

    /* Hook for chart visibility */
    const [visibleChart, setVisibleChart] = useState("1");
    const [chartData, setChartData] = useState(data1);

    let { recipe_name } = useParams();
    let recipe = recipeData.filter(recipe => recipe.name === recipe_name)[0];
    const recipe_ingredients = recipe.ingredients.map(recipe => recipe.name);
    const filtered_ingredient_data = ingredientData.filter((ingredient) => recipe_ingredients.includes(ingredient.name));

    console.log("getIngredientsFor");
    console.log(getIngredientsFor(ingredientData, recipe));
    
    const toggleRecipeFavouriteStatus = () => {

        console.log("before:" + recipe.is_favourite);

        const modifiedRecipeData = recipeData.map((r) => {
            if (r.name === recipe.name) {
                return {
                    ...r,
                    is_favourite: !recipe.is_favourite
                }
            } else {
                return {
                    ...r
                }
            }
        });
        setRecipeData(modifiedRecipeData);
        recipe = recipeData.filter(recipe => recipe.name === recipe_name)[0];
        
        console.log("after:" + recipe.is_favourite);
    };

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
    
    const TotalRecipeTime = () => {
        const total_recipe_time = recipe.steps.reduce((a, b) => a + b.time, 0);
        return total_recipe_time < 60 ? total_recipe_time + "mins" : Math.floor(total_recipe_time / 60) + "h" + total_recipe_time % 60;
    }
    
    const categories = recipe.categories.map((category) => {return category.name});


    return (
        <div className="content">

            <StyledRecipe>
                <StyledPhoto>
                    <div className="gradient_overlay"></div>
                    <img src={recipe.image} alt={`${recipe.name} image`}/>
                    <div className="recipe_name">
                        <div className="favourite_container">
                            <h2>{recipe.name}</h2>
                            <StyledFavouriteButton>
                                <button name="" id="" className={`${recipe.is_favourite ? 'hide_favourite_button ' : ''}`} onClick={toggleRecipeFavouriteStatus}><FontAwesomeIcon icon={faStar} />Add as favourite</button>
                                <button name="" id="" className={`${!recipe.is_favourite ? 'hide_favourite_button ' : ''}`} onClick={toggleRecipeFavouriteStatus}><FontAwesomeIcon icon={faStar} />Remove from favourites</button>
                            </StyledFavouriteButton>
                        </div>
                        <h5>{categories.flat().join(' • ')}</h5>
                        <StyledTimes>
                            <StyledCookingTime>
                                <FontAwesomeIcon icon={faClock} />
                                <h5>Preparation time: {recipe.preparation_time} minutes</h5>
                            </StyledCookingTime>
                            <StyledCookingTime>
                                <FontAwesomeIcon icon={faClock} />
                                <h5>Cooking time: {recipe.cooking_time} minutes</h5>
                            </StyledCookingTime>
                        </StyledTimes>
                    </div>
                </StyledPhoto>
                <StyledHr></StyledHr>
                <StyledMainDetails>
                    <div>Ingredients: <span>{getIngredientsFor(ingredientData, recipe).length}</span></div>
                    <div>|</div>
                    <div>Nutrition info: <span>{getCaloriesFor(ingredientData, recipe)}</span> calories/serving</div>
                    <div>|</div>
                    <div>Total cooking time: <span>{TotalRecipeTime()}</span></div>
                    <div>|</div>
                    <div> Allergy-safe: <span>Yes</span></div>
                </StyledMainDetails>
                <StyledHr></StyledHr>
                <StyledDescription>
                    <h3>Recipe short description</h3>
                    <h5>sfksdjfs dklfsdkfklsdfklsdgklsd lgkdslg sfksdjfsdkl fsdkfklsdfklsdg klsdlgkdslg sfksdjfsdkl fsdkfklsdfklsdg klsdlgkdslg sfksdjfs dklfsdkfklsdfkls dgklsdlgkdslg sfksdjfsdkl fsdkfklsdfklsdgklsdlg kdslg sfksdjfsdklfs dkfklsdfkls dgklsdlgkdslg sfksdjfsdkl fsdkfklsdfklsd gklsdlgkdslg sfksdj f sdklfsdkfklsdfklsdgk  lsdlgkdslgsfksdjfs dklf sdkfklsdfklsdgklsdlg kdslg </h5>
                </StyledDescription>
                <StyledButtons>
                    <Link to={`/recipe/${recipe.name}`}>
                        <button name="" id=""><FontAwesomeIcon icon={faHome} />Main recipe page</button>
                    </Link>
                </StyledButtons>
                <StyledHr></StyledHr>
                
                <StyledDetails>
                    <h3>Forecasted consumption</h3>
                    <h5>7 days: 11 meals</h5>
                    <h5>30 days: 47 meals</h5>
                    <StyledSmallHr></StyledSmallHr>
                    <h3>Recent consumption</h3>
                    <h5>7 days: 12 meals</h5>
                    <h5>30 days: 51 meals</h5>
                    <StyledSmallHr></StyledSmallHr>
                    <h3>Ingredient list</h3>
                    {
                        recipe.ingredients.map((ingredient) => {
                            if (ingredient.unit === 'g') {
                                return (<StyledIngredient><span>{getStockOf(ingredientData, ingredient.name)*1000 >= ingredient.quantity ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} />}</span><Link to={`/ingredient/${ingredient.name}`}>{ ingredient.name }</Link> { ingredient.quantity } { ingredient.unit }  (
                                <span>
                                {
                                filtered_ingredient_data.map((i) => {
                                    if (i.name === ingredient.name) {
                                        return (Math.round(i.in_stock.value*1000 / ingredient.quantity * recipe.servings,0) > 99 ? ">99 serv." : Math.round(i.in_stock.value*1000 / ingredient.quantity * recipe.servings,0) + " serv.")
                                    }
                                })
                                }
                                </span>)
                                </StyledIngredient>)
                            } else {
                                return (<StyledIngredient><span><FontAwesomeIcon icon={faCheck} /></span><Link to={`/ingredient/${ingredient.name}`}>{ ingredient.name }</Link> { ingredient.quantity } { ingredient.unit }</StyledIngredient>)
                                // return (<StyledIngredient><span>{getStockOf(ingredientData, ingredient.name) >= (ingredient.quantity * numberServings / recipe.servings) ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} />}</span><Link to={`/ingredient/${ingredient.name}`}>{ ingredient.name }</Link> { (ingredient.quantity * numberServings / recipe.servings).toFixed(2) } { ingredient.unit }</StyledIngredient>)
                            }
                        })
                    }
                    {/* <h5><span>X</span> 750g <a href="">Salmon</a> <span>currently not in stock</span></h5>
                    <h5><span>V</span> 10ml <a href="">Pesto</a> <span>stock for 47 meals</span></h5>
                    <h5><span>V</span> 1/2ts <a href="">Salt</a> <span>stock for 78 meals</span></h5>
                    {
                        // refactor this rubbish!!
                        recipe.ingredients.map((ingredient) => {
                            return (<h5><span>X</span> { ingredient.quantity }{ ingredient.unit } { ingredient.name } <span>stock for this recipe to be cooked {
                                filtered_ingredient_data.map((i) => {
                                    if (i.name === ingredient.name) {
                                        return (i.in_stock.value / ingredient.quantity + " times (" + i.in_stock.value + ingredient.unit + ' in stock)')
                                    }
                                })
                            } { }</span></h5>)
                        })
                    } */}
                </StyledDetails>
                <StyledDetails>  
                    <StyledChart>
                        <div id="chart_1" className={`chart ${visibleChart != "1" ? 'hide' : ''}`}>
                            <LineChart 
                                data={chartData}
                                height={250}
                                position="month*temperature" //{"day*quantity"}
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
            </StyledRecipe>

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

const StyledRecipe = styled.div`
    display: flex;
    align-content: start;
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
    .recipe_name {
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

const StyledFavouriteButton = styled.div`
    display: flex;
    align-items: center;
    width: 5rem;
    padding-left: 0.5rem;
    font-family: GTAmericaRegular;
    color: #b1b1b1;
    button {
        position: absolute;
        height: 2rem;
        font-size: 0.75rem;
        padding: 0;
        border: none;
        border-style: none;
    }
    svg {
        color: yellow;
    }
`

const StyledCookingTime = styled.div`
    display: flex;
    align-self: flex-start;
    align-items: center;
    width: 20rem;
    margin-bottom: 0.5rem;
    padding-left: 1rem;
    font-family: GTAmericaRegular;
    color: #b1b1b1;
    h5 {
        padding-left: 0.25rem;
    }
    svg {
        /* padding-left: 0.25rem;
        padding-right: 0.25rem;
        height: 1.5rem;
        width: 1.5rem!important; */
    }
`

const StyledTimes = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
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

const StyledIngredient = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    a {
        text-decoration: none;
        color: white;
        padding: 0.25rem;
        font-size: 1rem;
    }
    span {
        font-size: 0.75rem;
    }
    svg {
        margin: 0.25rem;
    }
    [class*="fa-check"] {
            color: green;
            height: 1rem;
            width: 1rem;
    }
    [class*="fa-times"] {
            color: #b31515;
            height: 1rem;
            width: 1rem;
    }
`

export default RecipeStats;