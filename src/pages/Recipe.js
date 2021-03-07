import { useParams, Link } from 'react-router-dom';
import styled from "styled-components";


const Recipe = ({
    recipeData,
    setRecipeData
}) => {

    let { recipe_name } = useParams();
    let recipe = recipeData.filter(recipe => recipe.name === recipe_name)[0];

    const toggleRecipeFavouriteStatus = () => {

        console.log("before:" + recipe.is_favourite);

        const modifiedRecipeData = recipeData.map((r) => {
            if (r.name === recipe.name) {
                return {
                    ...r,
                    is_favourite: !recipe.is_favourite
                }
            } else {
                return {
                    ...r
                }
            }
        });
        setRecipeData(modifiedRecipeData);
        recipe = recipeData.filter(recipe => recipe.name === recipe_name)[0];
        
        console.log("after:" + recipe.is_favourite);
    };

    return (
        <div className="content">
            <StyledRecipe>
                <StyledPhoto>
                    <div className="gradient_overlay"></div>
                    <img src={recipe.image} alt={`${recipe.name} image`}/>
                    <div className="recipe_name">
                        <h2>Recipe: <span>{recipe.name}</span></h2>
                        <StyledFavouriteButton>
                            <button name="" id="" className={`${recipe.is_favourite ? 'hide_favourite_button ' : ''}`} onClick={toggleRecipeFavouriteStatus}>Set as favourite</button>
                            <button name="" id="" className={`${!recipe.is_favourite ? 'hide_favourite_button ' : ''}`} onClick={toggleRecipeFavouriteStatus}>Remove from favourites</button>
                        </StyledFavouriteButton>
                    </div>
                    <button name="" id="">Set as favourite</button>
                    <div className="main_details">
                        <p><span>5</span> ingredients</p>
                        <p>|</p>
                        <p><span>240</span> calories</p>
                        <p>|</p>
                        <p><span>20</span> minutes</p>
                    </div>
                </StyledPhoto>
                <StyledDescription>
                    <h3>Recipe short description</h3>
                    <h5>sfksdjfs dklfsdkfklsdfklsdgklsd lgkdslg sfksdjfsdkl fsdkfklsdfklsdg klsdlgkdslg sfksdjfsdkl fsdkfklsdfklsdg klsdlgkdslg sfksdjfs dklfsdkfklsdfkls dgklsdlgkdslg sfksdjfsdkl fsdkfklsdfklsdgklsdlg kdslg sfksdjfsdklfs dkfklsdfkls dgklsdlgkdslg sfksdjfsdkl fsdkfklsdfklsd gklsdlgkdslg sfksdj f sdklfsdkfklsdfklsdgk  lsdlgkdslgsfksdjfs dklf sdkfklsdfklsdgklsdlg kdslg </h5>
                </StyledDescription>
                <StyledDetails>
                    <h3>Number of servings:</h3>
                    <h5>3</h5> 
                    <h5>(should be an input: ingred. requirements will change accordingly)</h5> 
                    <h3>Ingredient list:</h3>
                    <h5><span>X</span> 750g Salmon</h5>
                    <h5><span>V</span> 10ml Pesto</h5>
                    <h5><span>V</span> 1/2ts Salt</h5>
                    <h3>Immediate availability:</h3>
                    <h5>Current ingredient stock allows for this dish to be cooked 4 times.</h5>
                    <h3>Automatic stock management:</h3>
                    <h5>20 meals</h5>
                    <h5>(immediate availability => nr servings * nr immediate avail. = 20).</h5>
                    <h5>(should be an input)</h5> 
                    <h3>Nutrition per serving:</h3>
                    <h5>240 cal</h5>
                    {/* Delete everything: just for testing
                    <h5>Current stock: <span>{ingredient.in_stock} kg</span></h5>
                    <h5>Forecasted consumption</h5>
                    <p>7 days: 1.2 kg</p>
                    <p>30 days: 5.1 kg</p>
                    <h5>Recent consumption</h5>
                    <p>7 days: 1.1 kg</p>
                    <p>30 days: 6.3 kg</p>
                    <h5>Recent consumption</h5>
                    <p>None</p>
                    <h5>Next order estimated in:</h5>
                    <p>11 days</p>
                    <p></p>
                    */}
                </StyledDetails>
                <StyledDetails>
                    <h3>Preparation (a la Tasty):</h3>
                    <h3>Preparation time:</h3>
                    <h5>5 minutes</h5> 
                    <h3>Cooking time:</h3>
                    <h5>15 minutes</h5> 
                    <button name="" id="">Step-by-step mode button (opens pop-up)</button>
                    <h3>Instructions:</h3>
                    <h5>Step 1 - Blablabla</h5>
                    <h5>Step 2 - Blablabla</h5>
                    <h5>Step 3 - Blablabla</h5>
                    <h5>Step 4 - Blablabla</h5>
                    <h5>Step 5 - Blablabla</h5>
                    <h5>Step 6 - Blablabla</h5>
                    <h5>Step 7 - Blablabla</h5>
                    <h5>Step 8 - Blablabla</h5>
                    <h5>Step 9 - Blablabla</h5>
                    <h5>Step 10 - Blablabla</h5>
                    <h5>Step 11 - Blablabla</h5>
                    <h5>Step 12 - Blablabla</h5>
                </StyledDetails>
                {/* buttons */}
                    <button name="" id="">Order ingredients (opens pop-up)</button>
                    <button name="" id="">Schedule meal (opens pop-up)</button>
                    <Link to={`/recipe_stats/${recipe.name}`}>
                        <button name="" id="">Stats (changes page)</button>
                    </Link>
            </StyledRecipe>
        </div>
    )
}

const StyledRecipe = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    // border: 1px solid yellow;
    background-color: #000000dd;
    // padding-left: 1rem;
    // padding-right: 1rem;
`

const StyledPhoto = styled.div`
    position: relative;
    width: calc(100vw - 10rem);
    height: 40vh;
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
        flex-direction: row;
        width: 100%;
        z-index: 5;
        h2 {
            padding-left: 2.5rem;
            display: block;
            font-size: 1.5rem;
            font-style: italic;
            text-transform: capitalize;
            color: #b1b1b1;
            z-index: 5;
        }
        span {
            font-size: 3rem;
            font-style: normal;
        }
    }
    .main_details {
        position: absolute;
        left: 0;
        bottom: 0;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        padding-left: 2rem;
        padding-right: 2rem;
        z-index: 4;
        color: white;
        p {
            padding: 1rem;
            font-size: 1rem;
            font-style: italic;
        }
        p span {
            font-size: 2rem;
            color: white;
            font-weight: 100;
            font-style: normal;
        }
    }
`

const StyledFavouriteButton = styled.div`
    display: flex;
    align-self: flex-start;
    width: 5rem;
    padding-left: 1rem;
    font-family: GTAmericaRegular;
    color: #b1b1b1;
    button {
        position: absolute;
        width: 8rem;
        height: 4rem;
        font-size: 0.75rem;
        padding: 1rem;
    }
`

const StyledDescription = styled.div`
    width: 80vw;
    padding-left: 1rem;
    margin-bottom: 1rem;
    font-family: GTAmericaRegular;
    color: #b1b1b1;
`

const StyledDetails = styled.div`
    width: 40vw;
    padding-left: 1rem;
    font-family: GTAmericaRegular;
    color: #b1b1b1;
`

export default Recipe;