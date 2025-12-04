import React, { useState } from 'react'
import './calculator.css'

const Calculator = ({ tipAmount, settipAmount, amountWithDoller, setOpenCalculator }) => {

    const [EnteredTipAmt, setEnteredTipAmt] = useState(0)

    console.log('EnteredTipAmt', EnteredTipAmt);
    console.log('EnteredTipAmt', typeof EnteredTipAmt);


    const handleEnteredTipAmount = (e) => {
        let value = e.target.textContent // textContent it will accept "." also number thats why it is used.

        console.log('value', value);
        console.log('value', typeof value);

        let current = String(EnteredTipAmt)

        if (value === '.' && current.includes('.')) {
            return   // eg EnteredTipAmt : 44.89 then this block will execute
        }

        if (current === "0" && value !== ".") { // we cant type like 005
            current = "";
        }

        let newVal = current + value;

        if (!/^\d*\.?\d{0,2}$/.test(newVal)) {
            return;
        }

        setEnteredTipAmt((newVal))
    }

    const handleCancelValue = () => {
        setEnteredTipAmt((preVal) => preVal.slice(0, -1)) // here we are removing the last element from the value
    }

    const handleFinalTipAmt = () => {
        let finalValue = Number(EnteredTipAmt || 0).toFixed(2);
        settipAmount(finalValue)
        setOpenCalculator(false)
    }

    return (
        <div>
            <div>
                <div className="popup-overlay">
                    <header>
                        <h1> Enter the amount to tip
                        </h1>
                        <input type="text"
                            value={EnteredTipAmt}
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