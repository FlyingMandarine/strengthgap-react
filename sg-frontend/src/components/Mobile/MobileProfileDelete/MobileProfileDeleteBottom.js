import React from 'react'

import { useDispatch } from 'react-redux'
import { changeCurrentPage } from '../../../reducers/pageReducer'
import { logOutUser } from '../../../reducers/userReducer'

import loginService from '../../../services/login'
import userService from '../../../services/users'

import MobileBottomPanel from '../MobilePresentational/MobileBottomPanel'
import MobileRedButton from '../MobilePresentational/MobileRedButton'

const MobileProfileDeleteBottom = () => {
    const dispatch = useDispatch()

    const titleStyle = {
        fontSize: 22,
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

    const validateProfileDelete = (username, password) => {
        let validationFailed

        if (username.length === 0) {
            validationFailed = true
            console.log('You must enter your username in order to delete your profile.')
        }

        if (password.length === 0) {
            validationFailed = true
            console.log('You must enter your password in order to delete your profile.')
        }

        return validationFailed
    }

    // TO-DO: Give visual feedback that account has been created successfully
    // and for all validation cases (passwords not matching, etc.)
    // Also, try to have a go at hiding/showing password feature.
    const deleteProfile = async (event) => {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value

        const validationFailed = validateProfileDelete(username, password)

        if (validationFailed === true) {
            return
        }

        try {
            const userToDelete = await loginService.login({
                username: username,
                password: password,
            })

            window.localStorage.setItem(
                'loggedSGUser', JSON.stringify(userToDelete)
            )

            const storageInfo = JSON.parse(window.localStorage.getItem('loggedSGUser'))

            await userService.deleteUser(storageInfo)

            console.log('Profile successfully deleted.')

            window.localStorage.removeItem('loggedSGUser')

            dispatch(logOutUser())
            dispatch(changeCurrentPage('MobileHome'))

        } catch (exception) {
            if (exception.response.status === 401) {
                console.log('Error: No profile to delete with that username/password combination.')
            }
        }
    }

    return (
        <MobileBottomPanel bgColor={ 'white' }>
            <p style={ titleStyle }>Enter your username and password to delete your profile.</p>

            <form onSubmit={ deleteProfile }>
                <input style={ inputStyle } type='username' name='username' placeholder='Username' /><br />
                <input style={ inputStyle } type='password' name='password' placeholder='Password' /><br />
                <div style={ buttonsDivStyle }>
                    <MobileRedButton text='Delete profile' fontSize={ 16 } width={ 150 } height={ 38 } />
                </div>
            </form>
        </MobileBottomPanel>
    )
}

export default MobileProfileDeleteBottom