import styled from "styled-components";
import ListItem from "./ListItem";
import { filterRecipes, filterIngredients } from '../../auxFunctions';

const ResultList = ({
    searchString,
    setSearchString,
    searchTarget,
    setSearchTarget,
    recipeSearchFilters,
    ingredientSearchFilters,
    ingredientData,
    setIngredientData,
    ingredientCategories,
    recipeData,
    setRecipeData,
    recipeCategories,
    orders
}) => {

    let results = null;

    if (searchString === null || searchString == "") {
        results = null;
    } else {
        if (searchTarget === 'recipes') {
            results = filterRecipes(recipeData, ingredientData, recipeSearchFilters, searchString);
        } else {
            results = filterIngredients(ingredientData, orders, ingredientSearchFilters, searchString);
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