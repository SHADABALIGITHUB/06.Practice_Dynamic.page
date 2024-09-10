import React from 'react'
import { Link } from 'react-router-dom'

const Landing:React.FC= () => {
  return (
    <div className='section'>

        <h2 style={{color:"white"}}> Welcome to Landing Page </h2>
        
        <Link to="/signin">Signin</Link>
        <br/>
        <br />
        <Link to="/signup"> Signup</Link>
      
    </div>
  )
}

export default Landing
