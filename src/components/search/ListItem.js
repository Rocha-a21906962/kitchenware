import { Link } from "react-router-dom";
import styled from "styled-components";

const ListItem = ({
    item,
    searchTarget
}) => {

    let ingredients;

    if (searchTarget === 'recipes')  {
        ingredients = item.ingredients.map((ingredient) => {return ingredient.name});    
    }

    const categories = item.categories.map((category) => {return category.name});
    // console.log("categories");
    // console.log(categories);

    return (
        <div className="list_item">
            {
                searchTarget === 'recipes'
                ?
                <StyledItem>
                    <StyledPhoto>
                        <Link to={`/recipe/${item.name}`}>
                            <img src={item.image} alt={`${item.name} image`} />
                        </Link>
                    </StyledPhoto>
                    <StyledDescription>
                        <h3>{item.name}</h3>
                        <p>categories: {categories.flat().join(', ')} </p>
                        <p>ingredients: {ingredients.flat().join(', ')} </p>
                        <h5>sfksdjfs dklfsdkfklsdfklsdgklsd lgkdslg sfksdjfsdkl fsdkfklsdfklsdg klsdlgkdslg sfksdjfsdkl fsdkfklsdfklsdg klsdlgkdslg sfksdjfs dklfsdkfklsdfkls dgklsdlgkdslg sfksdjfsdkl fsdkfklsdfklsdgklsdlg kdslg sfksdjfsdklfs dkfklsdfkls dgklsdlgkdslg sfksdjfsdkl </h5>
                    </StyledDescription>
                </StyledItem>
                :
                <StyledItem>
                    <StyledPhoto>
                        <Link to={`/ingredient/${item.name}`}>
                            <img src={item.image} alt={`${item.name} image`} />
                        </Link>
                    </StyledPhoto>
                    <StyledDescription>
                        <h3>{item.name}</h3>
                        <p>categories: {categories.flat().join(', ')} </p>
                        <p>current stock: {item.in_stock.value}{item.unit} </p>
                        <h5>sfksdjfs dklfsdkfklsdfklsdgklsd lgkdslg sfksdjfsdkl fsdkfklsdfklsdg klsdlgkdslg sfksdjfsdkl fsdkfklsdfklsdg klsdlgkdslg sfksdjfs dklfsdkfklsdfkls dgklsdlgkdslg sfksdjfsdkl fsdkfklsdfklsdgklsdlg kdslg sfksdjfsdklfs dkfklsdfkls dgklsdlgkdslg</h5>
                    </StyledDescription>
                </StyledItem>
                
            }
        </div>
    )
}

const StyledPhoto = styled.div`
    display: flex;
    background-color: #000000dd;
    h3 {
        color: #b2b2b2;
    }
    img {
        height: 10rem;
        width: 15rem;
        object-fit: cover;
    }
`

const StyledDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width:40vw;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: #000000dd;
    h3 {
        color: #b2b2b2;
        padding-bottom: 0.25rem;
    }
    h5 {
        color: #b2b2b2;
        padding-top: 0.5rem;
        padding-bottom: 0.25rem;
    }
    p {
        padding: 0;
        padding-bottom: 0.25rem;
        font-size: 0.75rem;
    }
`

const StyledItem = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 1rem;
    background-color: #000000dd;
    h3 {
        color: #b2b2b2;
    }
`

export default ListItem;