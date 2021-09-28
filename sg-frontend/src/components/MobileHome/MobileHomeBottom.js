import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentPage } from '../../reducers/pageReducer'

import sessionService from '../../services/sessions'

import BottomPanel from '../presentational/BottomPanel'
import BlackButton from '../presentational/BlackButton'
import WhiteButton from '../presentational/WhiteButton'

import { MuscleMapFront, MuscleMapBack } from '../MuscleMap'

const MobileHomeBottom = ({ demoInviteActive, deactivateDemo }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const session = useSelector(state => state.session)

    const percentageParaStyle = {
        fontSize: 16,
        textAlign: 'center',
        margin: '22px 0 28px',
    }

    const buttonDivStyle = {
        fontSize: 14,
        paddingTop: 20,
        lineHeight: 2.4,
    }

    const orStyle = {
        margin: '0 10px'
    }

    const saveSession = async () => {
        const percentage = document.getElementById('completionPercentage').textContent
        const formattedPercentage = percentage.substring(0, percentage.length - 1)

        const sessionToSave = {
            username: user,
            exercises: session,
            percent: formattedPercentage
        }

        await sessionService.recordSession(sessionToSave)

        dispatch(changeCurrentPage('History'))
    }

    return (
        <BottomPanel bgColor={ '#f4f4f4' }>
            <div>
                <p style={ percentageParaStyle }>Muscles targeted: <strong><span id="completionPercentage">0%</span></strong></p>
                <MuscleMapFront
                    muscleWidth={ 132 } muscleHeight={ 256 } mapPosition={ '' }
                />
                <MuscleMapBack
                    muscleWidth={ 132 } muscleHeight={ 256 } mapPosition={ '' }
                />
            </div>
            <div style={ buttonDivStyle }>
                { user === null
                    ?
                    <span>
                        <BlackButton text='Log in' fontSize={ 16 } width={ 146 } height={ 38 } handleClick={ () => dispatch(changeCurrentPage('Login')) } />
                        <span style={ orStyle }>or</span>
                        <WhiteButton text='Sign up' fontSize={ 16 } width={ 146 } height={ 38 } handleClick={ () => dispatch(changeCurrentPage('SignUp')) } /><br />
                        to submit your workout.
                    </span>
                    :
                    <BlackButton text='Save session' fontSize={ 16 } width={ 150 } height={ 38 } handleClick={ saveSession } />
                }
            </div>
        </BottomPanel>
    )
}

export default MobileHomeBottom