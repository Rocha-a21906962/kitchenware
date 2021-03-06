import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import IngredientCell from "../components/categories/IngredientCell";


const Ingredients = ({
    ingredientData,
    setIngredientData,
    ingredientCategories,
    stats
}) => {
    
    let category = null;
    let category_ingredients = ingredientData;

    let { category_name } = useParams();

    console.log("ingredientData:" + ingredientData);
    console.log('ingredient_category_name:' + category_name);
    // const category = ingredientCategories.filter(category => category.name === category_name)[0];
    
    // If no ingredient category was passed in the route, show every ingredient
    if (typeof category_name === 'undefined') {
        // Hack : fake category
        category = {
            name: 'ingredient stats',
            image: 'https://assets.epicurious.com/photos/57eebe2eb382c3c017d3fff0/16:9/w_2560%2Cc_limit/supermarket-shelves.jpg',
        };
        //
        category_ingredients = ingredientData;
    } else {
        category = ingredientCategories.filter(category => category.name === category_name)[0];
        category_ingredients = ingredientData.filter(ingredient => {
            return ingredient.categories.some(c => c.name === category_name);
        });
    };


    console.log("dkjfsdkjfkdg");
    console.log("category:" + category);
    console.log("category_ingredients:");
    console.log(category_ingredients);

    return (
        <div className="content">
            {/* Show N ingredients */}
            <div className="ingredients">
                <StyledContentHeader>
                    <div className="gradient_overlay"></div>
                    <img src={category.image} alt={`${category.name} image`}/>
                    <div className="ingredient_name">
                        <h2><span>{category.name}</span></h2>
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
                        // ingredient_category.ingredients.map((ingredient) => {
                            // ingredientData.filter((ingredient => ingredient.categories.includes(ingredient_category_name)) => {
                        category_ingredients.map((ingredient) => {
                            return <IngredientCell 
                                        ingredient={ingredient}
                                        ingredientData={ingredientData}
                                        setIngredientData={setIngredientData}
                                        ingredientCategories={ingredientCategories}
                                        stats={stats}/>
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