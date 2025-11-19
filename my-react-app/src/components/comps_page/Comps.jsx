
import React, { useState } from 'react'
import './comps.css'
import InputPopup from './InputPopup'

const Comps = () => {

    const [inputValue, setInputValue] = useState(9.50)
    const [inputValPopup, setInputValPopup] = useState(false)
    const [popupTitle, setPopupTitle] = useState('')

    const handleEasyDine = () => {
        setInputValPopup(true)
        setPopupTitle("EasyDine")
    }
    const handleClubDollars = () => {
        setInputValPopup(true)
        setPopupTitle("Club Dollars")
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
                    value="$59.50"
                />
            </div>

            <div className='comps-body'>
                <h2 className='your-comps'>Apply Your Comps:</h2>
                <p className='adjust'>Adjusted</p>
                <div className='comps-easy-dine'>
                    <div className='comps-easy'>
                        <h2>EasyDine</h2>
                        <p>Available Balance: $24.00</p>
                    </div>
                    <input type="text"
                        value="$9.50"
                        onClick={handleEasyDine}
                    />
                </div>

                <div className='e-comp'>
                    <div className='e-comp-first'>
                        <div className='e-comp-val'>
                            <h2>eComp</h2>
                            <p>$50.00</p>
                        </div>
                        <div className='e-comp-title'>
                            <p className='date'>Expiration Date: 02/20/24</p>
                            <p className='btn'>Applied</p>
                        </div>
                    </div>
                    <div className='e-comp-first'>
                        <div className='e-comp-val'>
                            <h2>eComp</h2>
                            <p>$25.00</p>
                        </div>
                        <div className='e-comp-title'>
                            <p className='date'>Expiration Date: 02/20/24</p>
                            <p className='btn'>Applied</p>
                        </div>
                    </div>
                    <div className='e-comp-first'>
                        <div className='e-comp-val'>
                            <h2>eComp</h2>
                            <p>$10.00</p>
                        </div>
                        <div className='e-comp-title'>
                            <p className='date'>Expiration Date: 02/20/24</p>
                            <p className='btn'>Applied</p>
                        </div>
                    </div>
                    <div className='e-comp-first'>
                        <div className='e-comp-val'>
                            <h2>eComp</h2>
                            <p>$5.00</p>
                        </div>
                        <div className='e-comp-title'>
                            <p className='date'>Expiration Date: 02/20/24</p>
                            <p className='btn'>Applied</p>
                        </div>
                    </div>

                    {/* <div className='e-comp-second'>
                        <h2>eComp</h2>
                        <p>Expiration Date :  02/20/24</p>
                    </div> */}

                </div>


                <div className='club-dollars'>
                    <div className='dollars'>
                        <h2>Club Dollars</h2>
                        <p>Available Balance: $65.00</p>
                    </div>
                    <input type="text"
                        value="$0.00"
                        onClick={handleClubDollars}
                    />
                </div>

                <div className='buttons'>
                    <button className='btn1'><i class="fas fa-lightbulb"></i> Smart Allocate</button>
                    <button className='btn2'> <i className="fas fa-redo"></i>Reset</button>
                </div>

            </div>

            <div className='total-comps'>
                <div className='charged-t0-comps'>
                    <p className='title'>Changed to Comps:</p>
                    <p>$59.50</p>
                </div>
                <div className='after-comps'>
                    <p className='title'>Remaining After Comps:</p>
                    <p>$0.00</p>
                </div>
            </div>

            <div className="show-amount">
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
                        setInputValue={setInputValue}
                        inputValue={inputValue}
                        />
                    </div>
                </div>
            }

        </div>
    )
}

export default Comps;
