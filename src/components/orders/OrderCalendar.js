import Calendar from "../calendar/Calendar";

const OrderCalendar = ({
    selectedDay,
    setSelectedDay,
    orders,
    setOrders,
    isOrderDetailOpen,
    setIsOrderDetailOpen,
    isNewOrderOpen,
    setIsNewOrderOpen
}) => {
    return (
        <Calendar
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            calendarType="orders"
            dataState={orders}
            setDataState={setOrders}
            isItemDetailOpen={isOrderDetailOpen}
            setIsItemDetailOpen={setIsOrderDetailOpen}
            isNewItemOpen={isNewOrderOpen}
            setIsNewItemOpen={setIsNewOrderOpen} />
    )
}

export default OrderCalendar;