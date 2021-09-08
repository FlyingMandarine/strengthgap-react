import React, { useState, useEffect } from 'react'
import { MuscleMapBack, MuscleMapFront } from './MuscleMap'

const MobileHome = () => {
    const [ exercise, setExercise ] = useState(null)
    const [ addedExercisesList, setAddedExercisesList ] = useState([])
    const [ exerciseList, setExerciseList ] = useState([])

    useEffect(() => {
        setExerciseList([
            'Ab Wheel Rollout',
            'Arnold Press',
            'Back Extension',
            'Behind The Back Barbell Shrug',
            'Behind The Back Cable Curl',
            'Behind The Neck Press',
            'Belt Squat',
            'Bench Dips',
            'Bench Pin Press',
            'Bench Press',
            'Bench Pull',
            'Bent Arm Barbell Pullover',
            'Bent Over Row',
            'Bicycle Crunch',
            'Box Squat',
        ])
    }, [])

    const divStyle = {
        backgroundColor: 'white',
        fontSize: 24,
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',

        height: 857,
        width: 390,

        border: 'solid 3px black',
        borderRadius: 6
    }

    const topPanelStyle = {
        height: '50%',
        borderBottom: 'solid 2px black'
    }

    const bottomPanelStyle = {
        backgroundColor: '#f4f4f4',
        height: '50%',
        //padding: '0 29px',
        borderTop: 'solid 1px black'
    }

    const titleStyle = {
        fontSize: 34,
        paddingLeft: 24,
        marginTop: 70
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

    const addedExercisesListDivStyle = {
        backgroundColor: 'red',
        maxHeight: 100,
        overflowY: 'scroll'
    }

    const ulStyle = {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
    }

    const addExercise = () => {
        const newAddedExercisesList = addedExercisesList.concat(exercise)
        setAddedExercisesList(newAddedExercisesList)
    }

    const displayAddedExercisesList = () => {
        console.log(addedExercisesList)
        return (
            addedExercisesList.map(e => <li key={e}>{e}</li>)
        )
    }

    return(
        <div style={divStyle}>
            <div style={topPanelStyle}>
                <h1 style={titleStyle}>Strength Gap</h1>

                <p>Today's session:</p>
                <div style={addedExercisesListDivStyle} id="history-container">
                    <p className="history history-exercise" id="history-select-exercise">No exercise added</p>
                    <ul style={ulStyle}>
                        {displayAddedExercisesList()}
                    </ul>
                </div>
                
                <p id="addnew-text">+ Add new</p>
                <select name="exercise" id="workout" onChange={(event) => setExercise(event.target.value)}>
                    {exerciseList.map(e => <option key={e}>{e}</option>)}
                </select>
                <button type="button" id="add" className="mainpage leftpanel-btn" onClick={addExercise}>Add exercise</button>
            </div>
            <div id="submit-panel">
                <p id="completion-text">Muscles targeted: <span id="completion">0%</span></p>
                <MuscleMapFront />
                <MuscleMapBack />
            </div>
            <div style={bottomPanelStyle}>
                <p style={footerLinkStyle} id="footer-link">A Tool by <a style={footerAStyle} href="mailto:hermenaultpatrice@gmail.com">Patrice Hermenault</a></p>
            </div>
        </div>
    )
}

export default MobileHome