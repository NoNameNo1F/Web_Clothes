import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14;
    cursor: pointer;
`
const Logo = styled.h1`
    font-weight: bold;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const MenuItem = styled.div`
    font-size: 14;
    cursor: pointer;
    margin-left: 25px;
`

const Center = styled.div`
    flex: 1;
    text-align: center; 
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    // flex: 1;
    border: none;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>Trang Chủ</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color: "gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>Shopee Fake</Logo></Center>
            <Right>
                <MenuItem>Đăng nhập</MenuItem>
                <MenuItem>Đăng ký</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
                
            
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar