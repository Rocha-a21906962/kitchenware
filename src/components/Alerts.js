import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon, InlineIcon } from '@iconify/react';
import alert16Regular from '@iconify/icons-fluent/alert-16-regular';
import { getIngredientsInShortSupply, getRecipesInShortSupply } from '../helperFunctions';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';


const Alerts = ({
    ingredientData,
    setIngredientData,
    recipeData,
    setRecipeData,
    mealPlanning,
    setMealPlanning,
    orders,
    setOrders,
    isEventPopupOpen,
    setIsEventPopupOpen,
    eventPopupMessage,
    setEventPopupMessage,
    alerts,
    setAlerts,
    isAlertListVisible,
    setIsAlertListVisible
}) => {


    /* Monitor ingredient stock data */
    useEffect(() => {
        const ingredients_in_short_supply = getIngredientsInShortSupply(ingredientData);
        let new_ingredient_stock_alerts;
        if (ingredients_in_short_supply.length > 0) {
            // trigger alert or place auto-order for each ingredient in short supply that doesn't yet have an order placed and arriving soon
            const new_ingredient_alerts = ingredients_in_short_supply.filter((i) => {
                // check if a matching alert already exists for this ingredient
                console.log(alerts.ingredients);
                const alert_exists = alerts.ingredients.filter(ingredient_alert => i.name === ingredient_alert.name);
                // if no alert exists yet... 
                return alert_exists.length === 0;
            });
            new_ingredient_alerts.map((i) => console.log(`We are running out of ${i.name} (current stock: ${i.in_stock.value})!`));
            new_ingredient_stock_alerts = new_ingredient_alerts.map((i) => {
                // if no alert exists for an ingredient, create it
                return {
                    name: i.name,
                    type: 'warning',
                    message: [
                        `We are running out of ${i.name} (current stock: ${i.in_stock.value})!`,
                    ],
                    popup: true,
                    read: false,
                    created_on: new Date(),
                }
            });
        }
        if (new_ingredient_stock_alerts) {
            // update alerts
            setAlerts({
                ...alerts,
                ingredients: alerts.ingredients = [
                                    ...alerts.ingredients,
                                    ...new_ingredient_stock_alerts
                             ]
            })
            // update alerts
            new_ingredient_stock_alerts.map((alert) => {
                setEventPopupMessage(alert.message);
                setIsEventPopupOpen(true);
            });
        }
        console.log("alerts");
        console.log(alerts);
    }, [ingredientData]);


    /* Monitor recipe-related ingredient stock data */
    useEffect(() => {
        const recipes_in_short_supply = getRecipesInShortSupply(recipeData, ingredientData);
        console.log(recipes_in_short_supply);
        let new_recipe_stock_alerts;
        if (recipes_in_short_supply.length > 0) {
            // trigger alert or place auto-order for each ingredient in short supply that doesn't yet have an order placed and arriving soon
            const new_recipe_alerts = recipes_in_short_supply.filter((r) => {
                // check if a matching alert already exists for this recipe
                console.log(alerts.recipes);
                const alert_exists = alerts.recipes.filter(recipe_alert => r.name === recipe_alert.name);
                // if no alert exists yet... 
                return alert_exists.length === 0;
            });
            new_recipe_alerts.map((r) => console.log(`${r.name}'s ingredients are running out!`));
            new_recipe_stock_alerts = new_recipe_alerts.map((r) => {
                // if no alert exists for a recipe, create it
                return {
                    name: r.name,
                    type: 'warning',
                    message: [
                        `${r.name}'s ingredients are running out!`,
                    ],
                    popup: true,
                    read: false,
                    created_on: new Date(),
                }
            });
        }
        if (new_recipe_stock_alerts) {
            // update alerts
            setAlerts({
                ...alerts,
                recipes: alerts.recipes = [
                                    ...alerts.recipes,
                                    ...new_recipe_stock_alerts
                             ]
            })
            // update alerts
            new_recipe_stock_alerts.map((alert) => {
                setEventPopupMessage(alert.message);
                setIsEventPopupOpen(true);
            });
        }
        console.log("alerts");
        console.log(alerts);
    }, [ingredientData, recipeData]);
    
    /* Monitor scheduled meals preparation (is it time to start preparing a given recipe? */



    /* Monitor user-defined alerts 
        e.g. 18.30: prepare for the visit of the kitchenware CEO!!
    */



    /* Hard-coded trigger signalling the delivery of a previously placed order
       (as well as the corresponding increased ingredient stock values)
    */
   


    /* Hard-coded trigger signalling the cancellation of a previously placed order
    */
   


    /* Hard-coded trigger signalling the placement of a manual order by another user
    */



    /* Hard-coded trigger signalling that there isn't enough clean silverware for upcoming meals */



    /* Hard-coded trigger to signal a device failure */
    // Signal and provide an instant option for repair or assistance?


    const onCloseAlertListHandler = () => {
        setIsAlertListVisible(false);
        setAllAlertsAsRead(alerts);
    };


    const setAllAlertsAsRead = (alerts) => {
        let modifiedAlerts = [];
        for (let key in alerts) {
            console.log("key:", key);
            modifiedAlerts[key] = [
                ...alerts[key].map((alert) => {
                        return {
                            ...alert,
                            read: true
                        }
                })
            ]
        }
        setAlerts(modifiedAlerts);
    };


    let alert_list = [];
    for (let key in alerts) {
        alert_list = [
            ...alert_list,
            ...alerts[key].map((alert) => {
                return(
                    {
                    ...alert,
                    warning_type: key
                })
            })
        ]
    }

    // sort the alert list by creation time
    alert_list = alert_list.sort((a, b) => new Date(b.created_on) - new Date(a.created_on));

    console.log("alert_list");
    console.log(alert_list);



    return (
        <div>
            {/* <StyledAlertBubble>
                <Icon icon={alert16Regular} />
            </StyledAlertBubble> */}
            <StyledAlertMenu className={`alert_list ${isAlertListVisible ? 'open ' : ''}`}>
                <StyledHeader>
                    <h3>Alerts</h3>
                </StyledHeader>
                <StyledCloseButton>
                    <button name="" id="" onClick={onCloseAlertListHandler}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </StyledCloseButton>
                <ul>
                {
                    alert_list.map((alert) => {
                        return (
                            <StyledAlert>
                                <li>
                                    <StyledAlertContent>
                                    <h5>{!alert.read ? <span className="new">NEW!</span> : ''}{alert.warning_type}: {alert.name}</h5>
                                    {
                                        alert.message.map((text) => {
                                            return (<p>{text}</p>)
                                        })
                                    }
                                    </StyledAlertContent>
                                    <StyledAlertTime>
                                <div>{format(new Date(alert.created_on), 'hh:mm')}</div>
                                    </StyledAlertTime>
                                </li>
                            </StyledAlert>
                        )
                    })
                }
                </ul>
            </StyledAlertMenu>
        </div>
    )
}


const StyledCloseButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    button {
        font-size: 0.5rem;
        padding: 0.25rem;
        border: none;
        svg {
            color: #b2b2b2;
            height: 0.75rem;
            width: 0.75rem!important;
        }
    }
`

const StyledAlertContent = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 5rem);
    h5 {
        min-width: 100%;
        font-size: 0.9rem;
        font-weight: bold;
        /* background-color: #1a0202; */
        color: white;
        padding: 0.25rem;
        padding-left: 1.25rem;
        margin-bottom: 1rem;
    }
    p {
        width: 100%;
        font-size: 0.7rem;
        padding: 0;
        padding-left: 1.75rem;
    }
    .new {
        color: red;
        font-weight: bold;
        padding-right: 0.5rem;
    }
`

const StyledAlertTime = styled.div`
    /* width: 5rem; */
    /* padding-top: 0.25rem; */
    padding-left: 0.5rem;
    /* padding-right: 0.5rem; */
    font-size: 0.75rem;
    margin: auto;
`

const StyledAlert = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* padding: 1rem;
    padding-left: 0.5rem; */
    margin-top: 1rem;
    margin-bottom: 5.5rem;
    li {
        min-width: 100%;
        display: flex;
        justify-content: flex-start;
    }
`

const StyledHeader = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #2b0303;
    color: #b2b2b2;
    padding: 1rem;
`

const StyledAlertMenu = styled.div`
    position: fixed;
    width: calc(100vw - 60vw - 6rem);
    height: 90vh;
    top: 10vh;
    right: 0;
    background-color: #000000f2;
    color: #b2b2b2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transform: translateY(-200%);
    transition: transform 0.5s ease, opacity 0.5s ease;
    opacity: 0;
    z-index: -1;
    overflow-y: auto;
    h2 {
        padding: 2rem;
    }
    &.open {
        transform: none;
        opacity: 1;
        transition: transform 0.5s ease, opacity 0.5s ease;
        z-index: 20;
    }
    li {
        display: flex;
        justify-content: flex-start;
    }
    li:first-child {
        margin-top: 0.5rem;
    }
`

export default Alerts;