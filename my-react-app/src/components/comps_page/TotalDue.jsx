import React, { useEffect, useState } from 'react'
import "./totaldue.css"

const TotalDue = ({ setCurrentPage, changeAmount, tipAmount, tax, setTotalDue, tryCreditCard, setTryCreditCard, totalDue }) => {


    // console.log('changeAmount in total', changeAmount);
    // console.log('tipAmount in total', tipAmount);
    
    const [retry, setRetry] = useState(false)
    console.log('tryCreditCard', tryCreditCard);
    console.log('retry', retry);

    useEffect(() => {
        // const totalDue = changeAmount + (-changeAmount) + tipAmount + tax
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
                                tryCreditCard < 3 ?
                                    <p className='error'>Unable to read credit card</p> :
                                    <>
                                        <p className='error'>Payment not completed.</p>
                                        <strong style={{ color: "red", fontSize: '5vw' }}>
                                            Please ask  your server <br /> for assistance.
                                        </strong>
                                    </>
                            }

                            <p className='try-again'>Tap to try again</p>
                            <div className='success-retry'>
                                {
                                    (tryCreditCard < 3) ? 
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

                        <div className="success" style={{marginTop:"10vh"}}>
                            <button type='button' onClick={() => setCurrentPage("PAYMENT_COMPLETE")}>[success]</button>
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