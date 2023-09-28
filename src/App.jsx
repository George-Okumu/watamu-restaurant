import NavBar from './components/NavBar'
import Login  from './pages/Login'
import Order from './pages/Order'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/register" element={<Register/>} />

      </Routes>
    </>
  )
}

export default App


