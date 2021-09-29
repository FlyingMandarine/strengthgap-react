import React from 'react'
import { useMediaQuery } from 'react-responsive'

import { useSelector, useDispatch } from 'react-redux'
import { changeCurrentPage } from './reducers/pageReducer'
import { changeUser } from './reducers/userReducer'

import MobileLanding from './components/MobileLanding/MobileLanding'
import MobileHome from './components/MobileHome/MobileHome'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import PasswordChange from './components/PasswordChange/PasswordChange'
import ProfileDelete from './components/ProfileDelete/ProfileDelete'
import History from './components/History/History'

import DesktopHome from './components/DesktopHome/DesktopHome'

const App = () => {
    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.page)
    const user = useSelector(state => state.user)

    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isDesktop = useMediaQuery({ query: '(min-width: 1225px)' })

    // If the user is logged in and the app is restarted, we check if there is
    // a user stored in localStorage; if so, we store the username in the store.
    if (user === null && window.localStorage.getItem('loggedSGUser')) {
        const storageInfo = JSON.parse(window.localStorage.getItem('loggedSGUser'))
        dispatch(changeUser(storageInfo.username))
    }

    const changePage = () => (
        dispatch(changeCurrentPage('MobileHome'))
    )

    if (currentPage === 'MobileLanding') {
        return (
            <>
                { isMobile && <MobileLanding changePage={ changePage } /> }
                { isDesktop && <DesktopHome changePage={ changePage }/> }
            </>
        )
    } else if (currentPage === 'MobileHome') {
        return (
            <MobileHome />
        )
    } else if (currentPage === 'Login') {
        return (
            <Login />
        )
    } else if (currentPage === 'SignUp') {
        return (
            <SignUp />
        )
    } else if (currentPage === 'ChangePassword') {
        return (
            <PasswordChange />
        )
    } else if (currentPage === 'DeleteProfile') {
        return (
            <ProfileDelete />
        )
    } else if (currentPage === 'History') {
        return (
            <History />
        )
    }
}

export default App