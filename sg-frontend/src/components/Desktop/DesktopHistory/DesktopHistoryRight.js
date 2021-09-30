import React from 'react'

import { useDispatch } from 'react-redux'
import { changeCurrentPage } from '../../../reducers/pageReducer'

import removeService from '../../../services/sessions'

import DesktopRightPanel from '../DesktopPresentational/DesktopRightPanel'
import DesktopBlackButton from '../DesktopPresentational/DesktopBlackButton'
import DesktopWhiteButton from '../DesktopPresentational/DesktopWhiteButton'

import { DesktopMuscleMapFront, DesktopMuscleMapBack } from '../DesktopMuscleMap/DesktopMuscleMap'

const DesktopHistoryRight = ({ history, updateHistory, currentSession, setNewSession }) => {
    const dispatch = useDispatch()

    const bottomPanelStyle = {
        textAlign: 'center',
    }

    const percentageParaStyle = {
        fontSize: 16,
        textAlign: 'center',
        margin: '22px 0 28px',
        fontWeight: 400,
    }

    const percentageSpanStyle = {
        color: '#909090',
        fontWeight: 700,
    }

    const emptySpan = {
        margin: '0 10px',
    }

    const buttonsDivStyle = {
        marginTop: 24,
        marginLeft: -7,
        marginRight: -7,
    }

    const deleteSession = async () => {
        try {
            const storageInfo = JSON.parse(window.localStorage.getItem('loggedSGUser'))

            await removeService.removeSession(storageInfo.token, currentSession.id)

            const newHistory = history.filter(s => s.id !== currentSession.id)

            updateHistory(newHistory)
        } catch (exception) {
            // TO-DO: Make sure the UI displays this error and then logs the user out rather than simply a console log.
            if (exception.response.data.error === 'token expired') {
                console.log('Your session has expired. Please log in again to perform this action.')
            }
        }
    }

    return (
        <DesktopRightPanel bgColor={ '#f4f4f4' }>
            <div style={ bottomPanelStyle }>
                <p style={ percentageParaStyle }>Muscles targeted: <span style={ percentageSpanStyle } id="completionPercentage">0%</span></p>
                <DesktopMuscleMapFront
                    muscleWidth={132} muscleHeight={256} mapPosition={''} margin={ '0 38px 0 0' }
                />
                <DesktopMuscleMapBack
                    muscleWidth={132} muscleHeight={256} mapPosition={''}
                />
            </div>
            <div style={ buttonsDivStyle }>
                {
                    currentSession.length === 0 ?
                        <DesktopWhiteButton text='Delete session' fontSize={ 16 } width={ 160 } height={ 50 } icon={ 'fas fa-trash-alt' } disabled={ true } />:
                        <DesktopWhiteButton text='Delete session' fontSize={ 16 } width={ 160 } height={ 50 } icon={ 'fas fa-trash-alt' } handleClick={ deleteSession } />
                }
                <span style={ emptySpan }></span>
                <DesktopBlackButton text='New session' fontSize={ 16 } width={ 160 } height={ 50 } icon={ 'fas fa-plus' } handleClick={ () => dispatch(changeCurrentPage('Home')) } />
            </div>
        </DesktopRightPanel>
    )
}

export default DesktopHistoryRight