import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeCurrentPage } from '../../reducers/pageReducer'
import { logOutUser } from '../../reducers/userReducer'

import { customTurquoise } from '../utils/colors'

const Menu = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const [ menuOpen, setMenuOpen ] = useState(false)

    const largeIconStyle = {
        padding: '18px 15px',
        fontSize: 27
    }

    const smallIconStyle = {
        //padding: '18px 15px',
        fontSize: 17
    }

    const largeTextStyle = {
        fontSize: 22
    }

    const smallTextStyle = {
        fontSize: 19
    }

    const outerDivStyle = {
        position: 'absolute',
        height: 595,
        width: '100%',
        color: 'white',
        backgroundColor: 'black',
    }

    const innerDivStyle = {
        marginLeft: 50,
        position: 'relative'
    }

    const topDivStyle = {

    }

    const bottomDivStyle = {
        position: 'absolute',
        top: 0
    }

    const buttonStyle = {
        position: 'absolute',
        right: 0,
    }

    const homeDivStyle = {
        fontSize: 22,
        margin: '136px 0 24px 0'
    }

    const demoInviteDivStyle = {
        backgroundColor: customTurquoise
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const logOut = () => {
        window.localStorage.removeItem('loggedSGUser')
        dispatch(logOutUser())
        setMenuOpen(false)
    }

    return (
        <>
        { menuOpen === false
            ?
            <span style={ buttonStyle } onClick={ toggleMenu }><i style={ largeIconStyle } className='fas fa-bars' /></span>
            :
            <div style={ outerDivStyle }>
                <span style={ buttonStyle } onClick={ toggleMenu }><i style={ largeIconStyle } className='fas fa-times' /></span>
                <div style={ innerDivStyle }>
                    <div style={ topDivStyle }>
                        {
                            user === null
                                ?
                                <div style={ homeDivStyle } onClick={ () => dispatch(changeCurrentPage('MobileHome')) }><i style={ smallIconStyle } className='fas fa-home' />Home</div>
                                :
                                <>
                                    <div style={ homeDivStyle } onClick={ () => dispatch(changeCurrentPage('MobileHome')) }><i style={ smallIconStyle } className='fas fa-home' />Home</div>
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
                                    <div style={ demoInviteDivStyle }>Employer? Try this demo account.</div> 
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
            </div>
        }
        </>
    )
}

export default Menu