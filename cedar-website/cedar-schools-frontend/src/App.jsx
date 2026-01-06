import './App.css'
import {Routes, Route } from 'react-router-dom'
import Register from './register.jsx'
import Home from './home.jsx'
import NavBar from "../comps/Navbar.jsx"
import Footer from "../comps/footer.jsx"
import ContactPage from "./contact.jsx"

export default function App() {
  return (
    <>
      <NavBar/>
    <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
    
    </Routes>
      <Footer/>
      </>
  )
}
