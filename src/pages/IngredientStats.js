import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import Details from '../components/ingredient/Details.js';
import Photo from '../components/ingredient/Photo';
import StockDetails from '../components/ingredient/StockDetails';
import StockManagement from '../components/ingredient/StockManagement';
import LineChart from '../components/charts/LineChart';


const data1 = [
	{
		month: "Jan",
		city: "Tokyo",
		temperature: 7
	},
	{
		month: "Feb",
		city: "Tokyo",
		temperature: 13
	},
	{
		month: "Mar",
		city: "Tokyo",
		temperature: 16.5
	},
	{
		month: "Apr",
		city: "Tokyo",
		temperature: 14.5
	},
	{
		month: "May",
		city: "Tokyo",
		temperature: 10
	},
	{
		month: "Jun",
		city: "Tokyo",
		temperature: 7.5
	},
	{
		month: "Jul",
		city: "Tokyo",
		temperature: 9.2
	},
	{
		month: "Aug",
		city: "Tokyo",
		temperature: 14.5
	},
	{
		month: "Sep",
		city: "Tokyo",
		temperature: 9.3
	},
	{
		month: "Oct",
		city: "Tokyo",
		temperature: 8.3
	},
	{
		month: "Nov",
		city: "Tokyo",
		temperature: 8.9
	},
	{
		month: "Dec",
		city: "Tokyo",
		temperature: 5.6
	},
];


const data2 = [
	{
		month: "Jan",
		city: "Tokyo",
		temperature: 3.9
	},
	{
		month: "Feb",
		city: "Tokyo",
		temperature: 4.2
	},
	{
		month: "Mar",
		city: "Tokyo",
		temperature: 5.7
	},
	{
		month: "Apr",
		city: "Tokyo",
		temperature: 8.5
	},
	{
		month: "May",
		city: "Tokyo",
		temperature: 11.9
	},
	{
		month: "Jun",
		city: "Tokyo",
		temperature: 15.2
	},
	{
		month: "Jul",
		city: "Tokyo",
		temperature: 17
	},
	{
		month: "Aug",
		city: "Tokyo",
		temperature: 16.6
	},
	{
		month: "Sep",
		city: "Tokyo",
		temperature: 14.2
	},
	{
		month: "Oct",
		city: "Tokyo",
		temperature: 10.3
	},
	{
		month: "Nov",
		city: "Tokyo",
		temperature: 5.6
	},
	{
		month: "Dec",
		city: "Tokyo",
		temperature: 9.8
	}
];


const data3 = [
	{
		month: "Jan",
		city: "Tokyo",
		temperature: 7
	},
	{
		month: "Jan",
		city: "London",
		temperature: 3.9
	},
	{
		month: "Feb",
		city: "Tokyo",
		temperature: 13
	},
	{
		month: "Feb",
		city: "London",
		temperature: 4.2
	},
	{
		month: "Mar",
		city: "Tokyo",
		temperature: 16.5
	},
	{
		month: "Mar",
		city: "London",
		temperature: 5.7
	},
	{
		month: "Apr",
		city: "Tokyo",
		temperature: 14.5
	},
	{
		month: "Apr",
		city: "London",
		temperature: 8.5
	},
	{
		month: "May",
		city: "Tokyo",
		temperature: 10
	},
	{
		month: "May",
		city: "London",
		temperature: 11.9
	},
	{
		month: "Jun",
		city: "Tokyo",
		temperature: 7.5
	},
	{
		month: "Jun",
		city: "London",
		temperature: 15.2
	},
	{
		month: "Jul",
		city: "Tokyo",
		temperature: 9.2
	},
	{
		month: "Jul",
		city: "London",
		temperature: 17
	},
	{
		month: "Aug",
		city: "Tokyo",
		temperature: 14.5
	},
	{
		month: "Aug",
		city: "London",
		temperature: 16.6
	},
	{
		month: "Sep",
		city: "Tokyo",
		temperature: 9.3
	},
	{
		month: "Sep",
		city: "London",
		temperature: 14.2
	},
	{
		month: "Oct",
		city: "Tokyo",
		temperature: 8.3
	},
	{
		month: "Oct",
		city: "London",
		temperature: 10.3
	},
	{
		month: "Nov",
		city: "Tokyo",
		temperature: 8.9
	},
	{
		month: "Nov",
		city: "London",
		temperature: 5.6
	},
	{
		month: "Dec",
		city: "Tokyo",
		temperature: 5.6
	},
	{
		month: "Dec",
		city: "London",
		temperature: 9.8
	}
];


