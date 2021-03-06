import styled from 'styled-components';
import IngredientCategoryCell from "./IngredientCategoryCell";


const IngredientCategories = ({
    ingredientData,
    setIngredientData,
    ingredientCategories,
    stats
}) => {

    console.log("ingredientCategories");
    console.log(ingredientCategories);

    return (
        <div className="ingredient_categories">
            <StyledHeader>
                {/* <h3>Ingredient Categories?</h3> */}
            </StyledHeader>
            {/* Show N ingredient categories */}
            <StyledCategories>
                {
                    ingredientCategories.map((category) => {
                        return <IngredientCategoryCell 
                                    category={category}
                                    ingredientData={ingredientData}
                                    setIngredientData={setIngredientData}
                                    ingredientCategories={ingredientCategories}
                                    stats={stats} />
                    })
                }
            </StyledCategories>
        </div>
    )
}

const StyledHeader = styled.div`
    display: flex;
    width:100%;
    background-color: #000000dd;
    h3 {
        color: red;
    }
`

const StyledCategories = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    // border: 1px solid yellow;
    background-color: #000000dd;
    padding-top: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
`

export default IngredientCategories;