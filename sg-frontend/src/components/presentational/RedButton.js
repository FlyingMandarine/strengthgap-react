import React from 'react'

const RedButton = ({ text, handleClick }) => {

    const redButtonStyle = {
        color: 'white',
        backgroundColor: 'red',
        width: 150,
        height: 38,

        fontSize: 21,

        border: 'solid 1px black',
        borderRadius: 4
    }

    const handleMouseEnter = () => {
        if (document.querySelector('#redButton')) {
            document.querySelector('#redButton').style.backgroundColor = 'maroon'
            document.querySelector('#redButton').style.border = 'solid 1px maroon'
        }
    }

    const handleMouseLeave = () => {
        if (document.querySelector('#redButton')) {
            document.querySelector('#redButton').style.backgroundColor = 'red'
            document.querySelector('#redButton').style.border = 'solid 1px red'
        }
    }

    return (
        <button
            id='redButton'
            style={ redButtonStyle }
            onMouseEnter={ handleMouseEnter }
            onMouseLeave={ handleMouseLeave }
            onClick={ handleClick }
        >
            {text}
        </button>
    )
}

export default RedButton