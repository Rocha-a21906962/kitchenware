import styled from 'styled-components';

const IngredientCategoryCell = ({category}) => {
    return (
        <StyledCell>
            <img src={category.image} alt={`${category.name} image`} />
            <a>{category.name}</a>
        </StyledCell>
    )
}

const StyledCell = styled.div`
    display: flex;
    flex-direction: column;
    width: 27vw;
    height: 25vh;
    margin-bottom: 1.5rem;
    // border: 1px red solid;
    a {
        font-family: GTAmericaRegular;
        text-transform: capitalize;
        align-self: center;
        color: #b1b1b1;
        height: 1rem;
        font-size: 1rem;
    }
    img {
        height: 90%;
        background-size: cover;
        background-position: center;
        border: 1px #292929 solid;
        border-radius: 5%;
    }
    img .unavailable {
        filter: grayscale(100%);
    }

`

export default IngredientCategoryCell;