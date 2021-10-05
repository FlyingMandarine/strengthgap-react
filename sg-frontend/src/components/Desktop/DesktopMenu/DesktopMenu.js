import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeCurrentPage } from '../../../reducers/pageReducer'
import { logOutUser } from '../../../reducers/userReducer'

const DesktopMenu = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const [ menuOpen, setMenuOpen ] = useState(false)

    const menuOpenStyle = {
        position: 'absolute',
        top: 34,
        right: 43,
        fontSize: '3.5em',
        marginTop: 0,
        cursor: 'pointer',
    }

    const menuCloseStyle = {
        position: 'absolute',
        top: 34,
        right: 47,
        fontSize: '3.5em',
        marginTop: 0,
        cursor: 'pointer',
    }

    const textStyle = {
        position: 'absolute',
        top: 40,
        right: '9%',
    }

    const smallTextStyle = {
        fontSize: '1.9em',
        marginLeft: 50,
        cursor: 'pointer',
        fontWeight: 500,
        verticalAlign: 'middle',
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
                <i style={ menuOpenStyle } className='fas fa-bars' onClick={ toggleMenu } />
                :
                <>
                    {
                        user !== null &&
                        <div style={ textStyle }>
                            <span style={ smallTextStyle } onClick={ logOut }>log out</span>
                            <span style={ smallTextStyle } onClick={ () => dispatch(changeCurrentPage('ChangePassword')) }>change password</span>
                            <span style={ smallTextStyle } onClick={ () => dispatch(changeCurrentPage('DeleteProfile')) }>delete profile</span>
                        </div>
                    }
                    <i style={ menuCloseStyle } className='fas fa-times' onClick={ toggleMenu } />
                </>
            }
        </>
    )
}

export default DesktopMenu