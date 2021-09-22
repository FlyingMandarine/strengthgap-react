export const changeUser = (user) => {
    return {
        type: 'Logged',
        user: user,
    }
}

const userReducer = (state = null, action) => {
    switch (action.type) {
        case 'Logged':
            return action.user
        default:
            return state
    }

}

export default userReducer