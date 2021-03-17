import styled from 'styled-components';
import LargeRecipeCell from './LargeRecipeCell.js';

const LargeLine = ({
    data,
    stats
}) => {
    return (
        <div>
            <StyledLine>
                {
                    data.map((recipe) => {
                        return <LargeRecipeCell 
                                    recipe={recipe}
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

export default LargeLine;