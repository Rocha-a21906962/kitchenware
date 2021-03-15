

/* Alerts */

// Returns the number of unread alerts
export const getUnreadAlertsNumber = (alert_data) => {
    console.log(alert_data);
    let unread_alerts = [];
    for (let key in alert_data) {
        console.log("key:", key);
        unread_alerts = [
            ...unread_alerts,
            ...alert_data[key].filter((alert) => alert.read === false)
        ]
    }
    console.log("unread_alerts:", unread_alerts);

    return unread_alerts.length;
};




/* Ingredients */

// Returns every recipe that requires a given ingredient
export const getRecipesWith = (recipe_data, ingredient_name) => {
    return recipe_data.filter((recipe) => {
        return recipe.ingredients.map(i => i.name).includes(ingredient_name);
    });
};


// Returns every order that includes a given ingredient
export const getOrdersWith = (order_data, ingredient_name) => {
    return order_data.filter((order) => {
        return order.ingredients.map(i => i.name).includes(ingredient_name);
    });
};


// Returns every incoming order that includes a given ingredient
export const getIncomingOrdersWith = (order_data, ingredient_name) => {
    return order_data.filter((order) => {
        return (order.ingredients.map(i => i.name).includes(ingredient_name) && (new Date(order.delivery_on) > new Date()));
    });
};


// Returns every delivered order that includes a given ingredient
export const getDeliveredOrdersWith = (order_data, ingredient_name) => {
    return order_data.filter((order) => {
        return (order.ingredients.map(i => i.name).includes(ingredient_name) && (new Date(order.delivery_on) <= new Date()));
    });
};


// Returns every ingredient with current stock below the user defined minimum
export const getIngredientsInShortSupply = (ingredient_data) => {
    return ingredient_data.filter((i) => {
        return (i.minimum_stock.value > 0 && i.minimum_stock.value >= i.in_stock.value);
    });
};


// 
export const filterIngredients = (ingredient_data, order_data, filters, search_string) => {
    // name / searchString
    // stock status
    // category
    // with incoming orders

    // name / searchString
    let filtered_ingredients = ingredient_data.filter(i => {
        return i.name.toLowerCase().includes(search_string.toLowerCase());
    });
    // stock status
    switch (filters.stock_status) {
        case 'in_stock':
            filtered_ingredients = filtered_ingredients.filter(i => {
                return (i.in_stock.value > 0);
            });
            break;
        case 'running_out':
            filtered_ingredients = filtered_ingredients.filter(i => {
                return (i.in_stock.value <= (1.5 * i.minimum_stock.value) && i.in_stock.value > 0);
            });
            break;
        case 'out_of_stock':
            filtered_ingredients = filtered_ingredients.filter(i => {
                return (i.in_stock.value == 0);
            });
            break;
        default:
            //
    }
    // category
    if (filters.categories.length > 0) {
        // get every ingredient matching at least one specified category
        filtered_ingredients = filtered_ingredients.filter((i) => {
            return i.categories.map((category) => filters.categories.includes(category))    
        });
    }
    // with incoming orders
    if (filters.with_incoming_orders_only == true) {
        filtered_ingredients = filtered_ingredients.filter((i) => getIncomingOrdersWith(order_data, i.name).length > 0);
    }
    return filtered_ingredients;
};




/* Recipes */

// Returns the data for every ingredient in a given recipe
export const getIngredientsFor = (ingredient_data, recipe) => {
    // get the recipe ingredient names
    const recipe_ingredients = recipe.ingredients.map(recipe => recipe.name);
    // get the data for each matching ingredient
    return ingredient_data.filter((ingredient) => recipe_ingredients.includes(ingredient.name));
};


// Returns every ingredient with current stock below the user defined minimum
export const getRecipesInShortSupply = (recipe_data, ingredient_data) => {
    return recipe_data.filter(r => {
        let recipe_ingredient_data = getIngredientsFor(ingredient_data, r);
        let recipe_ingredients_in_short_supply = r.ingredients.filter((recipe_ingredient) => {
            let ingredients_in_short_supply = recipe_ingredient_data.filter(i => i.name === recipe_ingredient.name && r.minimum_availability.value >= (i.in_stock.value / recipe_ingredient.quantity));
            return (ingredients_in_short_supply.length > 0);
        });
        return (recipe_ingredients_in_short_supply.length > 0);
    });
};


// Returns every planned meal that includes a given recipe
export const getPlannedMealsWith = (planned_meals_data, recipe) => {
    //
};


