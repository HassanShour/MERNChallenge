import GetAllData from './GetAllData';
import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

async function UpdateCustomer(a,x,y,z){

    let data = JSON.stringify({
      "name": y,
      "address": z,
      "phone": x
    });
    
    let config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: `http://localhost:3030/update/${a}`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data))
      document.querySelector("#content").innerHTML =`Successfully Updated!`
      
    })
    .then( ReactDOM.createRoot(document.getElementById('root')).render(<GetAllData/>)) 
    .catch((error) => {
      document.querySelector("#content").innerHTML =`Please enter a valid ID !`
    })
    .then( ReactDOM.createRoot(document.getElementById('root')).render(<GetAllData/>)) 
  }

  export default UpdateCustomer;