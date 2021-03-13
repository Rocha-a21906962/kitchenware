import { useState } from "react";

import OrderCalendar from "../components/orders/OrderCalendar";
import SideContext from "../components/orders/SideContext";
import BottomContext from "../components/orders/BottomContext";
import OrderDetail from "../components/orders/OrderDetail";
import NewOrder from "../components/orders/NewOrder";

const Orders = ({
    orders,
    setOrders,
    orderData,
    ingredientData
}) => {

    /* Hook for the selected calendar day */
    const [selectedDay, setSelectedDay] = useState(new Date());
    /* Hook for the order detail pop-up visibility */
    const [isOrderDetailOpen, setIsOrderDetailOpen] = useState(null);
    /* Hook for the new order pop-up visibility */
    const [isNewOrderOpen, setIsNewOrderOpen] = useState(null);
    /* Hook for the currently opened order (or new order) details */
    const [selectedOrderDetails, setSelectedOrderDetails] = useState(null);
    /* Hook for the new order ingredients */
    const [newOrderDetails, setNewOrderDetails] = useState([]);

    return (
        <div className="content">
            <OrderCalendar
                orders={orders}
                setOrders={setOrders}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                isOrderDetailOpen={isOrderDetailOpen}
                setIsOrderDetailOpen={setIsOrderDetailOpen}
                isNewOrderOpen={isNewOrderOpen}
                setIsNewOrderOpen={setIsNewOrderOpen} /> 
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
                setIsNewOrderOpen={setIsNewOrderOpen}
                selectedOrderDetails={selectedOrderDetails}
                setSelectedOrderDetails={setSelectedOrderDetails}
                newOrderDetails={newOrderDetails}
                setNewOrderDetails={setNewOrderDetails} /> 
            <OrderDetail
                isOrderDetailOpen={isOrderDetailOpen}
                setIsOrderDetailOpen={setIsOrderDetailOpen}
                selectedOrderDetails={selectedOrderDetails}
                setSelectedOrderDetails={setSelectedOrderDetails}
                orders={orders}
                setOrders={setOrders}
                ingredientData={ingredientData} />
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

export default Orders;