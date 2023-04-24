const express = require('express')
const mongoose = require('mongoose');
const Customers = require('./models/customerModel');
const app = express()
const port = 3030;
var unirest = require('unirest');
let cors = require("cors");
app.use(cors());

app.use(express.json()); 
app.use(express.urlencoded({extended:false}));


mongoose.connect('mongodb+srv://hassan:hassanhhh@cluster0.igqmwds.mongodb.net/customers?retryWrites=true&w=majority')
  .then(() =>{
    console.log('Connected to MongoDB!')
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  })
  .catch((error) => {
    console.log(error)
  });


  app.post('/AddCustomer', async (req,res) =>{
    try {
      const customer = await Customers.create(req.body)
      res.status(200).json(customer); 
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
    }
  })



  app.get('/get', async (req,res) =>{
    try {
      const customer = await Customers.find();
      res.status(200).json(customer); 
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
    }
  })




  app.put('/update/:id', async (req,res) =>{
    try {
      const {id} = req.params;
      const customer = await Customers.findByIdAndUpdate(id, req.body);
      if(!customer){
        return res.status(404).json({message: 'Cannot find this ID in DataBase'})
      }
        res.status(200).json(Customers);  
    } catch (error) { 
      res.status(500).json({message: error.message})
    }
  })



  app.delete('/delete/:id', async (req , res) => {
    try {const {id} = req.params;
    const customer = await Customers.findByIdAndDelete(id, req.body);
    if(!customer){
      return res.status(404).json({message: 'Cannot find this ID in DataBase'})
    }
      res.status(200).json(Customers);  
      
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  })

























































































// ---------------------------------------------------------------------------------------------

//  var express = require ('express');
//  var mongoose = require ('mongoose');
//  var url = "mongodb://localhost:27017/admin";
//  var port = 3030;
//  var app = express();
//  mongoose.connect(url,{}) 
//  .then( console.log("connected"))
//  .catch(err => console.log(err))
//  let db = mongoose.connection
//  app.get('/',(req,res)=>{
//   res.send('<h1>hello</h1>')
//  })
//  app.listen(port,()=>{
//   console
//   .log("server is on port "+ port)
//  })


// //  app.get('/customers', (req, res) => {

// //     db.collection("customersInfo")
// //     .find({},(res , results)=> {
// //     if(err) throw err
// //     res.send(results)
// //   })
// // });


// app.get('/sample_analytics', (req, res) => {
        
//         let results =  db.collection("customers").find({})
//         .limit(50)
//         .toArray();
    
//       res.send(results).status(200);


//         // db.collection("customers").find({}, (err, res) => err ? console.log("error"): res.toArray().then(console.log(res.collection)))
//       });



//   app.put('/customer/edit/:id', (req, res) => {
//           return res.send('Received a PUT HTTP method');
//   });

//   app.delete('/customer/delete/:id', (req, res) => {
//           return res.send('Received a Delete HTTP method');
//   });

//   app.get('/customer/:id', (req, res) => {
//           return res.send('Received a GET HTTP method');
//   });


