const express = require('express')
const routes = express.Router()
const UserController = require ('./controllers/UserController')
const LoginController = require('./controllers/LoginController')

routes.get('/status', (req, res) => {
	res.send({ status: 200 })
})

//Login
routes.post('/login', LoginController.store)

//User
routes.post('/user/register', UserController.createUser)
routes.get('/user/:userId', UserController.getUserById)


module.exports = routes