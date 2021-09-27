import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentPage } from '../../reducers/pageReducer'

import sessionService from '../../services/sessions'

import BottomPanel from '../presentational/BottomPanel'
import BlackButton from '../presentational/BlackButton'
import WhiteButton from '../presentational/WhiteButton'

import { MuscleMapFront, MuscleMapBack } from '../MuscleMap'
import DemoInvite from '../Menu/DemoInvite'

const MobileHomeBottom = ({ demoInviteActive, deactivateDemo }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const session = useSelector(state => state.session)

    const percentageParaStyle = {
        fontSize: 16
    }

    const buttonSpanStyle = {
        fontSize: 14
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
                <p style={ percentageParaStyle }>Muscles targeted: <span id="completionPercentage">0%</span></p>
                <MuscleMapFront
                    muscleWidth={132} muscleHeight={256} mapPosition={''}
                />
                <MuscleMapBack
                    muscleWidth={132} muscleHeight={256} mapPosition={''}
                />
            </div>
            <div>
                { user === null
                    ?
                    <span style={ buttonSpanStyle }>
                        <BlackButton text='Log in' handleClick={ () => dispatch(changeCurrentPage('Login')) } /> 
                        or
                        <WhiteButton text='Sign up' handleClick={ () => dispatch(changeCurrentPage('SignUp')) } />
                        {
                            demoInviteActive === true && <DemoInvite deactivateDemo={ deactivateDemo } />
                        }
                    </span>
                    :
                    <BlackButton text='Save session' handleClick={ saveSession } />
                }
            </div>
        </BottomPanel>
    )
}

export default MobileHomeBottom