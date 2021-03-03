import { Link } from "react-router-dom";
import styled from "styled-components";

const StatCategories = () => {
    return (
        <div className="ingredient_categories">
            <StyledHeader>
                {/* <h3>Ingredient Categories?</h3> */}
            </StyledHeader>
            {/* Show N ingredient categories */}
            <StyledCategories>
                <StyledCell>
                    <Link to="/most_used_ingredients">
                        <img src="dairy_products.bmp" alt="stat category image"/>
                        Most used ingredients
                    </Link>
                </StyledCell>
                <StyledCell>
                    <Link to="/individual_ingredient_stats">
                        <img src="dairy_products.bmp" alt="stat category image"/>
                        Individual ingredient stats
                    </Link>
                </StyledCell>
                <StyledCell>
                    <Link to="/most_used_recipes">
                        <img src="dairy_products.bmp" alt="stat category image"/>
                        Most used recipes
                    </Link>
                </StyledCell>
                <StyledCell>
                    <Link to="/individual_recipe_stats">
                        <img src="dairy_products.bmp" alt="stat category image"/>
                        Individual recipe stats
                    </Link>
                </StyledCell>
            </StyledCategories>
        </div>
    )
}

const StyledHeader = styled.div`
    display: flex;
    width:100%;
    background-color: #000000dd;
    h3 {
        color: red;
    }
`

const StyledCategories = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    // border: 1px solid yellow;
    background-color: #000000dd;
    padding-top: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
`

const StyledCell = styled.div`
    display: flex;
    width: 38vw;
    height: 35vh;
    margin-bottom: 1.5rem;
    background-color: #00000077;
    border: 1px #292929 solid;
    border-radius: 5%;
    overflow: hidden;
    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: GTAmericaRegular;
        text-transform: capitalize;
        color: #b1b1b1;
        font-size: 1rem;
        text-decoration: none;
    }
    img {
        height: 32vh;
        width: 100%;
        object-fit: cover;
        background-size: cover;
        background-position: center;
    }
    img .unavailable {
        filter: grayscale(100%);
    }
`

export default StatCategories;