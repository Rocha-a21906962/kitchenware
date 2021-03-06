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
    return (
        // <div className="content">
        <div className={`search_page ${isSearchPageVisible ? 'open' : ''}`}>
            <ResultList
                searchString={searchString}
                setSearchString={setSearchString}
                ingredientData={ingredientData}
                setIngredientData={setIngredientData} 
                ingredientCategories={ingredientCategories}
                recipeData={recipeData}
                setRecipeData={setRecipeData}
                recipeCategories={recipeCategories} /> 
            <SearchFilters /> 
        </div>
    )
}

export default SearchPage;