import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon, InlineIcon } from '@iconify/react';
import dashboardLine from '@iconify/icons-clarity/dashboard-line';
import potOfFood from '@iconify/icons-emojione-monotone/pot-of-food';
import bxSearch from '@iconify/icons-bx/bx-search';
import washingMachine from '@iconify/icons-mdi/washing-machine';
import shoppingCart from '@iconify/icons-fa-solid/shopping-cart';
import analyticsIcon from '@iconify/icons-carbon/analytics';
import forkAndKnifeWithPlate from '@iconify/icons-emojione-monotone/fork-and-knife-with-plate';
import birthdayCake from '@iconify/icons-fa-solid/birthday-cake';
import closedBook from '@iconify/icons-emojione-monotone/closed-book';
import favoriteSolid from '@iconify/icons-clarity/favorite-solid';





const SideNav = () => {
    return (
      <StyledSideNav>
        <ul>
            <li>
                <StyledSideNavButton>
                    <Link to="/">
                        <Icon icon={dashboardLine} />
                        <h5>Dashboard</h5>
                    </Link>
                </StyledSideNavButton>
            </li>
            <li>
                <StyledSideNavButton>
                    <Link to="/device_management">
                        <Icon icon={washingMachine} />
                        <h5>Devices</h5>
                    </Link>
                </StyledSideNavButton>
            </li>
            <li>
                <StyledSideNavButton>
                    <Link to="/tool_management">
                        <Icon icon={forkAndKnifeWithPlate} />
                        <h5>Tools</h5>
                    </Link>
                </StyledSideNavButton>
            </li>
            <li>
                <StyledSideNavButton>
                    <Link to="/pantry">
                        <Icon icon={potOfFood} />
                        <h5>Pantry</h5>
                    </Link>
                </StyledSideNavButton>
            </li>
            <li>
                <StyledSideNavButton>
                    <Link to="/recipe_feed">
                        <Icon icon={closedBook} />
                        <h5>Recipes</h5>
                    </Link>
                </StyledSideNavButton>
            </li>
            <li>
                <StyledSideNavButton>
                    <Link to="/orders">
                        <Icon icon={shoppingCart} />
                        <h5>Orders</h5>
                    </Link>
                </StyledSideNavButton>
            </li>
            <li>
                <StyledSideNavButton>
                    <Link to="/meals_and_events">
                        <Icon icon={birthdayCake} />
                        <h5>Meals & Events</h5>
                    </Link>
                </StyledSideNavButton>
            </li>
            <li>
                <StyledSideNavButton>
                    <Link to="/stats">
                        <Icon icon={analyticsIcon} />
                        <h5>Stats</h5>
                    </Link>
                </StyledSideNavButton>
            </li>
            <li>
                <StyledSideNavButton>
                    <Link to="/favourites">
                        <Icon icon={favoriteSolid} />
                        <h5>Favourites</h5>
                    </Link>
                </StyledSideNavButton>
            </li>
            
        {/*
        <ToolManagement />
        <Pantry />
        <Recipes />
        <Stats />
        <OrdersAndEvents />
        <About />
        <Settings />
        <Profile />
          */}
            <li>
                <StyledSideNavButton>
                    <Link to="/search">
                        <Icon icon={bxSearch} />
                        <h5>Search</h5>
                    </Link>
                </StyledSideNavButton>
            </li>
        </ul>
       </StyledSideNav>  
    )
}

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

const StyledSideNavButton = styled.div`
    font-family: 'GTAmericaRegular', Arial, Helvetica, sans-serif;
    padding: 0.75rem;
    height: 3rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    a {
        display: flex;
        // flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        color: #b1b1b1;
        text-decoration: none;
        font-family: GTAmericaRegular, Arial, Helvetica, sans-serif;
        font-size: 1rem;
        text-transform: capitalize;
    }
    svg {
        height: 1.25rem;
        width: 2.5rem;
    }
`

const StyledSideNav = styled.nav`
    position: fixed;
    width: 10rem;
    height: 90vh;
    float: left;
    top: 10vh;
    left: 0;
    background-color: #000;
    // background: linear-gradient(to bottom,#000000 15%, #222 100%); /* W3C */
    // background: linear-gradient(to bottom,#0e184d 0%, #323560 65%, #445c80 100%); /* W3C */
    // background: linear-gradient(to bottom,#050d33 15%,#13152f 65%,#10141b 100%); /* W3C */
    // background: linear-gradient(to bottom,#3c3c3c 15%,#666 65%,#727374 100%); /* W3C */
    // box-shadow: 2px 2px 50px rgb(212, 211, 211);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // transform: translateX(-100%);
    transition: transform 0.5s ease, opacity 0.5s ease;
    // border-top-right-radius: 3rem;
    h2 {
        padding: 2rem;
    }
    &.open {
        transform: none;
        opacity: 1;
        transition: transform 0.5s ease, opacity 0.5s ease;
    }
    li {
        display: flex;
        justify-content: flex-start;
    }
    li:first-child {
        margin-top: 0.5rem;
    }
`

export default SideNav;