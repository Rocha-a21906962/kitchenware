import OrderCalendar from "../components/orders/OrderCalendar";
import SideContext from "../components/orders/SideContext";
import BottomContext from "../components/orders/BottomContext";
import OrderDetail from "../components/orders/OrderDetail";

const Orders = () => {
    return (
        <div className="content">
            <OrderCalendar /> 
            {/*
            <BottomContext />
            */}
            <SideContext /> 
            <OrderDetail />
        </div>
    )
}

export default Orders;