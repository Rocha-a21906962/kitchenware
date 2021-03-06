import Calendar from "../calendar/Calendar";

const OrderCalendar = ({
    selectedDay,
    setSelectedDay,
    orders,
    setOrders
}) => {
    return (
        <Calendar
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            calendarType="orders"
            dataState={orders}
            setDataState={setOrders} />
    )
}

export default OrderCalendar;