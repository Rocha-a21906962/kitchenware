import styled from 'styled-components';
import IngredientCategories from '../components/categories/IngredientCategories.js';

const Pantry = ({
    ingredientData,
    setIngredientData,
    ingredientCategories
}) => {
    return (
        <div className="content">
            {/* 
            Provisional component! A different one - displaying a properly 
            organized pantry, along with its ingredients - will be used instead) 
            */}
            <IngredientCategories
                ingredientData={ingredientData}
                setIngredientData={setIngredientData}
                ingredientCategories={ingredientCategories}
                stats={false} />
        </div>
    )
}

export default Pantry;