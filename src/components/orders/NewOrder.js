import styled from "styled-components";
import { Icon, InlineIcon } from '@iconify/react';
import formPrevious from '@iconify-icons/grommet-icons/form-previous';

const NewOrder = ({
    isNewOrderOpen,
    setIsNewOrderOpen,
    orderIngredients,
    setOrderIngredients
}) => {

    console.log("orderIngredients");
    console.log(orderIngredients);

    const hideNewOrder = () => {
        setIsNewOrderOpen(null);
        console.log(isNewOrderOpen);
    }

    const onAddIngredientHandler = (event) => {
        console.log("addIngredientHandler");
    };

    const onIngredientQuantityChangeHandler = (event) => {
        console.log("ingredientQuantityChangeHandler" + event.target.value);
    };

    return (
        <div id="new_order_popup" className={`${isNewOrderOpen ? 'open' : ''}`}>
            <StyledHeader>
                <h3>New order</h3>
                <StyledIcon>
                    <Icon icon={formPrevious} onClick={hideNewOrder} />
                </StyledIcon>
            </StyledHeader>
            <StyledSideContext>
                <StyledDetails>
                    <h3>Order details</h3>
                    <h5 className="to_do">Delivery on: ...</h5>
                </StyledDetails>
                <h3>Ingredients</h3>
                {
                    orderIngredients.map((ingredient) => {
                        console.log("ingredient.name");
                        console.log(ingredient.name);
                        return (<StyledIngredient>
                                    <div className="individual_order">
                                        <h5>{ ingredient.name }</h5>
                                    </div>
                                    <div className="quantity">
                                        {/* <h5>{ ingredient.quantity } { ingredient.unit }</h5> */}                                        
                                        <h5>1kg</h5>
                                        <input type="range" min="0.1" max="10" step="0.1" className="stock_input" onChange={onIngredientQuantityChangeHandler} />
                                    </div>
                                    {/* <button name="" id="">Remove</button> */}
                               </StyledIngredient>)
                    })
                }
                <StyledIngredient>
                    <div className="individual_order">
                        <select name="ingredient_options" defaultValue="name_asc" id="sort_by" onChange={onAddIngredientHandler}>
                            <option value="" selected disabled>Add an ingredient</option>
                            <option value="tuna">tuna</option>
                            <option value="salmon">salmon</option>
                            <option value="olive oil">olive oil</option>
                        </select>
                    </div>
                    <div className="quantity">
                        <h5>1kg</h5>
                        <input type="range" min="0.1" max="10" step="0.1" className="stock_input" onChange={onIngredientQuantityChangeHandler} />
                        {/* <button name="" id="">Remove</button> */}
                    </div>
                    {/* <button name="" id="">Remove</button> */}
                </StyledIngredient>
                <button className="to_do" name="" id="">Change delivery date</button>
                <button className="to_do" name="" id="">Place order</button>
            </StyledSideContext>
        </div>
    )
}

const StyledIngredient = styled.div`
    display: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    position: relative;
    width: 100%;
    color: #b2b2b2;
    .individual_order {
        width: 25%;
        select {
            width: 100%;
        }
    }
    .quantity {
        width: 75%;
        display: flex;
        justify-content: flex-end;
        input {
            width: 60%;
        }
        h5 {
            display: inline-flex;
            padding-left: 1rem;
        }
    }
    button {
        width: 40%;
        font-size: 0.75rem;
        line-height: 0rem;
        white-space: nowrap;
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
    background-color: #021d0b;
    color: #b2b2b2;
`
const StyledIcon = styled.div`
    position: absolute;
    top: calc(50% - 1.75rem/2);
    left: 15%;
    svg {
        height: 1.75rem;
        width: 1.75rem;
        // transform: rotateX(180deg) rotateY(0deg) rotateZ(-90deg);
    }
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

export default NewOrder;