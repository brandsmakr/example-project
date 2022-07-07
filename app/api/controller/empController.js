const empModel = require('../model/empModel')


module.exports = {

    create:function(req,res){
        empModel.create(req.body,function(err){
                if(!err)
                {res.send("user added successfullt")}
                else{res.send("something went wrong!!!!"+err)}
        })





    }







}