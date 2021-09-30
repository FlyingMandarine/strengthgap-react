import React from 'react'
import { useMediaQuery } from 'react-responsive'

import { useSelector, useDispatch } from 'react-redux'
import { changeCurrentPage } from './reducers/pageReducer'
import { changeUser } from './reducers/userReducer'

import MobileLanding from './components/Mobile/MobileLanding/MobileLanding'
import MobileHome from './components/Mobile/MobileHome/MobileHome'
import MobileLogin from './components/Mobile/MobileLogin/MobileLogin'
import MobileSignUp from './components/Mobile/MobileSignUp/MobileSignUp'
import MobilePasswordChange from './components/Mobile/MobilePasswordChange/MobilePasswordChange'
import MobileProfileDelete from './components/Mobile/MobileProfileDelete/MobileProfileDelete'
import MobileHistory from './components/Mobile/MobileHistory/MobileHistory'

import DesktopHome from './components/Desktop/DesktopHome/DesktopHome'

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
            <MobileLogin />
        )
    } else if (currentPage === 'SignUp') {
        return (
            <MobileSignUp />
        )
    } else if (currentPage === 'ChangePassword') {
        return (
            <MobilePasswordChange />
        )
    } else if (currentPage === 'DeleteProfile') {
        return (
            <MobileProfileDelete />
        )
    } else if (currentPage === 'History') {
        return (
            <MobileHistory />
        )
    }
}

export default App