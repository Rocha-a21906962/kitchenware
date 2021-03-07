import styled from 'styled-components';

const Cell = ({
    item
}) => {
    return (
        <div>
            <StyledCell>
                <img src={item.image} alt={`${item.name} image`} />
            </StyledCell>
        </div>
    )
}

const StyledCell = styled.div`
    display: flex;
    margin: 0.15rem;
    align-items: center;
    height: 24vh;
    img {
        height: 24vh;
        width: 18vw;
        object-fit: cover;
        border-radius: 0.25rem;
    }
        
`

export default Cell;