import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentPage } from '../../../reducers/pageReducer'

import MobileBottomPanel from '../MobilePresentational/MobileBottomPanel'
import MobileBlackButton from '../MobilePresentational/MobileBlackButton'
import MobileWhiteButton from '../MobilePresentational/MobileWhiteButton'

import { MobileMuscleMapFront, MobileMuscleMapBack } from '../MobileMuscleMap/MobileMuscleMap'
import { saveSessionHelper } from '../../utils/helperFunctions'

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
        margin: '0 10px',
    }

    const buttonSpanStyle = {
        marginLeft: -178,
    }

    const saveSession = async () => {        
        await saveSessionHelper(user, session)

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
                        <>
                            <MobileBlackButton text='Log in' fontSize={ 16 } width={ 146 } height={ 38 } handleClick={ () => dispatch(changeCurrentPage('Login')) } />
                            <span style={ orStyle }>or</span>
                            <MobileWhiteButton text='Sign up' fontSize={ 16 } width={ 146 } height={ 38 } handleClick={ () => dispatch(changeCurrentPage('SignUp')) } /><br />
                            <span style={ buttonSpanStyle }> to submit your workout.</span>
                        </>
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