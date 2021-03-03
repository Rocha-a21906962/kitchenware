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
                <StyledContentHeader>
                    <div className="gradient_overlay"></div>
                    <img src={ingredient_category.image} alt={`${ingredient_category.name} image`}/>
                    <div className="ingredient_name">
                        <h2><span>{ingredient_category.name}</span> (ingredient category)</h2>
                    </div>
                </StyledContentHeader>
                <StyledFilterSection>
                    <button name="" id="">Sort by</button>
                    <button class="active" name="" id="">Running out X</button>
                    <button name="" id="">In stock</button>
                    <button name="" id="">Out of stock</button>
                    <button name="" id="">Expiring soon</button>
                    <button name="" id="">Expired</button>
                </StyledFilterSection>
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

const StyledFilterSection = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height:6vh;
    width: 100%;
    background-color: #050505;
    button {
        margin-right: 0.5rem;
        font-size: 0.75rem;
        height: 1rem;
        line-height: 0rem;
        border-radius: 2rem;background-color: transparent;
        border: green 1px solid;
        color: green;
    }
    button:first-child {
        margin-right: auto;
        border-radius: 0;
        border: #b1b1b1 1px solid;
        color: #b1b1b1;
    }
    button.active {
        color: white;
        background-color: #025202;

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

const StyledContentHeader = styled.div`
    position: relative;
    width: calc(100vw - 10rem); // 100%;
    height: 15vh;
    img {
        position: absolute;
        display: block;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 2;
    }
    .gradient_overlay {
        position: absolute;
        display: block;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        // background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%); /* FF3.6+ */
        background: linear-gradient(to bottom,rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.65) 50%,rgba(0,0,0,0.95) 100%); /* W3C */
        z-index: 3;
    }
    .ingredient_name {
        position: absolute;
        left: 0;
        top: 50%;
        display: flex;
        flex-direction: column;
        width: 100%;
        z-index: 5;
        h2 {
            padding-left: 2.5rem;
            display: block;
            font-size: 1.5rem;
            color: #b1b1b1;
        }
        span {
            font-size: 3rem;
            font-style: normal;
            color: white;
            text-transform: capitalize;
        }
    }
`

export default Ingredients;