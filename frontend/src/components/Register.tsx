import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import {app} from '../firebase'

import "./Register.css"

import { Link, useNavigate} from 'react-router-dom'

const auth = getAuth(app);

const Register:React.FC = () => {

       const navigate=useNavigate();
       
        const [email, setEmail] = React.useState('');
        const [password, setPassword] = React.useState('');
        const [username, setUsername] = React.useState('');

        const handleRegister = async(e:any) => {

            e.preventDefault();
       
            createUserWithEmailAndPassword(auth,email,password)
            .then(() => {
                
                navigate("/login");
            }
            )
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                console.log(errorCode);
            });
        }
  return (
   
    <div className="container">
      <div className="heading">SignIn to your account</div>
      <div className="form">
        <div className="input-field">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            type="text"
            name="text"
            id="username"
          />
          <label htmlFor="username">Full Name</label>
        </div>
        <div className="input-field">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="emil"
            type="email"
            name="email"
            id="email"
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            type="password"
            name="text"
            id="password"
          />
          <label htmlFor="username">Password</label>
        </div>
        <div className="btn-container">
          <button className="btn" onClick={(e)=>{handleRegister(e)}} >Submit</button>
          <Link className="acc-text" to="/login">
             Login
            <span style={{ color: "#0000ff", cursor: "pointer" }}>
              Already Account
            </span>
          </Link>
        </div>
      </div>
    </div>
 
  )
}

export default Register;