// 
export const filterRecipes = (recipe_data, ingredient_data, filters, search_string) => {
    // name / searchString
    // stock status (immediate availability)
    // preparation time
    // cooking time
    // total time
    // category
    // cuisine
    
    // name / searchString
    let filtered_recipes = recipe_data.filter(r => {
        return r.name.toLowerCase().includes(search_string.toLowerCase());
    });
    // stock status
    switch (filters.stock_status) {
        case 'in_stock':
            filtered_recipes = filtered_recipes.filter(r => {
                let recipe_ingredient_data = getIngredientsFor(ingredient_data, r);
                let recipe_ingredients_in_stock = r.ingredients.filter((recipe_ingredient) => {
                    let ingredients_in_stock = recipe_ingredient_data.filter(i => i.name === recipe_ingredient.name && i.in_stock.value > recipe_ingredient.quantity);
                    // console.log(r.name + ' ' + recipe_ingredient.name);
                    // console.log(ingredients_in_stock);
                    // console.log(ingredients_in_stock.length == 0);
                    return (ingredients_in_stock.length > 0);
                });
                // console.log(r.name);
                // console.log(recipe_ingredients_in_stock);
                return (recipe_ingredients_in_stock.length > 0);
            });
            break;
        case 'running_out':
            filtered_recipes = filtered_recipes.filter(r => {
                let recipe_ingredient_data = getIngredientsFor(ingredient_data, r);
                let recipe_ingredients_running_out = r.ingredients.filter((recipe_ingredient) => {
                    let ingredients_running_out = recipe_ingredient_data.filter(i => i.name === recipe_ingredient.name && i.in_stock.value <= (5 * recipe_ingredient.quantity) && i.in_stock.value > 0);
                    // console.log(r.name + ' ' + recipe_ingredient.name);
                    // console.log(ingredients_running_out);
                    // console.log(ingredients_running_out.length == 0);
                    return (ingredients_running_out.length > 0);
                });
                // console.log(r.name);
                // console.log(recipe_ingredients_running_out);
                return (recipe_ingredients_running_out.length > 0);
            });
            break;
        case 'out_of_stock':
            filtered_recipes = filtered_recipes.filter(r => {
                let recipe_ingredient_data = getIngredientsFor(ingredient_data, r);
                let recipe_ingredients_out_of_stock = r.ingredients.filter((recipe_ingredient) => {
                    let ingredients_out_of_stock = recipe_ingredient_data.filter(i => i.name === recipe_ingredient.name && i.in_stock.value == 0);
                    // console.log(r.name + ' ' + recipe_ingredient.name);
                    // console.log(ingredients_out_of_stock);
                    // console.log(ingredients_out_of_stock.length == 0);
                    return (ingredients_out_of_stock.length > 0);
                });
                // console.log(r.name);
                // console.log(recipe_ingredients_out_of_stock);
                return (recipe_ingredients_out_of_stock.length > 0);
            });
            break;
        default:
            //
    }
    // // category
    if (filters.categories.length > 0) {
        // get every recipe matching at least one specified category
        filtered_recipes = filtered_recipes.filter((r) => {
            return r.categories.map((category) => filters.categories.includes(category))    
        });
    }
    // preparation time
    switch (filters.preparation_time) {
        case '<10':
            filtered_recipes = filtered_recipes.filter(r => r.preparation_time <= 10);
            break;
        case '<30':
            filtered_recipes = filtered_recipes.filter(r => r.preparation_time <= 30);
            break;
        default:
            //
    }
    // cooking time
    switch (filters.cooking_time) {
        case '<10':
            filtered_recipes = filtered_recipes.filter(r => r.cooking_time <= 10);
            break;
        case '<30':
            filtered_recipes = filtered_recipes.filter(r => r.cooking_time <= 30);
            break;
        default:
            //
    }
    // total time
    switch (filters.total_time) {
        case '<10':
            filtered_recipes = filtered_recipes.filter(r => (r.preparation_time + r.cooking_time) <= 10);
            break;
        case '<30':
            filtered_recipes = filtered_recipes.filter(r => (r.preparation_time + r.cooking_time) <= 30);
            break;
        case '<60':
            filtered_recipes = filtered_recipes.filter(r => (r.preparation_time + r.cooking_time) <= 60);
            break;
        default:
            //
    }
    return filtered_recipes;
};




/* orders */







/* meals */


