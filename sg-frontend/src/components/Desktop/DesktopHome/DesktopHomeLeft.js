import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { updateSession, emptySession } from '../../../reducers/sessionReducer'
import { changeCurrentPage } from '../../../reducers/pageReducer'


import DesktopTitle from '../DesktopPresentational/DesktopTitle'
import DesktopLeftPanel from '../DesktopPresentational/DesktopLeftPanel'
import DesktopBottomLeftPanel from '../DesktopPresentational/DesktopBottomLeftPanel'
import DesktopBlackButton from '../DesktopPresentational/DesktopBlackButton'
import DesktopWhiteButton from '../DesktopPresentational/DesktopWhiteButton'

import { allMuscles, mostMuscles, allExercises, musclesWorked } from '../../utils/musclesWorked'
import { customBlue, customPurple, customTurquoise } from '../../utils/colors'
import { saveSessionHelper } from '../../utils/helperFunctions'

const DesktopHomeLeft = ({ activateDemo }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
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

    const containerDivStyle = {
        marginLeft: '12.85%',
    }

    const h2Style = {
        fontSize: '2.2em',
        fontWeight: 500,
    }

    const descriptionStyle = {
        fontSize: '1.3em',
        margin: '7% 20% 6% 0',
        lineHeight: 1.4,
        fontWeight: 500,
    }

    const todaysSessionStyle = {
        color: customTurquoise,
        fontSize: '1.9em',
        fontWeight: 500,
        marginBottom: '4%',
    }

    const addedExercisesListDivStyle = {
        minHeight: 42,
        overflowY: 'auto',
        border: '2px solid black',
        borderRadius: 4,
        width: '70%',
        paddingLeft: 16,
        lineHeight: 1.8,
    }

    const ulStyle = {
        position: 'relative',
        listStyleType: 'none',
        marginLeft: 12,
        fontSize: 14,
        padding: 0,
        
        margin: '5px 0',
        fontWeight: 400,
    }

    const liHrStyle = {
        backgroundColor: 'grey',
        width: '96%',
        marginLeft: 0,
    }

    const trashIconStyle = {
        position: 'absolute',
        fontSize: 12,
        right: 20,
        marginTop: 5,
    }

    const addNewStyle = {
        fontSize: '1.3em',
        margin: '4.5% 0 1.8%',
        fontWeight: 500,
    }

    const exerciseSelectStyle = {
        border: '2px solid black',
        borderRadius: 4,
        width: '47%',
        height: 39,
        paddingLeft: 12,
        fontSize: 14,
        fontWeight: 400,
    }

    const addExerciseSpan = {
        marginLeft: 10,
    }

    const buttonDivStyle = {
        paddingTop: '3%',
        fontWeight: 500,
    }

    const loggedOutSpan = {
        marginLeft: 28,
        fontWeight: 500,
    }

    const loggedInSpan = {
        marginLeft: '-4%',
        fontWeight: 500,
    }

    const orStyle = {
        margin: '0 16px',
        fontSize: '1.7em',
    }

    const emptySpanStyle = {
        marginLeft: '8%',
    }

    const bottomLeftTextSpanStyle = {
        marginLeft: 17,
        fontSize: '1.7em',
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

    const saveSession = async () => {        
        await saveSessionHelper(user, session)

        dispatch(changeCurrentPage('History'))
    }

    const displayAddedExercisesList = () => {
        return (
            session.map(e =>
                <React.Fragment key={ e }>
                    <hr style={ liHrStyle } className='li-hr' />
                    <li>
                        { e }<i
                                style={ trashIconStyle }
                                className='fas fa-trash-alt'
                                onClick={ () => removeExercise(e) }
                                onMouseEnter= { (e) => handleMouseEnter(e) }
                                onMouseLeave= { (e) => handleMouseLeave(e) }
                            />
                    </li>
                </React.Fragment>
            )
        )
    }

    return (
            <DesktopLeftPanel bgColor={ 'white' }>
                <div style={ containerDivStyle }>
                    <DesktopTitle fontSize={ '5.8em' } marginTop={ '8.5%' } />

                    <h2 style={ h2Style }>A Tool to Check for Muscle Imbalance</h2>
                    <p style={ descriptionStyle }>
                        A common struggle for people who have just started working out is to ensure that the program they follow will target all muscle groups.<br></br><br></br>
                        Not doing so - for instance, including chest exercises but no back exercises - can lead to muscle imbalances that can be detrimental to your health in the long term.
                    </p>

                    <p style={ todaysSessionStyle }>Today's session:</p>
                    <div style={ addedExercisesListDivStyle } id='added-exercises'>
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
                    <span style={ addExerciseSpan }>
                        { exercise === 'No exercise selected' ?
                            <DesktopBlackButton text='Add exercise' fontSize={ '1.6em' } width={ '21%' } height={ 38 } disabled={ true } />:
                            <DesktopBlackButton text='Add exercise' fontSize={ '1.6em' } width={ '21%' } height={ 38 } handleClick={ addExercise } /> 
                        }
                    </span>
                    <DesktopBottomLeftPanel>
                        <div style={ buttonDivStyle }>
                            { user === null
                                ?
                                <span style={ loggedOutSpan }>
                                    <DesktopBlackButton text='Log in' fontSize={ '2.1em' } width={ '21.5%' } height={ 56 } handleClick={ () => dispatch(changeCurrentPage('Login')) } />
                                    <span style={ orStyle }>or</span>
                                    <DesktopWhiteButton text='Sign up' fontSize={ '2.1em' } width={ '21.5%' } height={ 56 } handleClick={ () => dispatch(changeCurrentPage('SignUp')) } />
                                    <span style={ bottomLeftTextSpanStyle }>to submit your workout.</span>
                                </span>
                                :
                                <span style={ loggedInSpan }>
                                    <DesktopWhiteButton text='My exercise history' fontSize={ '2.1em' } width={ '35%' } height={ 56 } icon={ 'fas fa-dumbbell' } iconSize={ '83%' } handleClick={ () => dispatch(changeCurrentPage('History')) } />
                                    <span style={ emptySpanStyle } />
                                    <DesktopBlackButton text='Save session' fontSize={ '2.1em' } width={ '29.7%' } height={ 56 } icon={ 'fas fa-check' } iconSize={ '95%' } handleClick={ saveSession } />
                                </span>
                            }
                        </div>
                    </DesktopBottomLeftPanel>
                </div>
            </DesktopLeftPanel>
    )
}

export default DesktopHomeLeft