import React from 'react'
import BottomPanel from '../presentational/BottomPanel'

const MobileLandingBottom = (props) => {

    const h2Style = {
        fontSize: 24,
        marginTop: 55
    }

    const descriptionStyle = {
        fontSize: 13,
        marginBottom: 40
    }

    const getStartedButtonStyle = {
        backgroundColor: 'black',
        color: 'white',

        width: 320,
        height: 55,

        fontSize: 18,
        borderRadius: 4,
        border: 'solid 1px black',
    }

    const handleMouseEnter = () => {
        if (document.querySelector('#getStartedButton')) {
            document.querySelector('#getStartedButton').style.backgroundColor = '#25A2A2'
            document.querySelector('#getStartedButton').style.border = 'solid 1px #25A2A2'
        }
    }

    const handleMouseLeave = () => {
        if (document.querySelector('#getStartedButton')) {
            document.querySelector('#getStartedButton').style.backgroundColor = 'black'
            document.querySelector('#getStartedButton').style.border = 'solid 1px black'
        }
    }

    return (
        <BottomPanel bgColor={ 'white' }>
                <h2 style={ h2Style }>A Tool to Check<br></br>for Muscle Imbalance</h2>
                <p style={ descriptionStyle }>
                A common struggle for people who have just started working out is to ensure that the program they follow will target all muscle groups.<br></br><br></br>
                Not doing so - for instance, including chest exercises but no back exercises - can lead to muscle imbalances that can be detrimental to your health in the long term.
                </p>
                <button style={ getStartedButtonStyle } id='getStartedButton' onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave } onClick={ props.changePage }>Get started</button>
        </BottomPanel>
    )
}

export default MobileLandingBottom