import styled from 'styled-components';
import RecipeCell from './RecipeCell.js';

const Line = ({
    data,
    stats
}) => {
    return (
        <div>
            <StyledLine>
                {
                    data.map((recipe) => {
                        return <RecipeCell 
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
    height: 24vh;
    overflow-x: auto;
    overflow-y: hidden;
`

export default Line;