const IngredientStats = ({
    ingredientData,
    setIngredientData
}) => {

    /* Hook for chart visibility */
    const [visibleChart, setVisibleChart] = useState("1");
    const [chartData, setChartData] = useState(data1);

    let { ingredient_name } = useParams();
    const ingredient = ingredientData.filter(ingredient => ingredient.name === ingredient_name)[0];

    const onToggleVisibleChart = (event) => {
        // setVisibleChart(event.target.value)
        let new_data;
        switch (event.target.value) {
            case "1":
                new_data = data1;
                break;
            case "2":
                new_data = data2;
                break;
            case "3":
                new_data = data3;
                break;
            default:
                console.log("erro");
        };
        console.log(event.target.value);
        console.log(chartData);
        console.log(new_data);
        setChartData(new_data);
    }

    return (
        <div className="content">
            <StyledIngredient>
                <StyledPhoto>
                    <div className="gradient_overlay"></div>
                    <img src={ingredient.image} alt={`${ingredient.name} image`}/>
                    <div className="ingredient_name">
                        <h2>Ingredient: <span>{ingredient.name}</span></h2>
                    </div>
                </StyledPhoto>
                <StyledChart>
                    <div id="chart_1" className={`chart ${visibleChart != "1" ? 'hide' : ''}`}>
                        <LineChart 
                            data={chartData}
                            height={250}
                            position="month*temperature" //{"day*quantity"}
                            color="city" //{"stock quantity"} 
                            />
                    </div>
                    {/* <div id="chart_2" className={`chart ${visibleChart != "2" ? 'hide' : ''}`}>
                        <LineChart 
                            data={data2}
                            height={250}
                            position="month*temperature" //{"day*quantity"}
                            color="city" //{"daily usage"} 
                            />
                    </div>
                    <div id="chart_3" className={`chart ${visibleChart != "3" ? 'hide' : ''}`}>
                        <LineChart
                            data={data3}
                            height={250}
                            position="month*temperature" //{"day*quantity"}
                            color="city" //{"meals per day"} 
                            />
                    </div> */}
                    <div className="chart_buttons">
                        <button name="" value="1" onClick={onToggleVisibleChart}>Stock qty</button>
                        <button name="" value="2" onClick={onToggleVisibleChart}>Daily usage</button>
                        <button name="" value="3" onClick={onToggleVisibleChart}>Meals per day</button>
                    </div>
                </StyledChart>
                <StyledDescription>
                    <h3>Ingredient short description</h3>
                    <h5 className="to_do">sfksdjfs dklfsdkfklsdfklsdgklsd lgkdslg sfksdjfsdkl fsdkfklsdfklsdg klsdlgkdslg sfksdjfsdkl fsdkfklsdfklsdg klsdlgkdslg sfksdjfs dklfsdkfklsdfkls dgklsdlgkdslg sfksdjfsdkl fsdkfklsdfklsdgklsdlg kdslg sfksdjfsdklfs dkfklsdfkls dgklsdlgkdslg sfksdjfsdkl fsdkfklsdfklsd gklsdlgkdslg sfksdj f sdklfsdkfklsdfklsdgk  lsdlgkdslgsfksdjfs dklf sdkfklsdfklsdgklsdlg kdslg </h5>
                </StyledDescription>
                <StyledDetails>
                    <h3>Forecasted consumption</h3>
                    <h5 className="to_do">7 days: 1.2 kg</h5>
                    <h5 className="to_do">30 days: 5.1 kg</h5>
                    <h3>Recent consumption</h3>
                    <h5 className="to_do">7 days: 1.1 kg</h5>
                    <h5 className="to_do">30 days: 6.3 kg</h5>
                    <h3>Incoming orders</h3>
                    <h5 className="to_do">None</h5>
                    <h3>Next order estimated in:</h3>
                    <h5 className="to_do">11 days</h5>
                </StyledDetails>
                <StyledDetails>
                    <h3>Current stock:</h3>
                    <h5 className="to_do">4.8kg</h5>
                    <h3>Automatic stock management:</h3>
                    <h3>Minimum stock:</h3>
                    <h5 className="to_do">3kg</h5>
                    <h5>(should be an input)</h5> 
                    <h3>Action:</h3>
                    <h5 className="to_do">Auto-order / Issue alert</h5>
                    <h5>(should be a select input)</h5> 
                    <h3>Auto-order quantity:</h3>
                    <h5 className="to_do">2kg</h5>
                    <h5>(should be an input)</h5> 
                    <h3>Incoming orders:</h3>
                    <h5 className="to_do">None</h5>
                </StyledDetails>
                {/* buttons */}
                    <Link to={`/ingredient/${ingredient.name}`}>
                        <button name="" id="">Show ingredient main page (changes page)</button>
                    </Link>
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

const StyledChart = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: calc((100vw - 10rem)/2);
    height: 40vh;
    background-color: #0a0a0a;
    border-left: 1px solid #414141;
    border-bottom: 1px solid #414141;
    .chart_buttons {
        display: flex;
        justify-content: center;
        width: 100%;
        background-color: #050505;
        button {
            width: 30%;
            font-size: 0.75rem;
            line-height: 0rem;
            white-space: nowrap;
            padding: 1rem;
        }
    }
`

const StyledPhoto = styled.div`
    position: relative;
    width: calc((100vw - 10rem)/2);
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

export default IngredientStats;