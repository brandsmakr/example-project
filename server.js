const express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require('./database/db')

// const mongoose = require('mongoose')
// mongoose.pluralize(null)

//routes manage
const empRoute = require('./routes/employee')
app.use('/employee',empRoute)

app.listen(8888,()=>{
    console.log("your server running on port 8888")
}) 