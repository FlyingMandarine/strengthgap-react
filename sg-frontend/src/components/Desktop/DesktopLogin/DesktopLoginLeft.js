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
        fontSize: '2.8em',
        marginTop: '46.5%',
        marginBottom: '5%',
        fontWeight: 500,
    }

    const inputStyle = {
        border: '2px solid black',
        borderRadius: 4,
        fontSize: 14,
        paddingLeft: 12,
        marginBottom: 24,
        width: '59%',
        height: 40,
        fontWeight: 400,
    }

    const buttonsDivStyle = {
        marginTop: 26,
    }

    const orStyle = {
        fontSize: '1.7em',
        margin: '0 3.1%',
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
                    <DesktopBlackButton text='Log in' fontSize={ '2.1em' } width={ '25%' } height={ 56 } />
                    <span style={ orStyle }>or</span>
                    <DesktopWhiteButton text='Sign up' fontSize={ '2.1em' } width={ '25%' } height={ 56 } handleClick={ redirectToSignUp } />
                </div>
            </form>
        </DesktopLeftPanel>
    )
}

export default DesktopLoginLeft