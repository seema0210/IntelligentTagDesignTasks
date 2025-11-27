import React from 'react'
import "./totaldue.css"

const TotalDue = () => {
    return (
        <div className='total-due'>
            <div className='due-value'>
                <div className='due-val'>
                    <p>Subtotal:</p>
                    <p>$100.00</p>
                </div>
                <div className='due-val'>
                    <p>Payment Applied:</p>
                    <p>-$100.00</p>
                </div>
                <div className='due-val'>
                    <p>Tip:</p>
                    <p>$20.00</p>
                </div>
                <div className='due-val'>
                    <p>Tax:</p>
                    <p>$0.00</p>
                </div>

                <hr />

                <div className='due-val'>
                    <p className='final-total'>Total Due:</p>
                    <p className='final-total'>$20.00</p>
                </div>
            </div>

            <div className='success'>
            <button type='button'>[Success]</button>
            </div>

            <div className='text'>
                <p className='auto'>[auto advance once  valid CC is recognized]</p>
                <p>[if tax cannot be accurately displayed, i would Like to estimate tax due and show a disclaimer]</p>
                <button>[RESET]</button>
            </div>
        </div>
    )
}

export default TotalDue