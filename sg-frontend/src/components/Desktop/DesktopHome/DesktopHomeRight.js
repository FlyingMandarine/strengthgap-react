import React from 'react'

import DesktopRightPanel from '../DesktopPresentational/DesktopRightPanel'

import { DesktopMuscleMapFront, DesktopMuscleMapBack } from '../DesktopMuscleMap/DesktopMuscleMap'

const DesktopHomeRight = ({ demoInviteActive, deactivateDemo }) => {

    const divStyle = {
        marginTop: '30%',
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
            <div style={ divStyle }>
                <DesktopMuscleMapFront
                    muscleWidth={ 226 } muscleHeight={ 440 } mapPosition={ '' } margin={ '0 52px 0 0' }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ 226 } muscleHeight={ 440 } mapPosition={ '' }
                />
                <p style={ percentageParaStyle }>Muscles targeted: <span style={ percentageSpanStyle } id="completionPercentage">0%</span></p>
            </div>
        </DesktopRightPanel>
    )
}

export default DesktopHomeRight