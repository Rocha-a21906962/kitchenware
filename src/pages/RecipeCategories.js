import RecipeCategoryCell from "../components/categories/RecipeCategoryCell";

const RecipeCategories = () => {
    return (
        <div className="content">
            {/* Show N recipe categories */}
            <RecipeCategoryCell />
            <RecipeCategoryCell />
            <RecipeCategoryCell />
            <RecipeCategoryCell />
            <RecipeCategoryCell />
        </div>
    )
}

export default RecipeCategories;