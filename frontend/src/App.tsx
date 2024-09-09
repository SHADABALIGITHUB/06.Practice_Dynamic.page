
import './App.css';
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Landing from "./components/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";





function App() {

 

  
  return (
    <>
       <BrowserRouter>

       <Routes>

        <Route path="/" element={<Landing/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>



       </Routes>
       
       
       
       </BrowserRouter>

      
       
    </>
  )
}

export default App
