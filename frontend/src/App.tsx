
import './App.css';
import Dashboard from "./components/Dashboard";
import Landing from "./components/Landing";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { onAuthStateChanged,signOut} from 'firebase/auth';
import { UserContext } from './context/User';
import { useContext, useEffect } from 'react';
import { getAuth } from 'firebase/auth';

import { app } from './firebase';
import UserPersonalDetails from './components/PersonalDetails/UserPersonalDetails';




function App() {
  
   const {user,setUser}=useContext(UserContext);

   const Auth = getAuth(app);
   
   const signOutUser = ()=>{
      signOut(Auth).then(()=>{
        setUser(null);
      }).catch((error)=>{
        console.log(error);
      })
    }

   
   
  
   useEffect(() => {
      onAuthStateChanged(Auth,(user)=>{
          if(user){
              
             
              setUser(user);
          }else{
              setUser(null);
              
          }
      })
    },[Auth,setUser])  
   

 

  
  return (
    <>
       <BrowserRouter>

       <Routes>

        <Route path="/" element={<Landing/>}/>
        <Route path="/dashboard" element={user?<Dashboard SignOutUser={signOutUser}/>:<Navigate to="/signin"/>}/>
        <Route path='/signup' element={!user?<SignUp/>:<Navigate to="/dashboard"/>}/>
        <Route path='/signin' element={!user?<SignIn/>:<Navigate to="/dashboard"/>}/>
        <Route path='/user' element={<UserPersonalDetails/>}/>
        <Route path='*' element={<h2> 404 Page Not Found</h2>}/>
        



       </Routes>
       
       
       
       </BrowserRouter>

      
       
    </>
  )
}

export default App
