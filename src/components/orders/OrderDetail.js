import styled from "styled-components";
import { Icon, InlineIcon } from '@iconify/react';
import { format } from "date-fns";
import formPrevious from '@iconify-icons/grommet-icons/form-previous';

const OrderDetail = ({
    isOrderDetailOpen,
    setIsOrderDetailOpen,
    orders,
    setOrders
}) => {

    const showOrderDetail = (order_id) => {
        setIsOrderDetailOpen(order_id);
        console.log(isOrderDetailOpen);
    };

    const hideOrderDetail = () => {
        setIsOrderDetailOpen(null);
        console.log(isOrderDetailOpen);
    }

    const onAddIngredientHandler = (event) => {
        console.log("addIngredientHandler");
    };

    const onIngredientQuantityChangeHandler = (event) => {
        console.log("ingredientQuantityChangeHandler" + event.target.value);
    };

    console.log(orders);

    const order = orders.filter((order) => order.id == isOrderDetailOpen)[0];

    console.log(order);

    return (
        <div id="order_detail_popup" className={`${isOrderDetailOpen ? 'open' : ''}`}>
            {
                isOrderDetailOpen ? 
                <div>
                    <StyledHeader>
                        <h3>Order #{order.id}</h3>
                        <StyledIcon>
                            <Icon icon={formPrevious} onClick={hideOrderDetail} />
                        </StyledIcon>
                    </StyledHeader>
                    <StyledSideContext>
                        <StyledDetails>
                            <h3>Order details</h3>
                            <h5>Type: {order.type}</h5>
                            <h5>Placed on: {format(new Date(order.placed_on), 'MMMM d, hh:mm')}</h5>
                            <h5>Delivery on: {format(new Date(order.delivery_on), 'MMMM d, hh:mm')}</h5>
                        </StyledDetails>
                        <h3>Ordered ingredients</h3>
                        {
                            order.ingredients.map((ingredient) => {
                                console.log("ingredient.name");
                                console.log(ingredient.name);
                                return (<StyledIngredient>
                                            <div className="individual_order">
                                                <h5>{ ingredient.name }</h5>
                                            </div>
                                            <div className="quantity">
                                            {
                                                new Date(order.delivery_on) >= new Date() ?
                                                <input type="range" min="0.1" max="10" step="0.1" className="stock_input" onChange={onIngredientQuantityChangeHandler} />
                                                :
                                                ''
                                            }
                                            <h5><span>2 kg</span></h5>
                                            </div>
                                            {/* <button name="" id="">Remove</button> */}
                                        </StyledIngredient>)
                            })
                        }
                        <StyledIngredient>
                            <div className="individual_order">
                                <select name="ingredient_options" defaultValue="name_asc" id="sort_by" onChange={onAddIngredientHandler}>
                                    <option value="" disabled selected>Add an ingredient</option>
                                    <option value="tuna">tuna</option>
                                    <option value="salmon">salmon</option>
                                    <option value="olive oil">olive oil</option>
                                </select>
                            </div>
                            <div className="quantity">
                                <h5>1kg</h5>
                                <input type="range" min="0.1" max="10" step="0.1" className="stock_input" onChange={onIngredientQuantityChangeHandler} />
                                {/* <button name="" id="">Remove</button> */}
                            </div>
                            {/* <button name="" id="">Remove</button> */}
                        </StyledIngredient>
                        <StyledIngredient>
                            <div className="individual_order">
                                <h5>Tuna</h5>
                                <h5><span>auto</span></h5>
                            </div>
                            <div className="quantity">
                                <h5><span>2 kg</span></h5>
                            </div>
                            <button name="" id="">Change</button>
                        </StyledIngredient>
                        {
                            new Date(order.delivery_on) >= new Date() ?
                            [
                                <button name="" id="">Change delivery date</button>,
                                <button name="" id="">Cancel order</button>
                            ]
                            :
                            <div></div>
                        }
                    </StyledSideContext>
                </div>
                :
                <div></div>
            }
        </div>
    )
}

const StyledIngredient = styled.div`
    display: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    position: relative;
    width: 100%;
    color: #b2b2b2;
    .individual_order {
        width: 25%;
    }
    .quantity {
        width: 75%;
        display: flex;
        justify-content: flex-end;
        input {
            width: 60%;
        }
        h5 {
            display: inline-flex;
            padding-left: 1rem;
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
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: #000000;
    color: #b2b2b2;
    button {
        font-size: 0.75rem;
        padding: 1rem;
    }
`

export default OrderDetail;