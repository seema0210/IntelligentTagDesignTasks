import React, { useEffect, useState } from 'react'
import "./totaldue.css"

const TotalDue = ({ setCurrentPage, changeAmount, tipAmount, tax, setTotalDue, tryCreditCard, setTryCreditCard, totalDue }) => {
    
    const [retry, setRetry] = useState(false)
    const [isSwipeCard, setSwipeCard] = useState(true)
    console.log('tryCreditCard', tryCreditCard);
    console.log('retry', retry);

    useEffect(() => {
        const totalDue = changeAmount + tipAmount + tax
        setTotalDue(totalDue)
    }, [])

    const handleRetry = () => {
        setRetry(false)
    }
    
    const handletryCreditCard = () => {
        setRetry(true)
        setTryCreditCard((pre) => pre + 1)
    }

    const handleAgainProcess = () => {
        setCurrentPage("AMOUNT_TIP")
        setTryCreditCard(0)
        setRetry(false)
    }
    const handleSuccess = () => {
        if(isSwipeCard){
            setCurrentPage("PAYMENT_SWIPE_FLOW")
        }else{
            setCurrentPage("PAYMENT_COMPLETE")
        }
    }

    return (
        <div className='total-due'>
            <div className='due-value'>
                <div className='due-val'>
                    <p>Subtotal:</p>
                    <p>${changeAmount.toFixed(2)}</p>
                </div>
                <div className='due-val'>
                    <p>Tip:</p>
                    <p>${tipAmount.toFixed(2)}</p>
                </div>
                <div className='due-val'>
                    <p>Tax:</p>
                    <p>${tax.toFixed(2)}</p>
                </div>

                <hr />

                <div className='due-val'>
                    <p className='final-total'>Total Due:</p>
                    <p className='final-total'>${totalDue.toFixed(2)}</p>
                </div>
            </div>

            {
                (tryCreditCard > 0 && retry) ?
                    <>
                        <div className='credit-card-3'>
                            {
                                tryCreditCard < 4 ?
                                    <p className='error'>Unable to read credit card.</p> :
                                    <>
                                        <p className='error-1'>Payment not completed.</p>
                                        <strong style={{ color: "red", fontSize: '5.5vw' }}>
                                            Please ask  your server <br /> for assistance.
                                        </strong>
                                    </>
                            }

                            <p className='try-again'>Tap to try again</p>
                            <div className='success-retry'>
                                {
                                    (tryCreditCard < 4) ? 
                                    <button type='button' onClick={handleRetry}>Retry</button> :
                                    <button type='button' onClick={handleAgainProcess}>Process Again</button>
                                }
                            </div>
                        </div>
                        <div className='text'>
                            <button type='button' onClick={() => setCurrentPage("AMOUNT_TIP")}>[RESET]</button>
                        </div>
                    </> :

                    <>
                        <div className="success" style={{marginTop:"17vh"}}>
                            <button type='button' onClick={handleSuccess}>[success]</button>
                        </div>
                        <div className='success'>
                            <button type='button' onClick={ handletryCreditCard}>[failure]</button>
                        </div>

                        <div className='text'>
                            <p className='auto'>[auto advance once  valid CC is recognized]</p>
                            <p>[if tax cannot be accurately displayed, i would Like to estimate tax due and show a disclaimer]</p>
                            <button type='button' onClick={() => setCurrentPage("AMOUNT_TIP")}>[RESET]</button>
                        </div>
                    </>

            }


        </div>
    )
}

export default TotalDue