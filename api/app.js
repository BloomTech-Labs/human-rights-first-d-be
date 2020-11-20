//libarise
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const helmet = require('helmet')
const swaggerUi = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')
const jsdocConfig = require('../config/jsdoc')
const dotenv = require('dotenv')
const config_result = dotenv.config()

if (process.env.NODE_ENV != 'production' && config_result.error) {
  throw config_result.error
}

const swaggerSpec = swaggerJSDoc(jsdocConfig)
const swaggerUIOptions = {
  explorer: true,
}

//Routers 
const ds_server = require('./ds_server/ds_server_router')

//server start
const app = express()

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at: Promise', p, 'reason:', reason)
  // application specific logging, throwing an error, or other logic here
})

// connect middleware to server
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, swaggerUIOptions)
)
app.use(helmet())
app.use(express.json())
app.use(
  cors({
    origin: '*',
  })
)
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use('/ds_server', ds_server)

// Global 500 error catcher
app.use((err, req, res, next) => {
  res.status(500).json({ err })
})

// Welcome message
app.get('/', async (req, res) => {
  res.send('<h1> Server is live</h1> <a href="https://documenter.getpostman.com/view/11996006/TVeiCqJq">Postman Documentation</a> <a href="https://github.com/Lambda-School-Labs/human-rights-first-d-be">Github repo</a>')
})

module.exports = app
