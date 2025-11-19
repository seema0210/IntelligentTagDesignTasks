import React, { useEffect, useState } from 'react'
import './inputpopup.css'

const InputPopup = ({setInputValPopup, popupTitle, setInputValue, inputValue}) => {

  const [EnteredVal, setEnteredVal] = useState("")

   useEffect(() => {
    if (inputValue) {
      setEnteredVal(inputValue.toString())
    }
  }, [inputValue])
  console.log('inputValue', inputValue);
  console.log('EnteredVal', EnteredVal);
  

  const handleEnteredTipAmount = (e) => {
        let value = e.target.textContent // textContent it will accept "." also number thats why it is used.

        if(value === '.' && EnteredVal.includes('.')){
            return   // eg EnteredVal : 44.89 then this block will execute
        }
        setEnteredVal((preVal) => preVal + value)  // concat the current and pre val
    }
   const handleCancelValue = () => {
        setEnteredVal((preVal) => preVal.slice(0, -1)) // here we are removing the last element from the value
    }
  const handleFinalTipAmt = () => {
        setInputValue(EnteredVal)
        setInputValPopup(false)
    }

  return (
    <div>

      <div>
        <div>
          <div className="popup-overlay">
            <header>
              <div className='titles'>
                <p className='enter-amt'>Enter the amount of {popupTitle} to use</p>
                <p className='balance'>Available Balance: {inputValue}</p>
                {
                  <p className='exceeds-balance'>Exceeds available {popupTitle} balance</p>
                }
                
              </div>
              <input type="text"
                value={EnteredVal.length > 0 ? `$${EnteredVal}` : "_"}
              />
            </header>
            <div className="val-btn">
              {
                [7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0]?.map((item) => (
                  <div
                    key={item}
                    className="values"
                    onClick={handleEnteredTipAmount}
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
        <button type="button"
          className="colse-popup"
          id="closePopupBtn"
          onClick={handleFinalTipAmt}
        >Done</button>

      </div>

    </div>
  )
}

export default InputPopup