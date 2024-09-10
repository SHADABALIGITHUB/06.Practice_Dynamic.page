import React from 'react'
import "../styles/Signup.css"
import { Link } from 'react-router-dom'
import { useFirebase } from '../context/Firebase'
import { useNavigate } from 'react-router-dom'
const SignIn = () => {
    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("");

    const Firebase=useFirebase();


    const handleLogin = async(e:React.FormEvent) => {
        e.preventDefault();
       if(await Firebase.FirebaseLogin(email,password)){
              console.log("Login Success")

       }
       else{
              console.log("Login Failed")
       }
    }
  return (
    <div className='section2'>

<div className="form-container">
  <div className="logo-container"> Login Here </div>
  <form className="form">
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        
      />
    </div>
    <div className="form-group">
      <label htmlFor="password">password</label>
      <input
        type="text"
        id="password"
        name="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        
      />
    </div>
    <button className="form-submit-btn" type="submit" onClick={(e)=>handleLogin(e)}>
      Create Account
    </button>
  </form>

  <Link className="signup-link" to="/signup">
    Don't have an account?
    <a href="#" className="signup-link link">
      {" "}
      Login
    </a>
  </Link>
</div>

          

     </div>
  )
}

export default SignIn
