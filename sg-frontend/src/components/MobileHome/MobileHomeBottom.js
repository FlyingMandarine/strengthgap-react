import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentPage } from '../../reducers/pageReducer'

import BottomPanel from '../presentational/BottomPanel'
import BlackButton from '../presentational/BlackButton'
import WhiteButton from '../presentational/WhiteButton'

import { MuscleMapFront, MuscleMapBack } from '../MuscleMap'
import DemoInvite from '../Menu/DemoInvite'

const MobileHomeBottom = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const percentageParaStyle = {
        fontSize: 16
    }

    const buttonSpanStyle = {
        fontSize: 14
    }

    return (
        <BottomPanel>
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
                        <DemoInvite />
                    </span>
                    :
                    <BlackButton text='Save session' />
                }
            </div>
        </BottomPanel>
    )
}

export default MobileHomeBottom