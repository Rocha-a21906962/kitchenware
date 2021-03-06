import styled from 'styled-components';
import RecipeCategoryCell from "./RecipeCategoryCell";


const RecipeCategories = ({
    recipeData,
    setRecipeData,
    recipeCategories,
    stats
}) => {

    console.log("recipeCategories");
    console.log(recipeCategories);

    return (
        <div className="recipe_categories">
            <StyledHeader>
                {/* <h3>Recipe Categories?</h3> */}
            </StyledHeader>
            {/* Show N recipe categories */}
            <StyledCategories>
                {
                    recipeCategories.map((category) => {
                        return <RecipeCategoryCell 
                                    category={category}
                                    recipeData={recipeData}
                                    setRecipeData={setRecipeData}
                                    recipeCategories={recipeCategories}
                                    stats={stats}/>
                    })
                }
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

export default RecipeCategories;