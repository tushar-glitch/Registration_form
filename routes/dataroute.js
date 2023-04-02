const express = require('express')
const dataController = require('../controllers/dataController')
const route = express.Router()

route.post('/',dataController.userRegistration)

module.exports = route