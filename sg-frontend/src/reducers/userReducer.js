export const changeUser = (user) => {
    return {
        type: 'LOGGED IN',
        user: user,
    }
}

export const logOutUser = () => {
    return {
        type: 'LOGGED OUT',
    }
}

export const activateDemoMode = () => {
    return {
        type: 'ACTIVATE DEMO',
        user: 'guest',
    }
}

const userReducer = (state = null, action) => {
    switch (action.type) {
        case 'LOGGED IN':
            return action.user
        case 'LOGGED OUT':
            return null
        case 'ACTIVATE DEMO':
            return action.user
        default:
            return state
    }

}

export default userReducer