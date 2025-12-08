import React from 'react'
import './welcomepage.css'

const WelcomePage = ({ setCurrentPage }) => {
    return (
        <div>
            <nav onClick={() => setCurrentPage("SWIPE_CARD_PROCESS")}>
                <i className="fa-solid fa-angle-left"></i>
            </nav>

            <div className='welcome'>
                <h1>Welcome, Seema.</h1>
                <button type="button"
                    className="colse-popup"
                    onClick={() => setCurrentPage("AMOUNT_TIP")}
                >CONTINUE</button>
            </div>

            <div className='text'>
                <button type='button' onClick={() => setCurrentPage("ROOT_PAY_APPLY_COMPS")}>[RESET]</button>
            </div>

        </div>
    )
}

export default WelcomePage