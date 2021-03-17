import styled from 'styled-components';
import LargeIngredientCell from './LargeIngredientCell.js';

const LargeIngredientLine = ({
    data,
    stats
}) => {
    return (
        <div>
            <StyledLine>
                {
                    data.map((ingredient) => {
                        return <LargeIngredientCell 
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
    height: 32vh;
    overflow-x: auto;
    overflow-y: hidden;
    background: #000000dd;
`

export default LargeIngredientLine;