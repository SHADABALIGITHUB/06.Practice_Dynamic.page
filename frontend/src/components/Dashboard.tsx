import React from 'react'
import { UserContext } from '../context/User'
import { useContext } from 'react'

const Dashboard:React.FC = () => {
    const {user}=useContext(UserContext);
  return (
    <div>

        <h2> Welcome to Dashboard {user.email}</h2>
      
    </div>
  )
}

export default Dashboard
