import styled, { css } from "styled-component";

function Login() {
    const Wrapper = styled.div`
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    `;

    const Container = styled.div`
    padding: 10px;
    width: 320px;
    border-radius:20px;
    border:1px solid black;
    dispaly: flex;
    flex-direction:column;
    justify-content;center;
    align-item:center;
    ${props => props.hide && css`
    display:none
    `}
    `;
    const Input = styled.input`
    width: 160px;
    border-radius;20px
    text-align:1px solid #000;
    border-radius:20px;
    background-color: #eee;
    box-shadow: inset 0 0 5px #000000;
    outline:none
    `;

    const Instead = styled.button`
    border-radius;20px
    text-align: center;
    border-top:15px;
    background-color: #00A598;
    outline:none
    cursor:pointer;
    `;


    const toggleSigup = function () {
        document.querySelector("#login").style.display = "none";
        document.querySelector("#signup").style.display = "none";
        
    }

    return(
        <Wrapper>
            <Container id="login">
                <label>Email</label>
                <Input placehold="Email"></Input>
                <label>Password</label>
                <Input placehold="Password"></Input>
                <Instead onClick={toggleSigup}>Sigup Instead</Instead>
                
            </Container>
            <Container hide id="">
            <label>full Name</label>
                <Input placehold="Full Name"></Input>
                <label>Email</label>
                <Input placehold="Email"></Input>
                <label>Password</label>
                <Input placehold="Password"></Input>
                <label>Confirm Password</label>
                <Input placehold="Password"></Input>
                <Instead onClick={toggleLogin}>login Instead</Instead>    
            </Container>
        </Wrapper>
    )
}

export default Login;