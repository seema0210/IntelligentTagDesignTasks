import React, { useState } from 'react'
import './amountTip.css'
import Calculator from './Calculator'


export const AmountTip = ({ setCurrentPage, changeAmount, setChangeAmount, tipAmount, settipAmount }) => {

    const [openCalculator, setOpenCalculator] = useState(false)
    const [confirmTipModal, setConfirmTipModal] = useState(false)


    const handleChangeAmount = (e) => {
        let value = e.target.value.replace(/[^0-9.]/g, '')  // here accepting only numbers 
        setChangeAmount(Number(value) || 0)
    }

    const amountWithDoller = (value) => {
        let newNumber = +value
        return `$${newNumber.toFixed(2)}`  // set $ sign with decimal points
    }
    let fiftinPercent = changeAmount * 0.15;
    let twentyPercent = changeAmount * 0.20
    let twentyFivePercent = changeAmount * 0.25

    const handlePercentage = (val) => {
        switch (val) {
            case 15: settipAmount(fiftinPercent)
                break;
            case 20: settipAmount(twentyPercent)
                break;
            case 25: settipAmount(twentyFivePercent)
                break
        }

    }

    const handleTip = () => {
        console.log('tipAmount at popup confirm', tipAmount);
        setConfirmTipModal(true)

    }

    const handleCinfirmTip = () => {
        setCurrentPage("TOTAL_DUE")
    }

    const resetTip = () => {
        setChangeAmount(0)
        settipAmount(0)
    }

    return (
        <div class="home">
            <nav>
                <i className="fa-solid fa-angle-left"></i>
            </nav>

            <div className="home-body">
                <div className="home-nav">
                    <div className="navbar">
                        <h1>Check Subtotal :</h1>
                        <input type="text"
                            value={amountWithDoller(changeAmount)}
                            onChange={handleChangeAmount}
                        />
                    </div>
                    <p>Tip is based on the full check before comps or discounts</p>
                </div>
                <div className="home-amount">
                    <h1>Choose the ammount to tip</h1>
                    <div className="text-amount">
                        <h1 >{amountWithDoller(tipAmount)}</h1>
                    </div>
                    <div className="percentage-data">
                        <div className="percentage">
                            <h4 onClick={() => handlePercentage(15)}>15%</h4>
                            <p>{amountWithDoller(fiftinPercent)}</p>
                        </div>
                        <div className="percentage">
                            <h4 onClick={() => handlePercentage(20)}>20%</h4>
                            <p>{amountWithDoller(twentyPercent)}</p>
                        </div>
                        <div className="percentage">
                            <h4 onClick={() => handlePercentage(25)}>25%</h4>
                            <p>{amountWithDoller(twentyFivePercent)}</p>
                        </div>
                        <div className="percentage">
                            <h4 className="other" id="openPopup" onClick={() => setOpenCalculator(true)}>
                                OTHER
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="show-amount" onClick={handleTip}>
                {tipAmount == 0 ?
                    <h1> NO TIP </h1> :
                    <h1>TIP {amountWithDoller(tipAmount)}</h1>}
            </div>

            <footer>
                <div className="recet">
                    <i className="fa-solid fa-calculator" onClick={()=>setOpenCalculator(true)}></i>
                    <p onClick={resetTip}>[RESET]</p>
                </div>

                <div className="comps-apply">
                    <p>(Full Comps applied)</p>
                    <i className="fa-solid fa-file-invoice"></i>
                </div>
            </footer>

            {
                openCalculator &&
                <div id="popupOverlay">
                    <i className="fa-solid fa-xmark cancel-icon"
                        id="closePopupBtn"
                        onClick={() => setOpenCalculator(false)}>
                    </i>
                    <div className="calc-frame">
                        <Calculator
                            tipAmount={tipAmount}
                            settipAmount={settipAmount}
                            setOpenCalculator={setOpenCalculator}
                            amountWithDoller={amountWithDoller}
                        />
                    </div>
                </div>
            }

            {
                confirmTipModal &&
                <div id="popupOverlay">
                    <i className="fa-solid fa-xmark cancel-icon"
                        id="closePopupBtn"
                        onClick={() => setConfirmTipModal(false)}>
                    </i>
                    <div className="confirm-tip-calc-frame">
                        <div className='confirm-tip-amount'>
                            <div className="popup-overlay">
                                <h1>Confirm Tip Amount</h1>
                                {
                                    tipAmount == 0 ?
                                        <>
                                            <p> You're not adding a tip <br /> to your check.</p>
                                            <p>This can't be changed later.</p>
                                        </> :
                                        <>
                                            <p> You're about to add a <strong>{`$${Number(tipAmount).toFixed(2)}`}</strong> tip to your check.</p>
                                            <p>This amount can't be changed later.</p>
                                        </>
                                }
                            </div>

                            <div className='continue-btns'>
                                <button type="button"
                                    className="colse-popup"
                                    id="closePopupBtn"
                                    onClick={handleCinfirmTip}>
                                    Confirm Tip</button>
                            </div>
                        </div>


                    </div>
                </div>
            }


        </div>
    )
}
