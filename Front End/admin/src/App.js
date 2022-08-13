import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import "./app.css";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";

function App() {
  const admin = useSelector((state) => state.user?.currentUser?.isAdmin);
  const AppLayout = ({ admin }) => admin ? (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Outlet />
      </div>
    </>
  ) : null;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={admin ? <Navigate to='/' /> : <Login />} />
        <Route element={<AppLayout admin={admin} />}>
          <Route index element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newProduct" element={<NewProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
