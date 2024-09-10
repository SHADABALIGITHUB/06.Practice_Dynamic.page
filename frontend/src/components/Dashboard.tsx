import React from 'react'
import { UserContext } from '../context/User'
import { useContext } from 'react'

import "../styles/Dashboard.css"
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

    
    const departments: Department[] = [
      {
        id: 1,
        name: 'Computer Science and Engineering',
        head: 'Dr. John Doe',
        description: 'Focuses on software engineering, data science, and AI.',
        courses: ['Data Structures', 'Machine Learning', 'Software Engineering']
      },
      {
        id: 2,
        name: 'Mechanical Engineering',
        head: 'Dr. Jane Smith',
        description: 'Covers thermodynamics, fluid mechanics, and robotics.',
        courses: ['Thermodynamics', 'Fluid Mechanics', 'Robotics']
      },
      {
        id: 3,
        name: 'Electrical Engineering',
        head: 'Dr. Emily Johnson',
        description: 'Deals with power systems, control systems, and electronics.',
        courses: ['Power Systems', 'Control Systems', 'Digital Electronics']
      }
    ];
   
  return (
    <div className="dashboard-container">
    <h1>JSS  Departments</h1>
    <h3>Your Email id:{user?.email}</h3>
    <button onClick={SignOutUser}>Logout</button>
    <div className="department-list">
      {departments.map(department => (
        <div key={department.id} className="department-card">
          <h2>{department.name}</h2>
          <p><strong>Head:</strong> {department.head}</p>
          <p>{department.description}</p>
          <h4>Courses Offered:</h4>
          <ul>
            {department.courses.map(course => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Dashboard
