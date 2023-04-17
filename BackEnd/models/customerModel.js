const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const customerSchema = mongoose.Schema(
{
    name: {
        type: String,
        required: [true,"Please enter a name"]
    },
    address:{
        type: String,
        required: [true,"Please enter a address"]
    },
    phone:{
        type: Number,
        required: [true,"Please enter a phone number"]
    }
},
    {
    Timestamp:true
    }
)

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;