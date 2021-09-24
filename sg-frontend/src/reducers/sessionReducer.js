export const updateSession = (updatedSession) => {
    return {
        type: 'UPDATE',
        updatedSession: updatedSession
    }
}

const sessionReducer = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE':
            return action.updatedSession
        default:
            return state
    }
}

export default sessionReducer