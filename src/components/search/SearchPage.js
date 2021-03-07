import { useState } from "react";
import SearchFilters from "./SearchFilters";
import ResultList from "./ResultList";

const SearchPage = ({
    isSearchPageVisible,
    setIsSearchPageVisible,
    searchString,
    setSearchString,
    ingredientData,
    setIngredientData,
    ingredientCategories,
    recipeData,
    setRecipeData,
    recipeCategories
}) => {

    /* Hook for the search target (recipes or ingredients) */
    const [searchTarget, setSearchTarget] = useState('recipes');

    return (
        // <div className="content">
        <div className={`search_page ${isSearchPageVisible ? 'open' : ''}`}>
            <ResultList
                searchString={searchString}
                setSearchString={setSearchString}
                searchTarget={searchTarget}
                setSearchTarget={setSearchTarget}
                ingredientData={ingredientData}
                setIngredientData={setIngredientData} 
                ingredientCategories={ingredientCategories}
                recipeData={recipeData}
                setRecipeData={setRecipeData}
                recipeCategories={recipeCategories} /> 
            <SearchFilters
                searchTarget={searchTarget}
                setSearchTarget={setSearchTarget} /> 
        </div>
    )
}

export default SearchPage;