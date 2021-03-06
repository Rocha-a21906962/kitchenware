import RecipeCategories from "../components/categories/RecipeCategories";

const RecipeCategoriesPage = ({
    recipeData,
    setRecipeData,
    recipeCategories,
    stats
}) => {
    return (
        <div className="content">
            {/* 
            Provisional component! A different one - showing 
            a netflix-like feed will be used instead) 
            Transform this component into a one-line endless horizontally scrollable instead?
            Recipe Categories could become the first "line" of the netflix-like recipe feed,
            followed by Ready to Cook, In a hurry?, Vegan, No allergies allowed, etc
            */}
            <RecipeCategories 
                recipeData={recipeData}
                setRecipeData={setRecipeData}
                recipeCategories={recipeCategories}
                stats={stats} />
        </div>
    )
}

export default RecipeCategoriesPage;