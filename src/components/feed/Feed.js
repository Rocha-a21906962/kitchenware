import styled from 'styled-components';
import Line from './Line.js';

const Feed = ({
    ingredientData,
    recipeData,
    recipeCategories
}) => {
    return (
        <div className="feed">
            <StyledHeader>Recipe categories</StyledHeader>
            <Line data={recipeCategories} />
            <StyledHeader>Upcoming deliveries</StyledHeader>
            <Line data={ingredientData} />
            <StyledHeader>Upcoming meals</StyledHeader>
            <Line data={recipeData} />
            <StyledHeader>Quick to prepare</StyledHeader>
            <Line data={recipeData} />
            <StyledHeader>Ready to cook (every ingredient in stock)</StyledHeader>
            <Line data={recipeData} />
            <StyledHeader>Last cooked</StyledHeader>
            <Line data={recipeData} />
            <StyledHeader>About to expire</StyledHeader>
            <Line data={recipeData} />
            <StyledHeader>Recently viewed</StyledHeader>
            <Line data={recipeData} />
            <StyledHeader>For kids</StyledHeader>
            <Line data={recipeData} />
            <StyledHeader>Italian</StyledHeader>
            <Line data={recipeData} />
            <StyledHeader>Japanese</StyledHeader>
            <Line data={recipeData} />
            <StyledHeader>Halal</StyledHeader>
            <Line data={recipeData} />
            <StyledHeader>Vegan</StyledHeader>
            <Line data={recipeData} />
            <StyledHeader>Seafood's finest</StyledHeader>
            <Line data={recipeData} />
            <StyledHeader>Ingredients</StyledHeader>
            <Line data={ingredientData} />
            <StyledHeader>Recipes</StyledHeader>
            <Line data={recipeData} />
            <StyledHeader>All Recipes</StyledHeader>
            <Line data={recipeData} />
        </div>
    )
}

const StyledHeader = styled.div`
    background: #000;
    color: white;
    font-family: GTAmericaRegular;
    font-size: 1.1rem;
    font-weight: bold;
    line-height: 2.5rem;
`

export default Feed;