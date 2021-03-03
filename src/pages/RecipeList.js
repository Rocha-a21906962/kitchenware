import styled from 'styled-components';
import RecipeCell from "../components/categories/RecipeCell";

/* bogus recipe data */
const recipe_category = {
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
}

const Recipes = () => {
    return (
        <div className="content">
            {/* Show N recipes */}
            <div className="ingredients">
                <StyledHeader>
                {/* <h3>Recipes?</h3> */}
                </StyledHeader>
                {/* Show N recipes from this category */}
                <StyledCategories>
                    {
                        recipe_category.recipes.map((recipe) => {
                            return <RecipeCell recipe={recipe}/>
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

export default Recipes;