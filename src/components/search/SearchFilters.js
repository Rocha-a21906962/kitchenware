import { useState } from "react";
import styled from "styled-components";

const SearchFilters = ({
    searchTarget,
    setSearchTarget
}) => {

    /* Hook for category filters */
    const [categoryFilters, setCategoryFilters] = useState({
        in_stock: false, 
        out_of_stock: false,
        running_out: false,
    });

    const toggleSearchTarget = () => {
        const new_target = (searchTarget === 'recipes') ? 'ingredients' : 'recipes';
        setSearchTarget(new_target);
    };

    const onToggleCategoryFiltersHandler = (event) => {

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
                    <StyledFiltersSection>
                        <h5>Stock status</h5>
                        <StyledFilterCategory>
                            <button name="" id="" value="in_stock" className={`${categoryFilters.in_stock === true ? 'active' : ''}`} onClick={onToggleCategoryFiltersHandler}>in stock</button>
                            <button name="" id="" value="running_out" className={`${categoryFilters.running_out === true ? 'active' : ''}`} onClick={onToggleCategoryFiltersHandler}>running out</button>
                            <button name="" id="" value="out_of_stock" className={`${categoryFilters.out_of_stock === true ? 'active' : ''}`} onClick={onToggleCategoryFiltersHandler}>out of stock</button>
                        </StyledFilterCategory>
                        <h5>Preparation time</h5>
                        <StyledFilterCategory>
                            <button name="" id="" value="less_than_10m" className={`${categoryFilters.in_stock === true ? 'active' : ''}`} onClick={onToggleCategoryFiltersHandler}>{"< 10 mins"}</button>
                            <button name="" id="" value="less_than_30m" className={`${categoryFilters.running_out === true ? 'active' : ''}`} onClick={onToggleCategoryFiltersHandler}>{"< 30 mins"}</button>
                        </StyledFilterCategory>
                        <h5>Cooking time</h5>
                        <StyledFilterCategory>
                            <button name="" id="" value="less_than_10m" className={`${categoryFilters.in_stock === true ? 'active' : ''}`} onClick={onToggleCategoryFiltersHandler}>{"< 10 mins"}</button>
                            <button name="" id="" value="less_than_30m" className={`${categoryFilters.running_out === true ? 'active' : ''}`} onClick={onToggleCategoryFiltersHandler}>{"< 30 mins"}</button>
                        </StyledFilterCategory>
                        <h5>Total preparation time</h5>
                        <StyledFilterCategory>
                            <button name="" id="" value="less_than_10m" className={`${categoryFilters.in_stock === true ? 'active' : ''}`} onClick={onToggleCategoryFiltersHandler}>{"< 10 mins"}</button>
                            <button name="" id="" value="less_than_30m" className={`${categoryFilters.running_out === true ? 'active' : ''}`} onClick={onToggleCategoryFiltersHandler}>{"< 30 mins"}</button>
                            <button name="" id="" value="less_than_1h" className={`${categoryFilters.out_of_stock === true ? 'active' : ''}`} onClick={onToggleCategoryFiltersHandler}>{"< 1 hour"}</button>
                        </StyledFilterCategory>
                        <h5>Categories</h5>
                        <StyledFilterCategory>
                            <button name="" id="" value="fish" className={`${categoryFilters.in_stock === true ? 'active' : ''}`} onClick={onToggleCategoryFiltersHandler}>fish</button>
                            <button name="" id="" value="meat" className={`${categoryFilters.running_out === true ? 'active' : ''}`} onClick={onToggleCategoryFiltersHandler}>meat</button>
                            <button name="" id="" value="vegan" className={`${categoryFilters.out_of_stock === true ? 'active' : ''}`} onClick={onToggleCategoryFiltersHandler}>vegan</button>
                            <button name="" id="" value="gluten free" className={`${categoryFilters.out_of_stock === true ? 'active' : ''}`} onClick={onToggleCategoryFiltersHandler}>gluten free</button>
                            <button name="" id="" value="halal" className={`${categoryFilters.out_of_stock === true ? 'active' : ''}`} onClick={onToggleCategoryFiltersHandler}>halal</button>
                            <button name="" id="" value="kids" className={`${categoryFilters.out_of_stock === true ? 'active' : ''}`} onClick={onToggleCategoryFiltersHandler}>kids</button>
                        </StyledFilterCategory>
                        <h5>Cuisine</h5>
                        <StyledFilterCategory>
                            <button name="" id="" value="italian" className={`${categoryFilters.out_of_stock === true ? 'active' : ''}`} onClick={onToggleCategoryFiltersHandler}>italian</button>
                            <button name="" id="" value="japanese" className={`${categoryFilters.out_of_stock === true ? 'active' : ''}`} onClick={onToggleCategoryFiltersHandler}>japanese</button>
                            <button name="" id="" value="chinese" className={`${categoryFilters.out_of_stock === true ? 'active' : ''}`} onClick={onToggleCategoryFiltersHandler}>chinese</button>
                            <button name="" id="" value="portuguese" className={`${categoryFilters.out_of_stock === true ? 'active' : ''}`} onClick={onToggleCategoryFiltersHandler}>portuguese</button>
                            <button name="" id="" value="mediterranean" className={`${categoryFilters.out_of_stock === true ? 'active' : ''}`} onClick={onToggleCategoryFiltersHandler}>mediterranean</button>
                        </StyledFilterCategory>
                    </StyledFiltersSection>
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