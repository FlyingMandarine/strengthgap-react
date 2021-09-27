import React from 'react'
import { useDispatch } from 'react-redux'
import { changeCurrentPage } from '../../reducers/pageReducer'

import BottomPanel from '../presentational/BottomPanel'
import BlackButton from '../presentational/BlackButton'
import WhiteButton from '../presentational/WhiteButton'

import { changeUser } from '../../reducers/userReducer'
import loginService from '../../services/login'

const LoginBottom = () => {
    const dispatch = useDispatch()

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
            dispatch(changeCurrentPage('MobileHome'))

        } catch (exception) {
            console.log(exception)
        }
    }

    const redirectToSignUp = (event) => {
        event.preventDefault()
        dispatch(changeCurrentPage('SignUp'))
    }

    return (
        <BottomPanel bgColor={ 'white' }>
            <p>User Login</p>

            <form onSubmit={ submitLogin }>
                <input name='username' placeholder='Username' /><br />
                <input type='password' name='password' placeholder='Password' /><br />
                <BlackButton text='Log in' />
                <WhiteButton text='Sign up' handleClick={ redirectToSignUp } />
            </form>
        </BottomPanel>
    )
}

export default LoginBottom