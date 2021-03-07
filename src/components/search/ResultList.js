import styled from "styled-components";
import ListItem from "./ListItem";

const ResultList = ({
    searchString,
    setSearchString,
    searchTarget,
    setSearchTarget,
    ingredientData,
    setIngredientData,
    ingredientCategories,
    recipeData,
    setRecipeData,
    recipeCategories
}) => {

    let results = null;

    if (searchString === null || searchString == "") {
        results = null;
    } else {
        if (searchTarget === 'recipes') {
            results = recipeData.filter(recipe => {
                return recipe.name.toLowerCase().includes(searchString.toLowerCase());
            });
        } else {
            results = ingredientData.filter(ingredient => {
                return ingredient.name.toLowerCase().includes(searchString.toLowerCase());
            });
        }
    }

    console.log("search results:");
    console.log(results);

    return (
        <div className="result_list">
            { 
                (results == null || results.length === 0)
                ?
                <StyledNoMatchingResults>
                    <h5>No matching results.</h5>
                </StyledNoMatchingResults>
                :
                results.map((item) => {
                    return <ListItem 
                                    item={item}
                                    searchTarget={searchTarget} />
                    })
            }
        </div>
    )
}

const StyledNoMatchingResults = styled.div`
    display: flex;
    height: 10rem;
    width: 90vw;
    background-color: #000000dd;
    h5 {
        color: #b2b2b2;
    }
`

export default ResultList;