import GetAllData from './GetAllData';
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

async function DeleteCustomer(a){
    const response = await fetch(`http://localhost:3030/delete/${a}`, { method: 'DELETE'});
    { ReactDOM.createRoot(document.getElementById('root')).render(<GetAllData/>)};
   document.querySelector("#content").innerHTML =`Successfully deleted !`
  }

  export default DeleteCustomer;
