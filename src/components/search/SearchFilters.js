import styled from "styled-components";

const SearchFilters = ({
    searchTarget,
    setSearchTarget,
    recipeSearchFilters,
    setRecipeSearchFilters,
    ingredientSearchFilters,
    setIngredientSearchFilters
}) => {

    // /* Hook for category filters */
    // const [categoryFilters, setCategoryFilters] = useState({
    //     in_stock: false, 
    //     out_of_stock: false,
    //     running_out: false,
    // });

    console.log("ingredientSearchFilters");
    console.log(ingredientSearchFilters);

    const toggleSearchTarget = () => {
        const new_target = (searchTarget === 'recipes') ? 'ingredients' : 'recipes';
        setSearchTarget(new_target);
    };

    const onToggleRecipeFiltersHandler = (event, type) => {
        console.log(type);
        console.log(event.target.value);
        let modifiedRecipeSearchFilters = recipeSearchFilters;
        let new_value;
        switch (type) {
            case 'stock_status':
                new_value = modifiedRecipeSearchFilters.stock_status != event.target.value ? event.target.value : '';
                modifiedRecipeSearchFilters = {
                    ...modifiedRecipeSearchFilters,
                    stock_status: modifiedRecipeSearchFilters.stock_status != event.target.value ? event.target.value : '',
                }
                break;
            case 'preparation_time':
                new_value = modifiedRecipeSearchFilters.preparation_time != event.target.value ? event.target.value : '';
                modifiedRecipeSearchFilters = {
                    ...modifiedRecipeSearchFilters,
                    preparation_time: new_value,
                }
                break;
            case 'cooking_time':
                new_value = modifiedRecipeSearchFilters.cooking_time != event.target.value ? event.target.value : '';
                modifiedRecipeSearchFilters = {
                    ...modifiedRecipeSearchFilters,
                    cooking_time: new_value,
                }
                break;
            case 'total_time':
                new_value = modifiedRecipeSearchFilters.total_time != event.target.value ? event.target.value : '';
                modifiedRecipeSearchFilters = {
                    ...modifiedRecipeSearchFilters,
                    total_time: new_value,
                }
                break;
            case 'category':
                let new_categories;
                new_value = modifiedRecipeSearchFilters.categories.includes(event.target.value) ? '' : event.target.value;
                if (new_value != '') {
                    new_categories = [...modifiedRecipeSearchFilters.categories, new_value]
                    modifiedRecipeSearchFilters = {
                        ...modifiedRecipeSearchFilters,
                        categories: new_categories,
                    }
                } else {
                    let value_index = modifiedRecipeSearchFilters.categories.indexOf(event.target.value);
                    new_categories = [...modifiedRecipeSearchFilters.categories];
                    console.log("testetestetes");
                    console.log(modifiedRecipeSearchFilters.categories);
                    console.log(value_index);
                    console.log(new_categories);
                    new_categories.splice(value_index, 1);
                    console.log(new_categories);
                    modifiedRecipeSearchFilters = {
                        ...modifiedRecipeSearchFilters,
                        categories: new_categories,
                    }                
                }
                break;
            case 'cuisine':
                break;
            default:
                //
        }
        console.log("new_value");
        console.log(new_value);
        console.log("modifiedRecipeSearchFilters");
        console.log(modifiedRecipeSearchFilters);
        setRecipeSearchFilters(modifiedRecipeSearchFilters);
    };

    const onToggleIngredientFiltersHandler = (event, type) => {
        console.log(type);
        console.log(event.target.value);
        let modifiedIngredientSearchFilters = ingredientSearchFilters;
        let new_value;
        switch (type) {
            case 'stock_status':
                new_value = modifiedIngredientSearchFilters.stock_status != event.target.value ? event.target.value : '';
                modifiedIngredientSearchFilters = {
                    ...modifiedIngredientSearchFilters,
                    stock_status: modifiedIngredientSearchFilters.stock_status != event.target.value ? event.target.value : '',
                }
                break;
            case 'category':
                let new_categories;
                new_value = modifiedIngredientSearchFilters.categories.includes(event.target.value) ? '' : event.target.value;
                if (new_value != '') {
                    new_categories = [...modifiedIngredientSearchFilters.categories, new_value]
                    modifiedIngredientSearchFilters = {
                        ...modifiedIngredientSearchFilters,
                        categories: new_categories,
                    }
                } else {
                    let value_index = modifiedIngredientSearchFilters.categories.indexOf(event.target.value);
                    new_categories = [...modifiedIngredientSearchFilters.categories];
                    console.log("testetestetes");
                    console.log(modifiedIngredientSearchFilters.categories);
                    console.log(value_index);
                    console.log(new_categories);
                    new_categories.splice(value_index, 1);
                    console.log(new_categories);
                    modifiedIngredientSearchFilters = {
                        ...modifiedIngredientSearchFilters,
                        categories: new_categories,
                    }                
                }
                break;
            case 'with_incoming_orders_only':
                new_value = !modifiedIngredientSearchFilters.with_incoming_orders_only;
                modifiedIngredientSearchFilters = {
                    ...modifiedIngredientSearchFilters,
                    with_incoming_orders_only: new_value,
                }                
                break;
            default:
                //
            }
        console.log("new_value");
        console.log(new_value);
        console.log("modifiedIngredientSearchFilters");
        console.log(modifiedIngredientSearchFilters);
        setIngredientSearchFilters(modifiedIngredientSearchFilters);
    };

    return (
        <div className="search_filters">
            <StyledSideContext>
                <StyledDetails>
                    <h3>Currently searching for {searchTarget}</h3>
                    <StyledFavouriteButton>
                        <button name="" id="" className={`${searchTarget === 'recipes' ? 'hide_search_target_filter' : ''}`} onClick={toggleSearchTarget}>Search for recipes</button>
                        <button name="" id="" className={`${searchTarget === 'ingredients' ? 'hide_search_target_filter' : ''}`} onClick={toggleSearchTarget}>Search for ingredients</button>
                    </StyledFavouriteButton>
                    {
                        searchTarget === 'recipes' ?

                        <StyledFiltersSection>
                            <h5>Stock status</h5>
                            <StyledFilterCategory>
                                <button name="" id="" value="in_stock" className={`${recipeSearchFilters.stock_status === 'in_stock' ? 'active' : ''}`} onClick={(e) => onToggleRecipeFiltersHandler(e, 'stock_status')}>in stock</button>
                                <button name="" id="" value="running_out" className={`${recipeSearchFilters.stock_status === 'running_out' ? 'active' : ''}`} onClick={(e) => onToggleRecipeFiltersHandler(e, 'stock_status')}>running out</button>
                                <button name="" id="" value="out_of_stock" className={`${recipeSearchFilters.stock_status === 'out_of_stock' ? 'active' : ''}`} onClick={(e) => onToggleRecipeFiltersHandler(e, 'stock_status')}>out of stock</button>
                            </StyledFilterCategory>
                            <h5>Preparation time</h5>
                            <StyledFilterCategory>
                                <button name="" id="" value="<10" className={`${recipeSearchFilters.preparation_time === '<10' ? 'active' : ''}`} onClick={(e) => onToggleRecipeFiltersHandler(e, 'preparation_time')}>{"< 10 mins"}</button>
                                <button name="" id="" value="<30" className={`${recipeSearchFilters.preparation_time === '<30' ? 'active' : ''}`} onClick={(e) => onToggleRecipeFiltersHandler(e, 'preparation_time')}>{"< 30 mins"}</button>
                            </StyledFilterCategory>
                            <h5>Cooking time</h5>
                            <StyledFilterCategory>
                                <button name="" id="" value="<10" className={`${recipeSearchFilters.cooking_time === '<10' ? 'active' : ''}`} onClick={(e) => onToggleRecipeFiltersHandler(e, 'cooking_time')}>{"< 10 mins"}</button>
                                <button name="" id="" value="<30" className={`${recipeSearchFilters.cooking_time === '<30' ? 'active' : ''}`} onClick={(e) => onToggleRecipeFiltersHandler(e, 'cooking_time')}>{"< 30 mins"}</button>
                            </StyledFilterCategory>
                            <h5>Total preparation time</h5>
                            <StyledFilterCategory>
                                <button name="" id="" value="<10" className={`${recipeSearchFilters.total_time === '<10' ? 'active' : ''}`} onClick={(e) => onToggleRecipeFiltersHandler(e, 'total_time')}>{"< 10 mins"}</button>
                                <button name="" id="" value="<30" className={`${recipeSearchFilters.total_time === '<30' ? 'active' : ''}`} onClick={(e) => onToggleRecipeFiltersHandler(e, 'total_time')}>{"< 30 mins"}</button>
                                <button name="" id="" value="<60" className={`${recipeSearchFilters.total_time === '<60' ? 'active' : ''}`} onClick={(e) => onToggleRecipeFiltersHandler(e, 'total_time')}>{"< 60 mins"}</button>
                            </StyledFilterCategory>
                            <h5>Categories</h5>
                            <StyledFilterCategory>
                                <button name="" id="" value="fish" className={`${recipeSearchFilters.categories.includes('fish') ? 'active' : ''}`} onClick={(e) => onToggleRecipeFiltersHandler(e, 'category')}>fish</button>
                                <button name="" id="" value="meat" className={`${recipeSearchFilters.categories.includes('meat') ? 'active' : ''}`} onClick={(e) => onToggleRecipeFiltersHandler(e, 'category')}>meat</button>
                                <button name="" id="" value="vegan" className={`${recipeSearchFilters.categories.includes('vegan') ? 'active' : ''}`} onClick={(e) => onToggleRecipeFiltersHandler(e, 'category')}>vegan</button>
                                <button name="" id="" value="gluten free" className={`${recipeSearchFilters.categories.includes('gluten free') ? 'active' : ''}`} onClick={(e) => onToggleRecipeFiltersHandler(e, 'category')}>gluten free</button>
                                <button name="" id="" value="halal" className={`${recipeSearchFilters.categories.includes('halal') ? 'active' : ''}`} onClick={(e) => onToggleRecipeFiltersHandler(e, 'category')}>halal</button>
                                <button name="" id="" value="kids" className={`${recipeSearchFilters.categories.includes('kids') ? 'active' : ''}`} onClick={(e) => onToggleRecipeFiltersHandler(e, 'category')}>kids</button>
                            </StyledFilterCategory>
                            <h5>Cuisine</h5>
                            <StyledFilterCategory>
                                <button name="" id="" value="italian" className={`${recipeSearchFilters.categories.includes('italian') ? 'active' : ''}`} onClick={(e) => onToggleRecipeFiltersHandler(e, 'cuisine')}>italian</button>
                                <button name="" id="" value="japanese" className={`${recipeSearchFilters.categories.includes('japanese') ? 'active' : ''}`} onClick={(e) => onToggleRecipeFiltersHandler(e, 'cuisine')}>japanese</button>
                                <button name="" id="" value="chinese" className={`${recipeSearchFilters.categories.includes('chinese') ? 'active' : ''}`} onClick={(e) => onToggleRecipeFiltersHandler(e, 'cuisine')}>chinese</button>
                                <button name="" id="" value="portuguese" className={`${recipeSearchFilters.categories.includes('portuguese') ? 'active' : ''}`} onClick={(e) => onToggleRecipeFiltersHandler(e, 'cuisine')}>portuguese</button>
                                <button name="" id="" value="mediterranean" className={`${recipeSearchFilters.categories.includes('mediterranean') ? 'active' : ''}`} onClick={(e) => onToggleRecipeFiltersHandler(e, 'cuisine')}>mediterranean</button>
                            </StyledFilterCategory>
                        </StyledFiltersSection>
                        :
                        <StyledFiltersSection>
                            <h5>Stock status</h5>
                            <StyledFilterCategory>
                                <button name="" id="" value="in_stock" className={`${ingredientSearchFilters.stock_status === 'in_stock' ? 'active' : ''}`} onClick={(e) => onToggleIngredientFiltersHandler(e, 'stock_status')}>in stock</button>
                                <button name="" id="" value="running_out" className={`${ingredientSearchFilters.stock_status === 'running_out' ? 'active' : ''}`} onClick={(e) => onToggleIngredientFiltersHandler(e, 'stock_status')}>running out</button>
                                <button name="" id="" value="out_of_stock" className={`${ingredientSearchFilters.stock_status === 'out_of_stock' ? 'active' : ''}`} onClick={(e) => onToggleIngredientFiltersHandler(e, 'stock_status')}>out of stock</button>
                            </StyledFilterCategory>
                            <h5>Categories</h5>
                            <StyledFilterCategory>
                                <button name="" id="" value="fish" className={`${ingredientSearchFilters.categories.includes('fish') ? 'active' : ''}`} onClick={(e) => onToggleIngredientFiltersHandler(e, 'category')}>fish</button>
                                <button name="" id="" value="meat" className={`${ingredientSearchFilters.categories.includes('meat') ? 'active' : ''}`} onClick={(e) => onToggleIngredientFiltersHandler(e, 'category')}>meat</button>
                                <button name="" id="" value="vegan" className={`${ingredientSearchFilters.categories.includes('vegan') ? 'active' : ''}`} onClick={(e) => onToggleIngredientFiltersHandler(e, 'category')}>vegan</button>
                                <button name="" id="" value="gluten free" className={`${ingredientSearchFilters.categories.includes('gluten free') ? 'active' : ''}`} onClick={(e) => onToggleIngredientFiltersHandler(e, 'category')}>gluten free</button>
                                <button name="" id="" value="halal" className={`${ingredientSearchFilters.categories.includes('halal') ? 'active' : ''}`} onClick={(e) => onToggleIngredientFiltersHandler(e, 'category')}>halal</button>
                                <button name="" id="" value="kids" className={`${ingredientSearchFilters.categories.includes('kids') ? 'active' : ''}`} onClick={(e) => onToggleIngredientFiltersHandler(e, 'category')}>kids</button>
                            </StyledFilterCategory>
                            <h5>With incoming orders</h5>
                            <StyledFilterCategory>
                                <button name="" id="" value="with_incoming_orders_only" className={`${ingredientSearchFilters.with_incoming_orders_only === true ? 'active' : ''}`} onClick={(e) => onToggleIngredientFiltersHandler(e, 'with_incoming_orders_only')}>with incoming orders</button>
                            </StyledFilterCategory>
                        </StyledFiltersSection>
                    }
                </StyledDetails>
            </StyledSideContext>
        </div>
    )
}

