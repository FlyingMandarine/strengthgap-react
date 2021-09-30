import React from 'react'

import { useDispatch } from 'react-redux'
import { changeCurrentPage } from '../../../reducers/pageReducer'
import { logOutUser } from '../../../reducers/userReducer'

import loginService from '../../../services/login'
import userService from '../../../services/users'

import DesktopLeftPanel from '../DesktopPresentational/DesktopLeftPanel'
import DesktopBlackButton from '../DesktopPresentational/DesktopBlackButton'
import DesktopBackButton from '../DesktopPresentational/DesktopBackButton'

const DesktopProfileDeleteLeft = () => {
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
            dispatch(changeCurrentPage('Home'))

        } catch (exception) {
            if (exception.response.status === 401) {
                console.log('Error: No profile to delete with that username/password combination.')
            }
        }
    }

    return (
        <DesktopLeftPanel bgColor={ 'white' } paddingLeft={ 90 }>
            <DesktopBackButton />

            <p style={ titleStyle }>Enter your username and password to delete your profile.</p>

            <form onSubmit={ deleteProfile }>
                <input style={ inputStyle } type='username' name='username' placeholder='Username' /><br />
                <input style={ inputStyle } type='password' name='password' placeholder='Password' /><br />
                <div style={ buttonsDivStyle }>
                    <DesktopBlackButton text='Delete profile' fontSize={ 21 } width={ 150 } height={ 56 } />
                </div>
            </form>
        </DesktopLeftPanel>
    )
}

export default DesktopProfileDeleteLeft