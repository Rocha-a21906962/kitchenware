import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import Details from '../components/ingredient/Details.js';
import Photo from '../components/ingredient/Photo';
import StockDetails from '../components/ingredient/StockDetails';
import StockManagement from '../components/ingredient/StockManagement';


const Ingredient = ({
    ingredientData,
    setIngredientData
}) => {

    let { ingredient_name } = useParams();
    const ingredient = ingredientData.filter(ingredient => ingredient.name === ingredient_name)[0];

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
                    <h5>sfksdjfs dklfsdkfklsdfklsdgklsd lgkdslg sfksdjfsdkl fsdkfklsdfklsdg klsdlgkdslg sfksdjfsdkl fsdkfklsdfklsdg klsdlgkdslg sfksdjfs dklfsdkfklsdfkls dgklsdlgkdslg sfksdjfsdkl fsdkfklsdfklsdgklsdlg kdslg sfksdjfsdklfs dkfklsdfkls dgklsdlgkdslg sfksdjfsdkl fsdkfklsdfklsd gklsdlgkdslg sfksdj f sdklfsdkfklsdfklsdgk  lsdlgkdslgsfksdjfs dklf sdkfklsdfklsdgklsdlg kdslg </h5>
                </StyledDescription>
                <StyledDetails>
                    <h3>Categories:</h3>
                    <h5>Fish</h5>
                    <h5>Healthy</h5>
                    <h3>Nutritional value:</h3>
                    <h5>240 cal/?</h5>
                    <h3>Restrictions and alerts:</h3>
                    <h5>Diet: Non-vegetarian</h5>
                    <h5>Allergies and intolerances: Fish</h5>
                    <h3>Typical expiration date:</h3>
                    <h5>1 year</h5>
                    <h5>(has implications on how stock management should be performed.. and should be abstracted for now)</h5>
                </StyledDetails>
                <StyledDetails>
                    <h3>Current stock:</h3>
                    <h5>4.8kg</h5>
                    <h3>Automatic stock management:</h3>
                    <h3>Minimum stock:</h3>
                    <h5>3kg</h5>
                    <h5>(should be an input)</h5> 
                    <h3>Action:</h3>
                    <h5>Auto-order / Issue alert</h5>
                    <h5>(should be a select input)</h5> 
                    <h3>Auto-order quantity:</h3>
                    <h5>2kg</h5>
                    <h5>(should be an input)</h5> 
                    <h3>Incoming orders:</h3>
                    <h5>None</h5>
                </StyledDetails>
                {/* buttons */}
                    <button name="" id="">Show recipes (opens pop-up / page?)</button>
                    <button name="" id="">Order ingredient (opens pop-up)</button>
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
                <StockDetails />
                <StockManagement />
                {/* buttons */}
                <div></div>
            </StyledIngredient>
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
`


const StyledStockDetails = styled.div`
    color: white;
`

const StyledStockManagement = styled.div`
    color: white;
`

export default Ingredient;