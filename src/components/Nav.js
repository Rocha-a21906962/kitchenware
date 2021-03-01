import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon, InlineIcon } from '@iconify/react';
import bxSearch from '@iconify/icons-bx/bx-search';
import settings28Filled from '@iconify/icons-fluent/settings-28-filled';

import kitchenware_logo from "../img/kitchenware.svg";

const Nav = () => {
    return (
        <StyledNav>
            {/*
            <StyledLogo>
                <Link to="/">
                kitchenware
                </Link> 
            </StyledLogo>
            */}
            <StyledLogo>
                <Link to="/">
                <img src={kitchenware_logo} alt="kitchenware logo"/>
                </Link> 
            </StyledLogo>
            <div></div>
            <div></div>
            <StyledSearch>
                <div></div>
                <StyledIcon>
                    <Icon icon={bxSearch} />
                </StyledIcon>
            </StyledSearch>
            {/*
            <StyledIcon>
                <Icon icon={settings28Filled} />
            </StyledIcon>
            <Logo />
            <BackButton />
            <SearchSection />
            */}
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    position: fixed;
    height: 10vh;
    width: 100vw;
    display: flex;
    margin: auto;
    // justify-content: center;
    align-items: center;
    // padding: 1rem 10rem;
    padding-right: 1rem;
    background-color: #000000;
    // border-bottom: 2px solid #2b2b2b;
    a {
        color: white;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
        margin-left: auto;
    }
    #logo {
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }
    li {
        padding-left: 10rem;
        position: relative;
    }
`

const StyledLogo = styled.div`
    display: flex;
    width: 10rem;
    height: 100%;
    padding-left: 2rem;
    justify-content: flex-start;
    align-items: center;
    img {
        width: 6rem;
    }
    /*
    display: flex;
    width: 12rem;
    height: 100%;
    justify-content: center;
    a {
        font-family: MuseoModerno, cursive;
        font-size: 1.75rem;
        color: #A10B0B;
    }
    */
`

const StyledSearch = styled.div`
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #b1b1b1;
    height: 10vh;
    width: 70vw;
    svg {
        height: 1.75rem;
        width: 1.75rem;
    }
`

const StyledIcon = styled.div`
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #b1b1b1;
    height: 10vh;
    svg {
        height: 1.75rem;
        width: 1.75rem;
    }
`

export default Nav;