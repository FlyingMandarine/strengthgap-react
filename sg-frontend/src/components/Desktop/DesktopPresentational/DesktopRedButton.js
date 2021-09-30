import React from 'react'

const DesktopRedButton = ({ text, handleClick, width, height }) => {

    const redButtonStyle = {
        color: 'white',
        backgroundColor: 'maroon',
        width: width,
        height: height,
        fontSize: 18,
        border: 'solid 1px maroon',
        borderRadius: 4,
        fontWeight: 500,
    }

    const handleMouseEnter = (e) => {
        e.target.style.backgroundColor = 'red'
        e.target.style.border = 'solid 1px red'
    }

    const handleMouseLeave = (e) => {
        e.target.style.backgroundColor = 'maroon'
        e.target.style.border = 'solid 1px maroon'
    }

    return (
        <button
            style={ redButtonStyle }
            onMouseEnter={ (e) => handleMouseEnter(e) }
            onMouseLeave={ (e) => handleMouseLeave(e) }
            onClick={ handleClick }
        >
            {text}
        </button>
    )
}

export default DesktopRedButton