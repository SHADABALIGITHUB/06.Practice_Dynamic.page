import React from 'react';
import styled from 'styled-components';

import { getAuth ,createUserWithEmailAndPassword} from 'firebase/auth';

import {app} from '../firebase'


const Button = styled.button`
background-color: skyblue;
color: white;
padding: 10px 20px;
border-radius: 5px;
border: none;
cursor: pointer;
`;







const Auth:React.FC = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

   
    const auth = getAuth(app);
   


  

const handleRegister = async() => {

    

   createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
       
       
        console.log(userCredential)
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        console.log(errorCode);

    });

}


 
   

    return (

        <>


            <h1>Auth</h1>

           

             <form >

            <input style={{height:"30px",margin:"10px"}} type="text" placeholder="Email" autoComplete='username' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <br/>
            <input style={{height:"30px",margin:"10px"}} type="password" placeholder="Password" autoComplete='current-password'   value={password} onChange={(e)=>setPassword(e.target.value)} />
            <br/>
           
           <button onClick={handleRegister}> Register </button>
               

             {/* <Button type='submit' onClick={()=>{handleRegister()}} >Register</Button> */}
             </form>


        </>

     );

}

export default Auth;