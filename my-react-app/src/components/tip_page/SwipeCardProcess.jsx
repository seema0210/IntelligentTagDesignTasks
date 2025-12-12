import React, { useEffect, useState } from 'react'
import "./swipecardprocess.css"
import Calculator from './Calculator'

const SwipeCardProcess = ({ setCurrentPage, compCurrentBalance, setPinValue, apiObj }) => {

   const [pinPopup, setPinPopup] = useState(false)
   
    const handleFailedSwipw = () => {
        setCurrentPage("SWIPE_FAILED")
    }

    console.log('in child compCurrentBalance', compCurrentBalance);
    // console.log('in child compCurrentBalance', pinValue);
    

    return (
        <div className='swipe-club-card'>
            <p className='swipe-head'>Swipe your Club card</p>
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
                    <button type='button' onClick={() => setPinPopup(true)}>[swipe detected]</button>
                </div>
                <div className='success'>
                    <button type='button' onClick={handleFailedSwipw}>[swipe failed]</button>
                </div>
            </div>

            <div className='text'>
                <button type='button' onClick={() => setCurrentPage("ROOT_PAY_APPLY_COMPS")}>[RESET]</button>
            </div>

            {
                pinPopup && 
                <div id="popupOverlay">
                    <i className="fa-solid fa-xmark cancel-icon"
                        id="closePopupBtn"
                        onClick={() => setPinPopup(false)}>
                    </i>
                    <div className="calc-frame">
                        <Calculator
                            settipAmount={setPinValue}
                            setOpenCalculator={setPinPopup}
                            title={'Pin'}
                            setCurrentPage={setCurrentPage}
                            compCurrentBalance={compCurrentBalance}
                            apiObj={apiObj}
                        />
                    </div>
                </div>
            }
        </div>
    )
}

export default SwipeCardProcess