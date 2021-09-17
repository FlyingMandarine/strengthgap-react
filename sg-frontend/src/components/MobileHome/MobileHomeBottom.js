import React from 'react'
import BottomPanel from '../presentational/BottomPanel'
import { MuscleMapFront, MuscleMapBack } from '../MuscleMap'

const MobileHomeBottom = () => {
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
            <div id="submit-panel">
                <p id="completion-text">Muscles targeted: <span id="completion">0%</span></p>
                <MuscleMapFront />
                <MuscleMapBack />
            </div>
            <div>
                <p style={footerLinkStyle} id="footer-link">A Tool by <a style={footerAStyle} href="mailto:hermenaultpatrice@gmail.com">Patrice Hermenault</a></p>
            </div>
        </BottomPanel>
    )
}

export default MobileHomeBottom