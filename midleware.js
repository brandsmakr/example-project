const express = require('express')
var app = express()

const loggedinMiddleware = (req,res,next)=>{
    console.log(`logged ${req.url} ${req.method} ${ new Date()}` )
    next()
}



app.use(loggedinMiddleware)

app.get('/geturl',function(req,res){
    res.send({'message':"you are welcome to get api"})
})

app.post('/posturl',function(req,res){
    res.send({'message':"you are welcome to post api"})
})



app.listen(8888,()=>{
    console.log("your server running on port 8888")
}) 