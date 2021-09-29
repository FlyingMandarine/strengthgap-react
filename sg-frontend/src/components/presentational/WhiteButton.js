import React from 'react'

const WhiteButton = ({ text, handleClick, disabled, fontSize, width, height, icon }) => {

    const whiteButtonStyle = {
        color: 'black',
        backgroundColor: 'white',
        width: width,
        height: height,
        fontSize: fontSize,
        border: 'solid 1px black',
        borderRadius: 4,
        cursor: 'pointer',
        fontWeight: 500,
    }

    const disabledWhiteButtonStyle = {
        color: 'black',
        backgroundColor: 'grey',
        width: width,
        height: height,
        fontSize: fontSize,
        border: 'solid 1px grey',
        borderRadius: 4,
        fontWeight: 500,
    }

    const iconStyle = {
        fontSize: 14,
        marginRight: 6,
        marginLeft: 6,
        pointerEvents: 'none',
    }

    const handleMouseEnter = (e) => {
        e.target.style.color = 'white'
        e.target.style.backgroundColor = '#25A2A2'
        e.target.style.border = 'solid 1px #25A2A2'
    }

    const handleMouseLeave = (e) => {
        e.target.style.color = 'black'
        e.target.style.backgroundColor = 'white'
        e.target.style.border = 'solid 1px black'
    }

    return (
        <>
        { disabled === true ?
            <button
                style={ disabledWhiteButtonStyle }
                disabled
            >
                {
                    icon &&
                    <i style={ iconStyle } className={ icon } />
                }
                { text }
            </button>
            :
            <button
                style={ whiteButtonStyle }
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

export default WhiteButton