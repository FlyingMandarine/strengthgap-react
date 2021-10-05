import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentPage } from '../../../reducers/pageReducer'

import userService from '../../../services/users'

import DesktopLeftPanel from '../DesktopPresentational/DesktopLeftPanel'
import DesktopBlackButton from '../DesktopPresentational/DesktopBlackButton'
import DesktopBackButton from '../DesktopPresentational/DesktopBackButton'

const DesktopPasswordChangeLeft = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const titleStyle = {
        fontSize: '2.8em',
        marginTop: '46.5%',
        marginBottom: '5%',
        fontWeight: 500,
    }

    const inputStyle = {
        border: '2px solid black',
        borderRadius: 4,
        fontSize: 14,
        paddingLeft: 12,
        marginBottom: '4%',
        width: '59%',
        height: 40,
        fontWeight: 400,
    }

    const buttonsDivStyle = {
        marginTop: '4%',
    }

    const guestDivStyle = {
        fontSize: '1.8em',
        marginTop: 100,
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

            dispatch(changeCurrentPage('Home'))

        } catch (exception) {
            console.log(exception)
        }
    }

    return (
        <DesktopLeftPanel bgColor={ 'white' } paddingLeft={ 90 }>
            <DesktopBackButton />

            <p style={ titleStyle }>Change password</p>

            {
                user === 'guest'
                ?
                <div style={ guestDivStyle }>You cannot change your password while logged in as a guest.</div>
                :
                <form onSubmit={ changePassword }>
                    <input style={ inputStyle }  type='password' name='newPassword' placeholder='New Password' /><br />
                    <input style={ inputStyle }  type='password' name='confirmNewPassword' placeholder='Confirm New Password' /><br />
                    <div style={ buttonsDivStyle }>
                        <DesktopBlackButton text='Confirm' fontSize={ '2.1em' } width={ '25%' } height={ 56 } />
                    </div>
                </form>
            }

        </DesktopLeftPanel>
    )
}

export default DesktopPasswordChangeLeft