import React from 'react'
import './compsandcardhandle.css'

const CompsAndCardHandle = ({ setOpenCalculator, openCalculator, page, setCurrentPage, compCurrentBalance, pinValue, apiObj }) => {

    console.log('compCurrentBalance at require', compCurrentBalance);
    console.log('pinValue at require', pinValue);
    console.log('pinValue.pin at require', apiObj.pin);

    return (
        <div><div className="comps_and_handle">

            {
                page === "no_comps" ?
                    <div className='no_comps'>
                        <p>This card has no available comps.</p>
                        {
                            (compCurrentBalance === "check_comb_balance" && apiObj.pin !== pinValue) ?
                                <>
                                    <button
                                        type='button'
                                        onClick={() => setCurrentPage("ROOT_PAY_APPLY_COMPS")}
                                    >Return to Start</button>

                                </> :
                                <>
                                    <button
                                        type='button'
                                        onClick={() => setCurrentPage("SWIPE_CARD_PROCESS")}
                                    >Try Different Club Card</button>
                                    <button
                                        type='button'
                                        onClick={() => setCurrentPage("AMOUNT_TIP")}
                                    >Pay with Credit Card</button>
                                </>

                        }

                    </div> :
                    <div className='disabled_card'>
                        <p>This Club card cannot be used at this time</p>
                        <button
                            type='button'
                            onClick={() => setCurrentPage("ROOT_PAY_APPLY_COMPS")}
                        >CONTINUE</button>

                    </div>
            }

            {
                page === "no_comps" ?
                    <footer>
                        <div className="recet">
                            <i className="fa-solid fa-calculator" onClick={() => setOpenCalculator(true)}></i>
                            <p onClick={() => setCurrentPage("ROOT_PAY_APPLY_COMPS")}>[RESET]</p>
                        </div>

                        <div className="comps-apply">
                            <p>(Full Comps applied)</p>
                            <i className="fa-solid fa-file-invoice"></i>
                        </div>
                    </footer> :
                    <div className='text'>
                        <button type='button' onClick={() => setCurrentPage("ROOT_PAY_APPLY_COMPS")}>[RESET]</button>
                    </div>
            }



            {
                openCalculator &&
                <div id="popupOverlay">
                    <i className="fa-solid fa-xmark cancel-icon"
                        id="closePopupBtn"
                        onClick={() => setOpenCalculator(false)}>
                    </i>
                    <div className="calc-frame">
                        <Calculator
                            // tipAmount={tipAmount}
                            settipAmount={settipAmount}
                            setOpenCalculator={setOpenCalculator}
                            title={"Tip"}
                        // amountWithDoller={amountWithDoller}
                        />
                    </div>
                </div>
            }


        </div></div>
    )
}

export default CompsAndCardHandle