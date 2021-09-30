import React, { useEffect } from 'react'

import DesktopLeftPanel from '../DesktopPresentational/DesktopLeftPanel'

import { allMuscles, musclesWorked } from '../../utils/musclesWorked'
import { customBlue, customPurple, customTurquoise } from '../../utils/colors'

const DesktopHistoryLeft = ({ history, updateHistory, currentSession, setNewSession }) => {

    const containerDivStyle = {
        padding: '0 24px',
    }

    const titleStyle = {
        fontSize: 34,
        margin: '40px 0 28px',
        fontWeight: 500,
    }

    const selectWorkoutStyle = {
        fontSize: 13,
        fontWeight: 500,
    }

    const selectStyle = {
        border: '2px solid black',
        borderRadius: 4,
        paddingLeft: 12,
        marginBottom: 24,
        width: '100%',
        height: 40,
        fontWeight: 400,
    }

    const exercisesDivStyle = {
        backgroundColor: '#F4F4F4',
        borderRadius: 4,
        fontSize: 15,
        padding: 16,
        fontWeight: 700,
    }

    const ulStyle = {
        overflowY: 'auto',
        margin: 0,
        padding: 0,
        maxHeight: 136,
        fontWeight: 500,
    }

    const liStyle = {
        marginTop: 15,
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
                    document.getElementById(muscle).style.fill = customBlue
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

    return (
        <DesktopLeftPanel bgColor={ 'white' }>
            <div style={ containerDivStyle }>
                <div style={ titleStyle }>My Exercise History</div>

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
                    <ul style={ ulStyle }>
                        {
                            currentSession.exercises &&
                            currentSession.exercises.map(ex => <li style={ liStyle } key={ ex }>{ ex }</li>)
                        }
                    </ul>
                </div>
            </div>
        </DesktopLeftPanel>
    )
}

export default DesktopHistoryLeft