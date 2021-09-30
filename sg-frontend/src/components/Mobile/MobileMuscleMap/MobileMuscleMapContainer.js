import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { changeCurrentPage } from '../../../reducers/pageReducer'

import { MobileMuscleMapBack, MobileMuscleMapFront } from './MobileMuscleMap'
import MobileTitle from '../MobilePresentational/MobileTitle'

const MobileMuscleMapContainer = () => {
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
                <div style={ backDiv } onClick={ () => dispatch(changeCurrentPage('Home')) }><i style={ chevronStyle } className='fas fa-chevron-left' />Back</div>
            }
            <MobileTitle marginTop={ 70 } />
            <div style={muscleMapStyle}>
                <MobileMuscleMapFront mapPosition={'-top-left'}
                    muscleWidth={52} muscleHeight={102}
                />
                <MobileMuscleMapBack mapPosition={'-top-left'}
                    muscleWidth={52} muscleHeight={102}
                />
                <MobileMuscleMapFront mapPosition={'-top-middle'}
                    muscleWidth={52} muscleHeight={102}
                />
                <MobileMuscleMapBack mapPosition={'-top-right'}
                    muscleWidth={52} muscleHeight={102}
                />
                <MobileMuscleMapFront mapPosition={'-top-right'}
                    muscleWidth={52} muscleHeight={102}
                />
            </div>
            <div>
                <MobileMuscleMapFront mapPosition={'-bottom-left'}
                    muscleWidth={52} muscleHeight={102}
                />
                <MobileMuscleMapBack mapPosition={'-bottom-left'}
                    muscleWidth={52} muscleHeight={102}
                />
                <MobileMuscleMapFront mapPosition={'-bottom-middle'}
                    muscleWidth={52} muscleHeight={102}
                />
                <MobileMuscleMapBack mapPosition={'-bottom-right'}
                    muscleWidth={52} muscleHeight={102}
                />
                <MobileMuscleMapFront mapPosition={'-bottom-right'}
                    muscleWidth={52} muscleHeight={102}
                />
            </div>
        </>
    )
}

export default MobileMuscleMapContainer