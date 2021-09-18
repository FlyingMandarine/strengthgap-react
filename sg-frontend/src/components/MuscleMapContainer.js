import React from 'react'
import TopPanel from './presentational/TopPanel'
import { MuscleMapBack, MuscleMapFront } from './MuscleMap'
import Title from './Title'

const MuscleMapContainer = () => {
    const muscleMapStyle = {
        //margin: '30px 0 22px'
    }

    return (
        <TopPanel>
            <Title />
            <div style={muscleMapStyle}>
                <MuscleMapFront mapPosition={'-top-left'}
                    muscleWidth={52} muscleHeight={102}
                />
                <MuscleMapBack mapPosition={'-top-left'}
                    muscleWidth={52} muscleHeight={102}
                />
                <MuscleMapFront mapPosition={'-top-middle'}
                    muscleWidth={52} muscleHeight={102}
                />
                <MuscleMapBack mapPosition={'-top-right'}
                    muscleWidth={52} muscleHeight={102}
                />
                <MuscleMapFront mapPosition={'-top-right'}
                    muscleWidth={52} muscleHeight={102}
                />
            </div>
            <div>
                <MuscleMapFront mapPosition={'-bottom-left'}
                    muscleWidth={52} muscleHeight={102}
                />
                <MuscleMapBack mapPosition={'-bottom-left'}
                    muscleWidth={52} muscleHeight={102}
                />
                <MuscleMapFront mapPosition={'-bottom-middle'}
                    muscleWidth={52} muscleHeight={102}
                />
                <MuscleMapBack mapPosition={'-bottom-right'}
                    muscleWidth={52} muscleHeight={102}
                />
                <MuscleMapFront mapPosition={'-bottom-right'}
                    muscleWidth={52} muscleHeight={102}
                />
            </div>
        </TopPanel>
    )
}

export default MuscleMapContainer