import React from 'react'
import styled from 'styled-components'

const WhiteButtonActive = styled.button`
    color: black;
    background-color: white;
    border: solid 1px black;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        color: white;
        background-color: #25A2A2;
        border: solid 1px #25A2A2;
    }
`

const WhiteButtonInactive = styled.button`
    color: black;
    background-color: grey;
    border: solid 1px grey;
    border-radius: 4px;
    font-weight: 500;
`

const MobileWhiteButton = ({ text, handleClick, disabled, fontSize, width, height, icon }) => {

    const whiteButtonStyle = {
        width: width,
        height: height,
        fontSize: fontSize,
    }

    const disabledWhiteButtonStyle = {
        width: width,
        height: height,
        fontSize: fontSize,
    }

    const iconStyle = {
        fontSize: 14,
        marginRight: 12,
        marginLeft: 6,
        pointerEvents: 'none',
    }

    return (
        <>
        { disabled === true ?
            <WhiteButtonInactive
                style={ disabledWhiteButtonStyle }
                disabled
            >
                {
                    icon &&
                    <i style={ iconStyle } className={ icon } />
                }
                { text }
            </WhiteButtonInactive>
            :
            <WhiteButtonActive
                style={ whiteButtonStyle }
                onClick={ (e) => handleClick(e) }
            >
                {
                    icon &&
                    <i style={ iconStyle } className={ icon } />
                }
                { text }
            </WhiteButtonActive>
        }
        </>
    )
}

export default MobileWhiteButton