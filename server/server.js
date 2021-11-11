const path = require('path')
const express = require('express')

const routes = require('./routes/routes')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/home', routes) // api/v1/home

module.exports = server
