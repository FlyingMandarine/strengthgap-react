import React from 'react'

const WhiteButton = ({ text, changePage }) => {

    const whiteButtonStyle = {
        color: 'black',
        backgroundColor: 'white',
        width: 150,
        height: 38,

        fontSize: 21,

        border: 'solid 1px black',
        borderRadius: 4
    }

    const handleMouseEnter = () => {
        if (document.querySelector('#whiteButton')) {
            document.querySelector('#whiteButton').style.color = 'white'
            document.querySelector('#whiteButton').style.backgroundColor = '#25A2A2'
            document.querySelector('#whiteButton').style.border = 'solid 1px #25A2A2'
        }
    }

    const handleMouseLeave = () => {
        if (document.querySelector('#whiteButton')) {
            document.querySelector('#whiteButton').style.color = 'black'
            document.querySelector('#whiteButton').style.backgroundColor = 'white'
            document.querySelector('#whiteButton').style.border = 'solid 1px black'
        }
    }

    return (
        <button
            id='whiteButton'
            style={ whiteButtonStyle }
            onMouseEnter={ handleMouseEnter }
            onMouseLeave={ handleMouseLeave }
            onClick={ changePage }    
        >
            {text}
        </button>
    )
}

export default WhiteButton