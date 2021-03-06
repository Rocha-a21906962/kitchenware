import styled from "styled-components";
import { Icon, InlineIcon } from '@iconify/react';
import formPrevious from '@iconify-icons/grommet-icons/form-previous';

const MealDetail = ({
    isMealDetailOpen,
    setIsMealDetailOpen,
    isNewMealOpen,
    setIsNewMealOpen
}) => {

    const showMealDetail = (order_id) => {
        setIsMealDetailOpen(order_id);
        console.log(isMealDetailOpen);
    };

    const hideMealDetail = () => {
        setIsMealDetailOpen(null);
        console.log(isMealDetailOpen);
    }

    const hideNewMeal = () => {
        setIsNewMealOpen(null);
        console.log(isNewMealOpen);
    }

    return (
        <div id="meal_detail_popup" className={`${isMealDetailOpen ? 'open' : ''}`}>
            <StyledHeader>
                <h3>Meal planning</h3>
                <StyledIcon>
                    <Icon icon={formPrevious} onClick={hideMealDetail} />
                </StyledIcon>
            </StyledHeader>
            <StyledSideContext>
                <StyledDetails>
                    {/* <h5>Expected meals today: <span>16</span></h5> */}
                </StyledDetails>
                <h3>Scheduled meals</h3>
                <StyledMeal>
                    <div className="scheduled_event">
                        <h5>19:00</h5>
                        <h5><span>4 servings</span></h5>
                        <button className="edit_event" name="" id="">Change</button>
                    </div>
                    <div className="scheduled_recipe">
                        <h5><span> 2x</span></h5>
                        <h5>Tuna with Tuna</h5>
                    </div>
                    <div className="scheduled_recipe">
                        <h5><span> 2x</span></h5>
                        <h5>Salmon with Salmon</h5>
                    </div>
                </StyledMeal>
                <StyledMeal>
                    <div className="scheduled_event">
                        <h5>19:00</h5>
                        <h5><span>3 servings</span></h5>
                        <button className="edit_event" name="" id="">Change</button>
                    </div>
                    <div className="scheduled_recipe">
                        <h5><span> 3x</span></h5>
                        <h5>Salmon with Salmon</h5>
                    </div>
                </StyledMeal>
                <StyledMeal>
                    <div className="scheduled_event">
                        <h5>19:30</h5>
                        <h5><span>4 servings</span></h5>
                        <button className="edit_event" name="" id="">Change</button>
                    </div>
                    <div className="scheduled_recipe">
                        <h5><span> 2x</span></h5>
                        <h5>Tuna with Tuna</h5>
                    </div>
                    <div className="scheduled_recipe">
                        <h5><span> 2x</span></h5>
                        <h5>Salmon with Salmon</h5>
                    </div>
                </StyledMeal>
                <button name="" id="">Confirm changes</button>
            </StyledSideContext>
        </div>
    )
}

const StyledMeal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding-top: 1rem;
    padding-bottom: 1rem;
    position: relative;
    width: 100%;
    color: #b2b2b2;
    .scheduled_event {
        display: flex;
        justify-content: space-between;
        width: 100%;
       h5:last-child {
            margin-left: auto;
        }
    }
    .scheduled_recipe {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        h5:last-child {
            margin-left: auto;
        }
    }
    h5 {
        padding-top: 0.5rem;
    }
    .edit_event {
        width: 40%;
        font-size: 0.55rem;
        line-height: 0.55rem;
        white-space: nowrap;
        padding: 0.5rem;
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
    background-color: #02031d;
    color: #b2b2b2;
`
const StyledIcon = styled.div`
    position: absolute;
    top: calc(50% - 1.75rem/2);
    left: 10%;
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

export default MealDetail;