import React, { useContext } from 'react'
import "../styles/Signup.css"
import { Link } from 'react-router-dom'
import { useFirebase } from '../context/Firebase'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/User'

const SignIn = () => {
    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("");
    const {setUser} =useContext(UserContext);

    const Firebase=useFirebase();
    const naviagate=useNavigate();

   
    const handleGoogleLogin = async(e:React.FormEvent) => {
        e.preventDefault();
        try{
            const res=await Firebase.GoogleSignin();
            setUser(res.providerData[0]);
            console.log(res);
            naviagate("/dashboard");
        }
        catch(err){
            console.log("Google Signin Failed")
        }
    }



    const handleLogin = async(e:React.FormEvent) => {
        e.preventDefault();
       try{
        const res= await Firebase.FirebaseLogin(email,password);
               
             
            
              setUser(res.user.providerData[0]);
             
              naviagate("/dashboard")

       }
       
       catch(err){
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
    <button className="form-google-btn" type="submit" onClick={(e)=>{handleGoogleLogin(e)}}>
     Google Sign In
    </button>
  </form>

  <Link className="signup-link" to="/signup">
    Don't have an account?
    <span  className="signup-link link">
      {" "}
      Login
    </span>
  </Link>
</div>

          

     </div>
  )
}

export default SignIn
