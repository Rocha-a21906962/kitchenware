import styled from 'styled-components';
import Cell from './Cell.js';

const Line = ({
    data,
    type
}) => {
    return (
        <div>
            <StyledLine>
                {
                    data.map((item) => {
                        return <Cell 
                                    item={item}
                                    type={type} />
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
    height: 19vh;
    overflow-x: auto;
    overflow-y: hidden;
`

export default Line;