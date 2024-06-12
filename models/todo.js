const mongoose = require("mongoose")
const Schema = mongoose.Schema(
    {
        "name":String,
        "dob":String,
        "blood":String,
        "mobile":String,
        "address":String,
        "pincode":String,
        "district":String,
        "place":String,
        "email":String,
        "username":String,
        "password":String,
        "confirmpass":String
    }
)
//for todo app
let todomodel=mongoose.model("todos",Schema);
module.exports={todomodel}