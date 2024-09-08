import React from 'react'
import { Link } from 'react-router-dom'

const Landing:React.FC= () => {
  return (
    <div>

        <h2 style={{color:"white"}}> Welcome to Landing Page </h2>
        
        <Link to="/register">Register</Link>
        <br/>
        <Link to="/login">Login</Link>
      
    </div>
  )
}

export default Landing
