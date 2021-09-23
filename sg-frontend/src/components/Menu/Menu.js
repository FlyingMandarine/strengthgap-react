import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeCurrentPage } from '../../reducers/pageReducer'
import { logOutUser } from '../../reducers/userReducer'

const Menu = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const [ menuOpen, setMenuOpen ] = useState(false)

    const divStyle = {
        position: 'absolute',
        height: 595,
        width: '100%',
        color: 'white',
        backgroundColor: 'black'
    }

    const buttonStyle = {
        position: 'absolute',
        right: 0,
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
            <button style={ buttonStyle } onClick={ toggleMenu }>OPEN</button>
            :
            <div style={ divStyle }>
                <button style={ buttonStyle } onClick={ toggleMenu }>CLOSE</button>
                <div onClick={ () => dispatch(changeCurrentPage('MobileHome')) }>Home</div>
                {
                    user === null
                        ?
                        <>
                            <div onClick={ () => dispatch(changeCurrentPage('Login')) }>Log in</div>
                            <div onClick={ () => dispatch(changeCurrentPage('SignUp')) }>Sign up</div>    
                        </>
                        :
                        <>
                            <div>History</div>
                            <div onClick={ logOut }>Log out</div>
                            <div onClick={ () => dispatch(changeCurrentPage('ChangePassword')) }>Change password</div>
                            <div onClick={ () => dispatch(changeCurrentPage('DeleteProfile')) }>Delete profile</div>
                        </>
                }
            </div>
        }
        </>
        
    )
}

export default Menu