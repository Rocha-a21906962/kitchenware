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
    recipeCategories,
    orders
}) => {

    /* Hook for the search target (recipes or ingredients) */
    const [searchTarget, setSearchTarget] = useState('recipes');

    let recipe_filter_object = {
        stock_status: '',
        preparation_time: '',
        cooking_time: '',
        total_time: '',
        categories: [],
    }

    const ingredient_filter_object = {
        stock_status: '',
        categories: [],
        with_incoming_orders_only: false,
    }

    /* Hook for the recipe search filters */
    const [recipeSearchFilters, setRecipeSearchFilters] = useState(recipe_filter_object);
    /* Hook for the ingredient search filters */
    const [ingredientSearchFilters, setIngredientSearchFilters] = useState(ingredient_filter_object);

    return (
        // <div className="content">
        <div className={`search_page ${isSearchPageVisible ? 'open' : ''}`}>
            <ResultList
                searchString={searchString}
                setSearchString={setSearchString}
                searchTarget={searchTarget}
                setSearchTarget={setSearchTarget}
                recipeSearchFilters={recipeSearchFilters}
                ingredientSearchFilters={ingredientSearchFilters}
                ingredientData={ingredientData}
                setIngredientData={setIngredientData} 
                ingredientCategories={ingredientCategories}
                recipeData={recipeData}
                setRecipeData={setRecipeData}
                recipeCategories={recipeCategories}
                orders={orders} /> 
            <SearchFilters
                searchTarget={searchTarget}
                setSearchTarget={setSearchTarget}
                recipeSearchFilters={recipeSearchFilters}
                setRecipeSearchFilters={setRecipeSearchFilters}
                ingredientSearchFilters={ingredientSearchFilters}
                setIngredientSearchFilters={setIngredientSearchFilters} /> 
        </div>
    )
}

export default SearchPage;