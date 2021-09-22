import React from 'react'
import { useDispatch } from 'react-redux'
import { changeCurrentPage } from '../../reducers/pageReducer'

import BottomPanel from '../presentational/BottomPanel'

import { changeUser } from '../../reducers/userReducer'
import loginService from '../../services/login'

const LoginBottom = () => {
    const dispatch = useDispatch()

    const submitLogin = async (event) => {
        event.preventDefault()
        console.log('Attempting to log in...')

        try {
            const user = await loginService.login({
                username: event.target.username.value,
                password: event.target.password.value,
            })

            window.localStorage.setItem(
                'loggedSGUser', JSON.stringify(user)
            )

            dispatch(changeUser(event.target.username.value))

            console.log('User logged in successfully')

            dispatch(changeCurrentPage('MobileHome'))

        } catch (exception) {
            console.log(exception)
        }
    }

    return (
        <BottomPanel>
            <p>User Login</p>

            <form onSubmit={ submitLogin }>
                <input name='username' placeholder='Username' />

                <input type='password' name='password' placeholder='Password' />

                <div>
                    <button type='submit'>Log in</button> or <button>Sign up</button>
                </div>
            </form>

        </BottomPanel>
    )
}

export default LoginBottom