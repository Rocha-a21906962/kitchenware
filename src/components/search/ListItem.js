import styled from "styled-components";

const ListItem = ({
    item
}) => {

    const categories = item.categories.map((category) => {return category.name});
    console.log("categories");
    console.log(categories);
    
    // var flat = db.map(
    //     ({id, food}) => ({[`id_${id}`]: Object.values(food).flat().join(';')})
    // );
    // var result = Object.assign(...flat);

    return (
        <div className="list_item">
            <StyledItem>
                <StyledPhoto>
                    <img src={item.image} alt={`${item.name} image`} />
                </StyledPhoto>
                <StyledDescription>
                    <h3>{item.name}</h3>
                    <p>categories: {categories.flat().join(', ')} </p>
                    <h5>sfksdjfs dklfsdkfklsdfklsdgklsd lgkdslg sfksdjfsdkl fsdkfklsdfklsdg klsdlgkdslg sfksdjfsdkl fsdkfklsdfklsdg klsdlgkdslg sfksdjfs dklfsdkfklsdfkls dgklsdlgkdslg sfksdjfsdkl fsdkfklsdfklsdgklsdlg kdslg sfksdjfsdklfs dkfklsdfkls dgklsdlgkdslg sfksdjfsdkl fsdkfklsdfklsd gklsdlgkdslg sfksdj f sdklfsdkfklsdfklsdgk  lsdlgkdslgsfksdjfs dklf sdkfklsdfklsdgklsdlg kdslg </h5>
                </StyledDescription>
            </StyledItem>
        </div>
    )
}

const StyledPhoto = styled.div`
    display: flex;
    height: 10rem;
    width: 15rem;
    object-fit: cover;
    background-color: #000000dd;
    h3 {
        color: #b2b2b2;
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