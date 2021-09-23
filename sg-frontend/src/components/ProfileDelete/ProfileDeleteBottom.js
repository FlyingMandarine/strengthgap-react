import React from 'react'

import { useDispatch } from 'react-redux'
import { changeCurrentPage } from '../../reducers/pageReducer'
import { logOutUser } from '../../reducers/userReducer'

import BottomPanel from '../presentational/BottomPanel'
import RedButton from '../presentational/RedButton'

import loginService from '../../services/login'
import userService from '../../services/users'

const ProfileDeleteBottom = () => {
    const dispatch = useDispatch()

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
        <BottomPanel>
            <p>Are you sure you want to delete your profile?</p>

            <form onSubmit={ deleteProfile }>
                <input type='username' name='username' placeholder='Username' /><br />
                <input type='password' name='password' placeholder='Password' /><br />
                <RedButton text='Delete profile' />
            </form>
        </BottomPanel>
    )
}

export default ProfileDeleteBottom