import React from 'react'
import BottomPanel from '../presentational/BottomPanel'
import { MuscleMapFront, MuscleMapBack } from '../MuscleMap'
import BlackButton from '../presentational/BlackButton'
import WhiteButton from '../presentational/WhiteButton'

const MobileHomeBottom = () => {
    const percentageParaStyle = {
        fontSize: 16
    }

    const buttonSpanStyle = {
        fontSize: 14
    }

    const footerLinkStyle = {
        position: 'fixed',
        bottom: '-5%',
        left: '28%',

        fontSize: 13,
        color: 'white',
    }

    const footerAStyle = {
        color: 'white'
    }

    return (
        <BottomPanel>
            <div>
                <p style={ percentageParaStyle }>Muscles targeted: <span id="completionPercentage">0%</span></p>
                <MuscleMapFront
                    muscleWidth={132} muscleHeight={256} mapPosition={''}
                />
                <MuscleMapBack
                    muscleWidth={132} muscleHeight={256} mapPosition={''}
                />
            </div>
            <div>
                <span style={ buttonSpanStyle }><BlackButton text='Log in' /> or <WhiteButton text='Sign up' /></span>
            </div>
            <div>
                <p style={footerLinkStyle} id="footer-link">A Tool by <a style={footerAStyle} href="mailto:hermenaultpatrice@gmail.com">Patrice Hermenault</a></p>
            </div>
        </BottomPanel>
    )
}

export default MobileHomeBottom