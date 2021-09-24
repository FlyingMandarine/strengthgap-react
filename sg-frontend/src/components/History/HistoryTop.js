import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import sessionService from '../../services/sessions'

import TopPanel from '../presentational/TopPanel'

const HistoryTop = () => {
    const [ history, setHistory ] = useState([])

    const user = useSelector(state => state.user)
    
    // Use session store state also here to select which session to display/delete
    const session = useSelector(state => state.session)


    useEffect(() => {
        const getHistory = async () => {
            const newHistory = await sessionService.fetchSessions(user)
            setHistory(newHistory)
        }

        getHistory()
    }, [ user ])

    return (
        <TopPanel bgColor={ 'white' }>
            <div>My Exercise History</div>

            <p>Select a workout</p>

            <select>
                <option>No workout selected</option>
                {
                    history.map(s => <option key={ s.id }>{ s.percent }</option>)
                }
            </select>

            <ul>
                Exercises logged
                
            </ul>
        </TopPanel>
    )
}

export default HistoryTop