import RecipeList from './RecipeList.js';


const Favourites = ({
    recipeData,
    setRecipeData,
    recipeCategories
}) => {
    return (
        <RecipeList 
            recipeData={recipeData}
            setRecipeData={setRecipeData}
            recipeCategories={recipeCategories}
            stats={false}
            favourites={true} />
    )
}

export default Favourites;