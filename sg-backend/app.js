const config = require('./utils/config')
const express = require('express')
const app = express()

const usersRouter = require('./controllers/users')
const workoutsRouter = require('./controllers/workouts')

const mongoose = require('mongoose')

console.log(`connecting to ${config.MONGODB_URI}`)

mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true
}).then(() => {
    console.log('Connected to MongoDB')
}).catch((error) => {
    console.log('Error connecting to MongoDB:', error.message)
})

app.use(express.static('build'))
app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/workouts', workoutsRouter)

if (process.env.NODE_ENV === 'test') {
    const testingRouter = require('./controllers/testing')
    app.use('/api/testing', testingRouter)
}

module.exports = app