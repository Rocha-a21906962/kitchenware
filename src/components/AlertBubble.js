import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon, InlineIcon } from '@iconify/react';
import alert16Regular from '@iconify/icons-fluent/alert-16-regular';


const AlertBubble = () => {
    return (
        <div>
            <StyledAlertBubble>
                <Icon icon={alert16Regular} />
            </StyledAlertBubble>
            <StyledAlertMenu>
            </StyledAlertMenu>
        </div>
    )
}

const StyledAlertBubble = styled.div`
    position: fixed;
    right: 5vw;
    bottom: 5vh;
    display: flex;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 35%;
    background-color: #37370b;
    // border: 1px solid black;
    svg { 
        margin: auto;
        width: 1.75rem;
        height: 1.75rem;
        filter: invert(80%);
    }
`

const StyledAlertMenu = styled.div`
`

export default AlertBubble;