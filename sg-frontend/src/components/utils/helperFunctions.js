import sessionService from '../../services/sessions'

// Function to save the current session into the history.
export const saveSessionHelper = async (user, session) => {
    const percentage = document.getElementById('completionPercentage').textContent
    const formattedPercentage = Number(percentage.substring(0, percentage.length - 1))

    // If the user is logged in as a guest using the demo functionality, we add
    // the current workout to the others already located in localStorage.
    if (user === 'guest') {
        const currentDate = new Date()
        const convertedDate = currentDate.toLocaleString()

        const oldSessions = JSON.parse(localStorage.getItem('loggedSGUserGuest')) || []

        const sessionToSave = {
            exercises: session,
            percent: formattedPercentage,
            date: convertedDate,
            id: oldSessions.length.toString(),
        }

        oldSessions.push(sessionToSave)
        
        localStorage.setItem('loggedSGUserGuest', JSON.stringify(oldSessions))
    } else {
        // Otherwise, we insert it into the database.
        const sessionToSave = {
            username: user,
            exercises: session,
            percent: formattedPercentage,
        }

        await sessionService.recordSession(sessionToSave)
    }
}

export const deleteSessionHelper = async (history, currentSession, updateHistory, user) => {
    if (user === 'guest') {
        const newHistory = history.filter(s => s.id !== currentSession.id)
        localStorage.setItem('loggedSGUserGuest', JSON.stringify(newHistory))
        updateHistory(newHistory)
    } else {
        try {
            const storageInfo = JSON.parse(window.localStorage.getItem('loggedSGUser'))
    
            await sessionService.removeSession(storageInfo.token, currentSession.id)
    
            const newHistory = history.filter(s => s.id !== currentSession.id)
    
            updateHistory(newHistory)
        } catch (exception) {
            // TO-DO: Make sure the UI displays this error and then logs the user out rather than simply a console log.
            if (exception.response.data.error === 'token expired') {
                console.log('Your session has expired. Please log in again to perform this action.')
            }
        }
    }
}