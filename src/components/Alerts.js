import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon, InlineIcon } from '@iconify/react';
import alert16Regular from '@iconify/icons-fluent/alert-16-regular';
import { getIngredientsInShortSupply, getRecipesInShortSupply } from '../helperFunctions';


const Alerts = ({
    ingredientData,
    setIngredientData,
    recipeData,
    setRecipeData,
    mealPlanning,
    setMealPlanning,
    orders,
    setOrders
}) => {

    /* Monitor ingredient stock data */
    useEffect(() => {
        const ingredients_in_short_supply = getIngredientsInShortSupply(ingredientData);
        if (ingredients_in_short_supply.length > 0) {
            // trigger alert or place auto-order for each ingredient
            ingredients_in_short_supply.map((i) => console.log(`${i.name} is running out (current stock: ${i.in_stock.value})!!`));
        }
    });


    /* Monitor recipe-related ingredient stock data */
    useEffect(() => {
        const recipes_in_short_supply = getRecipesInShortSupply(recipeData, ingredientData);
        console.log(recipes_in_short_supply);
        if (recipes_in_short_supply.length > 0) {
            // trigger alert or place auto-order for each ingredient
            recipes_in_short_supply.map((r) => console.log(`${r.name} is running out!!`));
        }
    });

    /* Monitor scheduled meals preparation */

    /* Monitor user-defined alerts */

    /* Hard-coded trigger signalling that there isn't enough clean silverware for upcoming meals */

    /* Hard-coded trigger to signal a device failure */
    // Signal and provide an instant option for repair or assistance?


    return (
        <div>
            {/* <StyledAlertBubble>
                <Icon icon={alert16Regular} />
            </StyledAlertBubble> */}
            <StyledAlertMenu>
            </StyledAlertMenu>
        </div>
    )
}

// const StyledAlertBubble = styled.div`
//     position: fixed;
//     z-index: 9999999999999999999999;
//     right: 5vw;
//     bottom: 5vh;
//     display: flex;
//     width: 2.5rem;
//     height: 2.5rem;
//     border-radius: 35%;
//     background-color: #37370b;
//     // border: 1px solid black;
//     svg { 
//         margin: auto;
//         width: 1.75rem;
//         height: 1.75rem;
//         filter: invert(80%);
//     }
// `

const StyledAlertMenu = styled.div`
`

export default Alerts;