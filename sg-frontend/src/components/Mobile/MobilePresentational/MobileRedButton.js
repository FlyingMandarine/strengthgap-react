import React from 'react'

import styled from 'styled-components'

const RedButtonActive = styled.button`
    color: white;
    background-color: maroon;
    border: solid 1px maroon;
    border-radius: 4px;
    font-weight: 500;

    &:hover {
        background-color: red;
        border: solid 1px red;
    }
`

const MobileRedButton = ({ text, handleClick, fontSize, width, height }) => {

    const redButtonStyle = {
        width: width,
        height: height,
        fontSize: fontSize,
    }

    return (
        <RedButtonActive
            style={ redButtonStyle }
            onClick={ handleClick }
        >
            {text}
        </RedButtonActive>
    )
}

export default MobileRedButton