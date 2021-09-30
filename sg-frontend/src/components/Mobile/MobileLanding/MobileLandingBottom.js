import React from 'react'

import MobileBlackButton from '../MobilePresentational/MobileBlackButton'
import MobileBottomPanel from '../MobilePresentational/MobileBottomPanel'

const MobileLandingBottom = (props) => {

    const h2Style = {
        fontSize: 24,
        marginTop: 55,
        fontWeight: 700,
    }

    const descriptionStyle = {
        fontSize: 13,
        marginBottom: 40,
        lineHeight: 1.4,
        fontWeight: 500,
    }

    return (
        <MobileBottomPanel bgColor={ 'white' }>
                <h2 style={ h2Style }>A Tool to Check<br></br>for Muscle Imbalance</h2>
                <p style={ descriptionStyle }>
                A common struggle for people who have just started working out is to ensure that the program they follow will target all muscle groups.<br></br><br></br>
                Not doing so - for instance, including chest exercises but no back exercises - can lead to muscle imbalances that can be detrimental to your health in the long term.
                </p>
                <MobileBlackButton text={ 'Get started' } fontSize={ 18 } width={ 324 } height={ 55 } handleClick={ props.changePage } />
        </MobileBottomPanel>
    )
}

export default MobileLandingBottom