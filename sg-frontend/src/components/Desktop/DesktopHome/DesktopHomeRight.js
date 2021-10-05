import React from 'react'

import DesktopRightPanel from '../DesktopPresentational/DesktopRightPanel'

import { DesktopMuscleMapFront, DesktopMuscleMapBack } from '../DesktopMuscleMap/DesktopMuscleMap'

const DesktopHomeRight = ({ demoInviteActive, deactivateDemo }) => {

    const percentageParaStyle = {
        fontSize: '2.2em',
        fontWeight: 400,
    }

    const percentageSpanStyle = {
        fontWeight: 500,
    }

    return (
        <DesktopRightPanel bgColor={ '#f4f4f4' }>
            <div id='home-right-div'>
                <DesktopMuscleMapFront
                    muscleWidth={ '32.5%' } muscleHeight={ 440 } mapPosition={ '' } margin={ '0 5.2em 0 0' }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ '32.5%' } muscleHeight={ 440 } mapPosition={ '' }
                />
                <p style={ percentageParaStyle } id='home-percentage-para'>Muscles targeted: <span style={ percentageSpanStyle } id="completionPercentage">0%</span></p>
            </div>
        </DesktopRightPanel>
    )
}

export default DesktopHomeRight