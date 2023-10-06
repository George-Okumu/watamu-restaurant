import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./components/AuthContext";
import { Fragment, useEffect, useState } from "react";
import PageNotFound from "./components/404";

function App() {

  return (
    <>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<Order />} exact />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Product/>}/>
        <Route path="*" Component={PageNotFound}/>
      </Routes>
    </>
  );
}

export default App;
