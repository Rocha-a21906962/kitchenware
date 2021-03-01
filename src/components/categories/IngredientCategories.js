import styled from 'styled-components';
import IngredientCategoryCell from "./IngredientCategoryCell";

const ingredient_categories = [
    {
        name: 'fish',
        image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
        ingredients: [
            {
                name: 'tuna',
                image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
                in_stock: 14,
            },
            {
                name: 'cod',
                image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
                in_stock: 12,
            },
            {
                name: 'salmon',
                image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
                in_stock: 9,
            },
            {
                name: 'mackerel',
                image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
                in_stock: 0,
            },
            {
                name: 'sea bass',
                image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
                in_stock: 15,
            },
            {
                name: 'sardines',
                image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
                in_stock: 33,
            },
        ]
    },
    {
        name: 'meat',
        image: 'https://news.northwestern.edu/assets/Stories/2020/02/_resampled/CroppedFocusedImageWzY0MCwzNjAsInkiLDMzXQ/meat.jpg',
        ingredients: []
    },
    {
        name: 'eggs',
        image: 'https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg',
        ingredients: []
    },
    {
        name: 'dairy products',
        image: 'dairy_products.bmp',
        ingredients: []
    },
    {
        name: 'vegetables',
        image: 'https://cdn.britannica.com/s:690x388,c:crop/17/196817-050-6A15DAC3/vegetables.jpg',
        ingredients: []
    },
    {
        name: 'fruit',
        image: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4',
        ingredients: []
    },
    {
        name: 'oils',
        image: 'https://www.mensjournal.com/wp-content/uploads/mf/olive-oil-1280.jpg?w=900&quality=86&strip=all&iswp=0',
        ingredients: []
    },
    {
        name: 'grains',
        image: 'https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2013/07/wholeGrainProducts-842797430-770x533-1-650x428.jpg',
        ingredients: []
    },
    {
        name: 'miscellaneous',
        image: 'https://www.seriouseats.com/images/20100106-hotsauces.jpg',
        ingredients: []
    },
  ];

const IngredientCategories = () => {
    return (
        <div className="ingredient_categories">
            <StyledHeader>
                {/* <h3>Ingredient Categories?</h3> */}
            </StyledHeader>
            {/* Show N ingredient categories */}
            <StyledCategories>
                {
                    ingredient_categories.map((category) => {
                        return <IngredientCategoryCell category={category}/>
                    })
                }
            </StyledCategories>
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

export default IngredientCategories;