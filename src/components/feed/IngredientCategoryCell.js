import { Link } from 'react-router-dom';
import styled from 'styled-components';

const IngredientCategoryCell = ({
    category,
    stats,
    selectedCategory,
    setSelectedCategory
}) => {


    const onClickCategoryHandler = (event, category) => {
        setSelectedCategory(category);
    }

    return (
        // <div>
        //     <StyledCell>
        //         <img src={item.image} alt={`${item.name} image`} />
        //         <StyledTitle>
        //             <h5>{item.name}</h5>
        //         </StyledTitle>
        //     </StyledCell>
        // </div>
        <div>
            { stats ?
            <StyledCell value={category.name} onClick={(e) => onClickCategoryHandler(e, category.name)}>
                <img src={category.image} alt={`${category.name}  image`} />
                <StyledTitle>
                    <h5>{category.name}</h5>
                </StyledTitle>
            </StyledCell>
            :

            <StyledCell value={category.name} onClick={(e) => onClickCategoryHandler(e, category.name)}>
                <img src={category.image} alt={`${category.name}  image`} />
                <StyledTitle>
                    <h5>{category.name}</h5>
                </StyledTitle>
            </StyledCell>

            }
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
    margin-right: 0.7rem;
    align-items: center;
    height: 24vh;
    img {
        height: 24vh;
        width: 24vw;
        object-fit: cover;
        border-radius: 0.25rem;
    }
`


export default IngredientCategoryCell;