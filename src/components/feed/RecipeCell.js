import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RecipeCell = ({
    recipe,
    stats
}) => {
    return (

        <StyledCell>
            { stats ?

            <Link to={`/recipe_stats/${recipe.name}`}>
                <img src={recipe.image} alt={`${recipe.name}  image`}/>
                <StyledTitle>
                    <h5>{recipe.name}</h5>
                </StyledTitle>
            </Link>

            :

            <Link to={`/recipe/${recipe.name}`}>
                <img src={recipe.image} alt={`${recipe.name}  image`}/>
                <StyledTitle>
                    <h5>{recipe.name}</h5>
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
        height: 24vh;
    }
    a img {
        height: 24vh;
        width: 24vw;
        object-fit: cover;
        border-radius: 0.25rem;
    }
`

export default RecipeCell;