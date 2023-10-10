import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import {  AuthProvider } from "./components/AuthContext";
import PageNotFound from "./components/404";

function App() {

  return (
    <>
      <AuthProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/order" element={<Order />} exact />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<ProtectedRoute />} />
          <Route path="*" Component={PageNotFound} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
