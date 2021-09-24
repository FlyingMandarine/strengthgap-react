import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentPage } from '../../reducers/pageReducer'

import BottomPanel from '../presentational/BottomPanel'
import BlackButton from '../presentational/BlackButton'

import userService from '../../services/users'

const PasswordChangeBottom = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const validatePasswordChange = (newPassword, confirmNewPassword) => {
        let validationFailed

        if (newPassword.length < 8) {
            validationFailed = true
            console.log('Your new password must be at least 8 characters long.')
        }

        if (newPassword !== confirmNewPassword) {
            validationFailed = true
            console.log('Your passwords do not match.')
        }

        return validationFailed
    }

    // TO-DO: Give visual feedback that account has been created successfully
    // and for all validation cases (passwords not matching, etc.)
    // Also, try to have a go at hiding/showing password feature.
    const changePassword = async (event) => {
        event.preventDefault()

        const newPassword = event.target.newPassword.value
        const confirmNewPassword = event.target.confirmNewPassword.value

        const validationFailed = validatePasswordChange(newPassword, confirmNewPassword)

        if (validationFailed === true) {
            return
        }

        const userToUpdate = {
            username: user,
            password: newPassword,
        }

        const storageInfo = JSON.parse(window.localStorage.getItem('loggedSGUser'))

        try {
            await userService.updateUser(storageInfo, userToUpdate)

            dispatch(changeCurrentPage('MobileHome'))

        } catch (exception) {
            console.log(exception)
        }
    }

    return (
        <BottomPanel bgColor={ 'white' }>
            <p>Change password</p>

            <form onSubmit={ changePassword }>
                <input type='password' name='newPassword' placeholder='New Password' /><br />
                <input type='password' name='confirmNewPassword' placeholder='Confirm New Password' /><br />
                <BlackButton text='Confirm' />
            </form>
        </BottomPanel>
    )
}

export default PasswordChangeBottom