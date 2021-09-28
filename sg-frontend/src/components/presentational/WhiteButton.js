import React from 'react'

const WhiteButton = ({ text, handleClick, disabled, width }) => {

    const whiteButtonStyle = {
        color: 'black',
        backgroundColor: 'white',
        width: width,
        height: 38,
        fontSize: 16,
        border: 'solid 1px black',
        borderRadius: 4
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
                style={ whiteButtonStyle }
                disabled
            >
                { text }
            </button>
            :
            <button
                style={ whiteButtonStyle }
                onMouseEnter={ (e) => handleMouseEnter(e) }
                onMouseLeave={ (e) => handleMouseLeave(e) }
                onClick={ handleClick }
            >
                { text }
            </button>
        }
        </>
    )
}

export default WhiteButton