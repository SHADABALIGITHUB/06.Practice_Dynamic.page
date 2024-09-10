import React from 'react'
import App from './App'
import {UserContext} from './context/User'
import {UserType} from './context/User'
import { FirebaseProvider } from './context/Firebase'

const Wrappers:React.FC = () => {
   
  const [user,setUser]=React.useState<UserType>({
    email:"",
     
  })
   
    
  return (
     <>
    <FirebaseProvider>
     <UserContext.Provider value={{user,setUser}}>
    

        <App/>

    </UserContext.Provider>
    </FirebaseProvider>
    </>
      
   
  )
}

export default Wrappers
