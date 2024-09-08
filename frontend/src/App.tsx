// import { getDatabase,ref,set } from "firebase/database";

// import {app} from './firebase'
import Auth from "./components/Auth";
import './App.css';

// const db = getDatabase(app);


function App() {

  // const writeUserData = () => {

  //   set(ref(db, 'users/'), {
  //     username: 'name',
  //     email: 'email',
  //     age : 24,
  //   });

  // }

  
  return (
    <>
      <h1>App</h1>
      {/* <button onClick={writeUserData}>Add Data</button> */}

      <Auth/>
       
    </>
  )
}

export default App
