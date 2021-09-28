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

    const titleStyle = {
        fontSize: 24,
        marginTop: 50,
        marginBottom: 30,
    }

    const inputStyle = {
        border: '1px solid darkblue',
        borderRadius: 4,
        paddingLeft: 12,
        marginBottom: 24,
        width: '100%',
        height: 40,
    }

    const buttonsDivStyle = {
        fontSize: 16,
        marginTop: 26,
    }

    const orStyle = {
        margin: '0 25px',
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
            <p style={ titleStyle }>User Login</p>

            <form onSubmit={ submitLogin }>
                <input style={ inputStyle } name='username' placeholder='Username' /><br />
                <input style={ inputStyle } type='password' name='password' placeholder='Password' /><br />
                <div style={ buttonsDivStyle }>
                    <BlackButton text='Log in' fontSize={ 16 } width={ 130 } height={ 50 } />
                    <span style={ orStyle }>or</span>
                    <WhiteButton text='Sign up' fontSize={ 16 } width={ 130 } height={ 50 } handleClick={ redirectToSignUp } />
                </div>
            </form>
        </BottomPanel>
    )
}

export default LoginBottom