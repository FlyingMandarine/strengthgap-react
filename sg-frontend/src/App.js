import React from 'react'
import { useMediaQuery } from 'react-responsive'

import { useSelector, useDispatch } from 'react-redux'
import { changeUser } from './reducers/userReducer'

import MobileLanding from './components/Mobile/MobileLanding/MobileLanding'
import MobileHome from './components/Mobile/MobileHome/MobileHome'
import MobileLogin from './components/Mobile/MobileLogin/MobileLogin'
import MobileSignUp from './components/Mobile/MobileSignUp/MobileSignUp'
import MobilePasswordChange from './components/Mobile/MobilePasswordChange/MobilePasswordChange'
import MobileProfileDelete from './components/Mobile/MobileProfileDelete/MobileProfileDelete'
import MobileHistory from './components/Mobile/MobileHistory/MobileHistory'

import DesktopHome from './components/Desktop/DesktopHome/DesktopHome'
import DesktopLogin from './components/Desktop/DesktopLogin/DesktopLogin'
import DesktopSignUp from './components/Desktop/DesktopSignUp/DesktopSignUp'
import DesktopPasswordChange from './components/Desktop/DesktopPasswordChange/DesktopPasswordChange'
import DesktopProfileDelete from './components/Desktop/DesktopProfileDelete/DesktopProfileDelete'
import DesktopHistory from './components/Desktop/DesktopHistory/DesktopHistory'

const App = () => {
    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.page)
    const user = useSelector(state => state.user)

    const isMobile = useMediaQuery({ query: '(max-width: 800px)' })
    const isDesktop = useMediaQuery({ query: '(min-width: 801px)' })

    // If the user is logged in and the app is restarted, we check if there is
    // a user stored in localStorage; if so, we store the username in the store.
    if (user === null && window.localStorage.getItem('loggedSGUser')) {
        const storageInfo = JSON.parse(window.localStorage.getItem('loggedSGUser'))
        dispatch(changeUser(storageInfo.username))
    }

    if (currentPage === 'MobileLanding') {
        return (
            <>
                { isMobile && <MobileLanding /> }
                { isDesktop && <DesktopHome /> }
            </>
        )
    } else if (currentPage === 'Home') {
        return (
            <>
                { isMobile && <MobileHome /> }
                { isDesktop && <DesktopHome /> }
            </>
        )
    } else if (currentPage === 'Login') {
        return (
            <>
                { isMobile && <MobileLogin /> }
                { isDesktop && <DesktopLogin /> }
            </>
        )
    } else if (currentPage === 'SignUp') {
        return (
            <>
                { isMobile && <MobileSignUp /> }
                { isDesktop && <DesktopSignUp /> }
            </>
        )
    } else if (currentPage === 'ChangePassword') {
        return (
            <>
                { isMobile && <MobilePasswordChange /> }
                { isDesktop && <DesktopPasswordChange /> }
            </>
        )
    } else if (currentPage === 'DeleteProfile') {
        return (
            <>
                { isMobile && <MobileProfileDelete /> }
                { isDesktop && <DesktopProfileDelete /> }
            </>
        )
    } else if (currentPage === 'History') {
        return (
            <>
                { isMobile && <MobileHistory /> }
                { isDesktop && <DesktopHistory /> }
            </>
        )
    }
}

export default App