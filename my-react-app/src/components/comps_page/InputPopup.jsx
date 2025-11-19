import React, { useEffect, useState } from 'react'
import './inputpopup.css'

const InputPopup = ({ setInputValPopup, popupTitle, setInputValue, inputValue, eCompTotal }) => {

  const [EnteredVal, setEnteredVal] = useState("")

  console.log('seems', eCompTotal);


  useEffect(() => {
    if (inputValue) {
      setEnteredVal(inputValue.toString())
    }
  }, [inputValue])
  // console.log('inputValue', inputValue);
  // console.log('EnteredVal', EnteredVal);


  const handleEnteredTipAmount = (e) => {
    let value = e.target.textContent // textContent it will accept "." also number thats why it is used.

    if (value === '.' && EnteredVal.includes('.')) {
      return   // eg EnteredVal : 44.89 then this block will execute
    } else if (EnteredVal.includes('.')) {
      const decimals = EnteredVal.split(".")[1]; // split the digits by "." and catch last value

      if (decimals.length >= 2) {
        return; //  extra digits means mpre that 2
      }
    }
    setEnteredVal((preVal) => preVal + value)  // concat the current and pre val
  }

  const handleCancelValue = () => {
    setEnteredVal((preVal) => preVal.slice(0, -1)) // here we are removing the last element from the value
  }
  const handleFinalTipAmt = () => {
    console.log('seema', EnteredVal);

    setInputValue(EnteredVal)
    if(EnteredVal < eCompTotal) { // applied amount should less than given total
      setInputValPopup(false)
    }
  }

  return (
    <div>

      <div>
        <div>
          <div className="popup-overlay">
            <header>
              <div className='titles'>
                <p className='enter-amt'>Enter the amount of {popupTitle} to use</p>
                <p className='balance'>Available Balance: {`$${Number(EnteredVal).toFixed(2)}`}</p>
                {/* always show 2 digit value */}
                {
                  EnteredVal > eCompTotal ? <p className='exceeds-balance'>Exceeds available {popupTitle} balance</p> : null
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