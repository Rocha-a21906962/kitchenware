import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Cell = ({
    item,
    type
}) => {
    return (
        
            <StyledCell>
                { (type === 'recipes') ?

                <Link to={`/recipe/${item.name}`}>
                    <img src={item.image} alt={`${item.name}  image`}/>
                    <StyledTitle>
                        <h5>{item.name}</h5>
                    </StyledTitle>
                </Link>

                :

                <Link to={`/ingredient/${item.name}`}>
                    <img src={item.image} alt={`${item.name}  image`}/>
                    <StyledTitle>
                        <h5>{item.name}</h5>
                    </StyledTitle>
                </Link>

                }
            </StyledCell>


        // <div>
        //     <StyledCell>
        //         <img src={item.image} alt={`${item.name} image`} />
        //         <StyledTitle>
        //             <h5>{item.name}</h5>
        //         </StyledTitle>
        //     </StyledCell>
        // </div>
    )
}

const StyledTitle = styled.div`
    position: absolute;
    bottom: 0.5rem;
    left: 1rem;
    font-size: 1.25rem;
    text-transform: capitalize;
    color: white;
    width: 80%;
    background-color: #00000012;
    display: flex;
    /* justify-content: center; */
`

const StyledCell = styled.div`
    position: relative;
    display: flex;
    /* margin: 0.15rem; */
    margin-right: 0.7rem;
    align-items: center;
    height: 19vh;
    img {
        height: 19vh;
        width: 18vw;
        object-fit: cover;
        border-radius: 0.25rem;
    }
        
`

export default Cell;