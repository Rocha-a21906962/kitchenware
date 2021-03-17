import { useState } from 'react';
import styled from "styled-components";
import { Icon, InlineIcon } from '@iconify/react';
import { format, addDays } from "date-fns";
import formPrevious from '@iconify-icons/grommet-icons/form-previous';

const NewOrder = ({
    isNewOrderOpen,
    setIsNewOrderOpen,
    newOrderDetails,
    setNewOrderDetails,
    orders,
    setOrders,
    ingredientData,
    isOrderConfirmationOverlayVisible,
    setIsOrderConfirmationOverlayVisible,
    confirmationOverlayModifiedData,
    confirmationOverlayText,
    isContentScrollBlocked,
    setIsContentScrollBlocked,
    isEventPopupOpen,
    setIsEventPopupOpen,
    eventPopupMessage,
    setEventPopupMessage
}) => {

    console.log("newOrderDetails");
    console.log(newOrderDetails);

    const [addIngredient, setAddIngredient] = useState(false);

    const hideNewOrder = () => {
        setIsNewOrderOpen(null);
        console.log(isNewOrderOpen);
    }

    const onIngredientQuantityChangeHandler = (event) => {
        const modifiedNewOrderDetails = {
            ...newOrderDetails,
            ingredients: newOrderDetails.ingredients.map((i) => {
                if (i.name === event.target.name) {
                    return {
                        ...i,
                        new_quantity: event.target.value,
                    }
                } else {
                    return {
                        ...i
                    }
                }

            })
        }
        console.log(event.target.name + ' ' + event.target.value)
        setNewOrderDetails(modifiedNewOrderDetails);
    };

    const onEditIngredientQuantityHandler = (event) => {
        const modifiedNewOrderDetails = {
            ...newOrderDetails,
            ingredients: newOrderDetails.ingredients.map((i) => {
                if (i.name === event.target.value) {
                    return {
                        ...i,
                        editing: true,
                    }
                } else {
                    return {
                        ...i
                    }
                }

            })
        }
        setNewOrderDetails(modifiedNewOrderDetails);
    };

    const onConfirmIngredientQuantityHandler = (event) => {
        const modifiedNewOrderDetails = {
            ...newOrderDetails,
            ingredients: newOrderDetails.ingredients.map((i) => {
                if (i.name === event.target.value) {
                    return {
                        ...i,
                        editing: false,
                    }
                } else {
                    return {
                        ...i
                    }
                }

            })
        }
        setNewOrderDetails(modifiedNewOrderDetails);
        // setConfirmationOverlayData(true);
        // setDisplayConfirmationOverlay(true);
    };
    
    const onRemoveIngredientHandler = (event) => {
        const modifiedNewOrderDetails = {
            ...newOrderDetails,
            ingredients: newOrderDetails.ingredients.filter((i) => {
                if (i.name != event.target.value) {
                    return {
                        i
                    }
                }
            })
        }
        setNewOrderDetails(modifiedNewOrderDetails);
    };
    
    const onAddIngredientHandler = (event) => {
        setAddIngredient(true);
    };
    
    const onCancelAddIngredientHandler = (event) => {
        setAddIngredient(false);
    };

    const onSelectIngredientHandler = (event) => {
        setAddIngredient(false);
        const selected_ingredient_name = event.target.value;
        const default_quantity = ingredientData.filter(i => i.name === selected_ingredient_name)[0].default_order_quantity.value;
        const new_order_ingredient = {
            name: selected_ingredient_name,
            quantity: default_quantity,
            new_quantity: default_quantity,
            editing: true
        }
        const modifiedNewOrderDetails = {
            ...newOrderDetails,
            ingredients: [
                ...newOrderDetails.ingredients,
                new_order_ingredient
            ]
        }
        console.log("modifiedNewOrderDetails");
        console.log(modifiedNewOrderDetails);
        setNewOrderDetails(modifiedNewOrderDetails);
    };
    
    const onPlaceNewOrderHandler = (event) => {
        const current_max_order_id = Math.max.apply(null, orders.map((o) => o.id));
        const modifiedOrders = [
            ...orders,
            {
                ...newOrderDetails,
                id: current_max_order_id + 1,
                type: 'auto',
                ingredients: newOrderDetails.ingredients.map((i) => {
                    return {
                        name: i.name,
                        quantity: i.new_quantity,
                    }
                })
            }
        ]
        confirmationOverlayModifiedData.current = modifiedOrders;
        confirmationOverlayText.current.q = `Confirm new order?`;
        setEventPopupMessage([
            'Your order has been confirmed.', 
            `It will be delivered on ${format(newOrderDetails.delivery_on, 'MMMM d hh:mm')}.`
        ]);
        setIsOrderConfirmationOverlayVisible(true);
        // setIsNewOrderOpen(null);
        // setOrders(modifiedOrders);
    };
    
    // const onCancelOrderHandler = (event) => {
    //     const modifiedOrders = orders.filter((o) => {
    //         if (o.id != newOrderDetails.id) {
    //             return {
    //                 ...o
    //             }
    //         }
    //     })
    //     console.log("modifiedOrders");
    //     console.log(modifiedOrders);
    //     confirmationOverlayModifiedData.current = modifiedOrders;
    //     setIsOrderConfirmationOverlayVisible(true);
    //     // setIsNewOrderOpen(null);
    //     // setOrders(modifiedOrders);
    // };

    const sorted_ingredients = ingredientData.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    

    return (
        <div id="new_order_popup" className={`${isNewOrderOpen ? 'open' : ''}`}>
            {
            isNewOrderOpen ? 
            <div>
                <StyledHeader>
                    <h3>New order</h3>
                    <StyledIcon>
                        <Icon icon={formPrevious} onClick={hideNewOrder} />
                    </StyledIcon>
                </StyledHeader>
                <StyledSideContext>
                    <StyledDetails>
                        <h3>Order details</h3>
                        <h5>Type: {newOrderDetails.type}</h5>
                        <h5>Placed on: {format(new Date(newOrderDetails.placed_on), 'MMMM d, hh:mm')}</h5>
                        <h5>Delivery on: {format(new Date(newOrderDetails.delivery_on), 'MMMM d, hh:mm')}</h5>
                    </StyledDetails>
                    <h3>Ingredients</h3>
                    <StyledScrollDiv>
                        {
                            newOrderDetails.ingredients.map((ingredient) => {
                                console.log("ingredient.name");
                                console.log(ingredient.name);
                                return (<StyledIngredient>
                                            <div className="individual_order">
                                                <h5 className="ingredient_name">{ingredient.name}</h5>
                                                <div className="ingredient_quantity"><span>{ingredient.new_quantity} kg</span></div>
                                                <button name="" id="" value={ingredient.name} className={`${ingredient.editing == true ? 'hide' : ''}`} onClick={onEditIngredientQuantityHandler}>Edit</button>
                                                <button name="" id="" value={ingredient.name} className={`${ingredient.editing == false ? 'hide' : ''}`} onClick={onConfirmIngredientQuantityHandler}>Done</button>
                                            </div>
                                            <div className={`quantity_input ${ingredient.editing == false ? 'hide' : ''}`} >
                                                <input type="range" min="0.1" max="10" step="0.1" name={ingredient.name} value={ingredient.new_quantity} onChange={onIngredientQuantityChangeHandler} />
                                                <button name="" value={ingredient.name} id="" onClick={onRemoveIngredientHandler}>Remove</button>
                                            </div>
                                        </StyledIngredient>)
                            })
                        }
                    </StyledScrollDiv>
                    <StyledAddButton>
                        <button name="" id="" className={`${addIngredient == true ? 'hide' : ''}`} onClick={onAddIngredientHandler}>Add ingredient</button>
                        <div className={`add_ingredient ${addIngredient == false ? 'hide' : ''}`} >
                            <select name="ingredient_options" defaultValue="add" id="" onChange={onSelectIngredientHandler}>
                                <option value="add" disabled selected={addIngredient == true}>Add an ingredient</option>
                                {
                                    sorted_ingredients.map((ingredient) => {
                                        if (!newOrderDetails.ingredients.map(i => i.name).includes(ingredient.name)) {
                                            return (<option value={ingredient.name}>{ingredient.name}</option>)
                                        }
                                    })
                                }
                            </select>
                            <button name="" id="" onClick={onCancelAddIngredientHandler}>Cancel</button>
                        </div>
                    </StyledAddButton>
                    <StyledButtons>
                        {
                            newOrderDetails.ingredients.length > 0 ?
                            [
                                <button name="" id="" onClick={onPlaceNewOrderHandler}>Place order</button>,
                                // <button name="" id="">Change delivery date</button>
                            ]
                            :
                            null
                        }
                        {/* <button name="" id="" onClick={onCancelOrderHandler}>Cancel order</button> */}
                    </StyledButtons>
                </StyledSideContext>
            </div>
            :
            <div></div>
            }
        </div>
    )
}


