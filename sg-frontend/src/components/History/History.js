import React, { useState, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'

import sessionService from '../../services/sessions'

import HistoryTop from './HistoryTop'
import HistoryBottom from './HistoryBottom'

import AppContainer from '../presentational/AppContainer'
import Footer from '../presentational/Footer'

const History = () => {
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
            const newHistory = await sessionService.fetchSessions(user)
            updateHistory(newHistory)
        }

        getHistory()
    }, [ user, updateHistory ])
    
    const setNewSession = (newSession) => {
        setCurrentSession(newSession)
    }

    return (
        <>
            <AppContainer>
                <HistoryTop history={ history } updateHistory={ updateHistory } currentSession={ currentSession } setNewSession={ setNewSession } />
                <HistoryBottom history={ history } updateHistory={ updateHistory } currentSession={ currentSession } setNewSession={ setNewSession } />
                <Footer />
            </AppContainer>
        </>
    )
}

export default History