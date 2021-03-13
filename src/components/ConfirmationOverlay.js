import styled from "styled-components";

const ConfirmationOverlay = ({
    isConfirmationOverlayVisible,
    setIsConfirmationOverlayVisible,
    modifiedData,
    data,
    setData,
    text,
    isSideMenuOpen,
    setIsSideMenuOpen,
    isEventPopupOpen,
    setIsEventPopupOpen,
    eventPopupMessage,
    setEventPopupMessage
}) => {

    const onConfirmActionHandler = (event) => {
        setData(modifiedData.current);
        modifiedData.current = null;
        text.current.changes = {};
        if (setIsSideMenuOpen) {
            setIsSideMenuOpen(false);
        }
        setIsConfirmationOverlayVisible(false);
        setIsEventPopupOpen(true);
    };
    
    const onCancelActionHandler = (event) => {
        modifiedData.current = null;
        setIsConfirmationOverlayVisible(false);
    };

    console.log("isConfirmationOverlayVisible");
    console.log(isConfirmationOverlayVisible);

    return (
        <StyledOverlay className={`${isConfirmationOverlayVisible ? 'open' : ''}`}>
            <StyledText>
                <p>{text.current.q}</p>
                {
                    console.log("change:", text.current.changes)
                }
                {
                    text.current.changes.length > 0 ? 
                    text.current.changes.map((change) => {
                        return (<p>{change.name} (from {change.old} to {change.new})</p>)
                    })
                    :
                    null
                }
            </StyledText>
            <StyledButtons>
                <StyledConfirmButton>
                    <button name="" id="" onClick={onConfirmActionHandler}>Confirm</button>
                </StyledConfirmButton>
                <StyledCancelButton>
                    <button name="" id="" onClick={onCancelActionHandler}>Cancel</button>
                </StyledCancelButton>
            </StyledButtons>
        </StyledOverlay>
    )
}

const StyledButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledConfirmButton = styled.div`

`

const StyledCancelButton = styled.div`

`

const StyledText = styled.div`
    display: flex;
    justify-content: center;
    p {
        width: 100%;
        padding: 0;
        padding-bottom: 1rem;
        white-space: normal;
    }
`

const StyledOverlay = styled.div`
    height: 90vh;
    width: calc(100vw - 10rem);
    background-color: #000000ee;
    opacity: 0;
    display: none;
    overflow: hidden;
    &.open {
        position: fixed;
        top: 10vh;
        left: 10rem;
        z-index: 10000;
        opacity: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export default ConfirmationOverlay;