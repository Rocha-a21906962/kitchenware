import styled from "styled-components";


const StepByStepOverlay = ({
    isStepByStepOverlayVisible,
    setIsStepByStepOverlayVisible,
    recipeData
}) => {

    const onHideStepByStepOverlay = () => {
        setIsStepByStepOverlayVisible(false);
    }

    return (
        <div className={`step_by_step_overlay ${isStepByStepOverlayVisible ? 'open' : ''}`}>
            <StyledHeader>
                Step 1
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
                        Turn the tuna over and cook for 1-2 mins on the other side. Look at the side of the tuna to see how far through it is cooked, but remember it will keep cooking for a short while when taken off the heat. Rest for a couple of mins before serving.
                        Turn the tuna over and cook for 1-2 mins on the other side. Look at the side of the tuna to see how far through it is cooked, but remember it will keep cooking for a short while when taken off the heat. Rest for a couple of mins before serving.
                        Turn the tuna over and cook for 1-2 mins on the other side. Look at the side of the tuna to see how far through it is cooked, but remember it will keep cooking for a short while when taken off the heat. Rest for a couple of mins before serving.
                        Turn the tuna over and cook for 1-2 mins on the other side. Look at the side of the tuna to see how far through it is cooked, but remember it will keep cooking for a short while when taken off the heat. Rest for a couple of mins before serving.
                        Turn the tuna over and cook for 1-2 mins on the other side. Look at the side of the tuna to see how far through it is cooked, but remember it will keep cooking for a short while when taken off the heat. Rest for a couple of mins before serving.
                    </StyledText>
                </StyledInstructions>
            </StyledContent>
            <StyledCloseButton>
                <button name="" id="" onClick={onHideStepByStepOverlay}>Close</button>
            </StyledCloseButton>
            <StyledTimer>
                {/* <button name="" id="">Activate timer</button> */}
                <h3>(clock icon) 2 mins left</h3>
                <p>(step progress bar) 7:18 / 10mins</p>
                <p>(total progress bar) 22:18 / 1h30</p>
            </StyledTimer>
            <StyledFlowButtons>
                <button name="" id="">Previous step</button>
                <button name="" id="">Start</button>
                <button name="" id="">Next step</button>
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
        font-size: 0.75rem;
        padding: 1rem;
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