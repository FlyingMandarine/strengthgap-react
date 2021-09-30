import React from 'react'

import { useDispatch } from 'react-redux'
import { changeCurrentPage } from '../../../reducers/pageReducer'

const DesktopBackButton = () => {
    const dispatch = useDispatch()

    const chevronStyle = {
        fontSize: 12,
        marginRight: 8,
    }

    const backDiv = {
        position: 'absolute',
        fontSize: 17,
        marginTop: 76,
        cursor: 'pointer',
        fontWeight: 500,
    }

    return (
        <div style={ backDiv } onClick={ () => dispatch(changeCurrentPage('Home')) }><i style={ chevronStyle } className='fas fa-chevron-left' />Back</div>
    )
}

export default DesktopBackButton