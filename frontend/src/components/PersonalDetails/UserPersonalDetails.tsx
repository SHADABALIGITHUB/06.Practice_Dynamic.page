import React from 'react'

const UserPersonalDetails:React.FC = () => {
  return (
    <div>
        <h1>User Personal Details</h1>
        <form >
        <label>
          First Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="text" name="name" />
        </label>
        <br />
          <label htmlFor="Gender"> Gender : </label>
          <input type="radio" id="male" name="gender" />
          <label htmlFor="male"> Male </label>
          <input type="radio" id="female" name="gender" />
          <label htmlFor="male"> Female </label>
          <input type="radio" id="Other" name="gender" />
          <label htmlFor="male"> Other </label>

          <br />


        <label>
          Phone Number:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="name" />

        </label>
        <br />
        <h1> Educational Details </h1>

        <label>
          School:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          College:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Degree:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Specialization:
          <input type="text" name="name" />
        </label>

        <br />
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
