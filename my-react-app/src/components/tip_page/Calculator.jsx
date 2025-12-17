import React, { useState } from 'react'
import './calculator.css'

const Calculator = ({ settipAmount, setOpenCalculator, title, setCurrentPage, compCurrentBalance, apiObj }) => {

    let defaultVal = (title === "Tip") ? 0 : "_"
    const [EnteredTipAmt, setEnteredTipAmt] = useState(defaultVal)
    const [displayPin, setDisplayPin] = useState("____");
    const [incorrectPin, setIncorrectPin] = useState(false)
    console.log('apiObj at cal', apiObj);


    console.log('compCurrentBalance in calcy', compCurrentBalance);
    console.log('title in calcy', title);


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


    const handleEnteredPin = (e) => {

        setIncorrectPin(false) // 1st typed pin wrong then it will open the pin option
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

    const handleFinalTipAmt = () => {
        let finalValue = +EnteredTipAmt
        settipAmount(finalValue)


        if (title === "Pin") {
            if (apiObj.pin !== finalValue) {
                // setIncorrectPin(true)
                if(compCurrentBalance === "check_comb_balance" && apiObj.isComps){
                    // if(apiObj.isComps){
                        // setIncorrectPin(true)
                        // return
                    // }
                    setCurrentPage("HAS_NO_COMPS") 
                    return
                }
                setIncorrectPin(true)
                return
            }
            if (apiObj.isComps) {
                setCurrentPage("HAS_NO_COMPS")
                return
            }
            if (apiObj.isCard) {
                setCurrentPage("DISABLED_CARD")
                return
            }

            setIncorrectPin(false)

            if (compCurrentBalance === "check_comb_balance") {
                setCurrentPage("COMP_CURRENT_BALANCE")
                return
            }
            if(apiObj.pin === finalValue){
                setCurrentPage("WELCOME_PAGE")
                return
            }

        }

        setOpenCalculator(false)
        setCurrentPage("WELCOME_PAGE")
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
                title === "Pin" &&
                <div className='text'>
                    <button type='button' onClick={() => setCurrentPage("ROOT_PAY_APPLY_COMPS")}>[RESET]</button>
                </div>
            }

        </div>
    )
}

export default Calculator