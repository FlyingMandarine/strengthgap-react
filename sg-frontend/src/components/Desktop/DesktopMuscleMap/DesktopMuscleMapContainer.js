import React from 'react'

import { DesktopMuscleMapBack, DesktopMuscleMapFront } from './DesktopMuscleMap'
import DesktopTitle from '../DesktopPresentational/DesktopTitle'

const DesktopMuscleMapContainer = () => {

    const muscleMapStyle = {
        margin: '24px 0 9px',
    }

    const thirdRowStyle = {
        margin: '31px 0 8px'
    }

    return (
        <>
            <div style={ muscleMapStyle }>
                <DesktopMuscleMapFront
                    muscleWidth={ 87 } muscleHeight={ 169 }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ 87 } muscleHeight={ 169 }
                />
                <DesktopMuscleMapFront
                    muscleWidth={ 87 } muscleHeight={ 169 }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ 87 } muscleHeight={ 169 }
                />
                <DesktopMuscleMapFront
                    muscleWidth={ 87 } muscleHeight={ 169 }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ 87 } muscleHeight={ 169 }
                />
            </div>
            <div>
                <DesktopMuscleMapFront
                    muscleWidth={ 87 } muscleHeight={ 169 }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ 87 } muscleHeight={ 169 }
                />
                <DesktopMuscleMapFront
                    muscleWidth={ 87 } muscleHeight={ 169 }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ 87 } muscleHeight={ 169 }
                />
                <DesktopMuscleMapFront
                    muscleWidth={ 87 } muscleHeight={ 169 }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ 87 } muscleHeight={ 169 }
                />
            </div>

                <DesktopTitle fontSize={ 44 } marginTop={ 36 } />

            <div style={ thirdRowStyle }>
                <DesktopMuscleMapFront
                    muscleWidth={ 87 } muscleHeight={ 169 }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ 87 } muscleHeight={ 169 }
                />
                <DesktopMuscleMapFront
                    muscleWidth={ 87 } muscleHeight={ 169 }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ 87 } muscleHeight={ 169 }
                />
                <DesktopMuscleMapFront
                    muscleWidth={ 87 } muscleHeight={ 169 }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ 87 } muscleHeight={ 169 }
                />
            </div>
            <div>
                <DesktopMuscleMapFront
                    muscleWidth={ 87 } muscleHeight={ 169 }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ 87 } muscleHeight={ 169 }
                />
                <DesktopMuscleMapFront
                    muscleWidth={ 87 } muscleHeight={ 169 }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ 87 } muscleHeight={ 169 }
                />
                <DesktopMuscleMapFront
                    muscleWidth={ 87 } muscleHeight={ 169 }
                />
                <DesktopMuscleMapBack
                    muscleWidth={ 87 } muscleHeight={ 169 }
                />
            </div>
        </>
    )
}

export default DesktopMuscleMapContainer