import React from 'react'
import "./rootpayapplycomps.css"

const RootPayApplyComps = ({setCurrentPage}) => {
    return (
        <div className='root-page'>
            <h1>$100.00</h1>
            <p onClick={()=>setCurrentPage("AMOUNT_TIP")}>PAY</p>
            <p onClick={()=>setCurrentPage("SWIPE_CARD_PROCESS")}>APPLY COMPS</p>
            <div className="icon-container">
                <div className="icon-box">
                    <span>VIEW CHECK</span>
                    <i className="fa-regular fa-file-lines icon"></i>
                </div>

                <div className="icon-box">
                    <span>CHECK COMP BALANCE</span>
                    <i className="fa-solid fa-credit-card icon-card"></i>
                </div>
            </div>
        </div>
    )
}

export default RootPayApplyComps