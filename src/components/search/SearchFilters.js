import styled from "styled-components";

const SearchFilters = ({
    searchTarget,
    setSearchTarget
}) => {

    const toggleSearchTarget = () => {
        const new_target = (searchTarget === 'recipes') ? 'ingredients' : 'recipes';
        setSearchTarget(new_target);
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
                    <h5>(all of these must be inputs)</h5>
                    <h3>Search for</h3>
                    <h5>Recipes</h5>
                    <h5>Ingredients</h5>
                    <h3>Stock</h3>
                    <h5>In stock</h5>
                    <h5>Running out</h5>
                    <h5>Out of stock</h5>
                    <h3>Preparation time</h3>
                    <h5>Less than 10 mins</h5>
                    <h5>Less than 30 mins</h5>
                    <h3>Cooking time</h3>
                    <h5>Less than 10 mins</h5>
                    <h5>Less than 30 mins</h5>
                    <h3>Total preparation time</h3>
                    <h5>Less than 10 mins</h5>
                    <h5>Less than 30 mins</h5>
                    <h5>Less than 1 hour</h5>
                    <h5>Running out</h5>
                    <h5>Out of stock</h5>
                    <h3>Categories</h3>
                    <h5>Fish</h5>
                    <h5>Meat</h5>
                    <h5>Vegan</h5>
                    <h5>Gluten free</h5>
                    <h5>Halal</h5>
                    <h3>Cuisine</h3>
                    <h5>Italian</h5>
                    <h5>Japanese</h5>
                    <h5>Chinese</h5>
                    <h5>Mediterranean</h5>
                    <h5>Portuguese</h5>
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

export default SearchFilters;