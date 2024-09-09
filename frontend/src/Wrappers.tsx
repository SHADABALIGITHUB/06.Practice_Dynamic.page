import React from 'react'
import App from './App'
import {UserContext} from './context/User'
import {UserType} from './context/User'

const Wrappers:React.FC = () => {
   
  const [user,setUser]=React.useState<UserType>({
    email:"",
    password:"",    
  })
   
    
  return (
     <>
   
     <UserContext.Provider value={{user,setUser}}>

        <App/>

    </UserContext.Provider>
    </>
      
   
  )
}

export default Wrappers
