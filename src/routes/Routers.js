import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Admin from "../pages/Admin";
import Products from "../pages/Products";
import ProductsEdit from "../pages/ProductsEdit";
import Users from "./../pages/Users";
import UsersEdit from "./../pages/UsersEdit";
import Bills from "./../pages/Bills";
import Detaileinvoice from "../pages/Detailedinvoice";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductsEdit />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UsersEdit />} />
      <Route path="/bills" element={<Bills />} />
      <Route path="/bills/:id" element={<Detaileinvoice />} />
    </Routes>
  );
};

export default Routers;
