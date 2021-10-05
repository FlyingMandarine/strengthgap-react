import React from 'react'

const DesktopBlackButton = ({ text, handleClick, disabled, fontSize, width, height, icon, iconSize }) => {

    const blackButtonStyle = {
        color: 'white',
        backgroundColor: 'black',
        width: width,
        height: height,
        fontSize: fontSize,
        border: 'solid 1px black',
        borderRadius: 4,
        cursor: 'pointer',
        fontWeight: 500,
    }

    const disabledBlackButtonStyle = {
        color: 'white',
        backgroundColor: 'grey',
        width: width,
        height: height,
        fontSize: fontSize,
        border: 'solid 1px grey',
        borderRadius: 4,
        fontWeight: 500,
    }

    const iconStyle = {
        fontSize: iconSize,
        marginRight: '8%',
        pointerEvents: 'none',
    }

    const handleMouseEnter = (e) => {
        e.target.style.backgroundColor = '#25A2A2'
        e.target.style.border = 'solid 1px #25A2A2'
    }

    const handleMouseLeave = (e) => {
        e.target.style.backgroundColor = 'black'
        e.target.style.border = 'solid 1px black'
    }

    return (
        <>
        { disabled === true ?
            <button
                style={ disabledBlackButtonStyle }
                disabled
            >
                { text }
            </button>
            :
            <button
                style={ blackButtonStyle }
                onMouseEnter={ (e) => handleMouseEnter(e) }
                onMouseLeave={ (e) => handleMouseLeave(e) }
                onClick={ handleClick }
            >
                {
                    icon &&
                    <i style={ iconStyle } className={ icon } />
                }
                { text }
            </button>
        }
        </>
    )
}

export default DesktopBlackButton