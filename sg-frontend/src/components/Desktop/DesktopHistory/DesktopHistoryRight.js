import React from 'react'

import DesktopRightPanel from '../DesktopPresentational/DesktopRightPanel'

import DesktopMuscleMapContainer from '../DesktopMuscleMap/DesktopMuscleMapContainer'
import { DesktopMuscleMapFront, DesktopMuscleMapBack } from '../DesktopMuscleMap/DesktopMuscleMap'

const DesktopHistoryRight = ({ history, updateHistory, currentSession, setNewSession }) => {

    const hidingMuscleMapContainerStyle = {
        position: 'absolute',
        visibility: 'hidden',
    }

    const hidingFrontBackStyle = {
        position: 'absolute',
        visibility: 'hidden',
    }

    const showingFrontBackStyle = {
        position: 'absolute',
        marginTop: '14%',
        marginLeft: '6.9%',
    }

    const percentageParaStyle = {
        fontSize: 22,
        marginTop: 85,
        fontWeight: 400,
    }

    const percentageSpanStyle = {
        fontWeight: 500,
    }

    return (
        <DesktopRightPanel bgColor={ '#f4f4f4' }>
            { currentSession.length === 0
            ?
            <>
            <div><DesktopMuscleMapContainer /></div>
            <div style={ hidingFrontBackStyle }>
                <DesktopMuscleMapFront
                    muscleWidth={ 226 } muscleHeight={ 440 } mapPosition={ '' } margin={ '0 52px 0 0' }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ 226 } muscleHeight={ 440 } mapPosition={ '' }
                />
                <p style={ percentageParaStyle }>Muscles targeted: <span style={ percentageSpanStyle } id="completionPercentage">0%</span></p>
            </div>
            </>
            :
            <>
            <div style={ hidingMuscleMapContainerStyle }><DesktopMuscleMapContainer /></div>
            <div style={ showingFrontBackStyle }>
                <DesktopMuscleMapFront
                    muscleWidth={ 226 } muscleHeight={ 440 } mapPosition={ '' } margin={ '0 52px 0 0' }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ 226 } muscleHeight={ 440 } mapPosition={ '' }
                />
                <p style={ percentageParaStyle }>Muscles targeted: <span style={ percentageSpanStyle } id="completionPercentage">0%</span></p>
            </div>
            </>
            }
        </DesktopRightPanel>
    )
}

export default DesktopHistoryRight