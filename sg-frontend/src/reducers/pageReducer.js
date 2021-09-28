export const changeCurrentPage = (page) => {
    return {
        type: page
    }
}

const pageReducer = (state = 'MobileLanding', action) => {
    switch (action.type) {
        case 'MobileHome':
            return 'MobileHome'
        case 'Login':
            return 'Login'
        case 'SignUp':
            return 'SignUp'
        case 'ChangePassword':
            return 'ChangePassword'
        case 'DeleteProfile':
            return 'DeleteProfile'
        case 'History':
            return 'History'
        default:
            return state
    }
}

export default pageReducer