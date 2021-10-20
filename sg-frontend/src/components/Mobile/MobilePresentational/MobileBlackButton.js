import React from 'react'
import styled from 'styled-components'

const BlackButtonActive = styled.button`
    color: white;
    background-color: black;
    border: solid 1px black;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: #25A2A2;
        border: solid 1px #25A2A2;
    }
`

const BlackButtonInactive = styled.button`
    color: white;
    background-color: grey;
    border: solid 1px grey;
    border-radius: 4px;
    font-weight: 500;
`

const MobileBlackButton = ({ text, handleClick, disabled, fontSize, width, height, icon }) => {

    const blackButtonStyle = {
        width: width,
        height: height,
        fontSize: fontSize,
    }

    const disabledBlackButtonStyle = {
        width: width,
        height: height,
        fontSize: fontSize,
    }

    const iconStyle = {
        fontSize: 16,
        marginRight: 12,
        pointerEvents: 'none',
    }

    return (
        <>
        { disabled === true ?
            <BlackButtonInactive
                style={ disabledBlackButtonStyle }
                disabled
            >
                { text }
            </BlackButtonInactive>
            :
            <BlackButtonActive
                style={ blackButtonStyle }
                onClick={ handleClick }
            >
                {
                    icon &&
                    <i style={ iconStyle } className={ icon } />
                }
                { text }
            </BlackButtonActive>
        }
        </>
    )
}

export default MobileBlackButton