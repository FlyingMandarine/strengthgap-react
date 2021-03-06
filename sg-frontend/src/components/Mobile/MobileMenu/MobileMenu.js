import React, { useState } from 'react'

import { activateDemoMode } from '../../../reducers/userReducer'
import { useDispatch, useSelector } from 'react-redux'

import { changeCurrentPage } from '../../../reducers/pageReducer'
import { logOutUser } from '../../../reducers/userReducer'

import { customTurquoise } from '../../utils/colors'

const MobileMenu = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const [ menuOpen, setMenuOpen ] = useState(false)

    const menuOpenStyle = {
        position: 'absolute',
        right: 0,
        fontSize: 27,
        margin: '18px 19px',
        cursor: 'pointer',
    }

    const menuCloseStyle = {
        position: 'absolute',
        right: 0,
        fontSize: 27,
        margin: '18px 19px',
        cursor: 'pointer',
    }

    const smallIconStyle = {
        paddingRight: '15px',
        fontSize: 17,
        marginLeft: 50,
    }

    const largeTextStyle = {
        fontSize: 22,
        cursor: 'pointer',
        fontWeight: 500,
    }

    const smallTextStyle = {
        fontSize: 19,
        marginTop: 20,
        marginLeft: 50,
        cursor: 'pointer',
        fontWeight: 500,
    }

    const outerDivStyle = {
        position: 'absolute',
        height: 595,
        width: '100%',
        color: 'white',
        backgroundColor: 'black',
        zIndex: 1,
    }

    const topDivStyle = {
        position: 'absolute',
        top: 136
    }

    const bottomDivStyle = {
        position: 'absolute',
        bottom: 44
    }

    const homeDivStyle = {
        fontSize: 22,
        marginBottom: 24,
        cursor: 'pointer',
        //backgroundColor: '#707070',
        fontWeight: 500,
    }

    const demoInviteDivStyle = {
        backgroundColor: customTurquoise,
        width: 305,
        height: 60,
        lineHeight: 4.4,
        fontSize: 14,
        marginTop: 20,
        marginLeft: -3,
        textAlign: 'center',
        fontWeight: 400,
    }

    const demoAccountSpanStyle = {
        textDecoration: 'underline',
        cursor: 'pointer',
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const logOut = () => {
        window.localStorage.removeItem('loggedSGUser')
        window.localStorage.removeItem('loggedSGUserGuest')
        dispatch(logOutUser())
        setMenuOpen(false)
    }

    const activateDemo = () => {
        dispatch(activateDemoMode())
    }

    return (
        <>
        { menuOpen === false
            ?
            <i style={ menuOpenStyle } className='fas fa-bars' onClick={ toggleMenu } />
            :
            <div style={ outerDivStyle }>
                <i style={ menuCloseStyle } className='fas fa-times' onClick={ toggleMenu } />
                <div style={ topDivStyle }>
                    {
                        user === null
                            ?
                            <div style={ homeDivStyle } onClick={ () => dispatch(changeCurrentPage('Home')) }><i style={ smallIconStyle } className='fas fa-home' />Home</div>
                            :
                            <>
                                <div style={ homeDivStyle } onClick={ () => dispatch(changeCurrentPage('Home')) }><i style={ smallIconStyle } className='fas fa-home' />Home</div>
                                <div style={ largeTextStyle } onClick={ () => dispatch(changeCurrentPage('History')) }><i style={ smallIconStyle } className='fas fa-dumbbell' />History</div>
                            </>
                    }
                </div>
                <div style={ bottomDivStyle }>
                    {
                        user === null
                            ?
                            <>
                                <div style={ smallTextStyle } onClick={ () => dispatch(changeCurrentPage('Login')) }>Log in</div>
                                <div style={ smallTextStyle } onClick={ () => dispatch(changeCurrentPage('SignUp')) }>Sign up</div>   
                                <div style={ demoInviteDivStyle }>Employer? Try this <span style={ demoAccountSpanStyle } onClick={ activateDemo }>demo account</span>.</div> 
                            </>
                            :
                            <>
                                <div style={ smallTextStyle } onClick={ logOut }>Log out</div>
                                <div style={ smallTextStyle } onClick={ () => dispatch(changeCurrentPage('ChangePassword')) }>Change password</div>
                                <div style={ smallTextStyle } onClick={ () => dispatch(changeCurrentPage('DeleteProfile')) }>Delete profile</div>
                            </>
                    }
                </div>
            </div>
        }
        </>
    )
}

export default MobileMenu