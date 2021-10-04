import React from 'react'

import { useDispatch } from 'react-redux'
import { changeCurrentPage } from '../../../reducers/pageReducer'

import loginService from '../../../services/login'
import userService from '../../../services/users'

import DesktopLeftPanel from '../DesktopPresentational/DesktopLeftPanel'
import DesktopBlackButton from '../DesktopPresentational/DesktopBlackButton'
import DesktopWhiteButton from '../DesktopPresentational/DesktopWhiteButton'
import DesktopBackButton from '../DesktopPresentational/DesktopBackButton'

const DesktopSignUpLeft = () => {
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
        marginBottom: '4%',
        width: '59%',
        height: 40,
        fontWeight: 400,
    }

    const buttonsDivStyle = {
        marginTop: '4%',
    }

    const orStyle = {
        fontSize: '1.7em',
        margin: '0 3.1%',
        fontWeight: 500,
    }

    const validateSignUp = (username, password, confirmPassword) => {
        let validationFailed

        if (username.length < 4) {
            validationFailed = true
            console.log('Your username must be at least 4 characters long.')
        }

        if (password.length < 8) {
            validationFailed = true
            console.log('Your password must be at least 8 characters long.')
        }

        if (password !== confirmPassword) {
            validationFailed = true
            console.log('Your passwords do not match.')
        }

        return validationFailed
    }

    // TO-DO: Give visual feedback that account has been created successfully
    // and for all validation cases (passwords not matching, etc.)
    // Also, try to have a go at hiding/showing password feature.
    const submitSignUp = async (event) => {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value
        const confirmPassword = event.target.confirmPassword.value

        const validationFailed = validateSignUp(username, password, confirmPassword)

        if (validationFailed === true) {
            return
        }

        try {
            const newUser = {
                username: username,
                password: password,
            }

            await userService.createUser(newUser)

            const userToLogIn = await loginService.login(newUser)

            window.localStorage.setItem(
                'loggedSGUser', JSON.stringify(userToLogIn)
            )

            dispatch(changeCurrentPage('Home'))

        } catch (exception) {
            if (exception.response.data.error.includes('expected `username` to be unique')) {
                console.log('This username is already taken.')
            } else {
                console.log(exception)
            }
        }
    }

    const redirectToLogin = (event) => {
        event.preventDefault()
        dispatch(changeCurrentPage('Login'))
    }

    return (
        <DesktopLeftPanel bgColor={ 'white' } paddingLeft={ 90 }>
            <DesktopBackButton />

            <p style={ titleStyle }>Sign up</p>

            <form onSubmit={ submitSignUp }>
                <input style={ inputStyle } name='username' placeholder='Username' /><br />
                <input style={ inputStyle } type='password' name='password' placeholder='Password' /><br />
                <input style={ inputStyle } type='password' name='confirmPassword' placeholder='Confirm Password' /><br />
                <div style={ buttonsDivStyle }>
                    <DesktopBlackButton text='Sign up' fontSize={ '2.1em' } width={ '25%' } height={ 56 } />
                    <span style={ orStyle }>or</span>
                    <DesktopWhiteButton text='Log in' fontSize={ '2.1em' } width={ '25%' } height={ 56 } handleClick={ redirectToLogin } />
                </div>
            </form>
        </DesktopLeftPanel>
    )
}

export default DesktopSignUpLeft