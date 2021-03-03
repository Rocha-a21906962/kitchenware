import styled from 'styled-components';
import IngredientCell from "../components/categories/IngredientCell";

/* bogus ingredient data */
const ingredient_category = {
        name: 'fish',
        image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
        ingredients: [
            {
                name: 'tuna',
                image: 'https://1.bp.blogspot.com/-_QXjE8zwvNo/WaWEY1LFgcI/AAAAAAAAA1k/aar9QC0qFesVlS2c0dgOh4SqZk3TDJSJgCLcBGAs/s1600/Yellowfin%2BTuna%2BSaku%2B-%2BHigh%2BQuality.jpg',
                in_stock: 3,
            },
            {
                name: 'cod',
                image: 'https://www.portugalresident.com/wp-content/uploads/2013/12/201213_su_cod_shutterstock.jpg',
                in_stock: 12,
            },
            {
                name: 'salmon',
                image: 'https://images.thefishsite.com/fish/articles/processing/salmon-fillet.jpeg?profile=article-inline@maximum',
                in_stock: 9,
            },
            {
                name: 'mackerel',
                image: 'https://images.trustinnews.pt/uploads/sites/5/2019/10/e-se-trocarmos-a-sardinha-pelo-carapau-2-1024x683.jpeg',
                in_stock: 14,
            },
            {
                name: 'sea bass',
                image: 'https://orders.booths.co.uk/media/catalog/product/cache/59b906c9f4a6503cc9c6cc39e925f9a1/5/4/544_1.jpg',
                in_stock: 0,
            },
            {
                name: 'sardines',
                image: 'https://ncultura.pt/wp-content/uploads/2018/10/capa-3-640x320.jpg',
                in_stock: 33,
            },
        ]
    }

const Ingredients = () => {
    return (
        <div className="content">
            {/* Show N ingredients */}
            <div className="ingredients">
                <StyledHeader>
                {/* <h3>Ingredients?</h3> */}
                </StyledHeader>
                {/* Show N ingredients from this category */}
                <StyledCategories>
                    {
                        ingredient_category.ingredients.map((ingredient) => {
                            return <IngredientCell ingredient={ingredient}/>
                        })
                    }
                </StyledCategories>
            </div>
        </div>
    )
}

const StyledHeader = styled.div`
    display: flex;
    width:100%;
    background-color: #000000dd;
    h3 {
        color: red;
    }
`

const StyledCategories = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    // border: 1px solid yellow;
    background-color: #000000dd;
    padding-top: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
`

export default Ingredients;