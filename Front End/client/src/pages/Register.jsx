import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { register } from "../redux/apiCalls"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5), 
        rgba(255, 255, 255, 0.5)
    ), 
    url("https://cdn.wallpapersafari.com/4/61/ypDTNV.jpg") center;
    
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px; 
    background-color: teal;
    color: white;
    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`
const Error = styled.span`
    color: red;
`

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const {isFetching, error} = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        register(dispatch, {username, password, email});
    }

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCCOUNT</Title>
                <Form>
                    {/* <Input placeholder="name"/>
                    <Input placeholder="last name"/> */}
                    <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                    <Input placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                    <Input placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                    <Input placeholder="confirm password" onChange={(e) => setPassword(e.target.value)}/>
                    <Agreement>
                        By creating an account, I consent to a processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button onClick={handleClick} disabled={isFetching}>CREATE</Button>
                    
                </Form>
                {error && <Error>Some thing went wrong...</Error> }
            </Wrapper>
        </Container>
    )
}

export default Register