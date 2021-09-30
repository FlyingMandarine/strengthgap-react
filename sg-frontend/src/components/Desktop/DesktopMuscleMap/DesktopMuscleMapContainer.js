import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { changeCurrentPage } from '../reducers/pageReducer'

import { DesktopMuscleMapBack, DesktopMuscleMapFront } from './MobileMuscleMap'
import DesktopTitle from './Desktop/DesktopPresentational/DesktopTitle'

const DesktopMuscleMapContainer = () => {
    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.page)

    const backDiv = {
        position: 'absolute',
        fontSize: 17,
        margin: '26px 0 0 22px',
        cursor: 'pointer',
        fontWeight: 500,
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
            <DesktopTitle marginTop={ 70 } />
            <div style={muscleMapStyle}>
                <DesktopMuscleMapFront mapPosition={'-top-left'}
                    muscleWidth={52} muscleHeight={102}
                />
                <DesktopMuscleMapBack mapPosition={'-top-left'}
                    muscleWidth={52} muscleHeight={102}
                />
                <DesktopMuscleMapFront mapPosition={'-top-middle'}
                    muscleWidth={52} muscleHeight={102}
                />
                <DesktopMuscleMapBack mapPosition={'-top-right'}
                    muscleWidth={52} muscleHeight={102}
                />
                <DesktopMuscleMapFront mapPosition={'-top-right'}
                    muscleWidth={52} muscleHeight={102}
                />
            </div>
            <div>
                <DesktopMuscleMapFront mapPosition={'-bottom-left'}
                    muscleWidth={52} muscleHeight={102}
                />
                <DesktopMuscleMapBack mapPosition={'-bottom-left'}
                    muscleWidth={52} muscleHeight={102}
                />
                <DesktopMuscleMapFront mapPosition={'-bottom-middle'}
                    muscleWidth={52} muscleHeight={102}
                />
                <DesktopMuscleMapBack mapPosition={'-bottom-right'}
                    muscleWidth={52} muscleHeight={102}
                />
                <DesktopMuscleMapFront mapPosition={'-bottom-right'}
                    muscleWidth={52} muscleHeight={102}
                />
            </div>
        </>
    )
}

export default DesktopMuscleMapContainer