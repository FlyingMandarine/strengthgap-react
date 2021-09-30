import React from 'react'

import { useDispatch } from 'react-redux'
import { changeCurrentPage } from '../../../reducers/pageReducer'
import { changeUser } from '../../../reducers/userReducer'

import loginService from '../../../services/login'

import DesktopLeftPanel from '../DesktopPresentational/DesktopLeftPanel'
import DesktopBlackButton from '../DesktopPresentational/DesktopBlackButton'
import DesktopWhiteButton from '../DesktopPresentational/DesktopWhiteButton'
import DesktopBackButton from '../DesktopPresentational/DesktopBackButton'

const DesktopLoginLeft = () => {
    const dispatch = useDispatch()

    const titleStyle = {
        fontSize: 28,
        marginTop: 280,
        marginBottom: 30,
        fontWeight: 500,
    }

    const inputStyle = {
        border: '2px solid black',
        borderRadius: 4,
        fontSize: 14,
        paddingLeft: 12,
        marginBottom: 24,
        width: 360,
        height: 40,
        fontWeight: 400,
    }

    const buttonsDivStyle = {
        fontSize: 17,
        marginTop: 26,
    }

    const orStyle = {
        margin: '0 21px',
        fontWeight: 500,
    }

    const submitLogin = async (event) => {
        event.preventDefault()

        try {
            const userToLogIn = await loginService.login({
                username: event.target.username.value,
                password: event.target.password.value,
            })

            window.localStorage.setItem(
                'loggedSGUser', JSON.stringify(userToLogIn)
            )

            dispatch(changeUser(event.target.username.value))
            dispatch(changeCurrentPage('Home'))

        } catch (exception) {
            console.log(exception)
        }
    }

    const redirectToSignUp = (event) => {
        event.preventDefault()
        dispatch(changeCurrentPage('SignUp'))
    }

    return (
        <DesktopLeftPanel bgColor={ 'white' } paddingLeft={ 90 }>
            <DesktopBackButton />

            <p style={ titleStyle }>User Login</p>

            <form onSubmit={ submitLogin }>
                <input style={ inputStyle } name='username' placeholder='Username' /><br />
                <input style={ inputStyle } type='password' name='password' placeholder='Password' /><br />
                <div style={ buttonsDivStyle }>
                    <DesktopBlackButton text='Log in' fontSize={ 21 } width={ 150 } height={ 56 } />
                    <span style={ orStyle }>or</span>
                    <DesktopWhiteButton text='Sign up' fontSize={ 21 } width={ 150 } height={ 56 } handleClick={ redirectToSignUp } />
                </div>
            </form>
        </DesktopLeftPanel>
    )
}

export default DesktopLoginLeft