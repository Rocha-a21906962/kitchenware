import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from "styled-components";
import { addDays } from "date-fns";
import StepByStepOverlay from "../components/recipe/StepByStepOverlay";
import NewOrder from "../components/orders/NewOrder";


const Recipe = ({
    recipeData,
    setRecipeData,
    recipeCategories,
    ingredientData,
    orders,
    setOrders
}) => {

    /* Hook for the new order pop-up menu visibility */
    const [isNewOrderOpen, setIsNewOrderOpen] = useState(null);
    /* Hook for step-by-step instructions overlay visibility */
    const [isStepByStepOverlayVisible, setIsStepByStepOverlayVisible] = useState(false);

    let { recipe_name } = useParams();
    let recipe = recipeData.filter(recipe => recipe.name === recipe_name)[0];
    
    /* Hook for this recipe's number of servings */
    const [numberServings, setNumberServings] = useState(recipe.servings);

    console.log("servings" + numberServings);

    const showNewOrder = () => {
        setIsNewOrderOpen(true);
        console.log(isNewOrderOpen);
    };

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

    const onMinimumAvailabilityChangeHandler = (event) => {
        console.log("confirm stock changes!");
        const modifiedRecipeData = recipeData.map((r) => {
            if (r.name === recipe_name) {
                const new_minimum_availability = {
                    ...r.minimum_availability
                };
                new_minimum_availability.new_value = event.target.value;
                console.log(new_minimum_availability);
                return {
                    ...r,
                    minimum_availability: new_minimum_availability,
                }
            } else {
                return {
                    ...r,
                }
            }
        });
        setRecipeData(modifiedRecipeData);
        console.log(recipeData);
    };

    const onAutoOrderChangeHandler = (event) => {
        console.log("event.target.value");
        console.log(event.target.value);
        const new_auto_order_ingredients_value = event.target.value === 'auto_order' ? true : false;
        console.log("const auto_order_ingredients =");
        console.log(new_auto_order_ingredients_value);
        const modifiedRecipeData = recipeData.map((r) => {
            if (r.name === recipe_name) {
                const new_auto_order_ingredients = {
                    ...r.auto_order_ingredients
                };
                new_auto_order_ingredients.new_value = new_auto_order_ingredients_value;
                return {
                    ...r,
                    auto_order_ingredients: new_auto_order_ingredients
                }
            } else {
                return {
                    ...r,
                }
            }
        });
        setRecipeData(modifiedRecipeData);
        console.log(recipeData);
        console.log(recipe);
        console.log("recipe.auto_order_ingredients:");
        console.log(recipe.auto_order_ingredients);
    };

    const onConfirmStockManagementChangesHandler = (event) => {
        console.log("confirm stock changes!");
        const modifiedRecipeData = recipeData.map((r) => {
            if (r.name === recipe_name) {
                const new_minimum_availability = {
                    ...r.minimum_availability
                };
                const new_auto_order_ingredients = {
                    ...r.auto_order_ingredients
                };
                console.log("new_minimum_availability.value");
                console.log(new_minimum_availability.value);
                console.log("new_minimum_availability.new_value");
                console.log(new_minimum_availability.new_value);
                new_minimum_availability.value = new_minimum_availability.new_value;
                new_auto_order_ingredients.value = new_auto_order_ingredients.new_value;
                return {
                    ...r,
                    minimum_availability: new_minimum_availability,
                    auto_order_ingredients: new_auto_order_ingredients
                }
            } else {
                return {
                    ...r,
                }
            }
        });
        setRecipeData(modifiedRecipeData);
        console.log(recipeData);
    };

    const onResetStockManagementChangesHandler = (event) => {
        console.log("confirm stock changes!");
        const modifiedRecipeData = recipeData.map((r) => {
            if (r.name === recipe_name) {
                const new_minimum_availability = {
                    ...r.minimum_availability
                };
                const new_auto_order_ingredients = {
                    ...r.auto_order_ingredients
                };
                console.log("new_minimum_availability.value");
                console.log(new_minimum_availability.value);
                console.log("new_minimum_availability.new_value");
                console.log(new_minimum_availability.new_value);
                new_minimum_availability.new_value = new_minimum_availability.value;
                new_auto_order_ingredients.new_value = new_auto_order_ingredients.value;
                return {
                    ...r,
                    minimum_availability: new_minimum_availability,
                    auto_order_ingredients: new_auto_order_ingredients
                }
            } else {
                return {
                    ...r,
                }
            }
        });
        setRecipeData(modifiedRecipeData);
        console.log(recipeData);
    };

    const onShowStepByStepOverlay = () => {
        setIsStepByStepOverlayVisible(true);
    }

    const onNumberServingsChangeHandler = (event) => {
        setNumberServings(event.target.value);
    }

    
    const newOrder = (recipe_ingredients) => {
        return {
            id: null,
            type: 'auto',
            ref: 1,
            placed_on: new Date(),
            delivery_on: addDays(new Date(), 1),
            ingredients: recipe_ingredients.map((ingredient) => {
                // hack (to be used while there are recipe ingredients not included in the ingredient json data)
                let ingredient_data = ingredientData.filter((i) => i.name === ingredient.name)
                console.log("lalala " + ingredient.name);
                console.log(ingredient_data);
                let ingredient_default_quantity = ingredient_data.length > 0 ? ingredient_data[0].default_order_quantity.value : 1;
                //
                return {
                    name: ingredient.name,
                    quantity: ingredient_default_quantity,
                    new_quantity: ingredient_default_quantity,
                    editing: false,
                }    
            })
        }
        return (
            recipe_ingredients.map((ingredient) => {
                return {
                    name: ingredient.name,
                    quantity: 'func missing',
                    unit: 'func missing',
                }    
            })
        )
    }
    
    const TotalRecipeTime = () => {
        const total_recipe_time = recipe.steps.reduce((a, b) => a + b.time, 0);
        return total_recipe_time < 60 ? total_recipe_time + "mins" : Math.floor(total_recipe_time / 60) + "h" + total_recipe_time % 60;
    }
    
    /* Hook for the new order ingredients */
    const [newOrderDetails, setNewOrderDetails] = useState(newOrder(recipe.ingredients));

    console.log(newOrderDetails);


    return (
        <div className="content">
            <StepByStepOverlay 
                recipe={recipe}
                isStepByStepOverlayVisible={isStepByStepOverlayVisible}
                setIsStepByStepOverlayVisible={setIsStepByStepOverlayVisible} />
            <StyledRecipe>
                <StyledPhoto>
                    <div className="gradient_overlay"></div>
                    <img src={recipe.image} alt={`${recipe.name} image`}/>
                    <div className="recipe_name">
                        <h2>Recipe: <span>{recipe.name}</span></h2>
                        <StyledFavouriteButton>
                            <button name="" id="" className={`${recipe.is_favourite ? 'hide_favourite_button ' : ''}`} onClick={toggleRecipeFavouriteStatus}>Set as favourite</button>
                            <button name="" id="" className={`${!recipe.is_favourite ? 'hide_favourite_button ' : ''}`} onClick={toggleRecipeFavouriteStatus}>Remove from favourites</button>
                        </StyledFavouriteButton>
                    </div>
                    <button name="" id="">Set as favourite</button>
                    <div className="main_details">
                        <p><span>5</span> ingredients</p>
                        <p>|</p>
                        <p><span>240</span> calories</p>
                        <p>|</p>
                        <p><span>20</span> minutes</p>
                    </div>
                </StyledPhoto>
                <StyledDescription>
                    <h3>Recipe short description</h3>
                    <h5 className="to_do">sfksdjfs dklfsdkfklsdfklsdgklsd lgkdslg sfksdjfsdkl fsdkfklsdfklsdg klsdlgkdslg sfksdjfsdkl fsdkfklsdfklsdg klsdlgkdslg sfksdjfs dklfsdkfklsdfkls dgklsdlgkdslg sfksdjfsdkl fsdkfklsdfklsdgklsdlg kdslg sfksdjfsdklfs dkfklsdfkls dgklsdlgkdslg sfksdjfsdkl fsdkfklsdfklsd gklsdlgkdslg sfksdj f sdklfsdkfklsdfklsdgk  lsdlgkdslgsfksdjfs dklf sdkfklsdfklsdgklsdlg kdslg </h5>
                </StyledDescription>
                <StyledDetails>
                    <h3>Number of servings:</h3>
                    <h5>{numberServings} {numberServings != recipe.servings ? `(default: ${recipe.servings})` : ""}</h5> 
                    <input type="range" min="2" max="12" step="1" value={numberServings} className="servings_input" onChange={onNumberServingsChangeHandler} />
                    <h3>Nutrition info:</h3>
                    <h5>240 cal/serving</h5>
                    <h3>Ingredient list:</h3>
                    <h5><span>X</span> 750g Salmon</h5>
                    <h5><span>V</span> 10ml Pesto</h5>
                    <h5><span>V</span> 1/2ts Salt</h5>
                    {
                        recipe.ingredients.map((ingredient) => {
                            console.log("ingredient.name");
                            console.log(ingredient.name);
                            return (<h5><span>X</span> { (ingredient.quantity * numberServings / recipe.servings).toFixed(2) }{ ingredient.unit }<Link to={`/ingredient/${ingredient.name}`}>{ ingredient.name }</Link></h5>)
                        })
                    }
                    <h3>Immediate availability:</h3>
                    <h5 className="to_do">Current ingredient stock allows for this dish to be cooked 4 times.</h5>
                    <h3>Automatic stock management:</h3>
                    <h3>Minimum availability:</h3>
                    <h5>{recipe.minimum_availability.value} servings {recipe.minimum_availability.value != recipe.minimum_availability.new_value ? `(new value: ${recipe.minimum_availability.new_value})` : ''}</h5>
                    <input type="range" min={recipe.minimum_availability.min_input} max={recipe.minimum_availability.max_input} step={recipe.minimum_availability.step} value={recipe.minimum_availability.new_value} className="stock_input" onChange={onMinimumAvailabilityChangeHandler} />
                    <h5>(immediate availability => nr servings * nr immediate avail. = 20)</h5>
                    <h3>Action:</h3>
                    <select name="search_options" onChange={onAutoOrderChangeHandler}>
                        <option value="auto_order" selected={`${recipe.auto_order_ingredients.new_value ? true : ''}`}>auto-order</option>
                        <option value="alert" selected={`${!recipe.auto_order_ingredients.new_value ? true : ''}`}>alert</option>
                    </select>
                    <StyledStockButtons>
                        <button name="" id="" className={`${(recipe.minimum_availability.value != recipe.minimum_availability.new_value) || (recipe.auto_order_ingredients.value != recipe.auto_order_ingredients.new_value) ? '' : 'hide'}`} onClick={onConfirmStockManagementChangesHandler}>Confirm changes</button>
                        <button name="" id="" className={`${(recipe.minimum_availability.value != recipe.minimum_availability.new_value) || (recipe.auto_order_ingredients.value != recipe.auto_order_ingredients.new_value) ? '' : 'hide'}`} onClick={onResetStockManagementChangesHandler}>Reset changes</button>
                    </StyledStockButtons>
                    {/* Delete everything: just for testing
                    <h5>Current stock: <span>{ingredient.in_stock} kg</span></h5>
                    <h5>Forecasted consumption</h5>
                    <p>7 days: 1.2 kg</p>
                    <p>30 days: 5.1 kg</p>
                    <h5>Recent consumption</h5>
                    <p>7 days: 1.1 kg</p>
                    <p>30 days: 6.3 kg</p>
                    <h5>Recent consumption</h5>
                    <p>None</p>
                    <h5>Next order estimated in:</h5>
                    <p>11 days</p>
                    <p></p>
                    */}
                </StyledDetails>
                <StyledDetails>
                    <h3>Preparation (a la Tasty):</h3>
                    <h3>Preparation time:</h3>
                    <h5>{recipe.preparation_time} minutes</h5> 
                    <h3>Cooking time:</h3>
                    <h5>{recipe.cooking_time} minutes</h5> 
                    <h3>Total time:</h3>
                    <h5>{TotalRecipeTime()}</h5> 
                    <button name="" id="" onClick={onShowStepByStepOverlay}>Step-by-step mode button (opens pop-up)</button>
                    <h3>Instructions:</h3>
                    {
                        recipe.steps.map((step) => {
                        return (<h5>Step {step.number} - {step.description}</h5>)
                        })
                    }
                </StyledDetails>
                {/* buttons */}
                    <button name="" id="" onClick={e => showNewOrder(e.target.value)}>Order ingredients (opens pop-up)</button>
                    <button name="" id="">Schedule meal (opens pop-up)</button>
                    <Link to={`/recipe_stats/${recipe.name}`}>
                        <button name="" id="">Stats (changes page)</button>
                    </Link>
                    <button name="" id="">Play video (opens pop-up! alt: button as image overlay with play icon?)</button>
            </StyledRecipe>
            <NewOrder
                isNewOrderOpen={isNewOrderOpen}
                setIsNewOrderOpen={setIsNewOrderOpen}
                newOrderDetails={newOrderDetails}
                setNewOrderDetails={setNewOrderDetails}
                orders={orders}
                setOrders={setOrders}
                ingredientData={ingredientData} />
        </div>
    )
}

