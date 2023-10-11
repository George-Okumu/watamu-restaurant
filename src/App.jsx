import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Register from "./pages/Register";
// import ProtectedRoute from "./components/ProtectedRoute";
import {  AuthContext ,AuthProvider } from "./components/AuthContext";
import PageNotFound from "./components/404";
import ProtectedRoute from "./components/ProtectedRoute";
import { Navigate, useParams } from 'react-router-dom';
import Profile from "./pages/Profile";

function App() {
  const { token } = useContext(AuthContext);


  return (
    <>
        <NavBar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/order" element={<Order />} exact />
          <Route path="/register" element={<Register />} />
          <Route path="/products" exact element={ token ? (<Product/>) : <Navigate to="/login" />} />
          <Route path="/profile" exact element={ token ? (<Profile/>) : <Navigate to="/login" />} />
          <Route path="*" Component={PageNotFound} />
        </Routes>
    </>
  );
}

export default App;
