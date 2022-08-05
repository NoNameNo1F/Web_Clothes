import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

// const App = () => {
//   return <div>
//     <Home/>
//     <ProductList/>
//     <Product/>
//     <Register/>
//     <Login/>
//     <Cart/>
//   </div>;
// };

const App = () => {
  const user = true 

  return  (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/products/:category' element={<ProductList/>} />

        <Route path='/product/:id' element={<Product/>} />

        <Route path='/cart' element={<Cart/>} />

        <Route path='/register' element={user ? <Navigate to = "/"/> : <Register/>} />

        <Route path='/login' element={user ? <Navigate to ="/"/> : <Login/>}/>
        
      </Routes>
    </Router>
  )
};

export default App;