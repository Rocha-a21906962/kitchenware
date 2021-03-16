import { useState } from 'react';
import styled from "styled-components";
import { Icon, InlineIcon } from '@iconify/react';
import { format } from "date-fns";
import formPrevious from '@iconify-icons/grommet-icons/form-previous';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

const OrderDetail = ({
    isOrderDetailOpen,
    setIsOrderDetailOpen,
    selectedOrderDetails,
    setSelectedOrderDetails,
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

    const [addIngredient, setAddIngredient] = useState(false);

    const hideOrderDetail = () => {
        setIsOrderDetailOpen(null);
        console.log(isOrderDetailOpen);
    }

    const onIngredientQuantityChangeHandler = (event) => {
        const modifiedSelectedOrderDetails = {
            ...selectedOrderDetails,
            ingredients: selectedOrderDetails.ingredients.map((i) => {
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
        setSelectedOrderDetails(modifiedSelectedOrderDetails);
    };

    const onEditIngredientQuantityHandler = (event) => {
        const modifiedSelectedOrderDetails = {
            ...selectedOrderDetails,
            ingredients: selectedOrderDetails.ingredients.map((i) => {
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
        setSelectedOrderDetails(modifiedSelectedOrderDetails);
    };

    const onConfirmIngredientQuantityHandler = (event) => {
        const modifiedSelectedOrderDetails = {
            ...selectedOrderDetails,
            ingredients: selectedOrderDetails.ingredients.map((i) => {
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
        setSelectedOrderDetails(modifiedSelectedOrderDetails);
    };
    
    const onRemoveIngredientHandler = (event) => {
        const modifiedSelectedOrderDetails = {
            ...selectedOrderDetails,
            ingredients: selectedOrderDetails.ingredients.filter((i) => {
                if (i.name != event.target.value) {
                    return {
                        i
                    }
                }
            })
        }
        setSelectedOrderDetails(modifiedSelectedOrderDetails);
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
        const modifiedSelectedOrderDetails = {
            ...selectedOrderDetails,
            ingredients: [
                ...selectedOrderDetails.ingredients,
                new_order_ingredient
            ]
        }
        console.log("modifiedSelectedOrderDetails");
        console.log(modifiedSelectedOrderDetails);
        setSelectedOrderDetails(modifiedSelectedOrderDetails);
    };
    
    const onConfirmOrderChangesHandler = (event) => {
        const modifiedOrders = orders.map((o) => {
            if (o.id === selectedOrderDetails.id) {
                return {
                    ...selectedOrderDetails,
                    ingredients: selectedOrderDetails.ingredients.map((i) => {
                        return {
                            name: i.name,
                            quantity: i.new_quantity
                        }
                    })
                }
            } else {
                return {
                    ...o
                }
            }
        })
        confirmationOverlayModifiedData.current = modifiedOrders;
        confirmationOverlayText.current.q = `Confirm changes to this order?`;
        setEventPopupMessage([
            'The changes to your order have been confirmed.', 
        ]);
        setIsOrderConfirmationOverlayVisible(true);
        // setIsOrderDetailOpen(null);
        // setOrders(modifiedOrders);
    };
    
    const onCancelOrderHandler = (event) => {
        const modifiedOrders = orders.filter((o) => {
            if (o.id != selectedOrderDetails.id) {
                return {
                    ...o
                }
            }
        })
        console.log("modifiedOrders");
        console.log(modifiedOrders);
        confirmationOverlayModifiedData.current = modifiedOrders;
        confirmationOverlayText.current.q = `Confirm cancellation of this order?`;
        setEventPopupMessage([
            'The cancellation of your order has been confirmed.',
        ]);
        setIsOrderConfirmationOverlayVisible(true);
        // setIsOrderDetailOpen(null);
        // setOrders(modifiedOrders);
    };



    console.log(orders);

    const sorted_ingredients = ingredientData.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    // we simplistically assume that an order can be modified right up to the exact delivery date and time
    // (in reality, that wouldn't be so simple...)
    let is_order_delivered_already;
    if (selectedOrderDetails) {
        is_order_delivered_already = new Date(selectedOrderDetails.delivery_on) >= new Date() ? false : true;
}

    return (
        <div id="order_detail_popup" className={`${isOrderDetailOpen ? 'open' : ''}`}>
            {
                isOrderDetailOpen ? 
                <div>
                    <StyledHeader>
                        <h3>Order #{selectedOrderDetails.id}</h3>
                        <StyledIcon>
                            <Icon icon={formPrevious} onClick={hideOrderDetail} />
                        </StyledIcon>
                    </StyledHeader>
                    <StyledSideContext>
                        <StyledDetails>
                            <h3>Order details</h3>
                            <h5>Type: {selectedOrderDetails.type}</h5>
                            <h5>Placed on: {format(new Date(selectedOrderDetails.placed_on), 'MMMM d, hh:mm')}</h5>
                            <h5>Delivery on: {format(new Date(selectedOrderDetails.delivery_on), 'MMMM d, hh:mm')}</h5>
                        </StyledDetails>
                        <h3>Ordered ingredients</h3>
                        {
                            console.log(selectedOrderDetails)
                        }
                        {
                            selectedOrderDetails.ingredients.map((ingredient) => {
                                console.log("ingredient.name");
                                console.log(ingredient.name);
                                return (<StyledIngredient>
                                            <div className="individual_order">
                                                <h5 className="ingredient_name">{ingredient.name}</h5>
                                                <div className="ingredient_quantity"><span>{ingredient.new_quantity} kg</span></div>
                                                <button name="" id="" value={ingredient.name} className={`${(ingredient.editing == true || is_order_delivered_already) ? 'hide' : ''}`} onClick={onEditIngredientQuantityHandler}>Edit</button>
                                                <button name="" id="" value={ingredient.name} className={`${ingredient.editing == false ? 'hide' : ''}`} onClick={onConfirmIngredientQuantityHandler}>Done</button>
                                            </div>
                                            <div className={`quantity_input ${ingredient.editing == false ? 'hide' : ''}`} >
                                                {
                                                    new Date(selectedOrderDetails.delivery_on) >= new Date() ?
                                                    [
                                                        <input type="range" min="0.1" max="10" step="0.1" name={ingredient.name} value={ingredient.new_quantity} onChange={onIngredientQuantityChangeHandler} />,
                                                        <button name="" value={ingredient.name} id="" className="no_border" onClick={onRemoveIngredientHandler}><FontAwesomeIcon icon={faTrash} /></button>
                                                    ]
                                                    :
                                                    ''
                                                }
                                            </div>
                                        </StyledIngredient>)
                            })
                        }
                        <StyledAddButton>
                            <button name="" id="" className={`${(addIngredient == true || is_order_delivered_already) ? 'hide' : ''}`} onClick={onAddIngredientHandler}>Add ingredient</button>
                            <div className={`add_ingredient ${addIngredient == false ? 'hide' : ''}`} >
                                <select name="ingredient_options" defaultValue="add" id="" onChange={onSelectIngredientHandler}>
                                    <option value="add" disabled selected={addIngredient == true}>Add an ingredient</option>
                                    {
                                        sorted_ingredients.map((ingredient) => {
                                            if (!selectedOrderDetails.ingredients.map(i => i.name).includes(ingredient.name)) {
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
                                !is_order_delivered_already ?
                                selectedOrderDetails.ingredients.length > 0 ?
                                [
                                    <button name="" id="" onClick={onConfirmOrderChangesHandler}>Confirm changes</button>,
                                    // <button name="" id="">Change delivery date</button>,
                                    <button name="" id="" onClick={onCancelOrderHandler}>Cancel order</button>
                                ]
                                :
                                [
                                    // <button name="" id="">Change delivery date</button>,
                                    <button name="" id="" onClick={onCancelOrderHandler}>Cancel order</button>
                                ]
                                :
                                null
                            }
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
    height: 10vh;
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
    .no_border {
        border: none;
    }
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
    background-color: #02031d;
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
    justify-content: flex-start;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: #000000;
    color: #b2b2b2;
    overflow-y: scroll;
`

export default OrderDetail;