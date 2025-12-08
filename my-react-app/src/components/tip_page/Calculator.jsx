import React, { useState } from 'react'
import './calculator.css'

const Calculator = ({ settipAmount, setOpenCalculator, title, setCurrentPage }) => {

    let defaultVal = (title === "Tip") ? 0 : "_"
    const [EnteredTipAmt, setEnteredTipAmt] = useState(defaultVal)
    const [displayPin, setDisplayPin] = useState("____");
    const [incorrectPin, setIncorrectPin] = useState(false)

    const handleEnteredTipAmount = (e) => {
        let value = e.target.textContent // textContent it will accept "." also number thats why it is used.

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
        setEnteredTipAmt(newVal)
    }
    // console.log('EnteredTipAmt', EnteredTipAmt);


    const handleEnteredPin = (e) => {
        let value = e.target.textContent;

        var currentVal;
        if (EnteredTipAmt === "_") {
            currentVal = value // update the default value
        } else {
            var newVal = EnteredTipAmt + value
            currentVal = newVal
        }

        if (currentVal.length > 4) {
            return
        }
        setEnteredTipAmt(currentVal)

        let masked = "●".repeat(currentVal.length).padEnd(4, "_"); // while typing show "." and replace "_"
        setDisplayPin(masked);
    }

    const handleCancelValue = () => {
        setEnteredTipAmt((preVal) => preVal.slice(0, -1)) // here we are removing the last element from the value
        if (displayPin.length <= 1) {
            setDisplayPin("____") // 
        } else {

            setDisplayPin((prev) => prev.slice(0, -1))
        }
    }
    console.log('displayPin', displayPin);
    console.log('displayPin', typeof displayPin);
    console.log('displayPin', displayPin.length);
    console.log('EnteredTipAmt', EnteredTipAmt);


    const handleFinalTipAmt = () => {
        let finalValue = +EnteredTipAmt
        settipAmount(finalValue)
        setOpenCalculator(false)

        if(title === "Pin"){
            setCurrentPage("WELCOME_PAGE")
        }
        
    }

    const handleIncorrectPin = () => {
        setIncorrectPin(true)
    }

    const handleNoComps = () => {
        setCurrentPage("HAS_NO_COMPS")
    }

    const handleDisabledCard = () => {
        setCurrentPage("DISABLED_CARD")
    }

    return (
        <div>
            <div>
                <div className="popup-overlay">
                    <header>
                        {
                            title === "Tip" ?
                                <h1> Enter the amount to tip</h1> :
                                incorrectPin ?
                                <div className='incorrect-pin'>
                                    <p>That PIN doesn't match.</p> 
                                    <p>Try again</p>
                                </div> :
                                <p>Enter your PIN</p>
                        }
                        {
                            title === "Tip" ?
                                <input type="text"
                                    value={EnteredTipAmt} /> :
                                    incorrectPin ?
                                    null :
                                <p className='pin'>{displayPin}</p>
                        }
                    </header>
                    <div className="val-btn">
                        {
                            [7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0]?.map((item) =>
                                (item === "." && title === "Pin") ? null : (
                                    <div
                                        key={item}
                                        className="values"
                                        onClick={title === "Tip" ? handleEnteredTipAmount : handleEnteredPin}
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

            {
                title === "Pin" ?
                    <button type="button"
                        className="colse-popup-pin"
                        id="closePopupBtn"
                        onClick={handleFinalTipAmt}
                    > CONTINUE</button> :
                    <button type="button"
                        className="colse-popup"
                        id="closePopupBtn"
                        onClick={handleFinalTipAmt}
                    >Done</button>
            }

            {
                title === "Pin"  &&
                <div className='handle-pin-validation'>
                <button type="button"
                        className="handle-pin"
                        onClick={handleIncorrectPin}
                    >[incorrect pin]</button>
                    <button type="button"
                        className="handle-pin"
                        onClick={handleNoComps}
                    >[had no comps]</button>
                    <button type="button"
                        className="handle-pin"
                        onClick={handleDisabledCard}
                    >disabled card</button>

            </div>
            }

            

            {
                title === "Pin" &&
                <div className='text'>
                    <button type='button' onClick={() => setCurrentPage("ROOT_PAY_APPLY_COMPS")}>[RESET]</button>
                </div>
            }

        </div>
    )
}

export default Calculator