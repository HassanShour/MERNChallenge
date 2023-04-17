import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { useState} from "react";
import './index.css';
import GetAllData from './API/GetAllData';
import UpdateCustomer from './API/UpdateCustomer';
import AddCustomer from './API/AddCustomer';
import DeleteCustomer from './API/DeleteCustomer';
import Title from './title';



const root = ReactDOM.createRoot(document.getElementById('Title'))
root.render(
  <React.StrictMode>

   <Title/>
   <App/>

  </React.StrictMode>
)

  
function App() {
  const [numberInputValue, setnumberInputValue] = useState("");
  const [nameInputValue, setnameInputValue] = useState("");
  const [addressInputValue, setaddressInputValue] = useState("");
  const [id, setid] = useState("");

  const x = numberInputValue;
  const y = nameInputValue;
  const z = addressInputValue;
  const a = id;


  return (
    <>
    <label >Mobile Number :   
      <input
        className='input-field'
        type="text"
        value={numberInputValue}
        onChange={(e) => setnumberInputValue(e.target.value)}
      />
      </label> 
      <label>Name :
      <input
        className='input-field'
        type="text"
        value={nameInputValue}
        onChange={(e) => setnameInputValue(e.target.value)}
      />
      </label>

      <label>Address :  
      <input
        className='input-field'
        type="text"
        value={addressInputValue}
        onChange={(e) => setaddressInputValue(e.target.value)}
      /><br></br>
      </label>
      <button className='delete' onClick={()=>{AddCustomer(x,y,z)}}>Add Customer</button>
      <br></br><br></br>
      
    <label>ID :  
      <input
        className='input-field'
        type="text" 
        value={id}
        onChange={(e) => setid(e.target.value)}
      /><br></br>
      </label>
    <button className='delete' type='button' onClick={()=>{DeleteCustomer(a)}}>Delete Customer </button>
    &emsp;&emsp;&emsp;
    <button className='delete' type='button' onClick={()=>{UpdateCustomer(a,x,y,z)}}>Update Customer</button>
    &emsp;&emsp;&emsp;
      <button className='delete' onClick={()=>  { ReactDOM.createRoot(document.getElementById('root')).render(<GetAllData/>)}}>Get All Data</button>
      <br></br><br></br>
    </>
    ) 
  }









