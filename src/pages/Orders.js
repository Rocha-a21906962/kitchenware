import OrderCalendar from "../components/orders/OrderCalendar";
import SideContext from "../components/orders/SideContext";
import BottomContext from "../components/orders/BottomContext";

const Orders = () => {
    return (
        <div className="content">
            <OrderCalendar /> 
            {/*
            <BottomContext />
            */}
            <SideContext /> 
        </div>
    )
}

export default Orders;