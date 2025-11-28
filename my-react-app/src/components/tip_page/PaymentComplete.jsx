import React from 'react'
import "./paymentcomplete.css"

const PaymentComplete = ({setCurrentPage,tipAmount, totalDue}) => {


    // console.log('changeAmount in total', changeAmount);
//   console.log('tipAmount in total', tipAmount);

// const totalDue = changeAmount + (-changeAmount) + tipAmount

    return (
        <div className='payment-complete'>
           
                <h1>Payment Complete</h1>
                <div className='amount'>
                    <h2>You've earned ${totalDue.toFixed(2)} in club Dollars.</h2>
                    <p>Thank you for dining with us.</p>
                </div>

                <p className='take-receipt'>Please take your receipt.</p>

                <div className='receipt'>
                    <p className='get-receipt'>Get a digital receipt?</p>
                    <p className='link'>we'll text you a link to view your receipt online.</p>
                    <button type='button'>Text Receipt Link</button>
                </div>

            <div className='text'>
                <button type='button' onClick={()=>setCurrentPage("AMOUNT_TIP")}>[RESET]</button>
            </div>
        </div>
    )
}

export default PaymentComplete