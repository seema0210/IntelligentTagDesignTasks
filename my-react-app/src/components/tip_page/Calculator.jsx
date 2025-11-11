import React, { useState } from 'react'
import './calculator.css'

const Calculator = ({ tipAmount, settipAmount, amountWithDoller, setOpenCalculator }) => {

    let defaultTipAmt = Number(tipAmount.toString().replace(/[^0-9.]/g, '')) || 0;
    let defaultTipAmtNew = defaultTipAmt.toString() // created string formate value so we can concat or delete element of value
    const [EnteredTipAmt, setEnteredTipAmt] = useState(defaultTipAmtNew || 0)

    const handleEnteredTipAmount = (e) => {
        let value = e.target.textContent // textContent it will accept "." also number thats why it is used.

        if(value === '.' && EnteredTipAmt.includes('.')){
            return   // eg EnteredTipAmt : 44.89 then this block will execute
        }
        setEnteredTipAmt((preVal) => preVal + value)  // concat the current and pre val
    }

    const handleCancelValue = () => {
        setEnteredTipAmt((preVal) => preVal.slice(0, -1)) // here we are removing the last element from the value
    }

    const handleFinalTipAmt = () => {
        settipAmount(EnteredTipAmt)
        setOpenCalculator(false)
    }

    console.log('EnteredTipAmt', EnteredTipAmt);

    return (
        <div>
            <div>
                <div className="popup-overlay">
                    <header>
                        <h1> Enter the amount to tip
                        </h1>
                        <input type="text"
                            value={ EnteredTipAmt.length > 0 ? `$${EnteredTipAmt}` : "_"}
                        />
                    </header>
                    <div className="val-btn">
                        {
                            [7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0]?.map((item) => (
                                <div 
                                key={item}
                                className="values"
                                onClick={handleEnteredTipAmount}
                                >
                                    {item}
                                </div>
                            ))
                        }
                        
                        <div className="cancel"
                            onClick={handleCancelValue}
                        >&#9003;</div>
                    </div>
                </div>
            </div>
            <button type="button" 
            className="colse-popup" 
            id="closePopupBtn"
            onClick={handleFinalTipAmt}
            >Done</button>

        </div>
    )
}

export default Calculator