const StyledRecipe = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    // border: 1px solid yellow;
    background-color: #000000dd;
    // padding-left: 1rem;
    // padding-right: 1rem;
`

const StyledPhoto = styled.div`
    position: relative;
    width: calc(100vw - 10rem);
    height: 40vh;
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
        left: 0;
        top: 50%;
        display: flex;
        flex-direction: row;
        width: 100%;
        z-index: 5;
        h2 {
            padding-left: 2.5rem;
            display: block;
            font-size: 1.5rem;
            font-style: italic;
            text-transform: capitalize;
            color: #b1b1b1;
            z-index: 5;
        }
        span {
            font-size: 3rem;
            font-style: normal;
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

const StyledFavouriteButton = styled.div`
    display: flex;
    align-self: flex-start;
    width: 5rem;
    padding-left: 1rem;
    font-family: GTAmericaRegular;
    color: #b1b1b1;
    button {
        position: absolute;
        width: 8rem;
        height: 4rem;
        font-size: 0.75rem;
        padding: 1rem;
    }
`

const StyledStockButtons = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    button {
        width: 8rem;
        font-size: 0.75rem;
        margin-right: 1rem;
        padding: 0.5rem;
        &.hide {
            display: none;
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
    width: 40vw;
    padding-left: 1rem;
    font-family: GTAmericaRegular;
    color: #b1b1b1;
`

export default Recipe;