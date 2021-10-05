import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { changeCurrentPage } from '../../../reducers/pageReducer'

import removeService from '../../../services/sessions'

import { allMuscles, musclesWorked } from '../../utils/musclesWorked'
import { customPurple, customTurquoise } from '../../utils/colors'

import DesktopLeftPanel from '../DesktopPresentational/DesktopLeftPanel'
import DesktopBottomLeftPanel from '../DesktopPresentational/DesktopBottomLeftPanel'
import DesktopBlackButton from '../DesktopPresentational/DesktopBlackButton'

const DesktopHistoryLeft = ({ history, updateHistory, currentSession, setNewSession }) => {
    const dispatch = useDispatch()

    const titleStyle = {
        fontSize: '4.9em',
        margin: '14.5% 0 9%',
        fontWeight: 500,
    }

    const selectWorkoutStyle = {
        fontSize: '1.3em',
        fontWeight: 500,
    }

    const selectStyle = {
        border: '2px solid black',
        borderRadius: 4,
        paddingLeft: 12,
        marginBottom: '6%',
        width: '71.1%',
        height: '8.6%',
        fontSize: '1.7em',
        fontWeight: 400,
    }

    const exercisesDivStyle = {
        backgroundColor: '#F4F4F4',
        borderRadius: 4,
        width: '71.1%',
        minHeight: '12%',
        fontSize: '1.9em',
        padding: '2.7%',
        fontWeight: 700,
    }

    const ulStyle = {
        overflowY: 'auto',
        margin: 0,
        padding: 0,
        fontSize: '.9em',
        fontWeight: 500,
    }

    const liStyle = {
        marginTop: 21,
    }

    const deleteButtonStyle = {
        margin: '4% 0 0 38.5%',
    }

    const buttonsDivStyle = {
        margin: '3.4% 0 0 -41.5%',
    }

    useEffect(() => {
        const percentageText = document.getElementById('completionPercentage')

        allMuscles.forEach(muscle => {
            document.getElementById(muscle).style.fill = 'black'
        })

        percentageText.style.color = '#909090'
        percentageText.textContent = '0%'
    }, [ history ])

    const displaySession = (e) => {
        const selectedIndex = e.target.options.selectedIndex
        const selectedOptionId = e.target.options[selectedIndex].getAttribute('data-key')
        const selectedSession = history.find(s => s.id === selectedOptionId)

        const percentageText = document.getElementById('completionPercentage')

        allMuscles.forEach(muscle => {
            document.getElementById(muscle).style.fill = 'black'
        })

        if (!selectedSession) {
            percentageText.style.color = '#909090'
            percentageText.textContent = '0%'

            setNewSession([])

            return
        }

        selectedSession.exercises.forEach(ex => {
            musclesWorked[ex].forEach(muscle => {
                if (document.getElementById(muscle).style.fill === 'rgb(37, 162, 162)' ||
                    document.getElementById(muscle).style.fill === 'rgb(19, 31, 167)') {
                    document.getElementById(muscle).style.fill = customPurple
                }
                else {
                    document.getElementById(muscle).style.fill = customTurquoise
                }
            })
        })

        if (selectedSession.percent < 33) {
            percentageText.style.color = '#909090'
        } else if (selectedSession.percent < 66) {
            percentageText.style.color = '#4b7474'
        } else {
            percentageText.style.color = customTurquoise
        }

        percentageText.textContent = selectedSession.percent + '%'

        setNewSession(selectedSession)
    }

    const deleteSession = async () => {
        try {
            const storageInfo = JSON.parse(window.localStorage.getItem('loggedSGUser'))

            await removeService.removeSession(storageInfo.token, currentSession.id)

            const newHistory = history.filter(s => s.id !== currentSession.id)

            updateHistory(newHistory)
        } catch (exception) {
            // TO-DO: Make sure the UI displays this error and then logs the user out rather than simply a console log.
            if (exception.response.data.error === 'token expired') {
                console.log('Your session has expired. Please log in again to perform this action.')
            }
        }
    }

    return (
        <DesktopLeftPanel bgColor={ 'white' } paddingLeft={ '7.2%' }>
            <h1 style={ titleStyle }>My Exercise History</h1>

            <p style={ selectWorkoutStyle }>Select a workout</p>

            <select style={ selectStyle } id='historySelect' onChange={ (e) => displaySession(e) }>
                <option>No workout selected</option>
                {
                    history.map(s => <option key={ s.id } data-key={ s.id }>{ s.percent }% on { s.date }</option>)
                }
            </select>

            <div style={ exercisesDivStyle }>
                Exercises logged
                <hr />
                <ul style={ ulStyle } id='history-ul'>
                    {
                        currentSession.exercises &&
                        currentSession.exercises.map(ex => <li style={ liStyle } key={ ex }>{ ex }</li>)
                    }
                </ul>
            </div>

            {
                currentSession.length !== 0 &&
                <div style={ deleteButtonStyle }>
                    <DesktopBlackButton text='Delete this session' fontSize={ '1.6em' } width={ '53%' } height={ 38 } icon={ 'fas fa-trash-alt' } handleClick={ deleteSession } />
                </div>
            }
            
            <DesktopBottomLeftPanel>
            <div style={ buttonsDivStyle }>
                <DesktopBlackButton text='New session' fontSize={ '2.1em' } width={ '21%' } height={ 56 } icon={ 'fas fa-plus' } handleClick={ () => dispatch(changeCurrentPage('Home')) } />
            </div>
            </DesktopBottomLeftPanel>
        </DesktopLeftPanel>
    )
}

export default DesktopHistoryLeft