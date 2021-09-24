import React from 'react'

import TopPanel from '../presentational/TopPanel'

const HistoryTop = () => {
    return (
        <TopPanel bgColor={ 'white' }>
            <div>My Exercise History</div>

            <p>Select a workout</p>

            <select>
                <option>No workout selected</option>
            </select>

            <ul>
                Exercises logged
                insert list here
            </ul>
        </TopPanel>
    )
}

export default HistoryTop