import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentPage } from '../../../reducers/pageReducer'

import MobileBottomPanel from '../MobilePresentational/MobileBottomPanel'
import MobileBlackButton from '../MobilePresentational/MobileBlackButton'
import MobileWhiteButton from '../MobilePresentational/MobileWhiteButton'

import { MobileMuscleMapFront, MobileMuscleMapBack } from '../MobileMuscleMap/MobileMuscleMap'
import { deleteSessionHelper } from '../../utils/helperFunctions'

const MobileHistoryBottom = ({ history, updateHistory, currentSession, setNewSession }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

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

    const deleteSession = async (e) => {
        e.target.style.color = 'black'
        deleteSessionHelper(history, currentSession, updateHistory, user)
    }

    return (
        <MobileBottomPanel bgColor={ '#f4f4f4' }>
            <div style={ bottomPanelStyle }>
                <p style={ percentageParaStyle }>Muscles targeted: <span style={ percentageSpanStyle } id="completionPercentage">0%</span></p>
                <MobileMuscleMapFront
                    muscleWidth={132} muscleHeight={256} mapPosition={''} margin={ '0 38px 0 0' }
                />
                <MobileMuscleMapBack
                    muscleWidth={132} muscleHeight={256} mapPosition={''}
                />
            </div>
            <div style={ buttonsDivStyle }>
                {
                    currentSession.length === 0 ?
                        <MobileWhiteButton text='Delete session' fontSize={ 16 } width={ 160 } height={ 50 } icon={ 'fas fa-trash-alt' } disabled={ true } />:
                        <MobileWhiteButton text='Delete session' fontSize={ 16 } width={ 160 } height={ 50 } icon={ 'fas fa-trash-alt' } handleClick={ deleteSession } />
                }
                <span style={ emptySpan }></span>
                <MobileBlackButton text='New session' fontSize={ 16 } width={ 160 } height={ 50 } icon={ 'fas fa-plus' } handleClick={ () => dispatch(changeCurrentPage('Home')) } />
            </div>
        </MobileBottomPanel>
    )
}

export default MobileHistoryBottom