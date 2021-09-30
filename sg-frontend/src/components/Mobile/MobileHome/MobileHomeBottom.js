import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentPage } from '../../../reducers/pageReducer'

import sessionService from '../../../services/sessions'

import MobileBottomPanel from '../MobilePresentational/MobileBottomPanel'
import MobileBlackButton from '../MobilePresentational/MobileBlackButton'
import MobileWhiteButton from '../MobilePresentational/MobileWhiteButton'

import { MobileMuscleMapFront, MobileMuscleMapBack } from '../MobileMuscleMap/MobileMuscleMap'

const MobileHomeBottom = ({ demoInviteActive, deactivateDemo }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const session = useSelector(state => state.session)

    const bottomPanelStyle = {
        textAlign: 'center',
    }

    const percentageParaStyle = {
        fontSize: 16,
        margin: '22px 0 28px',
        fontWeight: 400,
    }

    const percentageSpanStyle = {
        fontWeight: 500,
    }

    const buttonDivStyle = {
        fontSize: 14,
        paddingTop: 20,
        lineHeight: 2.4,
        fontWeight: 500,
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
        <MobileBottomPanel bgColor={ '#f4f4f4' }>
            <div style={ bottomPanelStyle }>
                <div>
                    <p style={ percentageParaStyle }>Muscles targeted: <span style={ percentageSpanStyle } id="completionPercentage">0%</span></p>
                    <MobileMuscleMapFront
                        muscleWidth={ 132 } muscleHeight={ 256 } mapPosition={ '' }  margin={ '0 38px 0 0' }
                    />
                    <MobileMuscleMapBack
                        muscleWidth={ 132 } muscleHeight={ 256 } mapPosition={ '' }
                    />
                </div>
                <div style={ buttonDivStyle }>
                    { user === null
                        ?
                        <span>
                            <MobileBlackButton text='Log in' fontSize={ 16 } width={ 146 } height={ 38 } handleClick={ () => dispatch(changeCurrentPage('Login')) } />
                            <span style={ orStyle }>or</span>
                            <MobileWhiteButton text='Sign up' fontSize={ 16 } width={ 146 } height={ 38 } handleClick={ () => dispatch(changeCurrentPage('SignUp')) } /><br />
                            to submit your workout.
                        </span>
                        :
                        <div>
                            <MobileBlackButton text='Save session' fontSize={ 16 } width={ 255 } height={ 50 } icon={ 'fas fa-check' } handleClick={ saveSession } />
                        </div>
                    }
                </div>
            </div>
        </MobileBottomPanel>
    )
}

export default MobileHomeBottom