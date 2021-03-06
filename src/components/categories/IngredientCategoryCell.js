import { Link } from 'react-router-dom';
import styled from 'styled-components';

const IngredientCategoryCell = ({
    category, 
    ingredientData,
    setIngredientData,
    ingredientCategories,
    stats
}) => {

    console.log(category);

    return (
        <StyledCell>
            { stats ? 
            
            // <Link to="/ingredient_category_stats/">
            <Link to={`/ingredient_category_stats/${category.name}`}>
                <img src={category.image} alt={`${category.name} image`} />
                {category.name}
            </Link>
            
            // <IngredientList
            //     category={category.name}
            //     ingredientData={ingredientData}
            //     setIngredientData={setIngredientData} 
            //     stats={true} />

            :
            
            // <Link to="/ingredient_category">
            <Link to={`/ingredient_category/${category.name}`}>
                <img src={category.image} alt={`${category.name} image`} />
                {category.name}
            </Link>

            // <IngredientList
            //     category={category.name}
            //     ingredientData={ingredientData}
            //     setIngredientData={setIngredientData} 
            //     stats={false} />

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
    img .unavailable {
        filter: grayscale(100%);
    }
`

export default IngredientCategoryCell;