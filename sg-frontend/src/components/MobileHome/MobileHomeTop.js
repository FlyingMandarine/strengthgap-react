import React, { useState, useEffect } from 'react'
import Title from '../Title'
import TopPanel from '../presentational/TopPanel'
import musclesWorked from '../musclesWorked'
import miteux from '../musclesWorked'
import { allMuscles } from '../musclesWorked'

const MobileHomeTop = () => {
    const [ exercise, setExercise ] = useState('Select')
    const [ addedExercisesList, setAddedExercisesList ] = useState([])
    const [ exerciseList, setExerciseList ] = useState([])

    useEffect(() => {
        setExerciseList([
            'Select',
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

    const addedExercisesListDivStyle = {
        maxHeight: 100,
        overflowY: 'auto'
    }

    const ulStyle = {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
    }

    const reorderAlphabetically = (newExerciseList) => {
        const exerciseListWithoutSelect = newExerciseList.filter(e => e !== 'Select')
        const reorderedList = exerciseListWithoutSelect.sort(function(a, b){
            if(a < b) { return -1 }
            if(a > b) { return 1 }
            return 0
        })
        reorderedList.unshift('Select')
        setExerciseList(reorderedList)
    }

    const addExercise = () => {
        const newAddedExercisesList = addedExercisesList.concat(exercise)
        setAddedExercisesList(newAddedExercisesList)
        setExerciseList(exerciseList.filter(e => e !== exercise))
        setExercise('Select')
    }

    const removeExercise = (exerciseToRemove) => {
        setAddedExercisesList(addedExercisesList.filter(e => e !== exerciseToRemove))
        const newExerciseList = exerciseList.concat(exerciseToRemove)
        reorderAlphabetically(newExerciseList)
    }

    const displayAddedExercisesList = () => {
        return (
            addedExercisesList.map(e =>
                <li key={e}>
                    {e}<button onClick={() => removeExercise(e)}>Remove</button>
                </li>
            )
        )
    }

    const updateMuscleMap = (event) => {
        console.log(allMuscles)
        allMuscles.forEach(muscle => {
            console.log(muscle)
            document.getElementById(muscle).style.fill = 'black'
        })
        musclesWorked[event.target.value].forEach(muscle => {
            document.getElementById(muscle).style.fill = 'red'
        })
        // if (event.target.value === 'Ab Wheel Rollout') {
        //     document.querySelector('#Abdominals').style.fill = 'red'
        // } else {
        //     document.querySelector('#Abdominals').style.fill = 'black'
        // }
    }

    const selectExercise = (event) => {
        setExercise(event.target.value)

        updateMuscleMap(event)
    }

    return (
            <TopPanel>
                <Title />
                <p>Today's session:</p>
                <div style={addedExercisesListDivStyle} id="history-container">
                    {
                        addedExercisesList.length === 0 ?
                            <p className="history history-exercise" id="history-select-exercise">No exercise added</p>:
                            <ul style={ulStyle}>
                                {displayAddedExercisesList()}
                            </ul>
                    }
                </div>
                
                <p id="addnew-text">+ Add new</p>
                <select name="exercise" id="workout" onChange={(event) => selectExercise(event)}>
                    {exerciseList.map(e => <option key={e}>{e}</option>)}
                </select>
                {exercise === 'Select' ?
                    <button type="button" id="add" className="mainpage leftpanel-btn" disabled>Add exercise</button> :
                    <button type="button" id="add" className="mainpage leftpanel-btn" onClick={addExercise}>Add exercise</button>
                }
            </TopPanel>
    )
}

export default MobileHomeTop