import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';


const StepByStepOverlay = ({
    isStepByStepOverlayVisible,
    setIsStepByStepOverlayVisible,
    recipe
}) => {

    const first_step = recipe.steps.filter((step) => step.number == 1)[0];

    /* Hook for the new order pop-up menu visibility */
    const [currentStep, setCurrentStep] = useState(first_step);

    const onHideStepByStepOverlay = () => {
        // reset the current step state
        setCurrentStep(first_step);
        setIsStepByStepOverlayVisible(false);
    }

    const onPrevStepHandler = () => {
        const prev_step_nr = currentStep.number - 1 || 1;
        const prev_step = recipe.steps.filter((step) => step.number == prev_step_nr)[0];
        setCurrentStep(prev_step);
    }
    
    const onNextStepHandler = () => {
        const next_step_nr = currentStep.number + 1 <= recipe.steps.length ? currentStep.number + 1 : currentStep.number;
        const next_step = recipe.steps.filter((step) => step.number == next_step_nr)[0];
        setCurrentStep(next_step);
    }

    const TotalRecipeTime = () => {
        const total_recipe_time = recipe.steps.reduce((a, b) => a + b.time, 0);
        return total_recipe_time < 60 ? total_recipe_time + "mins" : Math.floor(total_recipe_time / 60) + "h" + total_recipe_time % 60;
    }

    return (
        <div className={`step_by_step_overlay ${isStepByStepOverlayVisible ? 'open' : ''}`}>
            <StyledHeader>
                Step {currentStep.number}
            </StyledHeader>
            <StyledContent>
                <StyledVideo>
                    Video
                </StyledVideo>
                <StyledInstructions>
                    <StyledInstructionsHeader>
                        Ingredients
                    </StyledInstructionsHeader>
                    <StyledText>
                        <p>Tuna</p>
                        <p>Onions</p>
                        <p>Olive oil</p>
                    </StyledText>
                    <StyledInstructionsHeader>
                        Instructions
                    </StyledInstructionsHeader>
                    <StyledText>
                        {currentStep.description}
                        {/* Turn the tuna over and cook for 1-2 mins on the other side. Look at the side of the tuna to see how far through it is cooked, but remember it will keep cooking for a short while when taken off the heat. Rest for a couple of mins before serving.
                        Turn the tuna over and cook for 1-2 mins on the other side. Look at the side of the tuna to see how far through it is cooked, but remember it will keep cooking for a short while when taken off the heat. Rest for a couple of mins before serving.
                        Turn the tuna over and cook for 1-2 mins on the other side. Look at the side of the tuna to see how far through it is cooked, but remember it will keep cooking for a short while when taken off the heat. Rest for a couple of mins before serving.
                        Turn the tuna over and cook for 1-2 mins on the other side. Look at the side of the tuna to see how far through it is cooked, but remember it will keep cooking for a short while when taken off the heat. Rest for a couple of mins before serving.
                        Turn the tuna over and cook for 1-2 mins on the other side. Look at the side of the tuna to see how far through it is cooked, but remember it will keep cooking for a short while when taken off the heat. Rest for a couple of mins before serving. */}
                    </StyledText>
                </StyledInstructions>
            </StyledContent>
            <StyledCloseButton>
                <button name="" id="" onClick={onHideStepByStepOverlay}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </StyledCloseButton>
            <StyledTimer>
                {/* <button name="" id="">Activate timer</button> */}
                <h3>(clock icon) {currentStep.time} mins left</h3>
                <p>(step progress bar)  / {currentStep.time}mins</p>
                <p>(total progress bar) 22:18 / {TotalRecipeTime()}</p>
            </StyledTimer>
            <StyledFlowButtons>
                <button name="" id="" onClick={onPrevStepHandler}>Previous step</button>
                <button name="" id="">Start</button>
                <button name="" id="" onClick={onNextStepHandler}>Next step</button>
            </StyledFlowButtons>
        </div>
    )
};

const StyledContent = styled.div`
    display: flex;
    height: 90vh;
    width: 100%;
    overflow-y: hidden;
`
const StyledVideo = styled.div`
    height: 40vh;
    width: 50%;
    background-color: #ffffffdd;
    display: flex;
    align-items: center;
    justify-content: center;

`

const StyledInstructions = styled.div`
    color: white;
    width: 50%;
    overflow-y: scroll;
`

const StyledText = styled.div`
    color: white;
    padding: 1rem;
    width: 100%;
    p {
        font-size: 0.75rem;
        padding-bottom: 0.5rem;
        padding-top: 0;
    }
`

const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 1rem;
    line-height: 7vh;
    width: 100%;
    font-weight: bold;
    background-color: #020222;
    color: white;
`

const StyledInstructionsHeader = styled.div`
    display: flex;
    align-items: center;
    padding-left: 1rem;
    height: 5vh;
    width: 100%;
    font-weight: bold;
    background-color: #010111;
`

const StyledCloseButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    button {
        font-size: 1rem;
        padding: 1rem;
        border: none;
    }
`

const StyledTimer = styled.div`
    position: relative;
    bottom: 12vh;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 10vh;
    font-size: 1.5rem;
    padding: 1rem;
    color: white;
    h3 {
        font-size: 1.5rem;
    }
    p {
        font-size: 0.75rem;
        padding: 0;
    }
`

const StyledFlowButtons = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 50%;
    padding-left: 1rem;
    padding-right: 1rem;
    button {
        width: 30%;
        font-size: 0.75rem;
        padding: 1rem;
    }
`

export default StepByStepOverlay;