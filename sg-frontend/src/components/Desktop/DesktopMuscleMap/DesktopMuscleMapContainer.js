import React from 'react'

import { DesktopMuscleMapBack, DesktopMuscleMapFront } from './DesktopMuscleMap'
import DesktopTitle from '../DesktopPresentational/DesktopTitle'

const DesktopMuscleMapContainer = () => {

    const muscleMapStyle = {
        margin: '3.5% 0 1.3%',
    }

    const thirdRowStyle = {
        margin: '4.4% 0 1.2%',
    }

    return (
        <>
            <div style={ muscleMapStyle }>
                <DesktopMuscleMapFront
                    muscleWidth={ '12.5%' } muscleHeight={ '12%' } margin={ '0 20px 0 0' }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ '12%' } muscleHeight={ '12%' }
                />
                <DesktopMuscleMapFront
                    muscleWidth={ '12.5%' } muscleHeight={ '12%' }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ '12%' } muscleHeight={ '12%' }
                />
                <DesktopMuscleMapFront
                    muscleWidth={ '12.5%' } muscleHeight={ '12%' }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ '12%' } muscleHeight={ '12%' }
                />
            </div>
            <div>
                <DesktopMuscleMapFront
                    muscleWidth={ '12.5%' } muscleHeight={ '12%' } margin={ '0 20px 0 0' }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ '12%' } muscleHeight={ '12%' }
                />
                <DesktopMuscleMapFront
                    muscleWidth={ '12.5%' } muscleHeight={ '12%' }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ '12%' } muscleHeight={ '12%' }
                />
                <DesktopMuscleMapFront
                    muscleWidth={ '12.5%' } muscleHeight={ '12%' }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ '12%' } muscleHeight={ '12%' }
                />
            </div>

                <DesktopTitle fontSize={ '4.4em' } marginTop={ '5.2%' } />

            <div style={ thirdRowStyle }>
                <DesktopMuscleMapFront
                    muscleWidth={ '12.5%' } muscleHeight={ '12%' } margin={ '0 20px 0 0' }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ '12%' } muscleHeight={ '12%' }
                />
                <DesktopMuscleMapFront
                    muscleWidth={ '12.5%' } muscleHeight={ '12%' }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ '12%' } muscleHeight={ '12%' }
                />
                <DesktopMuscleMapFront
                    muscleWidth={ '12.5%' } muscleHeight={ '12%' }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ '12%' } muscleHeight={ '12%' }
                />
            </div>
            <div>
                <DesktopMuscleMapFront
                    muscleWidth={ '12.5%' } muscleHeight={ '12%' } margin={ '0 20px 0 0' }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ '12%' } muscleHeight={ '12%' }
                />
                <DesktopMuscleMapFront
                    muscleWidth={ '12.5%' } muscleHeight={ '12%' }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ '12%' } muscleHeight={ '12%' }
                />
                <DesktopMuscleMapFront
                    muscleWidth={ '12.5%' } muscleHeight={ '12%' }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ '12%' } muscleHeight={ '12%' }
                />
            </div>
        </>
    )
}

export default DesktopMuscleMapContainer