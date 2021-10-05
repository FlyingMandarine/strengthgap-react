import React from 'react'

import { useDispatch } from 'react-redux'
import { activateDemoMode } from '../../../reducers/userReducer'

import { customTurquoise } from '../../utils/colors'

const DesktopDemoInvite = ({ deactivateDemo }) => {
    const dispatch = useDispatch()

    const divStyle = {
        position: 'absolute',
        top: '5%',
        left: '50.05%',
        color: 'white',
        backgroundColor: customTurquoise,
        fontSize: '1.4em',
        width: '31%',
        height: '10.4%',
        borderRadius: '0 6px 6px 0',
    }

    const warningStyle = {
        fontWeight: 700,
    }

    const pStyle = {
        paddingLeft: 14,
        lineHeight: 1.4,
        fontWeight: 400,
    }

    const demoAccountSpanStyle = {
        textDecoration: 'underline',
        cursor: 'pointer',
    }

    const activateDemo = () => {
        dispatch(activateDemoMode())
    }

    return (
        <div style={ divStyle }>
            <p style={ pStyle }>
                <span style={ warningStyle }>Warning:</span><br />
                You won't be able to save this session unless you first log in.<br />
                Employer? Try this <span style={ demoAccountSpanStyle } onClick={ activateDemo }>demo account</span>.
            </p>
        </div>
    )
}

export default DesktopDemoInvite