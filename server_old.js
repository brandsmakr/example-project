const express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require('./database/db')

const mongoose = require('mongoose')
mongoose.pluralize(null)


var Schema = mongoose.Schema;

var empSchema = new Schema({
     name:{type:String,required:true,unique:true},
     fname:{type:String,required:true,unique:true},
     location:String
})
var employee  = mongoose.model('Employee',empSchema)
module.exports = employee



app.post("/addEmployee",function(req,res){
    var empData = new employee(req.body)
    // console.log(empData)
    empData.save().then(item=>{
        res.send("User added Successfully")
    }).catch(err=>{
        res.send("something went wrong !!!!!" + err)
    })
})

app.get("/getEmployee",function(req,res){

    employee.find(function(err,result){
        if(!err)
        {
            res.send(result)
        }
        else
        {
            res.send("something went wrong !!!!" + err)
        }
    })
}),
app.get("/getEmployee/:id",function(req,res){
   employee.findById({_id:req.params.id},function(err,result){
        if(!err)
        {
            res.send(result)
        }
        else
        {
            res.send("something went wrong !!!!" + err)
        }
    })
}),

app.put("/updateEmployee/:id",async(req,res)=>{

   await employee.findByIdAndUpdate({
        _id:req.params.id
    },req.body,{
        new:true
    }).then(data=>{
        res.send(data)
    }).catch(err=>{
        res.send("Error hai" +err)
    })
})

app.delete("/deleteEmployee/:id",async(req,res)=>{

    await employee.findByIdAndDelete({
         _id:req.params.id
    }).then(data=>{
         res.send("user deleted successfully")
     }).catch(err=>{
         res.send("Error hai" +err)
     })
 })










app.listen(1212,()=>{
    console.log("your server running on port 1212")
})