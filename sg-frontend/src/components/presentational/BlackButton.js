import React from 'react'

const BlackButton = ({ text, changePage }) => {

    const blackButtonStyle = {
        color: 'white',
        backgroundColor: 'black',
        width: 150,
        height: 38,

        fontSize: 21,

        border: 'solid 1px black',
        borderRadius: 4
    }

    const handleMouseEnter = () => {
        if (document.querySelector('#blackButton')) {
            document.querySelector('#blackButton').style.backgroundColor = '#25A2A2'
            document.querySelector('#blackButton').style.border = 'solid 1px #25A2A2'
        }
    }

    const handleMouseLeave = () => {
        if (document.querySelector('#blackButton')) {
            document.querySelector('#blackButton').style.backgroundColor = 'black'
            document.querySelector('#blackButton').style.border = 'solid 1px black'
        }
    }

    return (
        <button
            id='blackButton'
            style={ blackButtonStyle }
            onMouseEnter={ handleMouseEnter }
            onMouseLeave={ handleMouseLeave }
            onClick={ changePage }
        >
            {text}
        </button>
    )
}

export default BlackButton