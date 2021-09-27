import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { changeCurrentPage } from '../reducers/pageReducer'

import { MuscleMapBack, MuscleMapFront } from './MuscleMap'
import Title from './presentational/Title'

const MuscleMapContainer = () => {
    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.page)

    const muscleMapStyle = {
        margin: '30px 0 22px'
    }

    return (
        <>
            {
                currentPage !== 'MobileLanding' &&
                <div onClick={ () => dispatch(changeCurrentPage('MobileHome')) }>Back</div>
            }
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
        </>
    )
}

export default MuscleMapContainer