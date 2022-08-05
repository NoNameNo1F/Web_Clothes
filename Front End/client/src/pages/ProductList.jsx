import styled from "styled-components"
import Announcement from "../components/Anouncement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"
import { useState } from "react"
import { useLocation } from "react-router-dom"

const Container = styled.div`

`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;

`

const Title = styled.h1`
  margin: 20px;
`

const Filter = styled.div`
  margin: 20px;
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`

const Option = styled.option`

`

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter, setFilters] = useState({})
  const [sort, setSort] = useState("newest")

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filter,
      [e.target.name]: value,
    });
  };

  console.log(filter)
  return (
    <Container>
      <Navbar/>
      <Announcement/>

      <Title>{cat}</Title>

      <FilterContainer>
        <Filter>
          <FilterText>Filter Product:</FilterText>
          <Select name = "color" onChange={handleFilters}>
            <Option disabled>
              Color
            </Option>

            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
            <Option>pink</Option>
            <Option>gray</Option>
          </Select>

          <Select name = "size" onChange={handleFilters}>
            <Option disabled>
              Size
            </Option>

            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Sort Product:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value = "newest">Newest</Option>
            <Option value = "asc">Price (asc)</Option>
            <Option value = "desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products cat = {cat} filter = {filter} sort = {sort}/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList