import styled from "styled-components";
import { format } from "date-fns";

const SideContext = ({
    selectedDay,
    setSelectedDay,
    isMealDetailOpen,
    setIsMealDetailOpen,
    isNewMealOpen,
    setIsNewMealOpen
}) => {

    const showMealDetail = () => {
        setIsMealDetailOpen(true);
        console.log(isMealDetailOpen);
    };

    const showNewMeal = () => {
        setIsNewMealOpen(true);
        console.log(isNewMealOpen);
    };

    return (
        <div>
            <StyledDay>
                <h3>{format(selectedDay, 'd MMMM')}</h3>
                <h5>{format(selectedDay, 'iiii')}</h5>
            </StyledDay>
            <StyledSideContext>
                <h3>Expected meals</h3>
                <h5>(this should change depending on whether the meals  
                    have been served already or not)</h5>
                <h5>Expected meals today: <span>16</span></h5>
                <StyledMeal>
                    <div className="scheduled_recipe">
                        <h5>Tuna with Tuna</h5>
                        <h5><span>4x</span></h5>
                    </div>
                    <h5><span>2 servings</span> @ 19:00</h5>
                    <h5><span>2 servings</span> @ 19:30</h5>
                </StyledMeal>
                <StyledMeal>
                    <div className="scheduled_recipe">
                        <h5>Salmon with Salmon</h5>
                        <h5><span>8x</span></h5>
                    </div>
                    <h5><span>3 servings</span> @ 19:00</h5>
                    <h5><span>4 servings</span> @ 19:45</h5>
                    <h5><span>1 serving</span> @ 21:00</h5>
                </StyledMeal>
                <StyledMeal>
                    <div className="scheduled_recipe">
                        <h5>Nestum</h5>
                        <h5><span>1x</span></h5>
                    </div>
                    <h5><span>1 serving</span> @ 22:30</h5>
                </StyledMeal>
                <StyledMeal>
                    <div className="scheduled_recipe">
                        <h5>Cerelac</h5>
                        <h5><span>3x</span></h5>
                    </div>
                    <h5><span>1 serving</span> @ 20:00</h5>
                    <h5><span>2 servings</span> @ 23:00</h5>
                </StyledMeal>
                <button name="" id="6" onClick={showMealDetail}>Edit meal planning</button>
                <button name="" id="" value="regular" onClick={e => showNewMeal(e.target.value)}>Schedule additional meals</button>
            </StyledSideContext>
        </div>
    )
}

const StyledMeal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    position: relative;
    width: 100%;
    color: #b2b2b2;
    .scheduled_recipe {
        display: flex;
        width: 100%;
       h5:last-child {
            margin-left: auto;
        }
    }
    h5 {
        padding-top: 0.5rem;
    }
    button {
        width: 20%;
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
    padding-bottom: 7rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: #000000dd;
    color: #b2b2b2;
    button {
        margin-top: auto;
        font-size: 0.75rem;
        padding: 1rem;
    }
`

export default SideContext;