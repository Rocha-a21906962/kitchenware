import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import IngredientCell from "../components/categories/IngredientCell";


const Ingredients = ({
    ingredientData,
    setIngredientData,
    ingredientCategories,
    stats
}) => {

    const filterIngredients = (sorted_ingredients, filter_state) => {
        let filtered_ingredients;
        switch (true) {
            case filter_state.out_of_stock:
                filtered_ingredients = sorted_ingredients.filter(ingredient => ingredient.in_stock.value == 0);    
                break;
            case filter_state.running_out:
                filtered_ingredients = sorted_ingredients.filter(ingredient => (ingredient.in_stock.value != 0 && ingredient.in_stock.value <= 2*ingredient.minimum_stock.value));    
                break;
            case filter_state.in_stock:
                filtered_ingredients = sorted_ingredients.filter(ingredient => ingredient.in_stock.value > 0);    
                break;
            default:
                // do nothing
                filtered_ingredients = sorted_ingredients;
        }
        return filtered_ingredients;
    };

    const sortIngredients = (ingredients, sort_by) => {
        let sorted_ingredients;
        switch (sort_by) {
            case 'name_asc':
                sorted_ingredients = ingredients.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
                break;
            case 'name_desc':
                sorted_ingredients = ingredients.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()));
                break;
            case 'in_stock_quantity':
                sorted_ingredients = ingredients.sort((a, b) => parseFloat(b.in_stock.value) - parseFloat(a.in_stock.value));
                break;
            case 'minimum_stock_quantity':
                sorted_ingredients = ingredients.sort((a, b) => parseFloat(b.minimum_stock.value) - parseFloat(a.minimum_stock.value));
                break;
            case 'auto_order_status':
                sorted_ingredients = ingredients.sort((a, b) => parseFloat(b.auto_order.value) - parseFloat(a.auto_order.value));
                break;
            case 'with_incoming_orders':
                // not yet implemented
                break;
            default:
                // throw exception?
                console.log("switch error on sortIngredients!");
        }
        return sorted_ingredients;
    };

    let category = null;
    /* Order the ingredients alphabetically */
    let category_ingredients = sortIngredients(ingredientData, "name_asc");

    let { category_name } = useParams();
    
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

    /* Hook for category filters */
    const [sortedIngredients, setSortedIngredients] = useState(category_ingredients);
    const [filteredIngredients, setFilteredIngredients] = useState(category_ingredients);
    
    /* Hook for category filters */
    const [categoryFilters, setCategoryFilters] = useState({
        in_stock: false, 
        out_of_stock: false,
        running_out: false,
    });
    

    const onChangeSortOptionButtonHandler = (event) => {
        console.log("sortedIngredients(1)");
        console.log(sortedIngredients);
        const sort_by = event.target.value;
        const sorted_ingredients = sortIngredients(sortedIngredients, sort_by);
        const filtered_ingredients = filterIngredients(sorted_ingredients, categoryFilters);
        setSortedIngredients([...sorted_ingredients]);
        setFilteredIngredients([...filtered_ingredients]);
        console.log("sortedIngredients(2)");
        console.log(sortedIngredients);
    };

    const onToggleCategoryFiltersHandler = (event) => {
        let modifiedCategoryFilters = null;
        let sorted_ingredients = sortedIngredients;
        switch (event.target.value) {
            case 'in_stock':
                modifiedCategoryFilters = {
                    /* when in_stock is true, out_of_stock can never be true simultaneously! therefore,
                    whenever in_stock changes, out_of_stock can always be safely set to false (two scenarios):
                    1) either in_stock was true and was set to false (and out_of_stock was false already)
                    2) in_stock has just been selected (and out_of_stock must be set to false anyway)
                    */
                    ...categoryFilters,
                    out_of_stock: false,
                    in_stock: !categoryFilters.in_stock
                }
                break;
            case 'running_out':
                modifiedCategoryFilters = {
                    ...categoryFilters,
                    /* when running_out is true, out of stock can never be true simultaneously! therefore,
                    whenever running_out changes, out of stock can always be safely set to false (two scenarios):
                    1) either running_out was true and was set to false (and out_of_stock was false already)
                    2) running_out has just been selected (and out_of_stock must be set to false anyway)
                    */
                    out_of_stock: false,
                    running_out: !categoryFilters.running_out
                }
                break;
            case 'out_of_stock':
                modifiedCategoryFilters = {
                    /* when out_of_stock is true, in_stock/running_out can never be true at the same time! therefore,
                    whenever out_of_stock changes, in_stock/running_out can always be safely set to false (two scenarios):
                    1) either out_of_stock was true and was set to false (and in_stock/running_out was false already)
                    2) out_of_stock has just been selected (and in_stock/running_out must be set to false anyway)
                    */
                    in_stock: false,
                    running_out: false,
                    out_of_stock: !categoryFilters.out_of_stock
                }
                break;
            default:
                // throw exception?
                console.log("switch error on onToggleCategoryFiltersHandler!");
        }
        const filtered_ingredients = filterIngredients(sorted_ingredients, modifiedCategoryFilters);
        setCategoryFilters(modifiedCategoryFilters);
        setFilteredIngredients([...filtered_ingredients]);
        console.log("categoryFilters:");
        console.log(categoryFilters);
    };


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
                    {/* <label for="sort_by">Sort by</label> */}
                    <select name="sort_options" defaultValue="name_asc" id="sort_by" onChange={onChangeSortOptionButtonHandler}>Sort by
                        <option value="name_asc" selected={`${true ? true : ''}`}>name (ascending)</option>
                        <option value="name_desc" selected={`${true ? true : ''}`}>name (descending)</option>
                        <option value="in_stock_quantity" selected={`${true ? true : ''}`}>in stock quantity</option>
                        <option value="minimum_stock_quantity" selected={`${true ? true : ''}`}>minimum stock quantity</option>
                        <option value="auto_order_status" selected={`${true ? true : ''}`}>auto order status</option>
                        {/* <option value="with_incoming_orders" selected={`${true ? true : ''}`}>with incoming orders</option> */}
                    </select>
                    <button name="" id="" value="in_stock" className={`${categoryFilters.in_stock === true ? 'active' : ''}`} onClick={onToggleCategoryFiltersHandler}>In stock</button>
                    <button name="" id="" value="running_out" className={`${categoryFilters.running_out === true ? 'active' : ''}`} onClick={onToggleCategoryFiltersHandler}>Running out</button>
                    <button name="" id="" value="out_of_stock" className={`${categoryFilters.out_of_stock === true ? 'active' : ''}`} onClick={onToggleCategoryFiltersHandler}>Out of stock</button>
                    {/* <button name="" id="">Expiring soon</button>
                    <button name="" id="">Expired</button> */}
                </StyledFilterSection>
                {/* Show N ingredients from this category */}
                <StyledCategories>
                    {
                        // ingredient_category.ingredients.map((ingredient) => {
                            // ingredientData.filter((ingredient => ingredient.categories.includes(ingredient_category_name)) => {
                        filteredIngredients.map((ingredient) => {
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
    select {
        font-size: 0.75rem;
        width: 10rem;
        height: 2rem;
        line-height: 0rem;
        margin-right: auto;
        text-align-last: center;
        border-radius: 0;
        /* border: #b1b1b1 1px solid;
        color: #b1b1b1; */
        background-color: transparent;
        border: #b2b2b2 1px solid;
        color: #b2b2b2;
        border-radius: 0.25rem;
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