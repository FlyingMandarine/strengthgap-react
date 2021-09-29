import React from 'react'

import RightPanel from '../presentational/RightPanel'

import { MuscleMapFront, MuscleMapBack } from '../MuscleMap'

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
        <RightPanel bgColor={ '#f4f4f4' }>
            <div>
                <p style={ percentageParaStyle }>Muscles targeted: <span style={ percentageSpanStyle } id="completionPercentage">0%</span></p>
                <MuscleMapFront
                    muscleWidth={ 132 } muscleHeight={ 256 } mapPosition={ '' }
                />
                <MuscleMapBack
                    muscleWidth={ 132 } muscleHeight={ 256 } mapPosition={ '' }
                />
            </div>
        </RightPanel>
    )
}

export default DesktopHomeRight