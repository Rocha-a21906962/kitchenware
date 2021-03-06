import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { addDays } from "date-fns";
import Details from '../components/ingredient/Details.js';
import Photo from '../components/ingredient/Photo';
import StockDetails from '../components/ingredient/StockDetails';
import StockManagement from '../components/ingredient/StockManagement';
import NewOrder from "../components/orders/NewOrder";
import { getIncomingOrdersWith } from "../helperFunctions";
import ConfirmationOverlay from "../components/ConfirmationOverlay";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import RecipeLine from '../components/feed/RecipeLine';
import { getRecipesWith } from '../helperFunctions';
import { Button } from 'semantic-ui-react';
import {faChartLine} from '@fortawesome/free-solid-svg-icons';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';


const Ingredient = ({
    ingredientData,
    setIngredientData,
    ingredientCategories,
    recipeData,
    orders,
    setOrders,
    isEventPopupOpen,
    setIsEventPopupOpen,
    eventPopupMessage,
    setEventPopupMessage
}) => {

    /* Hook for the new order pop-up menu visibility */
    const [isNewOrderOpen, setIsNewOrderOpen] = useState(null);
    /* Hook for order confirmation overlay visibility */
    const [isOrderConfirmationOverlayVisible, setIsOrderConfirmationOverlayVisible] = useState(false);
    /* Hook for ingredient changes confirmation overlay visibility */
    const [isIngredientChangesConfirmationOverlayVisible, setIsIngredientChangesConfirmationOverlayVisible] = useState(false);
    /* Hook for the modified data that is to be passed to the confirmation overlay */
    const confirmationOverlayModifiedData = useRef(null);
    /* Hook for the text that is to be presented within the confirmation overlay */
    const confirmationOverlayText = useRef({q: '', changes: {}});
    /* Hook for blocking background content scroll */
    const [isContentScrollBlocked, setIsContentScrollBlocked] = useState(false);
    
    useEffect(() => {
        const block_status = (isOrderConfirmationOverlayVisible || isIngredientChangesConfirmationOverlayVisible) ? true : false; 
        setIsContentScrollBlocked(block_status);
    });

    const showNewOrder = () => {
        setIsNewOrderOpen(true);
        console.log(isNewOrderOpen);
    };
    
    let { ingredient_name } = useParams();
    const ingredient = ingredientData.filter(ingredient => ingredient.name === ingredient_name)[0];

    const incoming_ingredient_orders = getIncomingOrdersWith(orders, ingredient_name);
    console.log("incoming_ingredient_orders");
    console.log(incoming_ingredient_orders);

    const onMinimumStockChangeHandler = (event) => {
        const modifiedIngredientData = ingredientData.map((i) => {
            if (i.name === ingredient_name) {
                const new_minimum_stock = {
                    ...i.minimum_stock
                };
                new_minimum_stock.new_value = event.target.value;

                console.log(new_minimum_stock);
                return {
                    ...i,
                    minimum_stock: new_minimum_stock
                }
            } else {
                return {
                    ...i,
                }
            }
        });
        setIngredientData(modifiedIngredientData);
        console.log(ingredientData);
        console.log(ingredient);
        console.log(ingredient.minimum_stock);
        console.log("ingredient.minimum_stock.value:");
        console.log(ingredient.minimum_stock.value);
    };

    const onDefaultOrderQuantityChangeHandler = (event) => {
        const modifiedIngredientData = ingredientData.map((i) => {
            if (i.name === ingredient_name) {
                const new_default_order_quantity = {
                    ...i.default_order_quantity
                };
                new_default_order_quantity.new_value = event.target.value;

                console.log(new_default_order_quantity);
                return {
                    ...i,
                    default_order_quantity: new_default_order_quantity
                }
            } else {
                return {
                    ...i,
                }
            }
        });
        setIngredientData(modifiedIngredientData);
        console.log(ingredientData);
        console.log(ingredient);
        console.log(ingredient.default_order_quantity);
        console.log("ingredient.default_order_quantity.value:");
        console.log(ingredient.default_order_quantity.value);
    };

    const onAutoOrderChangeHandler = (event) => {
        console.log("event.target.value");
        console.log(event.target.value);
        const new_auto_order_value = event.target.value === 'auto_order' ? true : false;
        console.log("const auto_order =");
        console.log(new_auto_order_value);
        const modifiedIngredientData = ingredientData.map((i) => {
            if (i.name === ingredient_name) {
                const new_auto_order = {
                    ...i.auto_order
                };
                new_auto_order.new_value = new_auto_order_value;
                return {
                    ...i,
                    auto_order: new_auto_order
                }
            } else {
                return {
                    ...i,
                }
            }
        });
        setIngredientData(modifiedIngredientData);
        console.log(ingredientData);
        console.log(ingredient);
        console.log("ingredient.auto_order:");
        console.log(ingredient.auto_order);
    };

    const onConfirmStockChangesHandler = (event) => {
        console.log("confirm stock changes!");
        const modifiedIngredientData = ingredientData.map((i) => {
            if (i.name === ingredient_name) {
                const new_minimum_stock = {
                    ...i.minimum_stock
                };
                const new_default_order_quantity = {
                    ...i.default_order_quantity
                };
                const new_auto_order = {
                    ...i.auto_order
                };
                console.log("new_minimum_stock.value");
                console.log(new_minimum_stock.value);
                console.log("new_minimum_stock.new_value");
                console.log(new_minimum_stock.new_value);
                new_minimum_stock.value = new_minimum_stock.new_value;
                new_default_order_quantity.value = new_default_order_quantity.new_value;
                new_auto_order.value = new_auto_order.new_value;
                return {
                    ...i,
                    minimum_stock: new_minimum_stock,
                    default_order_quantity: new_default_order_quantity,
                    auto_order: new_auto_order
                }
            } else {
                return {
                    ...i,
                }
            }
        });
        confirmationOverlayModifiedData.current = modifiedIngredientData;
        confirmationOverlayText.current.q = `Confirm ingredient stock management changes?`;
        setEventPopupMessage([
            `Changes to automatic stock management for the ingredient ${ingredient_name} have been saved.`,
        ]);
        setIsIngredientChangesConfirmationOverlayVisible(true);
        // setIngredientData(modifiedIngredientData);
        console.log(ingredientData);
    };

    const onResetStockChangesHandler = (event) => {
        console.log("reset stock changes!");
        const modifiedIngredientData = ingredientData.map((i) => {
            if (i.name === ingredient_name) {
                const new_minimum_stock = {
                    ...i.minimum_stock
                };
                const new_default_order_quantity = {
                    ...i.default_order_quantity
                };
                const new_auto_order = {
                    ...i.auto_order
                };
                console.log("new_minimum_stock.value");
                console.log(new_minimum_stock.value);
                console.log("new_minimum_stock.new_value");
                console.log(new_minimum_stock.new_value);
                new_minimum_stock.new_value = new_minimum_stock.value;
                new_default_order_quantity.new_value = new_default_order_quantity.value;
                new_auto_order.new_value = new_auto_order.value;
                return {
                    ...i,
                    minimum_stock: new_minimum_stock,
                    default_order_quantity: new_default_order_quantity,
                    auto_order: new_auto_order
                }
            } else {
                return {
                    ...i,
                }
            }
        });
        setIngredientData(modifiedIngredientData);
        console.log(ingredientData);
    };

    

    function handleScroll() {
        window.scroll({
        top: document.body.offsetHeight,
        left: 0, 
        behavior: 'smooth',
        });
    }
    
    const newOrder = (ingredient) => {
        return {
            id: null,
            type: 'auto',
            ref: 1,
            placed_on: new Date(),
            delivery_on: addDays(new Date(), 1),
            ingredients: [
                {
                    name: ingredient.name,
                    quantity: ingredient.default_order_quantity.value,
                    new_quantity: ingredient.default_order_quantity.value,
                    editing: true,
                }
            ],
        }
    };
    
    /* Hook for the new order ingredients */
    const [newOrderDetails, setNewOrderDetails] = useState(newOrder(ingredient));

    console.log(newOrderDetails);

    const categories = ingredient.categories.map((category) => {return category.name});


    return (
        <div className={`content ${isContentScrollBlocked ? 'no_scroll' : ''}`}>
            <ConfirmationOverlay 
                isConfirmationOverlayVisible={isIngredientChangesConfirmationOverlayVisible}
                setIsConfirmationOverlayVisible={setIsIngredientChangesConfirmationOverlayVisible}
                modifiedData={confirmationOverlayModifiedData}
                data={ingredientData}
                setData={setIngredientData}
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
                    <Link to={`/ingredient_stats/${ingredient.name}`}>
                        <Button name="" id=""><FontAwesomeIcon icon={faChartLine} />Stats</Button>
                    </Link>
                    <Button name="" id="" onClick={e => showNewOrder(e.target.value)}><FontAwesomeIcon icon={faShoppingCart} />Order ingredient</Button>
                    {/* <Button className="to_do" name="" id="">Order history (opens pop-up)</Button> */}
                </StyledButtons>
                <StyledHr></StyledHr>
                <StyledDetails>
                    <h3>Restrictions and alerts:</h3>
                    <h5>Diet: Non-vegetarian</h5>
                    <h5>Allergies and intolerances: Fish</h5>
                    <StyledSmallHr></StyledSmallHr>
                    <h3>Typical expiration date:</h3>
                    <h5>1 year</h5>
                    <StyledSmallHr></StyledSmallHr>
                    <h3>Incoming orders:</h3>
                    {
                        incoming_ingredient_orders.length > 0 ?
                        incoming_ingredient_orders.map((order) => {
                            return (<h5>{order.id}</h5>)
                        })
                        :
                        <h5>None</h5>
                    }
                </StyledDetails>
                <StyledDetails>
                    <h3>Current stock:</h3>
                    <h5>{ingredient.in_stock.value}{ingredient.unit}</h5>
                    <StyledSmallHr></StyledSmallHr>
                    <h3>Automatic stock management:</h3>
                    <h3>Minimum stock:<FontAwesomeIcon icon={faInfoCircle} /></h3>
                    <h5>{ingredient.minimum_stock.value}{ingredient.unit} {ingredient.minimum_stock.value != ingredient.minimum_stock.new_value ? `(new value: ${ingredient.minimum_stock.new_value}${ingredient.unit})` : ''}</h5>
                    <input type="range" min={ingredient.minimum_stock.min_input} max={ingredient.minimum_stock.max_input} step={ingredient.minimum_stock.step} value={ingredient.minimum_stock.new_value} className="stock_input" onChange={onMinimumStockChangeHandler} />
                    <h3>Action:<FontAwesomeIcon icon={faInfoCircle} /></h3>
                    <select name="search_options" onChange={onAutoOrderChangeHandler}>
                        <option value="auto_order" selected={`${ingredient.auto_order.new_value ? true : ''}`}>auto-order</option>
                        <option value="alert" selected={`${!ingredient.auto_order.new_value ? true : ''}`}>alert</option>
                    </select>
                    <h3>Default order quantity:<FontAwesomeIcon icon={faInfoCircle} /></h3>
                    <h5>{ingredient.default_order_quantity.value}{ingredient.unit} {ingredient.default_order_quantity.value != ingredient.default_order_quantity.new_value ? `(new value: ${ingredient.default_order_quantity.new_value}${ingredient.unit})` : ''}</h5>
                    <input type="range" min={ingredient.default_order_quantity.min_input} max={ingredient.default_order_quantity.max_input} step={ingredient.default_order_quantity.step} value={ingredient.default_order_quantity.new_value} className={`stock_input ${ingredient.default_order_quantity.new_value != ingredient.default_order_quantity.value ? 'modified' : ''}`} onChange={onDefaultOrderQuantityChangeHandler} />
                    <StyledStockButtons>
                        <button name="" id="" className={`${(ingredient.minimum_stock.value != ingredient.minimum_stock.new_value) || (ingredient.default_order_quantity.value != ingredient.default_order_quantity.new_value) || (ingredient.auto_order.value != ingredient.auto_order.new_value) ? '' : 'hide'}`} onClick={onConfirmStockChangesHandler}>Confirm changes</button>
                        <button name="" id="" className={`${(ingredient.minimum_stock.value != ingredient.minimum_stock.new_value) || (ingredient.default_order_quantity.value != ingredient.default_order_quantity.new_value) || (ingredient.auto_order.value != ingredient.auto_order.new_value) ? '' : 'hide'}`} onClick={onResetStockChangesHandler}>Reset changes</button>
                    </StyledStockButtons>
                </StyledDetails>
                <StyledHr></StyledHr>
                <StyledFeed>
                    <StyledFeedHeader>Recipes with {ingredient.name}</StyledFeedHeader>
                    <RecipeLine 
                        data={getRecipesWith(recipeData, ingredient_name)} />
                </StyledFeed>
            </StyledIngredient>
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

const StyledIngredient = styled.div`
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

const StyledFeedHeader = styled.div`
    // background: #000;
    width: 100%;
    background: #000;
    color: white;
    font-family: GTAmericaRegular;
    font-size: 1rem;
    font-weight: bold;
    line-height: 2.25rem;
`

const StyledFeed = styled.div`
    overflow-x: scroll;
    width: calc(100vw - 10rem);
    padding-left: 1rem;
    font-family: GTAmericaRegular;
    color: #b1b1b1;
    background: #000000dd;
    padding-bottom: 1rem;
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

export default Ingredient;