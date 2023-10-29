const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan')
const nodemon = require('nodemon')

// Middlewear
dotenv.config({ path: './config/config.env'})
require('./config/DB')
app.use(cors())
app.use(express.json())
app.use(morgan('dev')) // this is for logging

// Routes
app.use('/api/v1', require('./routes/posts'))
app.use('/api/v1', require('./routes/features'))

PORT = process.env.PORT || 8080
app.listen(PORT, console.log('SERVER RUNNING ON PORT: ${PORT}'))
