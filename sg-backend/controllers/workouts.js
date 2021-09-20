const workoutsRouter = require('express').Router()
const User = require('../models/User')

workoutsRouter.get('/', async (request, response) => {
    const users = await User.find({})

    response.send('Testing workoutsRouter...')
})

module.exports = workoutsRouter