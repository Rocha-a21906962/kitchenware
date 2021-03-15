import styled from 'styled-components';
import IngredientCategoryCell from './IngredientCategoryCell.js';

const IngredientCategoryLine = ({
    data,
    selectedCategory,
    setSelectedCategory
}) => {
    return (
        <div>
            <StyledLine>
                {
                    data.map((category) => {
                        return <IngredientCategoryCell 
                            category={category}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory} />
                        })
                }
            </StyledLine>
        </div>
    )
}

const StyledLine = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 24vh;
    overflow-x: auto;
    overflow-y: hidden;
    background: #000000dd;
`

export default IngredientCategoryLine;