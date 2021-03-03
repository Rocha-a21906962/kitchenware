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
                <StyledContentHeader>
                    <div className="gradient_overlay"></div>
                    <img src={recipe_category.image} alt={`${recipe_category.name} image`}/>
                    <div className="recipe_name">
                        <h2><span>{recipe_category.name}</span> (recipe category)</h2>
                    </div>
                </StyledContentHeader>
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
    .recipe_name {
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
            z-index: 5;
        }
        span {
            font-size: 3rem;
            font-style: normal;
            color: white;
            text-transform: capitalize;
        }
    }
`

export default Recipes;