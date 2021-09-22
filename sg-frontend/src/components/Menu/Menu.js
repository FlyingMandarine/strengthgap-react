import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeCurrentPage } from '../../reducers/pageReducer'

const Menu = () => {
    const dispatch = useDispatch()

    const [ menuOpen, setMenuOpen ] = useState(false)

    const divStyle = {
        position: 'absolute',
        height: 595,
        width: '100%',
        color: 'white',
        backgroundColor: 'black'
    }

    const buttonStyle = {
        position: 'absolute',
        right: 0,
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <>
        { menuOpen === false
            ?
            <button style={ buttonStyle } onClick={ toggleMenu }>OPEN</button>
            :
            <div style={ divStyle }>
                <button style={ buttonStyle } onClick={ toggleMenu }>CLOSE</button>
                <div onClick={ () => dispatch(changeCurrentPage('MobileHome')) }>Home</div>
                <div>History</div>
            </div>
        }
        </>
        
    )
}

export default Menu