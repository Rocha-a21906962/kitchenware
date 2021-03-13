import { useState, useRef, useEffect } from "react";

import OrderCalendar from "../components/orders/OrderCalendar";
import SideContext from "../components/orders/SideContext";
import BottomContext from "../components/orders/BottomContext";
import OrderDetail from "../components/orders/OrderDetail";
import NewOrder from "../components/orders/NewOrder";
import ConfirmationOverlay from "../components/ConfirmationOverlay";

const Orders = ({
    orders,
    setOrders,
    orderData,
    ingredientData,
    isEventPopupOpen,
    setIsEventPopupOpen,
    eventPopupMessage,
    setEventPopupMessage
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
    /* Hook for order confirmation overlay visibility */
    const [isOrderConfirmationOverlayVisible, setIsOrderConfirmationOverlayVisible] = useState(false);
    /* Hook for the modified data that is to be passed to the confirmation overlay */
    const confirmationOverlayModifiedData = useRef(null);
    /* Hook for the text that is to be presented within the confirmation overlay */
    const confirmationOverlayText = useRef({q: '', changes: {}});
    /* Hook for blocking background content scroll */
    const [isContentScrollBlocked, setIsContentScrollBlocked] = useState(false);
    
    useEffect(() => {
        const block_status = isOrderConfirmationOverlayVisible ? true : false; 
        setIsContentScrollBlocked(block_status);
    });

    return (
        <div className={`content ${isContentScrollBlocked ? 'no_scroll' : ''}`}>
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
            <ConfirmationOverlay
                isConfirmationOverlayVisible={isOrderConfirmationOverlayVisible}
                setIsConfirmationOverlayVisible={setIsOrderConfirmationOverlayVisible}
                modifiedData={confirmationOverlayModifiedData}
                data={orders}
                setData={setOrders}
                text={confirmationOverlayText}
                isSideMenuOpen={isNewOrderOpen ? isNewOrderOpen : isOrderDetailOpen}
                setIsSideMenuOpen={isNewOrderOpen ? setIsNewOrderOpen : setIsOrderDetailOpen}
                isEventPopupOpen={isEventPopupOpen}
                setIsEventPopupOpen={setIsEventPopupOpen}
                eventPopupMessage={eventPopupMessage}
                setEventPopupMessage={setEventPopupMessage} />
        </div>
    )
}

export default Orders;