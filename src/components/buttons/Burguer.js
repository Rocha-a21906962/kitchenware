import React, {useState} from 'react';
import styled from "styled-components";

const StyledBurguer = styled.div`
  width: 20px;
  height: 20px;
  position: fixed;
  top: 25px;
  left: 53px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  
  div {
    width: 20px;
    height: 2.5px;
    background-color: ${({open}) => open ? 'white' : 'white' };
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    
    &:nth-child(1) {
      transform: ${({open}) => open ? 'rotate(50deg)' : 'rotate(0deg)'};
    } 
    &:nth-child(2) {
      transform: ${({open}) => open ? 'translateX(-100%)' : 'translate(0%)'};
      opacity: ${({open}) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({open}) => open ? 'rotate(-50deg)' : 'rotate(0deg)'};
    }
  }

  @media only screen and (max-width: 1200px) {
    transition: .5s;
    display: none;
  }
  
`;

const Burguer = () => {

    const [open, setOpen] = useState(true)

    return (
        <StyledBurguer open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurguer>
    )
};

export default Burguer