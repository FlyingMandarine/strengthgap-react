import React, { useState, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'

import sessionService from '../../../services/sessions'

import MobileHistoryTop from './MobileHistoryTop'
import MobileHistoryBottom from './MobileHistoryBottom'

import MobileAppContainer from '../MobilePresentational/MobileAppContainer'
import MobileFooter from '../MobilePresentational/MobileFooter'

const MobileHistory = () => {
    const user = useSelector(state => state.user)

    const [ history, setHistory ] = useState([])
    const [ currentSession, setCurrentSession ] = useState([])

    // Since updateHistory is a dependency of the useEffect hook, it needs to be
    // wrapped in a useCallback hook to prevent it from being called indefinitely.
    const updateHistory = useCallback((newHistory) => {
        setHistory(newHistory)

        setNewSession([])
    }, [])

    useEffect(() => {
        const getHistory = async () => {
            if (user === 'guest') {
                const newHistory = JSON.parse(localStorage.getItem('loggedSGUserGuest')) || []
                updateHistory(newHistory)
            } else {
                const newHistory = await sessionService.fetchSessions(user)
                updateHistory(newHistory)
            }
        }

        getHistory()
    }, [ user, updateHistory ])
    
    const setNewSession = (newSession) => {
        setCurrentSession(newSession)
    }

    return (
        <>
            <MobileAppContainer>
                <MobileHistoryTop history={ history } updateHistory={ updateHistory } currentSession={ currentSession } setNewSession={ setNewSession } />
                <MobileHistoryBottom history={ history } updateHistory={ updateHistory } currentSession={ currentSession } setNewSession={ setNewSession } />
                <MobileFooter />
            </MobileAppContainer>
        </>
    )
}

export default MobileHistory