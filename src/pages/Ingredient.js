import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import Details from '../components/ingredient/Details.js';
import Photo from '../components/ingredient/Photo';
import StockDetails from '../components/ingredient/StockDetails';
import StockManagement from '../components/ingredient/StockManagement';
import NewOrder from "../components/orders/NewOrder";


const Ingredient = ({
    ingredientData,
    setIngredientData
}) => {

    /* Hook for the new order pop-up menu visibility */
    const [isNewOrderOpen, setIsNewOrderOpen] = useState(null);

    const showNewOrder = () => {
        setIsNewOrderOpen(true);
        console.log(isNewOrderOpen);
    };
    
    let { ingredient_name } = useParams();
    const ingredient = ingredientData.filter(ingredient => ingredient.name === ingredient_name)[0];

    const onMinimumStockChangeHandler = (event) => {
        const modifiedIngredientData = ingredientData.map((i) => {
            if (i.name === ingredient_name) {
                const new_minimum_stock = {
                    ...i.minimum_stock
                };
                new_minimum_stock.new_value = event.target.value;

                console.log(new_minimum_stock);
                return {
                    ...i,
                    minimum_stock: new_minimum_stock
                }
            } else {
                return {
                    ...i,
                }
            }
        });
        setIngredientData(modifiedIngredientData);
        console.log(ingredientData);
        console.log(ingredient);
        console.log(ingredient.minimum_stock);
        console.log("ingredient.minimum_stock.value:");
        console.log(ingredient.minimum_stock.value);
    };

    const onDefaultOrderQuantityChangeHandler = (event) => {
        const modifiedIngredientData = ingredientData.map((i) => {
            if (i.name === ingredient_name) {
                const new_default_order_quantity = {
                    ...i.default_order_quantity
                };
                new_default_order_quantity.new_value = event.target.value;

                console.log(new_default_order_quantity);
                return {
                    ...i,
                    default_order_quantity: new_default_order_quantity
                }
            } else {
                return {
                    ...i,
                }
            }
        });
        setIngredientData(modifiedIngredientData);
        console.log(ingredientData);
        console.log(ingredient);
        console.log(ingredient.default_order_quantity);
        console.log("ingredient.default_order_quantity.value:");
        console.log(ingredient.default_order_quantity.value);
    };

    const onAutoOrderChangeHandler = (event) => {
        console.log("event.target.value");
        console.log(event.target.value);
        const new_auto_order_value = event.target.value === 'auto_order' ? true : false;
        console.log("const auto_order =");
        console.log(new_auto_order_value);
        const modifiedIngredientData = ingredientData.map((i) => {
            if (i.name === ingredient_name) {
                const new_auto_order = {
                    ...i.auto_order
                };
                new_auto_order.new_value = new_auto_order_value;
                return {
                    ...i,
                    auto_order: new_auto_order
                }
            } else {
                return {
                    ...i,
                }
            }
        });
        setIngredientData(modifiedIngredientData);
        console.log(ingredientData);
        console.log(ingredient);
        console.log("ingredient.auto_order:");
        console.log(ingredient.auto_order);
    };

    const onConfirmStockChangesHandler = (event) => {
        console.log("confirm stock changes!");
        const modifiedIngredientData = ingredientData.map((i) => {
            if (i.name === ingredient_name) {
                const new_minimum_stock = {
                    ...i.minimum_stock
                };
                const new_default_order_quantity = {
                    ...i.default_order_quantity
                };
                const new_auto_order = {
                    ...i.auto_order
                };
                console.log("new_minimum_stock.value");
                console.log(new_minimum_stock.value);
                console.log("new_minimum_stock.new_value");
                console.log(new_minimum_stock.new_value);
                new_minimum_stock.value = new_minimum_stock.new_value;
                new_default_order_quantity.value = new_default_order_quantity.new_value;
                new_auto_order.value = new_auto_order.new_value;
                return {
                    ...i,
                    minimum_stock: new_minimum_stock,
                    default_order_quantity: new_default_order_quantity,
                    auto_order: new_auto_order
                }
            } else {
                return {
                    ...i,
                }
            }
        });
        setIngredientData(modifiedIngredientData);
        console.log(ingredientData);
    };

    const onResetStockChangesHandler = (event) => {
        console.log("reset stock changes!");
        const modifiedIngredientData = ingredientData.map((i) => {
            if (i.name === ingredient_name) {
                const new_minimum_stock = {
                    ...i.minimum_stock
                };
                const new_default_order_quantity = {
                    ...i.default_order_quantity
                };
                const new_auto_order = {
                    ...i.auto_order
                };
                console.log("new_minimum_stock.value");
                console.log(new_minimum_stock.value);
                console.log("new_minimum_stock.new_value");
                console.log(new_minimum_stock.new_value);
                new_minimum_stock.new_value = new_minimum_stock.value;
                new_default_order_quantity.new_value = new_default_order_quantity.value;
                new_auto_order.new_value = new_auto_order.value;
                return {
                    ...i,
                    minimum_stock: new_minimum_stock,
                    default_order_quantity: new_default_order_quantity,
                    auto_order: new_auto_order
                }
            } else {
                return {
                    ...i,
                }
            }
        });
        setIngredientData(modifiedIngredientData);
        console.log(ingredientData);
    };

    
    const newOrder = (ingredient) => {
        return (
            [
                {
                    name: ingredient.name,
                    quantity: ingredient.default_order_quantity.value,
                    unit: ingredient.unit,
                }   
            ] 
        )
    };
    
    /* Hook for the new order ingredients */
    const [orderIngredients, setOrderIngredients] = useState(newOrder(ingredient));

    console.log(orderIngredients);


    return (
        <div className="content">
            <StyledIngredient>
                <StyledPhoto>
                    <div className="gradient_overlay"></div>
                    <img src={ingredient.image} alt={`${ingredient.name} image`}/>
                    <div className="ingredient_name">
                        <h2>Ingredient: <span>{ingredient.name}</span></h2>
                    </div>
                    <div className="main_details">
                        <p><span>5</span> recipes</p>
                        <p>|</p>
                        <p><span>240</span>/? calories</p>
                        <p>|</p>
                        <p>On auto-order: <span>Yes</span></p>
                    </div>
                </StyledPhoto>
                <StyledDescription>
                    <h3>Ingredient short description</h3>
                    <h5 className="to_do">sfksdjfs dklfsdkfklsdfklsdgklsd lgkdslg sfksdjfsdkl fsdkfklsdfklsdg klsdlgkdslg sfksdjfsdkl fsdkfklsdfklsdg klsdlgkdslg sfksdjfs dklfsdkfklsdfkls dgklsdlgkdslg sfksdjfsdkl fsdkfklsdfklsdgklsdlg kdslg sfksdjfsdklfs dkfklsdfkls dgklsdlgkdslg sfksdjfsdkl fsdkfklsdfklsd gklsdlgkdslg sfksdj f sdklfsdkfklsdfklsdgk  lsdlgkdslgsfksdjfs dklf sdkfklsdfklsdgklsdlg kdslg </h5>
                </StyledDescription>
                <StyledDetails>
                    <h3>Categories:</h3>
                    {
                        ingredient.categories.map((category) => {
                            return (<h5>{category.name}</h5>)
                        })
                    }
                    <h3>Nutritional value:</h3>
                    <h5 className="to_do">240 cal/?</h5>
                    <h3>Restrictions and alerts:</h3>
                    <h5 className="to_do">Diet: Non-vegetarian</h5>
                    <h5 className="to_do">Allergies and intolerances: Fish</h5>
                    <h3>Typical expiration date:</h3>
                    <h5 className="to_do">1 year</h5>
                    <h5>(has implications on how stock management should be performed.. and should be abstracted for now)</h5>
                    <h3>Incoming orders:</h3>
                    <h5 className="to_do">None</h5>
                </StyledDetails>
                <StyledDetails>
                    <h3>Current stock:</h3>
                    <h5>{ingredient.in_stock.value}{ingredient.unit}</h5>
                    <h3>Automatic stock management:</h3>
                    <h3>Minimum stock:</h3>
                    <h5>{ingredient.minimum_stock.value}{ingredient.unit} {ingredient.minimum_stock.value != ingredient.minimum_stock.new_value ? `(new value: ${ingredient.minimum_stock.new_value}${ingredient.unit})` : ''}</h5>
                    <input type="range" min={ingredient.minimum_stock.min_input} max={ingredient.minimum_stock.max_input} step={ingredient.minimum_stock.step} value={ingredient.minimum_stock.new_value} className="stock_input" onChange={onMinimumStockChangeHandler} />
                    <h3>Action:</h3>
                    <select name="search_options" onChange={onAutoOrderChangeHandler}>
                        <option value="auto_order" selected={`${ingredient.auto_order.new_value ? true : ''}`}>auto-order</option>
                        <option value="alert" selected={`${!ingredient.auto_order.new_value ? true : ''}`}>alert</option>
                    </select>
                    <h3>Default order quantity:</h3>
                    <h5>{ingredient.default_order_quantity.value}{ingredient.unit} {ingredient.default_order_quantity.value != ingredient.default_order_quantity.new_value ? `(new value: ${ingredient.default_order_quantity.new_value}${ingredient.unit})` : ''}</h5>
                    <input type="range" min={ingredient.default_order_quantity.min_input} max={ingredient.default_order_quantity.max_input} step={ingredient.default_order_quantity.step} value={ingredient.default_order_quantity.new_value} className={`stock_input ${ingredient.default_order_quantity.new_value != ingredient.default_order_quantity.value ? 'modified' : ''}`} onChange={onDefaultOrderQuantityChangeHandler} />
                    <StyledStockButtons>
                        <button name="" id="" className={`${(ingredient.minimum_stock.value != ingredient.minimum_stock.new_value) || (ingredient.default_order_quantity.value != ingredient.default_order_quantity.new_value) || (ingredient.auto_order.value != ingredient.auto_order.new_value) ? '' : 'hide'}`} onClick={onConfirmStockChangesHandler}>Confirm changes</button>
                        <button name="" id="" className={`${(ingredient.minimum_stock.value != ingredient.minimum_stock.new_value) || (ingredient.default_order_quantity.value != ingredient.default_order_quantity.new_value) || (ingredient.auto_order.value != ingredient.auto_order.new_value) ? '' : 'hide'}`} onClick={onResetStockChangesHandler}>Reset changes</button>
                    </StyledStockButtons>
                </StyledDetails>
                {/* buttons */}
                    <button name="" id="">Show recipes (opens pop-up / page?)</button>
                    <button name="" id="" onClick={e => showNewOrder(e.target.value)}>Order ingredient (opens pop-up)</button>
                    <button name="" id="">Order history (opens pop-up)</button>
                    <Link to={`/ingredient_stats/${ingredient.name}`}>
                        <button name="" id="">Stats (changes page)</button>
                    </Link>
                    <button name="" id="">Current stock details (opens pop-up) - optional (in case we have time to support different expiry dates within an ingredient stock)</button>
                <StyledDetails>
                    {/* Delete everything: just for testing

                    <h5>Current stock: <span>{ingredient.in_stock} kg</span></h5>
                    <h5>Forecasted consumption</h5>
                    <p>7 days: 1.2 kg</p>
                    <p>30 days: 5.1 kg</p>
                    <h5>Recent consumption</h5>
                    <p>7 days: 1.1 kg</p>
                    <p>30 days: 6.3 kg</p>
                    <h5>Recent consumption</h5>
                    <p>None</p>
                    <h5>Next order estimated in:</h5>
                    <p>11 days</p>
                    <p></p>
                    */}
                </StyledDetails>
                {/* <StockDetails />
                <StockManagement /> */}
                {/* buttons */}
                <div></div>
            </StyledIngredient>
            <NewOrder
                isNewOrderOpen={isNewOrderOpen}
                setIsNewOrderOpen={setIsNewOrderOpen}
                orderIngredients={orderIngredients}
                setOrderIngredients={setOrderIngredients} />
        </div>
    )
}

const StyledIngredient = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    // border: 1px solid yellow;
    background-color: #000000dd;
    // padding-left: 1rem;
    // padding-right: 1rem;
`

const StyledPhoto = styled.div`
    position: relative;
    width: calc(100vw - 10rem);
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

const StyledStockButtons = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    button {
        width: 8rem;
        font-size: 0.75rem;
        margin-right: 1rem;
        padding: 0.5rem;
        &.hide {
            display: none;
        }
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
    .stock_input {
        /* not working for now */
        transform: none;
        transition: transform 0.5s ease, opacity 0.5s ease;
    }
    .modified {
        /* not working for now */
        color: green;
    }
`


const StyledStockDetails = styled.div`
    color: white;
`

const StyledStockManagement = styled.div`
    color: white;
`

export default Ingredient;