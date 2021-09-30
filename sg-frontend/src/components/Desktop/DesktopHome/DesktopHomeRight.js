import React from 'react'

import DesktopRightPanel from '../DesktopPresentational/DesktopRightPanel'

import { DesktopMuscleMapFront, DesktopMuscleMapBack } from '../DesktopMuscleMap/DesktopMuscleMap'

const DesktopHomeRight = ({ demoInviteActive, deactivateDemo }) => {
    const percentageParaStyle = {
        fontSize: 16,
        textAlign: 'center',
        margin: '22px 0 28px',
        fontWeight: 400,
    }

    const percentageSpanStyle = {
        fontWeight: 500,
    }

    return (
        <DesktopRightPanel bgColor={ '#f4f4f4' }>
            <div>
                <p style={ percentageParaStyle }>Muscles targeted: <span style={ percentageSpanStyle } id="completionPercentage">0%</span></p>
                <DesktopMuscleMapFront
                    muscleWidth={ 132 } muscleHeight={ 256 } mapPosition={ '' }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ 132 } muscleHeight={ 256 } mapPosition={ '' }
                />
            </div>
        </DesktopRightPanel>
    )
}

export default DesktopHomeRight