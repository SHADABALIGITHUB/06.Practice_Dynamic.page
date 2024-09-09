import React from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {app} from '../firebase'

const Login:React.FC = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate=useNavigate();
    const auth = getAuth(app);
    const handleLogin = async(e:any) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then(() => {
            // Signed in 

            navigate("/dashboard");
            
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            console.log(errorCode)
            alert("wrong email or password");
        });
    }
  return (
    <>
   
    <div className="section">
      <p className="form-title">Sign in to your account</p>
      <div className="input-container">
        <input type="email" autoComplete='email' placeholder="Enter email" value={email}  onChange={(e)=>setEmail(e.target.value)} />
        <span></span>
      </div>
      <div className="input-container">
        <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </div>
      <button type="submit" className="submit" style={{maxWidth:"100px"}} onClick={(e)=>{handleLogin(e)}}>
        Sign in
      </button>
      <p className="signup-link">
        No account?
        <Link to="/register">Sign up</Link>
      </p>
    </div>
  </>
  
  )
}

export default Login
