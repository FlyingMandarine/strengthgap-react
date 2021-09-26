const Session = require('../models/session')
const User = require('../models/user')

const initialUsers = [
    {
        username: 'FlyingTest1',
        password: 'test123'
    },
    {
        username: 'FlyingTest2',
        password: 'testabc'
    },
    {
        username: 'FlyingTest3',
        password: 'testABC'
    },
]

const initialSessions = [
    {
        username: 'FlyingTest1',
        exercises: [
            'Ab Wheel Rollout',
            'Behind The Back Cable Curl',
            'Bent Arm Barbell Pullover'
        ],
        percent: '21%',
        date: Date.now()
    },
    {
        username: 'FlyingTest1',
        exercises: [],
        percent: '0%',
        date: Date.now()
    },
    {
        username: 'FlyingTest1',
        exercises: [
            'Ab Wheel Rollout',
            'Cable Pull Through',
            'Clean and Jerk',
            'Behind The Back Cable Curl',
            'Box Squat',
            'Bench Pin Press',
            'Bent Over Row',
            'Bench Dips'
        ],
        percent: '84%',
        date: Date.now()
    },
    {
        username: 'FlyingTest2',
        exercises: [
            'Ab Wheel Rollout',
            'Cable Pull Through',
            'Clean and Jerk',
            'Behind The Back Cable Curl',
            'Box Squat',
            'Bench Pin Press',
            'Bent Over Row',
            'Bench Dips'
        ],
        percent: '84%',
        date: Date.now()
    },
    {
        username: 'FlyingTest3',
        exercises: [
            'Ab Wheel Rollout',
            'Cable Pull Through',
            'Clean and Jerk',
            'Behind The Back Cable Curl',
            'Box Squat',
            'Bench Pin Press',
            'Bent Over Row',
            'Bench Dips'
        ],
        percent: '84%',
        date: Date.now()
    }
]

const usersInDb = async () => {
    const users = await User.find({})
    return users.map(u => u.toJSON())
}

const sessionsInDb = async () => {
    const sessions = await Session.find({})
    return sessions.map(s => s.toJSON())
}

module.exports = {
    initialUsers,
    initialSessions,
    usersInDb,
    sessionsInDb,
}