const express = require('express')
const router = express.Router()
const empController =  require('../app/api/controller/empController')


router.post("/addEmployee",empController.create)




module.exports = router