import styled from 'styled-components';
import IngredientCell from './IngredientCell.js';

const IngredientLine = ({
    data,
    stats
}) => {
    return (
        <div>
            <StyledLine>
                {
                    data.map((ingredient) => {
                        return <IngredientCell 
                                    ingredient={ingredient}
                                    stats={stats} />
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
`

export default IngredientLine;