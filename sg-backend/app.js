const express = require('express')
const app = express()
const workoutsRouter = require('./controllers/workouts')

app.use(express.static('build'))

app.use('/api/workouts', workoutsRouter)

module.exports = app