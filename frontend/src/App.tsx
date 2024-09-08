import { useEffect, useState } from 'react'
import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


const App:React.FC=() =>{

    const [ItemsList, setItemsList] = useState([]);

      useEffect(()=>{
        const fetchItems = async () => {
        fetch("http://localhost:8000/api/product")
        .then((res) => res.json())
        .then((data) => {
          console.log("data");
          console.log(data);
         
          setItemsList(data);
          console.log("data2");
          console.log(data);
        }
        );
        };

        fetchItems();
       
      
       },[ItemsList]);

    

  return (
    <>

    <h1 className="text-3xl font-bold underline">
      Hello world!
      {ItemsList.map((item:any) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </div>
      ))}
    </h1>
     
    </>
  )
}

export default App
