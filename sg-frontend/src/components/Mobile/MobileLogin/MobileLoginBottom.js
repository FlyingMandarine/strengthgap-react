import React from 'react'

import { useDispatch } from 'react-redux'
import { changeCurrentPage } from '../../../reducers/pageReducer'
import { changeUser } from '../../../reducers/userReducer'

import loginService from '../../../services/login'

import MobileBottomPanel from '../MobilePresentational/MobileBottomPanel'
import MobileBlackButton from '../MobilePresentational/MobileBlackButton'
import MobileWhiteButton from '../MobilePresentational/MobileWhiteButton'

const MobileLoginBottom = () => {
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
        <MobileBottomPanel bgColor={ 'white' }>
            <p style={ titleStyle }>User Login</p>

            <form onSubmit={ submitLogin }>
                <input style={ inputStyle } name='username' placeholder='Username' /><br />
                <input style={ inputStyle } type='password' name='password' placeholder='Password' /><br />
                <div style={ buttonsDivStyle }>
                    <MobileBlackButton text='Log in' fontSize={ 16 } width={ 130 } height={ 50 } />
                    <span style={ orStyle }>or</span>
                    <MobileWhiteButton text='Sign up' fontSize={ 16 } width={ 130 } height={ 50 } handleClick={ redirectToSignUp } />
                </div>
            </form>
        </MobileBottomPanel>
    )
}

export default MobileLoginBottom