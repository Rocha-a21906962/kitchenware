import styled from 'styled-components';

const Cell = ({
    item
}) => {
    return (
        <div>
            <StyledCell>
                <img src={item.image} alt={`${item.name} image`} />
                <StyledTitle>
                    <h5>{item.name}</h5>
                </StyledTitle>
            </StyledCell>
        </div>
    )
}

const StyledTitle = styled.div`
    position: absolute;
    bottom: 0.5rem;
    left: 1rem;
    font-size: 1.25rem;
    text-transform: capitalize;
    color: white;
    width: 100%;
    background-color: #00000012;
    display: flex;
    /* justify-content: center; */
`

const StyledCell = styled.div`
    position: relative;
    display: flex;
    /* margin: 0.15rem; */
    margin-right: 1.7rem;
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