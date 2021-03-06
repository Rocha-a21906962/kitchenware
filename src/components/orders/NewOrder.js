import styled from "styled-components";
import { Icon, InlineIcon } from '@iconify/react';
import formPrevious from '@iconify-icons/grommet-icons/form-previous';

const NewOrder = ({
    isNewOrderOpen,
    setIsNewOrderOpen
}) => {

    const hideNewOrder = () => {
        setIsNewOrderOpen(null);
        console.log(isNewOrderOpen);
    }

    return (
        <div id="new_order_popup" className={`${isNewOrderOpen ? 'open' : ''}`}>
            <StyledHeader>
                <h3>New order</h3>
                <StyledIcon>
                    <Icon icon={formPrevious} onClick={hideNewOrder} />
                </StyledIcon>
            </StyledHeader>
            <StyledSideContext>
                <StyledDetails>
                    <h3>Order details</h3>
                    <h5>Delivery on: ...</h5>
                </StyledDetails>
                <h3>Ingredients</h3>
                <StyledIngredient>
                    <div className="individual_order">
                        <h5>Tuna</h5>
                    </div>
                    <div className="quantity">
                        <h5><span>2 kg</span></h5>
                    </div>
                    <button name="" id="">Remove</button>
                </StyledIngredient>
                <StyledIngredient>
                    <div className="individual_order">
                        <h5>Olive oil</h5>
                    </div>
                    <div className="quantity">
                        <h5><span>10 l</span></h5>
                    </div>
                    <button name="" id="">Remove</button>
                </StyledIngredient>
                <StyledIngredient>
                    <div className="individual_order">
                        <h5>Onions</h5>
                    </div>
                    <div className="quantity">
                        <h5><span>1.5 kg</span></h5>
                    </div>
                    <button name="" id="">Remove</button>
                </StyledIngredient>
                <button name="" id="">Place order</button>
                <button name="" id="">Change delivery date</button>
            </StyledSideContext>
        </div>
    )
}

const StyledIngredient = styled.div`
    display: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    position: relative;
    width: 100%;
    color: #b2b2b2;
    .individual_ingredient {
        width: 30%;
    }
    .quantity {
        width: 15%;
        span {
        white-space: nowrap;
        }
    }
    button {
        width: 40%;
        font-size: 0.75rem;
        line-height: 0rem;
        white-space: nowrap;
        padding: 1rem;
    }
`

const StyledDetails = styled.div`
    display: relative;
    padding-bottom: 1rem;
`

const StyledHeader = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 14vh;
    background-color: #021d0b;
    color: #b2b2b2;
`
const StyledIcon = styled.div`
    position: absolute;
    top: calc(50% - 1.75rem/2);
    left: 15%;
    svg {
        height: 1.75rem;
        width: 1.75rem;
        // transform: rotateX(180deg) rotateY(0deg) rotateZ(-90deg);
    }
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
    background-color: #000000;
    color: #b2b2b2;
    button {
        font-size: 0.75rem;
        padding: 1rem;
    }
`

export default NewOrder;