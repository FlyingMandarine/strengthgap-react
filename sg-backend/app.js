const express = require('express')
const app = express()

const usersRouter = require('./controllers/users')
const workoutsRouter = require('./controllers/workouts')

app.use(express.static('build'))

app.use('/api/users', usersRouter)
app.use('/api/workouts', workoutsRouter)

module.exports = app