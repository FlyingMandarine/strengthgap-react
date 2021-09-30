import React from 'react'
import { useDispatch } from 'react-redux'
import { changeCurrentPage } from '../../../reducers/pageReducer'

import userService from '../../../services/users'
import loginService from '../../../services/login'

import MobileBottomPanel from '../MobilePresentational/MobileBottomPanel'
import MobileBlackButton from '../MobilePresentational/MobileBlackButton'
import MobileWhiteButton from '../MobilePresentational/MobileWhiteButton'

const MobileSignUpBottom = () => {
    const dispatch = useDispatch()

    const titleStyle = {
        fontSize: 24,
        marginTop: 50,
        marginBottom: 30,
        fontWeight: 500,
    }

    const inputStyle = {
        border: '2px solid black',
        borderRadius: 4,
        paddingLeft: 12,
        marginBottom: 24,
        width: '100%',
        height: 40,
        fontWeight: 400,
    }

    const buttonsDivStyle = {
        fontSize: 16,
        marginTop: 26,
    }

    const orStyle = {
        margin: '0 25px',
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
        <MobileBottomPanel bgColor={ 'white' }>
            <p style={ titleStyle }>Sign up</p>

            <form onSubmit={ submitSignUp }>
                <input style={ inputStyle } name='username' placeholder='Username' /><br />
                <input style={ inputStyle } type='password' name='password' placeholder='Password' /><br />
                <input style={ inputStyle } type='password' name='confirmPassword' placeholder='Confirm Password' /><br />
                <div style={ buttonsDivStyle }>
                    <MobileBlackButton text='Sign up' fontSize={ 16 } width={ 130 } height={ 50 } />
                    <span style={ orStyle }>or</span>
                    <MobileWhiteButton text='Log in' fontSize={ 16 } width={ 130 } height={ 50 } handleClick={ redirectToLogin } />
                </div>
            </form>
        </MobileBottomPanel>
    )
}

export default MobileSignUpBottom