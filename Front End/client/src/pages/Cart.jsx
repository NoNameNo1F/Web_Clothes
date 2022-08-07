import { Add, Remove } from "@material-ui/icons"
import { useSelector } from "react-redux"
import styled from "styled-components"
import Announcement from "../components/Anouncement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import StripeCheckout from "react-stripe-checkout"
import { useState, useEffect } from "react"
import { userRequest } from "../RequestMethod"
import { useNavigate  } from "react-router-dom" 

const STRIPEKEY = "pk_test_51LRtAXEjpd95HuXV93fuLfKOLVU8bLouKTuocOkFNXR6NrYn2BXG30ZaNZKgOZdvceYNsqAUXpENkMovv9yQpW1f00gpNPG0yn"
// const STRIPEKEY = process.env.REACT_APP_STRIPE

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.div`
    font-weight: 300;
    text-align: center;

`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`

const TopTexts = styled.div`
    
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`

const Info = styled.div`
    flex: 3;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5 solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`

const ProductDetail = styled.div`
    flex: 2; 
    display: flex;
`

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`

const Image = styled.img`
    width: 200px;
`

const Detail = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around
`

const ProductName = styled.span`

`

const ProductID = styled.span`

`

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color}
`

const ProductSize = styled.span`

`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`

const SummaryItemText = styled.span`

`

const SummaryItemPrice = styled.span`   

`

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const history = useNavigate();

    const onToken = (token) => {
        setStripeToken(token);
    }
    //history("/success")

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 50000
                });
                history("/success", {stripeData: res.data});
                console.log("hihi");
            } catch (error) {console.log("huhu");}
        }

        stripeToken && makeRequest();
    }, [stripeToken, cart.total, history]);

    console.log(stripeToken);
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>

                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        { cart.products.map((product) => (
                        <Product>
                            <ProductDetail>
                                <Image src={product.img}/>
                                <Detail>
                                    <ProductName><b>Product: </b>{product.title}</ProductName>
                                    <ProductID><b>ID:</b>{product._id}</ProductID>
                                    <ProductColor color={product.color}/>
                                    <ProductSize><b>Size:</b>{product.size}</ProductSize>
                                </Detail>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice> {product.price * product.quantity}vnđ </ProductPrice>
                            </PriceDetail>
                        </Product> 
                        ))}

                        <Hr/>

                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice> {cart.total} </SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Estimated shipping</SummaryItemText>
                            <SummaryItemPrice> 5.90$ </SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Shipping discount</SummaryItemText>
                            <SummaryItemPrice> -5.90$</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice> {cart.total} </SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name = "Group 7 shop"
                            image = ""
                            billingAddress
                            shippingAddress
                            description = {`Your total is ${cart.total}vnd`}
                            amount = {cart.total * 100}
                            token = { onToken }
                            stripeKey = { STRIPEKEY } 
                        >
                            <Button>CHECKOUT NOW</Button>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart