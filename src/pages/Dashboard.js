import styled from 'styled-components';

const Dashboard = () => {
    return (
        <div className="content">
            <StyledTransparentContainer>
                <h1>Dashboard</h1>
            </StyledTransparentContainer>
        </div>
    )
}

const StyledTransparentContainer = styled.div`
    display: flex;
    align-items: center;
    height: 80vh;
    width: 70vw;
    margin: auto;
    justify-content: center;
    background-color: #21554e4d;
    border-radius: 1rem;
`

export default Dashboard;