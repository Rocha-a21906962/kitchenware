import styled from "styled-components";
import { format, addDays } from "date-fns";

const SideContext = ({
    orders,
    setOrders,
    selectedDay,
    setSelectedDay,
    isOrderDetailOpen,
    setIsOrderDetailOpen,
    isNewOrderOpen,
    setIsNewOrderOpen,
    selectedOrderDetails,
    setSelectedOrderDetails,
    newOrderDetails,
    setNewOrderDetails
}) => {

    const showOrderDetail = (order_id) => {
        setIsOrderDetailOpen(order_id);
        console.log(isOrderDetailOpen);
        
        let order = orders.filter((order) => order.id == order_id)[0];
        // if order is set, add new_quantity property to the object
        if (order !== undefined) {
            order = {
                ...order,
                ingredients: order.ingredients.map((ingredient) => {
                    return {
                        ...ingredient,
                        new_quantity: ingredient.quantity,
                        editing: false,
                    }

                })
            }
        }
        setSelectedOrderDetails(order);
        console.log(selectedOrderDetails);
    };

    const showNewOrder = () => {
        setIsNewOrderOpen(true);
        const order = {
            id: null,
            type: 'auto',
            ref: 1,
            placed_on: selectedDay,
            delivery_on: addDays(selectedDay, 1),
            ingredients: [],
        }
        setNewOrderDetails(order);
        console.log(newOrderDetails);
    };

    const deliveriesOnDay = (selectedDay) => {
        const ordersThisDay = orders.filter(order => format(new Date(order.delivery_on), 'd') === format(selectedDay, 'd') 
                                            && format(new Date(order.delivery_on), 'M') === format(selectedDay, 'M')
                                            && format(new Date(order.delivery_on), 'Y') === format(selectedDay, 'Y'));

        /* returns an empty array if no matching order was found
        (this prevents the variable to be set to undefined - is this good practice though?)
        */ 
        return (ordersThisDay || []);
    };

    const deliveredOrders = () => {
        return deliveries_this_day.filter(order => new Date(order.delivery_on) <= new Date());
    };

    const scheduledDeliveries = () => {
        return deliveries_this_day.filter(order => new Date(order.delivery_on) > new Date());
    };

    let delivered_orders = [];
    let scheduled_deliveries = [];

    const deliveries_this_day = deliveriesOnDay(selectedDay);
    if (deliveries_this_day.length > 0) {
        console.log("deliveries_this_day");
        console.log(deliveries_this_day);
        delivered_orders = deliveredOrders();
        scheduled_deliveries = scheduledDeliveries();
    }

    return (
        <div id="side_context">
            <StyledDay>
                <h3>{format(selectedDay, 'd MMMM')}</h3>
                <h5>{format(selectedDay, 'iiii')}</h5>
            </StyledDay>
            <StyledSideContext>
                {
                    scheduled_deliveries.length > 0 ?
                    <div>
                        <h3>Scheduled deliveries</h3>
                        {
                            scheduled_deliveries.map((order) => {
                                return (<StyledOrder>
                                            <div className="individual_order">
                                                <h5>Order #{ order.id }</h5>
                                                <h5>@{format(new Date(order.delivery_on), 'hh:mm')} <span>{ order.type }</span></h5>
                                            </div>
                                            <button name={`order_${ order.id }`} id={ order.id } onClick={e => showOrderDetail(e.target.id)}>View order</button>
                                        </StyledOrder>)
                            })
                        }
                    </div>
                    :
                    delivered_orders.length > 0 ?
                    <div>
                        <h3>Delivered orders</h3>
                        {
                            delivered_orders.map((order) => {
                                return (<StyledOrder>
                                            <div className="individual_order">
                                                <h5>Order #{ order.id }</h5>
                                                <h5>@{format(new Date(order.delivery_on), 'hh:mm')} <span>{ order.type }</span></h5>
                                            </div>
                                            <button name={`order_${ order.id }`} id={ order.id } onClick={e => showOrderDetail(e.target.id)}>View order</button>
                                        </StyledOrder>)
                            })
                        }
                    </div>
                    : 
                    new Date(selectedDay) >= new Date() ?
                    <div>
                        <h5>No deliveries planned for this day.</h5>
                    </div>
                    :
                    <div>
                        <h5>There were no orders delivered on this day.</h5>
                    </div>
                }
                <StyledNewOrderButtons>
                    {
                        new Date(addDays(selectedDay,1)) > new Date() ?
                        <div>
                            <button name="" id="" value="regular" onClick={e => showNewOrder(e.target.value)}>Place new order for delivery on {format(selectedDay, 'd MMMM')}</button>
                            <button name="" id="" value="periodic" onClick={e => showNewOrder(e.target.value)}>Schedule new order for delivery every {format(selectedDay, 'iiii')}</button>
                        </div>
                        :
                        <div></div>
                    }
                </StyledNewOrderButtons>
            </StyledSideContext>
        </div>
    )
}

const StyledNewOrderButtons = styled.div`
    padding-bottom: 1rem;
    margin-top: auto;
    button {
        width: 100%;
    }
`

const StyledOrder = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    position: relative;
    width: 100%;
    color: #b2b2b2;
    .individual_order {
        width: 40%;
    }
    button {
        width: 50%;
        font-size: 0.75rem;
        line-height: 0rem;
        white-space: nowrap;
        padding: 1rem;
    }
`

const StyledDay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 14vh;
    position: relative;
    width: calc(100vw - 60vw - 10rem);
    background-color: #000000;
    color: #b2b2b2;
`

const StyledSideContext = styled.div`
    position: relative;
    width: calc(100vw - 60vw - 10rem);
    height: 76vh;
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: #000000dd;
    color: #b2b2b2;
    button {
        font-size: 0.75rem;
        padding: 1rem;
    }
`

export default SideContext;