import styled from 'styled-components';
import {Plot1, Plot2, Plot3, Plot4} from "../components/charts/PlotsDashboard";

const Dashboard = () => {
    return (
        // o show={true} serve para ajustar o dashboard ao sidebar (usando o translate)
        <MainPanel show={true}>
            <Content class="content" show={true}>
                <Row className="grid-row">
                    <Card className="card card-chart">
                        <CardChartHeader className="card_chart-header">
                            <span>Monetary Expenses</span>
                            <h6>Monthly</h6>
                        </CardChartHeader>
                        <div className="card-body">
                            <div className="card-area">
                                <Plot1/>
                            </div>
                        </div>
                    </Card>
                </Row>
                <RowCom4Slots>
                    <Card>
                        <CardHeader>
                            <Symbol>
                                <i className="far fa-comments"/>
                            </Symbol>
                            <div>
                                <CardHeaderTitle>Reviews</CardHeaderTitle>
                                <CardHeaderSubtitle>100</CardHeaderSubtitle>
                            </div>
                        </CardHeader>
                        <CardFooter>
                            <i className="far fa-comments"/>
                            <span>Atualiza</span>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Symbol>
                                <i className="far fa-star"/>
                            </Symbol>
                            <div>
                                <CardHeaderTitle>Rating</CardHeaderTitle>
                                <CardHeaderSubtitle>8/10</CardHeaderSubtitle>
                            </div>
                        </CardHeader>
                        <CardFooter>
                            <i className="far fa-comments"/>
                            <span>Atualiza</span>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Symbol>
                                <i className="far fa-user"/>
                            </Symbol>
                            <div>
                                <CardHeaderTitle>Meals Served</CardHeaderTitle>
                                <CardHeaderSubtitle>1 224</CardHeaderSubtitle>
                            </div>
                        </CardHeader>
                        <CardFooter>
                            <i className="far fa-comments"/>
                            <span>Atualiza</span>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Symbol>
                                <i className="far fa-hourglass"/>
                            </Symbol>
                            <div>
                                <CardHeaderTitle>Avg. Meal</CardHeaderTitle>
                                <CardHeaderSubtitle>1 h</CardHeaderSubtitle>
                            </div>
                        </CardHeader>
                        <CardFooter>
                            <i className="far fa-comments"/>
                            <span>Atualiza</span>
                        </CardFooter>
                    </Card>
                </RowCom4Slots>
                <GridRowCharts>
                    <Card className="card card-chart">
                        <CardChartHeader className="card_chart-header">
                            <span>Water Spent</span>
                            <h6>Weekly</h6>
                        </CardChartHeader>
                        <div className="card-body">
                            <div className="card-area">
                                <Plot3/>
                            </div>
                        </div>
                    </Card>
                    <Card className="card card-chart">
                        <CardChartHeader className="card_chart-header">
                            <span>Electric Consumption</span>
                            <h6>Daily</h6>
                        </CardChartHeader>
                        <div className="card-body">
                            <div className="card-area">
                                <Plot4/>
                            </div>
                        </div>
                    </Card>
                </GridRowCharts>
            </Content>
        </MainPanel>
    )
}


export default Dashboard;

const MainPanel = styled.div.attrs(props => ({
    className: props.className,
}))`
  width: 100vw;
  height: 100vh;
  border-top: 2px solid #000000;
  //#04BF00
  float: right;
  @media only screen and (max-width: 1200px) {
    width: 85vw;
    right: 0;
    transform: ${({show}) => show ? 'translate3d(0,0,0)' : 'translate3d(0,0,0)'};
    transition: .5s cubic-bezier(.685, .0473, .346, 1);
  }
`;
const Content = styled.div`
  padding: ${({show}) => show ? '80px 30px 30px 140px' : '80px 30px 30px 280px'};
  transition: .5s;
  @media only screen and (max-width: 1200px) {
    padding-left: 30px;
  }
`;
const Row = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
const Card = styled.div.attrs(props => ({
    className: props.className,
}))`
  background-color: #2d3436;
  //cor de baixo...#485461
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.1);

  &.card-chart {
    overflow: hidden;
    height: auto;
  }
`;
const CardChartHeader = styled.div`
  padding: 10px;
  margin-bottom: 30px;

  span {
    color: white;
    font-family: "Poppins";
    font-size: 10px;
  }

  h6 {
    color: white;
    font-family: "Poppins";
    font-size: 16px;
  }
`;
const RowCom4Slots = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;
const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  padding-bottom: 10px;

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    background: #ffffff;
    margin: 0 auto;
    bottom: 0;
  }
`;
const CardHeaderTitle = styled.span`
  font-family: "Poppins";
  display: flex;
  justify-content: center;
  color: #ffffff;
  font-size: 10px;
`;
const CardHeaderSubtitle = styled.h6`
  font-family: "Poppins";
  display: flex;
  justify-content: flex-end;
  color: #ffffff;
  font-size: 20px;
`;
const Symbol = styled.div.attrs(props => ({
    className: props.className,
}))`
  height: 50px;
  width: 50px;

  & .fa-comments {
    background: #ff8d72;
    background-image: linear-gradient(to bottom left, #ff8d72, #ff6491, #ff8d72);
    background-size: 210% 210%;
    background-position: 100% 0;
    color: #fff;
    border-radius: 50%;
    padding: 12px;
  }

  & .fa-star {
    background: #e14eca;
    background-image: linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca);
    background-size: 210% 210%;
    background-position: 100% 0;
    color: #fff;
    border-radius: 50%;
    padding: 12px;
  }

  & .fa-user {
    background: #00f2c3;
    background-image: linear-gradient(to bottom left, #00f2c3, #0098f0, #00f2c3);
    background-size: 210% 210%;
    background-position: 100% 0;
    color: #fff;
    border-radius: 50%;
    padding: 12px 14px;
  }

  & .fa-hourglass {
    background: #fd5d93;
    background-image: linear-gradient(to bottom left, #fd5d93, #ec250d, #fd5d93);
    background-size: 210% 210%;
    background-position: 100% 0;
    color: #fff;
    border-radius: 50%;
    padding: 12px 14px;
  }
`;
const CardFooter = styled.div`
  padding: 10px 0px 5px 10px;

  i {
    color: #a8a8a8;
  }

  span {
    font-family: "Poppins";
    color: #a8a8a8;
    margin-left: 10px;
    font-weight: 300;
    font-size: 13px;
  }
`;
const GridRowCharts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 20px;
  grid-gap: 20px;
  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;