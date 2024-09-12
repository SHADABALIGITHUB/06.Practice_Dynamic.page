import React from 'react'
import "../styles/Signup.css"
import { useFirebase } from '../context/Firebase';
import  {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';


const SignUp:React.FC = () => {

    const navigate=useNavigate();

    const[password,setPassword]=React.useState<string>("");
    const [email,setEmail]=React.useState<string>("");
    
    const Firebase=useFirebase();

    const handleRegister = async(e:React.FormEvent) => {
        e.preventDefault();

         const res=await Firebase.FirebaseRegister(email,password);

          if(res)
          {
              console.log("Register Success")
              navigate("/signin");
          }
            else{
                console.log("Register Failed")
            }
            
            
        }


    

  return (
     <div className='section2'>

<div className="form-container">
  <div className="logo-container">Create a New Account Here  </div>
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
    <button className="form-submit-btn" type="submit" onClick={(e)=>handleRegister(e)}>
      Create Account
    </button>
  </form>
  <Link className="signup-link" to="/signin">
    Don't have an account?
    <span className="signup-link link">
      {" "}
      Login
    </span>
  </Link>
</div>

          

     </div>
  )
}

export default SignUp