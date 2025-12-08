import React from 'react'
import './successclubdollar.css'

const SuccessClubDollar = ({setCurrentPage, clubDollerVal}) => {
  return (
    <div className='success-dollar'>
           
                <h1>${clubDollerVal.toFixed(2)} in Club Dollars have been applied to your account.</h1>
                <div className='amount'>
                    <p>Thank you for dining with us.</p>
                </div>

                <div className='receipt'>
                    <p className='get-receipt'>Get a digital receipt?</p>
                    <p className='link'>we'll text you a link to view your receipt online.</p>
                    <button type='button' onClick={()=>{}}>Text Receipt Link</button>
                </div>

            <div className='text'>
                <button type='button' onClick={()=>setCurrentPage("ROOT_PAY_APPLY_COMPS")}>[RESET]</button>
            </div>
        </div>
  )
}

export default SuccessClubDollar