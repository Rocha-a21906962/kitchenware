import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon, InlineIcon } from '@iconify/react';
import alert16Regular from '@iconify/icons-fluent/alert-16-regular';
import { getIngredientsInShortSupply, getRecipesInShortSupply } from '../helperFunctions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons';


const EventPopup = ({
    isEventPopupOpen,
    setIsEventPopupOpen,
    eventPopupMessage,
    setEventPopupMessage
}) => {

    useEffect(() => {
        if (isEventPopupOpen) {
            console.log("eventPopupMessage");
            console.log(eventPopupMessage);
            setTimeout(() => {
                setIsEventPopupOpen(false);
                setEventPopupMessage(null);
            }, 60000);
        }
    });

    const onClosePopupHandler = () => {
        setIsEventPopupOpen(false);
        setEventPopupMessage(null);
    }

    return (
        <div>
            <StyledPopup className={`event_popup ${isEventPopupOpen ? 'open ' : ''}`}>
            <FontAwesomeIcon icon={faInfoCircle} />
            <FontAwesomeIcon icon={faExclamationCircle} />
                {
                    eventPopupMessage !== null ?
                    eventPopupMessage.map((p) => {
                        return (<p>{p}</p>)
                    })
                    :
                    null
                }
                {/* <p>Your order has been confirmed.</p>
                <p>It will be delivered on the XXXXXXX.</p> */}
            <StyledCloseButton>
                <button name="" id="" onClick={onClosePopupHandler}>Close</button>
            </StyledCloseButton>
            </StyledPopup>
        </div>
    )
}

const StyledCloseButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    button {
        font-size: 0.5rem;
        padding: 0.25rem;
    }
`

const StyledPopup = styled.div`
    position: fixed;
    right: 0.25rem;
    bottom: 0.25rem;
    height: 10rem;
    width: 15rem;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: #1c1c1c; // #0d6645; 
    opacity: 0;
    display: flex;
    transition: opacity 0.75s cubic-bezier(0.88, 0.11, 0.83, 0.65);
    z-index: -1;
    p {
        font-size: 0.75rem;
        padding: 0;
    }
    &.open {
        display: flex;
        opacity: 0.99;
        z-index: 10;
        transition: opacity 0.25s cubic-bezier(0.88, 0.11, 0.83, 0.65);
        transition-delay: 2.5s;
    }
`

export default EventPopup;