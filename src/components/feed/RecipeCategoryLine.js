import styled from 'styled-components';
import RecipeCategoryCell from './RecipeCategoryCell.js';

const RecipeCategoryLine = ({
    data,
    selectedCategory,
    setSelectedCategory
}) => {
    return (
        <div>
            <StyledLine>
                {
                    data.map((category) => {
                        return <RecipeCategoryCell 
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

export default RecipeCategoryLine;