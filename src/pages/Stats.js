import StatCategories from "../components/categories/StatCategories";

const Stats = ({
    recipeData,
    ingredientData
}) => {
    return (
        <div className="content">
            <StatCategories 
                recipeData={recipeData}
                ingredientData={ingredientData}/>
        </div>
    )
}

export default Stats;