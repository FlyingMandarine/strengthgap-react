import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentPage } from '../../reducers/pageReducer'

import BottomPanel from '../presentational/BottomPanel'
import BlackButton from '../presentational/BlackButton'
import WhiteButton from '../presentational/WhiteButton'

import { MuscleMapFront, MuscleMapBack } from '../MuscleMap'

const MobileHomeBottom = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

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
                { user === null
                    ?
                    <span style={ buttonSpanStyle }>
                        <BlackButton text='Log in' changePage={ () => dispatch(changeCurrentPage('Login')) } /> 
                        or
                        <WhiteButton text='Sign up' changePage={ () => dispatch(changeCurrentPage('Sign up')) } />
                    </span>
                    :
                    <BlackButton text='Save session' />
                }
            </div>
            <div>
                <p style={footerLinkStyle} id="footer-link">A Tool by <a style={footerAStyle} href="mailto:hermenaultpatrice@gmail.com">Patrice Hermenault</a></p>
            </div>
        </BottomPanel>
    )
}

export default MobileHomeBottom