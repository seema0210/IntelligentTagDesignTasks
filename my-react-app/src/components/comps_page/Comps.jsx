
import React, { useState } from 'react'
import './comps.css'
import InputPopup from './InputPopup'
import TotalDue from './TotalDue'

const Comps = ({setCurrentPage}) => {

    const easyDineAvailableBalance = 24
    const clubDollarAvailableBalance = 65
    const [eCompTotal, setECompTotal] = useState(59.5)
    const [easyDineVal, setEasyDineVal] = useState(0)
    const [clubDollarVal, setCLubDillarVal] = useState(0.00)
    const [eComVal, setEcomVal] = useState([])
    const [smartAllocate, setSmartAllocate] = useState(false)

    const [inputValPopup, setInputValPopup] = useState(false)
    const [popupTitle, setPopupTitle] = useState('')

    const [isContinue, setIsContinue] = useState(false)
   
    const handleEasyDine = () => {
        setInputValPopup(true)
        setPopupTitle("EasyDine")
    }
    const handleClubDollars = () => {
        setInputValPopup(true)
        setPopupTitle("Club Dollars")
    }

    const handleEComps = (item) => {
        if (eComVal.includes(item)) { // toggle functionality (if got repeat value)
            setEcomVal(eComVal.filter((currentItem) => currentItem != item)) // filter dublicate ecoms
        } else {
            setEcomVal([...eComVal, item]) // can select multiple ecoms
        }
    }

    const addEcom = eComVal?.reduce((sum, val) => sum + val, 0) // here 0 is default value of sum
    var addChargedToComps = (+addEcom) + (+clubDollarVal) + (+easyDineVal) // all entered values are added
    var chargedToComps = `$${addChargedToComps.toFixed(2)}` // fixed those values with 2 digits with $

    var remainingAfterComps = eCompTotal - addChargedToComps
    var remainingAfterCompsVal = `$${remainingAfterComps.toFixed(2)}`

    var remainingAfterCompsValFinal = (remainingAfterComps > 0 && smartAllocate) ? `$${Number(0).toFixed(2)}` :
        remainingAfterComps > 0 ? remainingAfterCompsVal : `$${Number(0).toFixed(2)}`

    var smartAllocateDefault = eCompTotal - 50


    const handleSmartAllocate = () => {
        setEcomVal([50])
        setEasyDineVal(smartAllocateDefault)
        setSmartAllocate(true)

    }

    const handleReset = () => {
        setEasyDineVal(0)
        setCLubDillarVal(0)
        setEcomVal([])
        setSmartAllocate(false)
    }

    return (
        <div className="home">
            <nav>
                <i className="fa-solid fa-angle-left"></i>
            </nav>

            <h1>Allocate Your Comps</h1>
            <div className="navbar">
                <h1>Comp-Eligible Total :</h1>
                <input type="text"
                    value={`$${Number(eCompTotal).toFixed(2)}`}
                    onChange={() => { }}
                />
            </div>

            <div className='comps-body'>
                <h2 className='your-comps'>Apply Your Comps:</h2>
                {
                    (smartAllocate == true && easyDineVal > 0) ? <p className='adjust'>Adjusted</p>
                        : (easyDineVal > 0 && remainingAfterComps > 0) ? <p className='adjust'> Applied</p> : <p style={{ height: "1vh" }}></p>
                }
                <div className='comps-easy-dine'>
                    <div className='comps-easy'>
                        <h2>EasyDine</h2>
                        <p style={{ color: remainingAfterComps < 0 ? 'red' : 'black' }}>Available Balance: {`$${Number(easyDineAvailableBalance).toFixed(2)}`}</p>
                        {/* <p>Available Balance: {`$${Number(easyDineVal).toFixed(2)}`}</p> */}
                    </div>
                    <input type="text"
                        onClick={handleEasyDine}
                        value={`$${Number(easyDineVal).toFixed(2)}`} // it will show 2 decimal place.
                    />
                </div>

                <div className='e-comp'>
                    {
                        [50, 25, 10, 5]?.map((item) => (
                            <div className='e-comp-first' key={item}>
                                <div className='e-comp-val'>
                                    <h2>eComp</h2>
                                    <p>${item}</p>
                                </div>
                                <div className='e-comp-title'>
                                    <p className='date'>Expiration Date: 02/20/24</p>
                                    <button className={eComVal.includes(item) ? 'btn' : 'btn-apply'}
                                        onClick={() => handleEComps(item)}
                                    >{eComVal.includes(item) ? "Applied" : "Tap to apply"}</button>
                                </div>
                            </div>
                        ))
                    }


                </div>

                {
                    (smartAllocate == true && remainingAfterComps > 0) ? <p className='adjust'>Adjusted</p>
                        : (clubDollarVal > 0 && remainingAfterComps > 0) ? <p className='adjust'> Applied</p> : <p></p>
                }
                <div className='club-dollars'>
                    <div className='dollars'>
                        <h2>Club Dollars</h2>
                        {/* <p>Available Balance: {`$${Number(clubDollarVal).toFixed(2)}`}</p> */}
                        <p style={{ color: remainingAfterComps < 0 ? 'red' : 'black' }}>Available Balance: {`$${Number(clubDollarAvailableBalance).toFixed(2)}`}</p>
                    </div>
                    <input type="text"
                        onClick={handleClubDollars}
                        value={`$${Number(clubDollarVal).toFixed(2)}`}
                    />
                </div>

                <div className='buttons'>
                    <button className={smartAllocate ? "btn1" : 'btn-new1'} onClick={handleSmartAllocate}>
                        <i className="fas fa-lightbulb"></i> Smart Allocate</button>
                    <button className='btn2' onClick={handleReset}>
                        <i className="fas fa-redo" ></i>Reset</button>
                </div>

            </div>

            <div className='total-comps'>
                <div className='charged-t0-comps'>
                    <p className='title'>Charged to Comps:</p>
                    <p style={{
                        color: remainingAfterComps < 0 ? 'red' : 'black',
                        fontWeight: remainingAfterComps < 0 ? 'bold' : 500
                    }} >{chargedToComps}</p>
                </div>
                <div className='after-comps'>
                    <p className='title'>Remaining After Comps:</p>
                    <p>{remainingAfterCompsValFinal}</p>
                </div>
            </div>

            <div className="show-amount"
                onClick={() => setIsContinue(true)}
            >
                <h1>CONTINUE</h1>
            </div>

            <footer>
                <div className="recet">
                    <i className="fa-solid fa-calculator"></i>
                    <p>[RECET]</p>
                </div>

                <div className="comps-apply">
                    <p>(Full Comps applied)</p>
                    <i className="fa-solid fa-file-invoice"></i>
                </div>
            </footer>


            {
                inputValPopup &&
                <div id="popupOverlay">
                    <i className="fa-solid fa-xmark cancel-icon"
                        id="closePopupBtn"
                        onClick={() => setInputValPopup(false)}>
                    </i>
                    <div className="calc-frame">
                        <InputPopup
                            setInputValPopup={setInputValPopup}
                            popupTitle={popupTitle}
                            setInputValue={popupTitle === "EasyDine" ? setEasyDineVal : setCLubDillarVal}
                            inputValue={popupTitle === "EasyDine" ? easyDineVal : clubDollarVal}
                            eCompTotal={eCompTotal}
                            availableBalance={popupTitle === "EasyDine" ? easyDineAvailableBalance : clubDollarAvailableBalance}
                        />
                    </div>
                </div>
            }

            {
                isContinue &&
                <div id="popupOverlay">

                    <div className="calc-frame">

                        <div className='continue-note'>
                            <div className="popup-overlay">
                                <p><strong>Please note:</strong> eComps used will <br /> fully cover the eligible food <br /> total. 
                                Any excess value is not <br />retained for the future use.<br /> Proceed  with this payment?</p>

                            </div>

                            <div className='continue-btns'>
                                <button type="button"
                                    className="colse-popup"
                                    id="closePopupBtn"
                                    onClick={() => setIsContinue(false)}>
                                    Adjust</button>
                                <button type="button"
                                    className="colse-popup"
                                    id="closePopupBtn"
                                    onClick={()=>setCurrentPage("TOTAL_DUE")}> 
                                    Proceed</button>
                                    {/* here update the component name */}
                            </div>
                        </div>


                    </div>
                </div>
            }

            {/* {
                isProceed &&
                <div>
                <TotalDue
                setIsProceed={setIsProceed}
                />
                </div>
            } */}

        </div >
    )
}

export default Comps;
