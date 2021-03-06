import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import RecipeCell from "../components/categories/RecipeCell";


const Recipes = ({
    recipeData,
    setRecipeData,
    recipeCategories,
    stats
}) => {
    
    let category = null;
    let category_recipes = recipeData;

    let { category_name } = useParams();

    console.log("recipeData:" + recipeData);
    console.log('recipe_category_name:' + category_name);
    // const category = recipeCategories.filter(category => category.name === category_name)[0];
    
    // If no recipe category was passed in the route, show every ingredient
    if (typeof category_name === 'undefined') {
        // Hack : fake category
        category = {
            name: 'recipe stats',
            image: 'https://assets.epicurious.com/photos/57eebe2eb382c3c017d3fff0/16:9/w_2560%2Cc_limit/supermarket-shelves.jpg',
        };
        //
        category_recipes = recipeData;
    } else {
        category = recipeCategories.filter(category => category.name === category_name)[0];
        category_recipes = recipeData.filter(recipe => {
            return recipe.categories.some(c => c.name === category_name);
        });
    };
    
    console.log("dkjfsdkjfkdg");
    console.log("category:" + category);
    console.log("category_recipes:");
    console.log(category_recipes);

    return (
        <div className="content">
            {/* Show N recipes */}
            <div className="recipes">
                <StyledContentHeader>
                    <div className="gradient_overlay"></div>
                    <img src={category.image} alt={`${category.name} image`}/>
                    <div className="recipe_name">
                        <h2><span>{category.name}</span></h2>
                    </div>
                </StyledContentHeader>
                {/* Show N recipes from this category */}
                <StyledCategories>
                    {
                        category_recipes.map((recipe) => {
                            return <RecipeCell 
                                        recipe={recipe}
                                        recipeData={recipeData}
                                        setRecipeData={setRecipeData}
                                        recipeCategories={recipeCategories}
                                        stats={stats}/>
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