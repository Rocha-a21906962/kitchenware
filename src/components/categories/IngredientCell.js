import { Link } from 'react-router-dom';
import styled from 'styled-components';


const IngredientCell = ({
    ingredient,
    ingredientData,
    setIngredientData,
    ingredientCategories,
    stats
}) => {

    const inStock = ingredient.in_stock;

    console.log("ingredient");
    console.log(ingredient);

    return (
        <StyledCell>
            { stats ?

            // <Link to="/ingredient_stats">
            <Link to={`/ingredient_stats/${ingredient.name}`}>
                <img src={ingredient.image} alt={`${ingredient.name}  image`} class={`${inStock ? "" : "unavailable"}`}/>
                {ingredient.name}
            </Link>

            :

            // <Link to="/ingredient">
            <Link to={`/ingredient/${ingredient.name}`}>
                <img src={ingredient.image} alt={`${ingredient.name}  image`} class={`${inStock ? "" : "unavailable"}`}/>
                {ingredient.name}
            </Link>

            }
        </StyledCell>
    )
}

const StyledCell = styled.div`
    display: flex;
    width: 26vw;
    height: 25vh;
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
        height: 22vh;
        width: 100%;
        object-fit: cover;
        background-size: cover;
        background-position: center;
    }
    img.unavailable {
        filter: grayscale(100%);
    }
`

export default IngredientCell;