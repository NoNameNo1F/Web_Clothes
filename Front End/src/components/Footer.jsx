import styled from "styled-components";
import { Facebook, Instagram, Twitter, Pinterest,Email, Phone, Room } from "@material-ui/icons";

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Right = styled.div`
    flex: 1;
`

const Payment = styled.img`
    width: 30%;

`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Logo = styled.h1`

`

const Description = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;

`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
                SHOPEE FAKE.
            </Logo>

            <Description>
                Đồ án Nhập môn công nghệ phần mềm
                Đồ án Nhập môn công nghệ phần mềm 
                Đồ án Nhập môn công nghệ phần mềm 
                Đồ án Nhập môn công nghệ phần mềm 
                Đồ án Nhập môn công nghệ phần mềm   
            </Description>

            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>

                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>

                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>

                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>

        <Center>
            <Title>Useful link</Title>

            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms of use</ListItem>
            </List>
        </Center>

        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight: "10px"}}/>223 Nguyễn Văn Cừ</ContactItem>
            <ContactItem><Phone style={{marginRight: "10px"}}/>123456789</ContactItem>
            <ContactItem><Email style={{marginRight: "10px"}}/>nguyenvancu@gmail.com</ContactItem>

            <Payment src ="http://cdn.shopify.com/s/files/1/0418/1622/8001/files/Payment-method-update-2_mobile_600x600.jpg?v=1621329715"/>
        </Right>
    </Container>
  )
}

export default Footer