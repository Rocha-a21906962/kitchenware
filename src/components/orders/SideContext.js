import styled from "styled-components";

const SideContext = () => {
    return (
        <div>
            <StyledDay>
                <h3>March 7</h3>
                <h5>Wednesday</h5>
            </StyledDay>
            <StyledSideContext>
                <h3>Scheduled deliveries</h3>
                <h5>(this should change depending on whether the order 
                    has been delivered already or not)</h5>
                <StyledOrder>
                    <div className="individual_order">
                        <h5>Order #374</h5>
                        <h5><span>auto</span></h5>
                    </div>
                    <button name="" id="">View order</button>
                </StyledOrder>
                <StyledOrder>
                    <div className="individual_order">
                        <h5>Order #375</h5>
                        <h5><span>manual</span></h5>
                    </div>
                    <button name="" id="">View order</button>
                </StyledOrder>
                <h3>Delivered orders</h3>
                <StyledOrder>
                    <div className="individual_order">
                        <h5>Order #373</h5>
                        <h5><span>manual</span></h5>
                    </div>
                    <button name="" id="">View order</button>
                </StyledOrder>
                <button name="" id="">Place new order for delivery on March 7</button>
                <button name="" id="">Schedule new order for delivery every Wednesday</button>
            </StyledSideContext>
        </div>
    )
}

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
    width: 100%;
    background-color: #000000;
    color: #b2b2b2;
`

const StyledSideContext = styled.div`
    position: relative;
    width: 100%;
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