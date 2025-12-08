import React from 'react'
import "./swipefailed.css"

const SwipeFailed = ({setCurrentPage}) => {
    return (
        <div >
            <nav onClick={() => setCurrentPage("SWIPE_CARD_PROCESS")}>
                <i className="fa-solid fa-angle-left"></i>
            </nav>
            <div className='swipe-failed'>
                <p>We didn't detect a Club card. Tap "Retry" to try again</p>

                    <button type='button' onClick={() => setCurrentPage("SWIPE_CARD_PROCESS")}>Retry</button>
            </div>
             <div className='text'>
                <button type='button' onClick={() => setCurrentPage("ROOT_PAY_APPLY_COMPS")}>[RESET]</button>
            </div>
        </div>
    )
}

export default SwipeFailed