import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentPage } from '../../../reducers/pageReducer'
import { logOutUser } from '../../../reducers/userReducer'

import loginService from '../../../services/login'
import userService from '../../../services/users'

import DesktopLeftPanel from '../DesktopPresentational/DesktopLeftPanel'
import DesktopBlackButton from '../DesktopPresentational/DesktopBlackButton'
import DesktopBackButton from '../DesktopPresentational/DesktopBackButton'

const DesktopProfileDeleteLeft = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const titleStyle = {
        fontSize: '2.8em',
        marginTop: '46.5%',
        marginBottom: '5%',
        lineHeight: 1.3,
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
        fontSize: '2em',
        marginTop: 100,
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

            <p style={ titleStyle }>Enter your username and password<br />to delete your profile.</p>

            {
                user === 'guest'
                ?
                <div style={ guestDivStyle }>You cannot delete your guest account.</div>
                :
                <form onSubmit={ deleteProfile }>
                    <input style={ inputStyle } type='username' name='username' placeholder='Username' /><br />
                    <input style={ inputStyle } type='password' name='password' placeholder='Password' /><br />
                    <div style={ buttonsDivStyle }>
                        <DesktopBlackButton text='Delete profile' fontSize={ '2.1em' } width={ '25%' } height={ 56 } />
                    </div>
                </form>
            }

        </DesktopLeftPanel>
    )
}

export default DesktopProfileDeleteLeft