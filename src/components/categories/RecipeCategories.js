import styled from 'styled-components';
import RecipeCategoryCell from "./RecipeCategoryCell";

/* bogus recipe data */
const recipe_categories = [
    {
        name: 'quick preparation',
        image: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4',
        recipes: []
    },
    {
        name: 'every ingredient in stock',
        image: 'https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg',
        recipes: []
    },
    {
        name: 'gluten free',
        image: 'dairy_products.bmp',
        recipes: []
    },
    {
        name: 'vegetarian',
        image: 'https://cdn.britannica.com/s:690x388,c:crop/17/196817-050-6A15DAC3/vegetables.jpg',
        recipes: []
    },
    {
        name: 'italian',
        image: 'https://www.mensjournal.com/wp-content/uploads/mf/olive-oil-1280.jpg?w=900&quality=86&strip=all&iswp=0',
        recipes: []
    },
    {
        name: 'japanese',
        image: 'https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2013/07/wholeGrainProducts-842797430-770x533-1-650x428.jpg',
        recipes: []
    },
    {
        name: 'portuguese',
        image: 'https://www.seriouseats.com/images/20100106-hotsauces.jpg',
        recipes: []
    },
    {
        name: 'fish',
        image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
        recipes: [
            {
                name: 'tuna recipe #1',
                image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
            },
            {
                name: 'cod recipe #1',
                image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
            },
            {
                name: 'cod recipe #2',
                image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
            },
            {
                name: 'tuna recipe #2',
                image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
            },
            {
                name: 'salmon recipe #1',
                image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
            },
            {
                name: 'sardines on carvon!!',
                image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
            },
            {
                name: 'tuna recipe #3',
                image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
            },
            {
                name: 'tuna recipe #4',
                image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
            },
            {
                name: 'tuna recipe #5',
                image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
            },
            {
                name: 'tuna recipe #6',
                image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
            },
            {
                name: 'tuna recipe #7',
                image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
            },
            {
                name: 'tuna recipe #8',
                image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
            },
        ]
    },
    {
        name: 'meat',
        image: 'https://news.northwestern.edu/assets/Stories/2020/02/_resampled/CroppedFocusedImageWzY0MCwzNjAsInkiLDMzXQ/meat.jpg',
        recipes: []
    },
  ];

const RecipeCategories = () => {
    return (
        <div className="recipe_categories">
            <StyledHeader>
                {/* <h3>Recipe Categories?</h3> */}
            </StyledHeader>
            {/* Show N recipe categories */}
            <StyledCategories>
                {
                    recipe_categories.map((category) => {
                        return <RecipeCategoryCell category={category}/>
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

export default RecipeCategories;