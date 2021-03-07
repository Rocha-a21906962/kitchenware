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

    const [selectedDay, setSelectedDay] = useState(new Date());
    const [isOrderDetailOpen, setIsOrderDetailOpen] = useState(null);
    const [isNewOrderOpen, setIsNewOrderOpen] = useState(null);

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
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                isOrderDetailOpen={isOrderDetailOpen}
                setIsOrderDetailOpen={setIsOrderDetailOpen}
                isNewOrderOpen={isNewOrderOpen}
                setIsNewOrderOpen={setIsNewOrderOpen} /> 
            <OrderDetail
                isOrderDetailOpen={isOrderDetailOpen}
                setIsOrderDetailOpen={setIsOrderDetailOpen} />
            <NewOrder
                isNewOrderOpen={isNewOrderOpen}
                setIsNewOrderOpen={setIsNewOrderOpen} />
        </div>
    )
}

export default Orders;