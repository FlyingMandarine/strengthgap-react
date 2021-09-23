import React from 'react'
import { useDispatch } from 'react-redux'
import { changeCurrentPage } from '../../reducers/pageReducer'

import BottomPanel from '../presentational/BottomPanel'
import BlackButton from '../presentational/BlackButton'
import WhiteButton from '../presentational/WhiteButton'

import userService from '../../services/users'
import loginService from '../../services/login'

const SignUpBottom = () => {
    const dispatch = useDispatch()

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

            dispatch(changeCurrentPage('MobileHome'))

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
        <BottomPanel>
            <p>Sign up</p>

            <form onSubmit={ submitSignUp }>
                <input name='username' placeholder='Username' /><br />
                <input type='password' name='password' placeholder='Password' /><br />
                <input type='password' name='confirmPassword' placeholder='Confirm Password' /><br />
                <BlackButton text='Sign up' />
                <WhiteButton text='Log in' handleClick={ redirectToLogin } />
            </form>
        </BottomPanel>
    )
}

export default SignUpBottom