import React from 'react'
import "./paymentswipeflow.css"

const PaymentSwipeFlow = ({ setCurrentPage, isSwipeFailed, totalDue, clubDollerVal }) => {
    return (
        <div className='payment-complete-swipe'>

            <h1>Payment Complete</h1>
            <p className='amount'>Thank you for dining with us.</p>

            <p className='take-receipt'>Please take your receipt.</p>

            <h2>You've earned ${clubDollerVal.toFixed(2)} club Dollars.</h2>

            <p className='take-account'>Tap 'apply' to add it to an account.</p>

            <div className="success" >
                <button type='button' onClick={() => setCurrentPage("SWIPE_CLUB_CARD")}>Apply</button>
            </div>
            <div className='success'>
                <button type='button' onClick={() => setCurrentPage("AMOUNT_TIP")}>Skip</button>
            </div>

            {
                isSwipeFailed === "SWIPE_FAIL" &&
                <p className='swap-failed'>Swipe failed, please try again</p>
            }

            <div className='check-card'>
                <h1>Dont't have a club card?</h1>
                <p>Visit The Club to sign up and start earning rewards.</p>
            </div>

            <div className='text'>
                <button type='button' onClick={() => setCurrentPage("AMOUNT_TIP")}>[RESET]</button>
            </div>
        </div>
    )
}

export default PaymentSwipeFlow