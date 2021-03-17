import { useState } from 'react';
import styled from 'styled-components';
// import RecipeCategoryCell from "./RecipeCategoryCell";

import RecipeLine from "../feed/RecipeLine";
import LargeRecipeLine from "../feed/LargeRecipeLine";
import RecipeCategoryLine from "../feed/RecipeCategoryLine";
import RecipeCategoryCell from "../feed/RecipeCategoryCell";


const RecipeCategories = ({
    recipeData,
    setRecipeData,
    recipeCategories,
    ingredientData,
    stats
}) => {

    const [selectedCategory, setSelectedCategory] = useState('fish');

    console.log("recipeCategories");
    console.log(recipeCategories);

    const categoryRecipes = recipeData.filter(recipe => {
        return recipe.categories.some(c => c.name === selectedCategory);
    });

    return (
        <div className="feed">
            <div>
                <StyledFeedHeader>Recipe categories</StyledFeedHeader>
                <RecipeCategoryLine 
                    data={recipeCategories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory} />
                <StyledFeedHeader>Selected category: {selectedCategory}</StyledFeedHeader>
                <LargeRecipeLine data={categoryRecipes} />
                <StyledFeedHeader>Quick to prepare</StyledFeedHeader>
                <RecipeLine data={recipeData} />
                <StyledFeedHeader>Ready to cook</StyledFeedHeader>
                <RecipeLine data={recipeData} />
                <StyledFeedHeader>All Recipes</StyledFeedHeader>
                <RecipeLine data={recipeData} />

                {/* <StyledFeedHeader>Upcoming meals</StyledFeedHeader>
                <RecipeLine data={recipeData} /> */}
                {/* <StyledFeedHeader>Last cooked</StyledFeedHeader>
                <RecipeLine data={recipeData} />
                <StyledFeedHeader>About to expire</StyledFeedHeader>
                <RecipeLine data={recipeData} />
                <StyledFeedHeader>Recently viewed</StyledFeedHeader>
                <RecipeLine data={recipeData} />
                <StyledFeedHeader>For kids</StyledFeedHeader>
                <RecipeLine data={recipeData} />
                <StyledFeedHeader>Italian</StyledFeedHeader>
                <RecipeLine data={recipeData} />
                <StyledFeedHeader>Japanese</StyledFeedHeader>
                <RecipeLine data={recipeData} />
                <StyledFeedHeader>Halal</StyledFeedHeader>
                <RecipeLine data={recipeData} />
                <StyledFeedHeader>Vegan</StyledFeedHeader>
                <RecipeLine data={recipeData} />
                <StyledFeedHeader>Seafood's finest</StyledFeedHeader>
                <RecipeLine data={recipeData} /> */}
            </div>
        
            {/* <div className="recipe_categories">
                <StyledHeader>
                </StyledHeader>
                <StyledCategories>
                    {
                        recipeCategories.map((category) => {
                            return <RecipeCategoryCell 
                                        category={category}
                                        recipeData={recipeData}
                                        setRecipeData={setRecipeData}
                                        recipeCategories={recipeCategories}
                                        stats={stats}/>
                        })
                    }
                </StyledCategories>
            </div> */}
        </div>
    )
}

const StyledFeedHeader = styled.div`
    background: #000000dd;
    color: white;
    font-family: GTAmericaRegular;
    font-size: 1.1rem;
    font-weight: bold;
    line-height: 4rem;
    padding-top: 2rem;
`

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