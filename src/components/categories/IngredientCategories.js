import { useState, useEffect } from 'react';
import styled from 'styled-components';
// import IngredientCategoryCell from "./IngredientCategoryCell";
import IngredientLine from "../feed/IngredientLine";
import IngredientCategoryLine from "../feed/IngredientCategoryLine";
import IngredientCategoryCell from "../feed/IngredientCategoryCell";


const IngredientCategories = ({
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
    
    const [selectedCategory, setSelectedCategory] = useState('fish');
    
    category_ingredients = category_ingredients.filter(ingredient => {
        return ingredient.categories.some(c => c.name === selectedCategory);
    });

    const [selectedCategoryIngredients, setSelectedCategoryIngredients] = useState(category_ingredients);

    /* Hook for category filters */
    const [sortedIngredients, setSortedIngredients] = useState(selectedCategoryIngredients);
    const [filteredIngredients, setFilteredIngredients] = useState(selectedCategoryIngredients);

    // console.log("category_ingredients:", category_ingredients);
    // console.log("selectedCategoryIngredients:", selectedCategoryIngredients);
    // console.log("sortedIngredients:", sortedIngredients);
    // console.log("filteredIngredients:", filteredIngredients);
    
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
        console.log("category_ingredients:", category_ingredients);
        console.log("sortedIngredients:", selectedCategoryIngredients);
        const sorted_ingredients = sortIngredients(selectedCategoryIngredients, sort_by);
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


    useEffect(() => {
        console.log("category_ingredients:", category_ingredients);
        console.log("selectedCategoryIngredients:", selectedCategoryIngredients);
        console.log("sortedIngredients:", sortedIngredients);
        console.log("filteredIngredients:", filteredIngredients);
        setSelectedCategoryIngredients(category_ingredients);
        setSortedIngredients([...category_ingredients]);
        setFilteredIngredients([...category_ingredients]);
    }, [selectedCategory]);


    return (
        <div className="feed">
            <div>
                <StyledFeedHeader>Ingredient categories</StyledFeedHeader>
                <IngredientCategoryLine 
                    data={ingredientCategories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory} />
                <StyledFeedHeader>
                    Selected category: {selectedCategory}
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
                </StyledFeedHeader>
                <IngredientLine data={filteredIngredients} />
                
                
                {/* <StyledFeedHeader>Upcoming deliveries</StyledFeedHeader>
                <IngredientLine data={ingredientData} /> */}
            </div>
            {/* <div className="ingredient_categories">
                <StyledCategories>
                    {
                        ingredientCategories.map((category) => {
                            return <IngredientCategoryCell 
                                        category={category}
                                        ingredientData={ingredientData}
                                        setIngredientData={setIngredientData}
                                        ingredientCategories={ingredientCategories}
                                        stats={stats} />
                        })
                    }
                </StyledCategories>
            </div> */}
        </div>
    )
}

const StyledFilterSection = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height:6vh;
    width: 70%;
    margin-left: auto;
    // background-color: #050505;
    button {
        margin-right: 0.5rem;
        font-size: 0.65rem;
        height: 1rem;
        line-height: 0rem;
        border-radius: 2rem;background-color: transparent;
        border: green 1px solid;
        color: green;
    }
    select {
        font-size: 0.65rem;
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

const StyledFeedHeader = styled.div`
    display: flex;
    align-items: baseline;
    // background: #000;
    color: white;
    font-family: GTAmericaRegular;
    font-size: 1.1rem;
    font-weight: bold;
    line-height: 4rem;
    margin-top: 2rem;
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

export default IngredientCategories;