export const changeUser = (user) => {
    return {
        type: 'LOGGED IN',
        user: user,
    }
}

export const logOutUser = () => {
    return {
        type: 'LOGGED OUT'
    }
}

const userReducer = (state = null, action) => {
    switch (action.type) {
        case 'LOGGED IN':
            return action.user
        case 'LOGGED OUT':
            return null
        default:
            return state
    }

}

export default userReducer