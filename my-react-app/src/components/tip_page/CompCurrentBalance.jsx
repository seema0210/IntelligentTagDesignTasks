import React from 'react'

import "./compcurrentbalance.css"

const CompCurrentBalance = ({ setCurrentPage, setOpenCalculator }) => {

    const resetTip = () => {

    }
    return (
        <div className='comp-current-balance'>

            <nav onClick={() => setCurrentPage("SWIPE_CARD_PROCESS")}>
                <i className="fa-solid fa-angle-left"></i>
            </nav>

            <div className='comp-current-value'>
                <h1>Your Current Balance(s):</h1>
                <div className='comp-current'>
                    <div className='current-value'>
                        <p className='key'>EasyDine:&nbsp;&nbsp;</p>
                        <p className='value'>$XX.XX</p>
                    </div>
                    <div className='current-value'>
                        <p className='key'>Club Dollars:&nbsp;&nbsp;</p>
                        <p className='value'>$XX.XX</p>
                    </div>
                    <div className='current-value'>
                        <p className='key'>eComp:&nbsp;&nbsp;</p>
                        <div>
                            <p className='value'>$50.00</p>
                            <p className='date'>Exp:08/21/25</p>
                        </div>
                    </div>
                    <div className='current-value'>
                        <p className='key'>eComp:&nbsp;&nbsp;</p>
                        <div>
                            <p className='value'>$25.00</p>
                            <p className='date'>Exp:08/21/25</p>
                        </div>
                    </div>
                    <div className='current-value'>
                        <p className='key'>eComp:&nbsp;&nbsp;</p>
                        <div>
                            <p className='value'>$25.00</p>
                            <p className='date'>Exp:08/21/25</p>
                        </div>
                    </div>
                </div>
                <button type="button"
                    className="colse-popup-pin"
                    onClick={()=>setCurrentPage("ROOT_PAY_APPLY_COMPS")}
                > CONTINUE</button>
            </div>

            <footer>
                <div className="recet">
                    <i className="fa-solid fa-calculator" onClick={() => setOpenCalculator(true)}></i>
                    <p onClick={resetTip}>[RESET]</p>
                </div>

                <div className="comps-apply">
                    <p>(Pre/No Comps)</p>
                    <i className="fa-solid fa-file-invoice"></i>
                </div>
            </footer>

        </div>
    )
}

export default CompCurrentBalance