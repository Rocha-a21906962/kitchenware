import OrderCalendar from "../components/orders/OrderCalendar";
import SideContext from "../components/orders/SideContext";

const Orders = () => {
    return (
        <div className="content">
            <OrderCalendar /> 
            <SideContext /> 
        </div>
    )
}

export default Orders;