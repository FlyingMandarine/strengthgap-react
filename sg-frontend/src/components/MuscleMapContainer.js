import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { changeCurrentPage } from '../reducers/pageReducer'

import { MuscleMapBack, MuscleMapFront } from './MuscleMap'
import Title from './presentational/Title'

const MuscleMapContainer = () => {
    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.page)

    const backDiv = {
        position: 'absolute',
        fontSize: 17,
        margin: '26px 0 0 22px',
        cursor: 'pointer',
    }

    const chevronStyle = {
        fontSize: 12,
        marginRight: 8,
    }

    const muscleMapStyle = {
        margin: '30px 0 22px'
    }

    return (
        <>
            {
                currentPage !== 'MobileLanding' &&
                <div style={ backDiv } onClick={ () => dispatch(changeCurrentPage('MobileHome')) }><i style={ chevronStyle } className='fas fa-chevron-left' />Back</div>
            }
            <Title marginTop={ 70 } />
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