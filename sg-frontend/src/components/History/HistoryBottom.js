import React from 'react'

import { useDispatch } from 'react-redux'
import { changeCurrentPage } from '../../reducers/pageReducer'
import { logOutUser } from '../../reducers/userReducer'

import removeService from '../../services/sessions'

import BottomPanel from '../presentational/BottomPanel'
import BlackButton from '../presentational/BlackButton'
import WhiteButton from '../presentational/WhiteButton'

import { MuscleMapFront, MuscleMapBack } from '../MuscleMap'

const HistoryBottom = ({ history, updateHistory, currentSession, setNewSession }) => {
    const dispatch = useDispatch()

    const percentageParaStyle = {
        fontSize: 16
    }

    const percentageSpanStyle = {
        color: '#909090'
    }

    const buttonSpanStyle = {
        fontSize: 14
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
        <BottomPanel bgColor={ '#f4f4f4' }>
            <div>
                <p style={ percentageParaStyle }>Muscles targeted: <span style={ percentageSpanStyle } id="completionPercentage">0%</span></p>
                <MuscleMapFront
                    muscleWidth={132} muscleHeight={256} mapPosition={''}
                />
                <MuscleMapBack
                    muscleWidth={132} muscleHeight={256} mapPosition={''}
                />
            </div>
            <div>
                <span style={ buttonSpanStyle }>
                    {
                        currentSession.length === 0 ?
                            <WhiteButton text='Delete session' disabled={ true } />:
                            <WhiteButton text='Delete session' handleClick={ deleteSession } />
                    }
                    or
                    <BlackButton text='New session' handleClick={ () => dispatch(changeCurrentPage('MobileHome')) } />
                </span>
            </div>
        </BottomPanel>
    )
}

export default HistoryBottom