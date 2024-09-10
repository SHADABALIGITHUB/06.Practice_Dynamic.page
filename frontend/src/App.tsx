
import './App.css';
import Dashboard from "./components/Dashboard";
import Landing from "./components/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';





function App() {

 

  
  return (
    <>
       <BrowserRouter>

       <Routes>

        <Route path="/" element={<Landing/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path="login" element={<h2>Hello</h2>}/>



       </Routes>
       
       
       
       </BrowserRouter>

      
       
    </>
  )
}

export default App