const StyledAddButton = styled.div`
    button {
        width: 8rem;
        font-size: 0.75rem;
        line-height: 0rem;
        white-space: nowrap;
        padding: 1rem;
        padding-left: 0;
        padding-right: 0;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
        margin-left: auto;
    }
    select {
        /* height: 1.5rem; */
        
        font-size: 0.65rem;
        width: 8rem;
        height: 2rem;
        line-height: 0rem;
        margin-right: auto;
        text-align-last: center;
        border-radius: 0;
        /* border: #b1b1b1 1px solid;
        color: #b1b1b1; */
        background-color: transparent;
        border: #b2b2b2 1px solid;
        color: #b2b2b2;
        border-radius: 0.25rem;
    }
    option {
        color: black;
        background-color: #b2b2b2;
    }
    .hide {
        display: none;
    }
    .add_ingredient {
        display: flex;
        align-items: baseline;
        justify-content: flex-start;
        button {
            width: 35%;
        }
        &.hide {
            display: none;
        }
    }
`

const StyledButtons = styled.div`
    padding-bottom: 1rem;
    margin-top: auto;
    button {
        width: 100%;
        font-size: 0.75rem;
        padding: 1rem;
    }
`

const StyledIngredient = styled.div`
    /* display: relative;
    display: flex;
    justify-content: space-between; */
    display: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    width: 100%;
    color: #b2b2b2;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    .individual_order {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        .ingredient_name {
            width: 45%;
        }
        .ingredient_quantity {
            align-self: center;
            font-size: 0.75rem;
        }
        button {
            margin-left: auto;
            width: 35%;
            font-size: 0.75rem;
            line-height: 0rem;
            white-space: nowrap;
            padding: 0.75rem;
            padding-left: 0;
            padding-right: 0;
            &.hide {
                display: none;
            }
        }
    }
    .quantity_input {
        width: 100%;
        display: flex;
        margin-bottom: 2rem;
        &.hide {
            display: none;
        }
        button {
            margin-left: auto;
            width: 35%;
            font-size: 0.65rem;
            line-height: 0rem;
            white-space: nowrap;
            padding: 0.75rem;
            padding-left: 0;
            padding-right: 0;
        }
    }
    button {
        width: 50%;
        font-size: 0.75rem;
        line-height: 0rem;
        white-space: nowrap;
        padding: 1rem;
    }
`

const StyledScrollDiv = styled.div`
    overflow-y: scroll;
`

const StyledDetails = styled.div`
    display: relative;
    padding-bottom: 1rem;
`

const StyledHeader = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 14vh;
    background-color: #021d0b;
    color: #b2b2b2;
`
const StyledIcon = styled.div`
    position: absolute;
    top: calc(50% - 1.75rem/2);
    left: 15%;
    svg {
        height: 1.75rem;
        width: 1.75rem;
        // transform: rotateX(180deg) rotateY(0deg) rotateZ(-90deg);
    }
`

const StyledSideContext = styled.div`
    position: relative;
    width: 100%;
    height: 76vh;
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: #000000;
    color: #b2b2b2;
`

export default NewOrder;