import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LargeIngredientCell = ({
    ingredient,
    stats
}) => {

    const inStock = ingredient.in_stock;

    return (
        <StyledCell>
            { stats ?

            <Link to={`/ingredient_stats/${ingredient.name}`}>
                <img src={ingredient.image} alt={`${ingredient.name}  image`} className={`${inStock ? "" : "unavailable"}`}/>
                <StyledTitle>
                    <h5>{ingredient.name}</h5>
                </StyledTitle>
            </Link>

            :

            <Link to={`/ingredient/${ingredient.name}`}>
                <img src={ingredient.image} alt={`${ingredient.name}  image`} className={`${inStock ? "" : "unavailable"}`}/>
                <StyledTitle>
                    <h5>{ingredient.name}</h5>
                </StyledTitle>
            </Link>

            }
        </StyledCell>
    )
}

const StyledTitle = styled.div`
    position: absolute;
    bottom: 0.5rem;
    left: 1rem;
    font-size: 1.25rem;
    text-transform: capitalize;
    color: white;
    width: 100%;
    background-color: #00000012;
    display: flex;
    /* justify-content: center; */
`

const StyledCell = styled.div`
    a {
        position: relative;
        display: flex;
        /* margin: 0.15rem; */
        margin-right: 0.7rem;
        align-items: center;
        height: 32vh;
    }
    a img {
        height: 32vh;
        width: 32vw;
        object-fit: cover;
        border-radius: 0.25rem;
    }
`

export default LargeIngredientCell;