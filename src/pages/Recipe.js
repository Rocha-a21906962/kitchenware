import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from "styled-components";
import { addDays } from "date-fns";
import StepByStepOverlay from "../components/recipe/StepByStepOverlay";
import NewOrder from "../components/orders/NewOrder";
import ConfirmationOverlay from "../components/ConfirmationOverlay";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faClock} from '@fortawesome/free-solid-svg-icons';
import {faChartLine} from '@fortawesome/free-solid-svg-icons';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {faShoePrints} from '@fortawesome/free-solid-svg-icons';
import { getStockOf } from '../helperFunctions';


const Recipe = ({
    recipeData,
    setRecipeData,
    recipeCategories,
    ingredientData,
    orders,
    setOrders,
    isEventPopupOpen,
    setIsEventPopupOpen,
    eventPopupMessage,
    setEventPopupMessage
}) => {

    /* Hook for the new order pop-up menu visibility */
    const [isNewOrderOpen, setIsNewOrderOpen] = useState(null);
    /* Hook for step-by-step instructions overlay visibility */
    const [isStepByStepOverlayVisible, setIsStepByStepOverlayVisible] = useState(false);
    /* Hook for order confirmation overlay visibility */
    const [isOrderConfirmationOverlayVisible, setIsOrderConfirmationOverlayVisible] = useState(false);
    /* Hook for recipe changes confirmation overlay visibility */
    const [isRecipeChangesConfirmationOverlayVisible, setIsRecipeChangesConfirmationOverlayVisible] = useState(false);
    /* Hook for the modified data that is to be passed to the confirmation overlay */
    const confirmationOverlayModifiedData = useRef(null);
    /* Hook for the text that is to be presented within the confirmation overlay */
    const confirmationOverlayText = useRef({q: '', changes: {}});
    /* Hook for blocking background content scroll */
    const [isContentScrollBlocked, setIsContentScrollBlocked] = useState(false);
    
    useEffect(() => {
        const block_status = (isStepByStepOverlayVisible || isOrderConfirmationOverlayVisible || isRecipeChangesConfirmationOverlayVisible) ? true : false; 
        setIsContentScrollBlocked(block_status);
    });



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
        setEventPopupMessage([
            `The recipe ${recipe_name} was successfully ${!recipe.is_favourite ? 'added to' : 'removed from'} your favourite recipes.`,
        ]);

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
        setIsEventPopupOpen(true);
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
                // if (new_minimum_availability.value != new_minimum_availability.new_value) {
                //     confirmationOverlayText.current.changes = {
                //         ...confirmationOverlayText.current.changes,
                //         minimum_availability: {
                //             name: "minimum availability",
                //             old: new_minimum_availability.value,
                //             new: new_minimum_availability.new_value,
                //         }
                //     }
                // } 
                // if (new_auto_order_ingredients.value != new_auto_order_ingredients.new_value) {
                //     confirmationOverlayText.current.changes = {
                //         ...confirmationOverlayText.current.changes,
                //         auto_order_ingredients: {
                //             name: "auto order ingredients",
                //             old: new_auto_order_ingredients.value,
                //             new: new_auto_order_ingredients.new_value,
                //         }
                //     }
                // } 
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
        confirmationOverlayModifiedData.current = modifiedRecipeData;
        confirmationOverlayText.current.q = `Confirm ingredient stock management changes?`;
        setEventPopupMessage([
            `Changes to automatic stock management for the recipe ${recipe_name} have been saved.`,
        ]);
        console.log("eventPopupMessage(recipe)");
        console.log(eventPopupMessage);
        console.log("confirmationOverlayText.current");
        console.log(confirmationOverlayText.current);
        setIsRecipeChangesConfirmationOverlayVisible(true);
        // setRecipeData(modifiedRecipeData);
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
    }
    
    const TotalRecipeTime = () => {
        const total_recipe_time = recipe.steps.reduce((a, b) => a + b.time, 0);
        return total_recipe_time < 60 ? total_recipe_time + "mins" : Math.floor(total_recipe_time / 60) + "h" + total_recipe_time % 60;
    }

    
    const categories = recipe.categories.map((category) => {return category.name});
    
    /* Hook for the new order ingredients */
    const [newOrderDetails, setNewOrderDetails] = useState(newOrder(recipe.ingredients));

    console.log(newOrderDetails);


    return (
        <div className={`content ${isContentScrollBlocked ? 'no_scroll' : ''}`}>
            <ConfirmationOverlay 
                isConfirmationOverlayVisible={isRecipeChangesConfirmationOverlayVisible}
                setIsConfirmationOverlayVisible={setIsRecipeChangesConfirmationOverlayVisible}
                modifiedData={confirmationOverlayModifiedData}
                data={recipeData}
                setData={setRecipeData}
                text={confirmationOverlayText}
                isEventPopupOpen={isEventPopupOpen}
                setIsEventPopupOpen={setIsEventPopupOpen}
                eventPopupMessage={eventPopupMessage}
                setEventPopupMessage={setEventPopupMessage} />
            <ConfirmationOverlay
                isConfirmationOverlayVisible={isOrderConfirmationOverlayVisible}
                setIsConfirmationOverlayVisible={setIsOrderConfirmationOverlayVisible}
                modifiedData={confirmationOverlayModifiedData}
                data={orders}
                setData={setOrders}
                text={confirmationOverlayText}
                isSideMenuOpen={isNewOrderOpen}
                setIsSideMenuOpen={setIsNewOrderOpen}
                isEventPopupOpen={isEventPopupOpen}
                setIsEventPopupOpen={setIsEventPopupOpen}
                eventPopupMessage={eventPopupMessage}
                setEventPopupMessage={setEventPopupMessage} />
            <StepByStepOverlay 
                recipe={recipe}
                isStepByStepOverlayVisible={isStepByStepOverlayVisible}
                setIsStepByStepOverlayVisible={setIsStepByStepOverlayVisible} />
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
                    <div>Ingredients: <span>5</span></div>
                    <div>|</div>
                    <div>Nutrition info: <span>240</span> calories/serving</div>
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
                    <Link to={`/recipe_stats/${recipe.name}`}>
                        <button name="" id=""><FontAwesomeIcon icon={faChartLine} />Stats</button>
                    </Link>
                    <button name="" id="" onClick={e => showNewOrder(e.target.value)}><FontAwesomeIcon icon={faShoppingCart} />Order ingredients</button>
                    <button name="" id="" onClick={onShowStepByStepOverlay}><FontAwesomeIcon icon={faShoePrints} />Step-by-step instructions</button>
                </StyledButtons>
                <StyledHr></StyledHr>
                <StyledDetails>
                    <h3>Number of servings <FontAwesomeIcon icon={faInfoCircle} /></h3>
                    <h5>{numberServings} {numberServings != recipe.servings ? `(default: ${recipe.servings})` : ""}</h5> 
                    <input type="range" min="2" max="12" step="1" value={numberServings} className="servings_input" onChange={onNumberServingsChangeHandler} />
                    <StyledSmallHr></StyledSmallHr>
                    <h3>Ingredient list:</h3>
                    {
                        recipe.ingredients.map((ingredient) => {
                            return (<StyledIngredient><span>{getStockOf(ingredientData, ingredient.name) >= (ingredient.quantity * numberServings / recipe.servings) ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} />}</span><Link to={`/ingredient/${ingredient.name}`}>{ ingredient.name }</Link> { (ingredient.quantity * numberServings / recipe.servings).toFixed(2) } { ingredient.unit }</StyledIngredient>)
                        })
                    }
                    <StyledSmallHr></StyledSmallHr>
                    <h3>Immediate availability:</h3>
                    <h5 className="to_do">Current ingredient stock allows for this dish to be cooked 4 times.</h5>
                    <StyledSmallHr></StyledSmallHr>
                    <h3>Automatic stock management<FontAwesomeIcon icon={faInfoCircle} /></h3>
                    <h5>Minimum availability: {recipe.minimum_availability.value} servings {recipe.minimum_availability.value != recipe.minimum_availability.new_value ? `(new value: ${recipe.minimum_availability.new_value})` : ''}</h5>
                    <input type="range" min={recipe.minimum_availability.min_input} max={recipe.minimum_availability.max_input} step={recipe.minimum_availability.step} value={recipe.minimum_availability.new_value} className="stock_input" onChange={onMinimumAvailabilityChangeHandler} />
                    <h3>Action <FontAwesomeIcon icon={faInfoCircle} /></h3>
                    <select name="search_options" onChange={onAutoOrderChangeHandler}>
                        <option value="auto_order" selected={`${recipe.auto_order_ingredients.new_value ? true : ''}`}>auto-order</option>
                        <option value="alert" selected={`${!recipe.auto_order_ingredients.new_value ? true : ''}`}>alert</option>
                    </select>
                    <StyledStockButtons>
                        <button name="" id="" className={`${(recipe.minimum_availability.value != recipe.minimum_availability.new_value) || (recipe.auto_order_ingredients.value != recipe.auto_order_ingredients.new_value) ? '' : 'hide'}`} onClick={onConfirmStockManagementChangesHandler}>Confirm changes</button>
                        <button name="" id="" className={`${(recipe.minimum_availability.value != recipe.minimum_availability.new_value) || (recipe.auto_order_ingredients.value != recipe.auto_order_ingredients.new_value) ? '' : 'hide'}`} onClick={onResetStockManagementChangesHandler}>Reset changes</button>
                    </StyledStockButtons>
                    <StyledSmallHr></StyledSmallHr>
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
                <StyledInstructions>
                    {/* <h3>Preparation (a la Tasty):</h3>
                    <h3>Preparation time:</h3>
                    <h5>{recipe.preparation_time} minutes</h5> 
                    <h3>Cooking time:</h3>
                    <h5>{recipe.cooking_time} minutes</h5> 
                    <h3>Total time:</h3>
                    <h5>{TotalRecipeTime()}</h5>  */}
                    {/* <button name="" id="" onClick={onShowStepByStepOverlay}>Step-by-step mode button</button> */}
                    <h3>Instructions:</h3>
                    {
                        recipe.steps.map((step) => {
                        return (<p>Step {step.number} - {step.description}</p>)
                        })
                    }
                </StyledInstructions>
                {/* buttons */}
                    {/* <button name="" id="">Schedule meal (opens pop-up)</button> */}
                    {/* <button name="" id="">Play video (opens pop-up! alt: button as image overlay with play icon?)</button> */}
            </StyledRecipe>
            <NewOrder
                isNewOrderOpen={isNewOrderOpen}
                setIsNewOrderOpen={setIsNewOrderOpen}
                newOrderDetails={newOrderDetails}
                setNewOrderDetails={setNewOrderDetails}
                orders={orders}
                setOrders={setOrders}
                ingredientData={ingredientData}
                isOrderConfirmationOverlayVisible={isOrderConfirmationOverlayVisible}
                setIsOrderConfirmationOverlayVisible={setIsOrderConfirmationOverlayVisible}
                confirmationOverlayModifiedData={confirmationOverlayModifiedData}
                confirmationOverlayText={confirmationOverlayText}
                isContentScrollBlocked={isContentScrollBlocked}
                setIsContentScrollBlocked={setIsContentScrollBlocked}
                isEventPopupOpen={isEventPopupOpen}
                setIsEventPopupOpen={setIsEventPopupOpen}
                eventPopupMessage={eventPopupMessage}
                setEventPopupMessage={setEventPopupMessage} />
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

const StyledMainDetail = styled.div`
    display: flex;
    display: column;
    justify-content: center;
    align-items: center;
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
    width: 100%;
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
    h3 {
        svg {
            margin-left: 0.25rem;
            width: 1rem;
            height: 1rem;
        }
    }
`

const StyledInstructions = styled.div`
    width: 40vw;
    padding-left: 1rem;
    font-family: GTAmericaRegular;
    color: #b1b1b1;
    p {
        font-size: 0.75rem;
        letter-spacing: 0;
        padding: 0.5rem;
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

export default Recipe;