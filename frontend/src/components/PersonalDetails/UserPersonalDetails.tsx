import React from 'react'
import {app} from '../../firebase'
import { getFirestore } from 'firebase/firestore'
// import { doc, setDoc } from 'firebase/firestore'
import { collection, addDoc } from 'firebase/firestore'


const UserPersonalDetails:React.FC = () => {
    const db=getFirestore(app);

    const addData=async()=>{
        
        try{
            const ref=await addDoc(collection(db,"userPersonal"),{
                firstname:"",
                lastname:"",
                email:"",
                dob:"",
                gender:"",
                phone:"",
                address:""
            })

        }
        catch(e){

        }
    
    
    }





  return (
    <div style={{marginLeft:'20px'}}>
        <h1>User Personal Details</h1>
        <form >
        <label>
          First Name:
         <span style={{color:'red'}}> *</span> <input type="text" name="name" />
        </label>
        <br />
        <label>
          Last Name:
         <span style={{color:'red'}}> *</span> <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
         <span style={{color:'red'}}> *</span> <input type="text" name="name" />
        </label>
        <br />
        <label>
          Date of Birth:
         <span style={{color:'red'}}> *</span> <input type="text" name="name" />
        </label>
        <br />
          <label htmlFor="Gender"> Gender : </label>
         <span style={{color:'red'}}> *</span> <input type="radio" id="male" name="gender" />
          <label htmlFor="male"> Male </label>
          <input type="radio" id="female" name="gender" />
          <label htmlFor="male"> Female </label>
          <input type="radio" id="Other" name="gender" />
          <label htmlFor="male"> Other </label>

          <br />


        <label>
          Phone Number:
         <span style={{color:'red'}}> *</span> <input type="text" name="name" />
        </label>
        <br />
        <label>
          Address:
         <span style={{color:'red'}}> *</span> <input type="text" name="name" />

        </label>
        <br />
        </form>
        <form >
        <h1> Educational Details </h1>

        <label>
          School:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          College:
         <span style={{color:'red'}}> *</span> <input type="text" name="name" />
        </label>
        <br />
        <label>
          Degree:
         <span style={{color:'red'}}> *</span> <input type="text" name="name" />
        </label>
        <br />
        <label>
          Specialization:
         <span style={{color:'red'}}> *</span> <input type="text" name="name" />
        </label>

        <br />
        </form>
        <form >
        <h1>Social Link </h1>
        <label>
          LinkedIn:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Github:
          <input type="text" name="name" />

        </label>
        <br />
        <label>
          Twitter:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Facebook:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Instagram:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Youtube:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Website:
          <input type="text" name="name" />
        </label>
        <br />


        <button type="submit">Submit</button>


        </form>
      
    </div>
  )
}

export default UserPersonalDetails
