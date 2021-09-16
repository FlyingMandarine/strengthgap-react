const workoutsRouter = require('express').Router()

workoutsRouter.get('/', (request, response) => {
    response.send('Testing workoutsRouter...')
})

module.exports = workoutsRouter