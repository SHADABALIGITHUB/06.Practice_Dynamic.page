import React from 'react'
import { UserContext } from '../context/User'
import { useContext } from 'react'

// import "../styles/Dashboard.css"
import MyNavbar from './PersonalDetails/Navbar/MyNavbar';
import { Button } from 'react-bootstrap';

export interface Department {
  id: number;
  name: string;
  head: string;
  description: string;
  courses: string[];
}

type SignOutProps = {
  SignOutUser: () => void;
};



const Dashboard:React.FC<SignOutProps> = ({SignOutUser}) => {
    const {user}=useContext(UserContext);

    
    
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, []);
   
  return (
    <div className="container">
      <MyNavbar userEmail={user?.email}/>
    <h1>JSS  Departments</h1>
    <h3>Your Email id:{loading?<span className="loading"> loading ..</span>:user?.email}</h3>
    <Button onClick={SignOutUser}>Logout</Button>
    
    
  </div>
  )
}

export default Dashboard
