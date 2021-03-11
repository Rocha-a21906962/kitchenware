import { useState } from "react";

import OrderCalendar from "../components/orders/OrderCalendar";
import SideContext from "../components/orders/SideContext";
import BottomContext from "../components/orders/BottomContext";
import OrderDetail from "../components/orders/OrderDetail";
import NewOrder from "../components/orders/NewOrder";

const Orders = ({
    orders,
    setOrders,
    orderData
}) => {

    /* Hook for the selected calendar day */
    const [selectedDay, setSelectedDay] = useState(new Date());
    /* Hook for the order detail pop-up visibility */
    const [isOrderDetailOpen, setIsOrderDetailOpen] = useState(null);
    /* Hook for the new order pop-up visibility */
    const [isNewOrderOpen, setIsNewOrderOpen] = useState(null);
    /* Hook for the new order ingredients */
    const [orderIngredients, setOrderIngredients] = useState([]);

    return (
        <div className="content">
            <OrderCalendar
                orders={orders}
                setOrders={setOrders}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay} /> 
            <BottomContext 
                orderData={orderData} />
            <SideContext
                orders={orders}
                setOrders={setOrders}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                isOrderDetailOpen={isOrderDetailOpen}
                setIsOrderDetailOpen={setIsOrderDetailOpen}
                isNewOrderOpen={isNewOrderOpen}
                setIsNewOrderOpen={setIsNewOrderOpen} /> 
            <OrderDetail
                isOrderDetailOpen={isOrderDetailOpen}
                setIsOrderDetailOpen={setIsOrderDetailOpen}
                orders={orders}
                setOrders={setOrders} />
            <NewOrder
                isNewOrderOpen={isNewOrderOpen}
                setIsNewOrderOpen={setIsNewOrderOpen}
                orderIngredients={orderIngredients}
                setOrderIngredients={setOrderIngredients} />
        </div>
    )
}

export default Orders;