import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { updateSession, emptySession } from '../../../reducers/sessionReducer'

import MobileTitle from '../MobilePresentational/MobileTitle'
import MobileTopPanel from '../MobilePresentational/MobileTopPanel'
import MobileBlackButton from '../MobilePresentational/MobileBlackButton'

import { allMuscles, mostMuscles, allExercises, musclesWorked } from '../../utils/musclesWorked'
import { customBlue, customPurple, customTurquoise } from '../../utils/colors'

const MobileHomeTop = ({ activateDemo }) => {
    const dispatch = useDispatch()
    const session = useSelector(state => state.session)

    const [ exercise, setExercise ] = useState('No exercise selected')
    const [ exerciseList, setExerciseList ] = useState([])

    // Empty the session on component unmount.
    useEffect(() => {
        return () => {
            dispatch(emptySession())
        }
    }, [ dispatch ])

    useEffect(() => {
        setExerciseList(allExercises)
    }, [])

    // Update the muscles showing up whenever a new exercise is selected
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
            session.forEach(ex => {
                musclesWorked[ex].forEach(muscle => {
                    document.getElementById(muscle).style.fill = customTurquoise
                })
            })

            // We stop there if the user has chosen 'No exercise selected' as it is not a valid exercise.
            if (exerciseSelected === 'No exercise selected') {
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

    }, [ exercise, session ])

    // Calculage percentage whenever a new exercise is added or removed
    useEffect(() => {
        const calculatePercentage = () => {
            let percentageCounter = 0
            const percentageText = document.getElementById('completionPercentage')

            // For each muscle group, we check if they are filled in anything other than black
            // (i.e. if it has been targeted by any exercise in 'session').
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
                percentageCounter = 100
            }

            if (percentageCounter < 33) {
                percentageText.style.color = '#909090'
            } else if (percentageCounter < 66) {
                percentageText.style.color = '#4b7474'
            } else {
                percentageText.style.color = customTurquoise
            }

            percentageText.textContent = percentageCounter + '%'
        }
        
        calculatePercentage()
    }, [ session ])

    const todaysSessionStyle = {
        color: customTurquoise,
        fontSize: 17,
        marginLeft: 24,
        fontWeight: 500,
    }

    const addedExercisesListDivStyle = {
        maxHeight: 112,
        overflowY: 'auto',
        border: '2px solid black',
        borderRadius: 4,
        margin: '0 24px',
        paddingLeft: 14,
    }

    const ulStyle = {
        position: 'relative',
        listStyleType: 'none',
        fontSize: 14,
        padding: 0,
        lineHeight: '1.8',
        margin: '5px 0',
        fontWeight: 400,
    }

    const trashIconStyle = {
        position: 'absolute',
        fontSize: 12,
        right: 20,
        marginTop: 5,
    }

    const addNewStyle = {
        fontSize: 13,
        margin: '25px 0 10px 24px',
        fontWeight: 500,
    }

    const exerciseSelectStyle = {
        border: '2px solid black',
        borderRadius: 4,
        margin: '0 24px',
        width: '87.5%',
        height: 39,
        paddingLeft: 12,
        fontWeight: 500,
    }

    const addExerciseDiv = {
        margin: '15px 0 0 24px',
    }

    const handleMouseEnter = (e) => {
        e.target.style.color = 'red'
    }

    const handleMouseLeave = (e) => {
        e.target.style.color = 'black'
    }

    const reorderAlphabetically = (newExerciseList) => {
        const exerciseListWithoutSelect = newExerciseList.filter(e => e !== 'No exercise selected')
        const reorderedList = exerciseListWithoutSelect.sort(function(a, b) {
            if (a < b) { return -1 }
            if (a > b) { return 1 }
            return 0
        })
        reorderedList.unshift('No exercise selected')
        setExerciseList(reorderedList)
    }

    const addExercise = () => {
        activateDemo()
        const updatedSession = session.concat(exercise)
        dispatch(updateSession(updatedSession))
        setExerciseList(exerciseList.filter(e => e !== exercise))
        setExercise('No exercise selected')
    }

    const removeExercise = (exerciseToRemove) => {
        dispatch(updateSession(session.filter(e => e !== exerciseToRemove)))
        const newExerciseList = exerciseList.concat(exerciseToRemove)
        reorderAlphabetically(newExerciseList)
        setExercise('No exercise selected')
        document.getElementById('exercise').value = 'No exercise selected'
    }

    const displayAddedExercisesList = () => {
        return (
            session.map(e =>
                <li key={ e }>
                    { e }<i
                            style={ trashIconStyle }
                            className='fas fa-trash-alt'
                            onClick={ () => removeExercise(e) }
                            onMouseEnter= { (e) => handleMouseEnter(e) }
                            onMouseLeave= { (e) => handleMouseLeave(e) }
                        />
                </li>
            )
        )
    }

    return (
            <MobileTopPanel bgColor={ 'white' }>
                <MobileTitle marginTop={ 40 } />
                <p style={ todaysSessionStyle }>Today's session:</p>
                <div style={ addedExercisesListDivStyle }>
                    {
                        session.length === 0 ?
                            <p style= { ulStyle }>No exercise added</p>:
                            <ul style={ ulStyle }>
                                { displayAddedExercisesList() }
                            </ul>
                    }
                </div>

                <p style={ addNewStyle }>+ Add new</p>
                <select style={ exerciseSelectStyle } id='exercise' name='exercise' onChange={ (event) => setExercise(event.target.value) }>
                    { exerciseList.map(e => <option key={ e }>{ e }</option>) }
                </select>
                <div style={ addExerciseDiv }>
                    { exercise === 'No exercise selected' ?
                        <MobileBlackButton text='Add exercise' fontSize={ 16 } width={ 150 } height={ 38 } disabled={ true } />:
                        <MobileBlackButton text='Add exercise' fontSize={ 16 } width={ 150 } height={ 38 } handleClick={ addExercise } /> 
                    }
                </div>
            </MobileTopPanel>
    )
}

export default MobileHomeTop