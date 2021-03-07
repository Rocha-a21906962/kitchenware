import styled from "styled-components";
import Line from "../feed/Line";

const BottomContext = ({
    mealPlanningData
}) => {
    return (
        <StyledBottomContext>
        <div className="one_line_feed">
            <StyledHeader>Upcoming meals</StyledHeader>
            <Line data={mealPlanningData} />
        </div>
        {/* <StyledBlock>
            <h3>Last 30 days</h3>
            <h5>54 orders delivered</h5>
        </StyledBlock>
        <StyledBlock>
            <h3>Last 7 days</h3>
            <h5>12 orders delivered</h5>
        </StyledBlock>
        <StyledBlock>
            <h3>Next 7 days</h3>
            <h5>4 orders scheduled</h5>
        </StyledBlock>
        <StyledBlock>
            <h3>Next 30 days</h3>
            <h5>15 orders scheduled</h5>
        </StyledBlock> */}
        </StyledBottomContext>
    )
}

const StyledBottomContext = styled.div`
    position: absolute;
    top: 66vh;
    width: 60vw;
    height: 24vh;
    display: flex;
    justify-content: space-around;
    /* padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem; */
    background-color: #000000dd;
    color: #b2b2b2;
`

const StyledBlock = styled.div`
    position: relative;
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const StyledHeader = styled.div`
    background: #000;
    color: white;
    font-family: GTAmericaRegular;
    font-size: 1rem;
    font-weight: bold;
    line-height: 2.25rem;
`

export default BottomContext;