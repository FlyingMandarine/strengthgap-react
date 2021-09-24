import React from 'react'

import { useDispatch } from 'react-redux'
import { changeCurrentPage } from '../../reducers/pageReducer'

import BottomPanel from '../presentational/BottomPanel'
import BlackButton from '../presentational/BlackButton'
import WhiteButton from '../presentational/WhiteButton'

import { MuscleMapFront, MuscleMapBack } from '../MuscleMap'

const HistoryBottom = () => {
    const dispatch = useDispatch()

    const percentageParaStyle = {
        fontSize: 16
    }

    const buttonSpanStyle = {
        fontSize: 14
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
                <span style={ buttonSpanStyle }>
                    <WhiteButton text='Delete session' handleClick={ () => console.log('Deleting...') } /> 
                    or
                    <BlackButton text='New session' handleClick={ () => dispatch(changeCurrentPage('MobileHome')) } />
                </span>
            </div>
        </BottomPanel>
    )
}

export default HistoryBottom