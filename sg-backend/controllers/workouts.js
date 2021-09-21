const workoutsRouter = require('express').Router()
const User = require('../models/user')

workoutsRouter.get('/', async (request, response) => {
    const users = await User.find({})

    response.send('Testing workoutsRouter...')

    response.status(200).end()
})

module.exports = workoutsRouter