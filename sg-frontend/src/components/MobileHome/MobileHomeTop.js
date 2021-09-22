import React, { useState, useEffect } from 'react'

import Title from '../presentational/Title'
import TopPanel from '../presentational/TopPanel'

import { allMuscles, mostMuscles, allExercises, musclesWorked } from '../utils/musclesWorked'
import { customBlue, customPurple, customTurquoise } from '../utils/colors'

const MobileHomeTop = () => {
    const [ exercise, setExercise ] = useState('Select')
    const [ addedExercisesList, setAddedExercisesList ] = useState([])
    const [ exerciseList, setExerciseList ] = useState([])

    useEffect(() => {
        setExerciseList(allExercises)
    }, [])

    // Effect hook to update the muscles showing up whenever
    // a new exercise is selected
    useEffect(() => {
        
        const updateMuscleMap = (exerciseSelected) => {
            if (!exerciseSelected) {
                return
            }

            // First, we reset to default state by filling all muscle groups black.
            allMuscles.forEach(muscle => {
                document.getElementById(muscle).style.fill = 'black'
            })
    
            // We then go through every exercise already added to the user's history,
            // filling each exercise's muscle groups as required.
            addedExercisesList.forEach(ex => {
                musclesWorked[ex].forEach(muscle => {
                    document.getElementById(muscle).style.fill = customTurquoise
                })
            })

            // We stop there if the user has chosen 'Select' as it is not a valid exercise.
            if (exerciseSelected === 'Select') {
                return
            }

            // Otherwise, we fill the selected exercise's muscle groups in blue, unless a previous exercise
            // has already targeted those muscles, in which case we fill those purple instead).
            musclesWorked[exerciseSelected].forEach(muscle => {
                if (document.getElementById(muscle).style.fill === 'rgb(37, 162, 162)') {
                    document.getElementById(muscle).style.fill = customPurple
                }
                else {
                    document.getElementById(muscle).style.fill = customBlue
                }
            })
        }

        updateMuscleMap(exercise)

    }, [exercise, addedExercisesList])

    // Effect hook to calculage percentage whenever a new exercise
    // is added or removed
    useEffect(() => {
        const calculatePercentage = () => {
            let percentageCounter = 0
            const percentageText = document.getElementById('completionPercentage')

            // For each muscle group, we check if they are filled in anything other than black
            // (i.e. if it has been targeted by any exercise in addedExercisesList).
            // We increase the percentageCounter by 1 each time.
            mostMuscles.forEach(function(item) {
                if (document.getElementById(item).style.fill !== 'black') {
                    percentageCounter++
                }
            })

            // There are 14 muscle groups in the body, so each muscle group filled should add
            // about 7.14% to our percentage counter. Let's round it down to 7.
            percentageCounter = percentageCounter * 7

            if (percentageCounter === 98) {
                percentageCounter = 100;
            }

            if (percentageCounter < 33) {
                percentageText.style.color = '#909090';
            } else if (percentageCounter < 66) {
                percentageText.style.color = '#4b7474';
            } else {
                percentageText.style.color = customTurquoise;
            }

            percentageText.textContent = percentageCounter + '%';
        }
        
        calculatePercentage()
    }, [addedExercisesList])

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
        setExercise('Select')
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

    return (
            <TopPanel>
                <Title />
                <p>Today's session:</p>
                <div style={ addedExercisesListDivStyle }>
                    {
                        addedExercisesList.length === 0 ?
                            <p>No exercise added</p>:
                            <ul style={ ulStyle }>
                                {displayAddedExercisesList()}
                            </ul>
                    }
                </div>

                <p>+ Add new</p>
                <select name='exercise' onChange={ (event) => setExercise(event.target.value) }>
                    { exerciseList.map(e => <option key={e}>{e}</option>) }
                </select>
                { exercise === 'Select' ?
                    <button type='button' disabled>Add exercise</button> :
                    <button type='button' onClick={ addExercise }>Add exercise</button>
                }
            </TopPanel>
    )
}

export default MobileHomeTop