const StyledFavouriteButton = styled.div`
    display: flex;
    align-self: flex-start;
    justify-content: center;
    width: 100%;
    font-family: GTAmericaRegular;
    color: #b1b1b1;
    button {
        width: 100%;
        height: 4rem;
        font-size: 0.75rem;
        padding: 1rem;
    }
`

const StyledDetails = styled.div`
    display: relative;
    padding-bottom: 1rem;
`

const StyledHeader = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 14vh;
    background-color: #02031d;
    color: #b2b2b2;
`

const StyledSideContext = styled.div`
    position: relative;
    width: 100%;
    height: 76vh;
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: #000000;
    color: #b2b2b2;
    button {
        font-size: 0.75rem;
        padding: 1rem;
    }
`

const StyledFilterCategory = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 0.5rem;
    margin-bottom: 0.25rem;
`

const StyledFiltersSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height:90vh;
    overflow-y: scroll;
    background-color: #050505;
    h5:first-child {
        margin-top: 1.5rem;
    }
    button {
        margin-right: 0.5rem;
        font-size: 0.65rem;
        height: 1rem;
        line-height: 0rem;
        border-radius: 0.75rem;
        background-color: transparent;
        border: green 1px solid;
        color: green;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        margin-bottom: 0.5rem;
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

export default SearchFilters;