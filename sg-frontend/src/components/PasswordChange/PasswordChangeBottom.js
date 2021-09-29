import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentPage } from '../../reducers/pageReducer'

import BottomPanel from '../presentational/BottomPanel'
import BlackButton from '../presentational/BlackButton'

import userService from '../../services/users'

const PasswordChangeBottom = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

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
            <p style={ titleStyle }>Change password</p>
            <form onSubmit={ changePassword }>
                <input style={ inputStyle }  type='password' name='newPassword' placeholder='New Password' /><br />
                <input style={ inputStyle }  type='password' name='confirmNewPassword' placeholder='Confirm New Password' /><br />
                <div style={ buttonsDivStyle }>
                    <BlackButton text='Confirm' fontSize={ 16 } width={ 130 } height={ 50 } />
                </div>
            </form>
        </BottomPanel>
    )
}

export default PasswordChangeBottom