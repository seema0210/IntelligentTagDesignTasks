import React, { useEffect } from 'react'
import "./swipeclubcard.css"

const SwipeClubCard = ({ SwipeClubCard, setCurrentPage, setIsSwipeFailed }) => {

    useEffect(()=>{
    setIsSwipeFailed(null)
  },[])

    const handleFailedSwipw = () => {
        setIsSwipeFailed("SWIPE_FAIL")
        setCurrentPage("PAYMENT_SWIPE_FLOW")
    }

    return (
        <div className='swipe-club-card'>
            <p className='swipe-head'>Swipe a Club card</p>
            <div className="authorization-box">
                <h2 className="auth-title">Present Card.</h2>
                <p className="auth-sub">Present Card on Payment Device</p>

                <div className="progress-wrapper">
                    <div className="progress-fill"></div>
                </div>

                <button className="cancel-btn" onClick={() => setCurrentPage("AMOUNT_TIP")}>
                    Cancel
                </button>
            </div>

            <div className='swipe-btn'>
                <div className="success" >
                    <button type='button' onClick={() => setCurrentPage("SUCCESS_CLUB_DOLLAR")}>[successful card swipe]</button>
                </div>
                <div className='success'>
                    <button type='button' onClick={handleFailedSwipw}>[failed card swipe]</button>
                </div>
            </div>

            <div className='text'>
                <button type='button' onClick={() => setCurrentPage("AMOUNT_TIP")}>[RESET]</button>
            </div>
        </div>
    )
}

export default SwipeClubCard