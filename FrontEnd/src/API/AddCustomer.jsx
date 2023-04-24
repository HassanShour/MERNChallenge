import GetAllData from './GetAllData';
import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

//Number Verification Key
const myHeaders = new Headers();
myHeaders.append("apikey", "R0vk1wcrJZX59g7QgH6Bdlc3Zcn11Jjo");
const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };
  
async function AddCustomer(x,y,z){

    const response = await fetch(`https://api.apilayer.com/number_verification/validate?number=${x}`, requestOptions);
    const data = await response.json()
  if(data.valid){
  axios.post('http://localhost:3030/AddCustomer', {
  phone: x,
  address:z,
  name: y
  })
  .then((response) => {
    document.querySelector("#content").innerHTML =` Successfully created to database:</br>The country code is: ${data.country_prefix}</br>The country name is: ${data.country_name}</br>The operator name is: ${data.carrier}`;
  })
  .then( ReactDOM.createRoot(document.getElementById('root')).render(<GetAllData/>)) 
  .then( ReactDOM.createRoot(document.getElementById('root')).render(<GetAllData/>)) 
  .catch((error) => {
  console.error(error);
  });}
  else
  document.querySelector("#content").innerHTML =`Please enter a valid phone number, name, and address !`
  }

  export default AddCustomer;