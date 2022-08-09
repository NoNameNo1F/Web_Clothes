import { useEffect, useState } from "react"
import styled from "styled-components"
import { popularProduct } from "../data"
import Product from "./Product"
import axios from "axios"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({cat, filter, sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
          ? `http://localhost:5000/api/product?category = ${cat}` 
          : `http://localhost:5000/api/product`
        );
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts()
  }, [cat])

  useEffect(() => {
    cat && setFilteredProducts(
      products.filter((item) => 
        Object.entries(filter).every(([key, value]) => 
          item[key].includes(value)
        )
      )
    )
  }, [products, cat, filter]);

  useEffect(() => {
    // sort by newest
    if((sort === "newest")) {
      setFilteredProducts((prev) => 
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    }

    // sort by ascending price
    else if((sort === "asc")) {
      setFilteredProducts((prev) => 
        [...prev].sort((a, b) => a.price - b.price)
      );
    }

    // sort by descending price
    else {
      setFilteredProducts((prev) => 
        [...prev].sort((a, b) => b.price - a.price)
      );
    }


  }, [sort])

  return (
    <Container>
        {cat 
        ? filteredProducts.map((item)=> <Product item={item} key ={item.id}/>)
        : products.slice(0, 8).map((item) => <Product item = {item} key = {item.id}/>)}
    </Container>
  )
}

export default Products