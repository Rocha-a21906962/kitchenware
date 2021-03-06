import { useParams, Link } from 'react-router-dom';
import styled from "styled-components";

/* bogus recipe data */
const recipe = {
    name: 'salmon recipe #1',
    image: 'https://images.thefishsite.com/fish/articles/processing/salmon-fillet.jpeg?profile=article-inline@maximum',
}

const RecipeStats = ({
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
                            <button name="" id="" className={`search ${!recipe.is_favourite ? 'hide_favourite_button ' : ''}`} onClick={toggleRecipeFavouriteStatus}>Remove from favourites</button>
                        </StyledFavouriteButton>
                    </div>
                </StyledPhoto>
                <StyledChart>
                    <div className="chart"></div>
                    <div className="chart_buttons">
                        <button name="" id="">Meals per day</button>
                        <button name="" id="">Recipe availability</button>
                        <button name="" id="">Ingredient availability</button>
                    </div>
                </StyledChart>
                <StyledDescription>
                    <h3>Recipe short description</h3>
                    <h5>sfksdjfs dklfsdkfklsdfklsdgklsd lgkdslg sfksdjfsdkl fsdkfklsdfklsdg klsdlgkdslg sfksdjfsdkl fsdkfklsdfklsdg klsdlgkdslg sfksdjfs dklfsdkfklsdfkls dgklsdlgkdslg sfksdjfsdkl fsdkfklsdfklsdgklsdlg kdslg sfksdjfsdklfs dkfklsdfkls dgklsdlgkdslg sfksdjfsdkl fsdkfklsdfklsd gklsdlgkdslg sfksdj f sdklfsdkfklsdfklsdgk  lsdlgkdslgsfksdjfs dklf sdkfklsdfklsdgklsdlg kdslg </h5>
                </StyledDescription>
                <StyledDetails>
                    <h3>Forecasted consumption</h3>
                    <h5>7 days: 11 meals</h5>
                    <h5>30 days: 47 meals</h5>
                    <h3>Recent consumption</h3>
                    <h5>7 days: 12 meals</h5>
                    <h5>30 days: 51 meals</h5>
                    <h3>Recent consumption</h3>
                    <h5>None</h5>
                    <h3>Next order estimated in:</h3>
                    <h5>11 days</h5>
                </StyledDetails>
                <StyledDetails>
                    <h3>Ingredient list:</h3>
                    <h5><span>X</span> 750g <a href="">Salmon</a> <span>currently not in stock</span></h5>
                    <h5><span>V</span> 10ml <a href="">Pesto</a> <span>stock for 47 meals</span></h5>
                    <h5><span>V</span> 1/2ts <a href="">Salt</a> <span>stock for 78 meals</span></h5>
                    <h3>Immediate availability:</h3>
                    <h5>Current ingredient stock allows for this dish to be cooked 4 times.</h5>
                    <h3>Automatic stock management:</h3>
                    <h5>20 meals</h5>
                    <h5>(immediate availability => nr servings * nr immediate avail. = 20).</h5>
                    <h5>(should be an input)</h5> 
                </StyledDetails>
                {/* buttons */}
                    <Link to={`/recipe/${recipe.name}`}>
                        <button name="" id="">Show recipe main page (changes page)</button>
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

const StyledChart = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: calc((100vw - 10rem)/2);
    height: 40vh;
    background-color: #0a0a0a;
    border-left: 1px solid #414141;
    border-bottom: 1px solid #414141;
    .chart_buttons {
        display: flex;
        justify-content: center;
        width: 100%;
        background-color: #050505;
        button {
            width: 30%;
            font-size: 0.75rem;
            line-height: 0rem;
            white-space: wrap;
            padding: 1rem;
            padding-left: 0rem;
            padding-right: 0rem;
        }
    }
`

const StyledPhoto = styled.div`
    position: relative;
    width: calc((100vw - 10rem)/2);
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
            width: 60%;
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
    padding: 1rem;
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
    a {
        text-decoration: none;
    }
`

export default RecipeStats;