import RecipeCell from "../components/categories/RecipeCell";

const Recipes = () => {
    return (
        <div className="content">
            {/* Show N recipes */}
            <RecipeCell />
            <RecipeCell />
            <RecipeCell />
            <RecipeCell />
            <RecipeCell />
            <RecipeCell />
        </div>
    )
}

export default Recipes;