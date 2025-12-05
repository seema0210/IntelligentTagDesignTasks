import { useEffect, useState } from 'react'
import { AmountTip } from './components/tip_page/AmountTip'
import TotalDue from './components/comps_page/TotalDue'
import Comps from './components/comps_page/Comps'
import PaymentComplete from './components/tip_page/PaymentComplete'
import PaymentSwipeFlow from './components/tip_page/PaymentSwipeFlow'
import SwipeClubCard from './components/tip_page/SwipeClubCard'
import SuccessClubDollar from './components/tip_page/SuccessClubDollar'

function App() {

  const [currentPage, setCurrentPage] = useState('AMOUNT_TIP')
  const [changeAmount, setChangeAmount] = useState(100)
  const [tipAmount, settipAmount] = useState(0.00)
  const [isSwipeFailed, setIsSwipeFailed] = useState(null)

  const [totalDue, setTotalDue] = useState(0)
  const [tryCreditCard, setTryCreditCard] = useState(0)

console.log('tipAmount', tipAmount);
console.log('tipAmount',typeof tipAmount);
  

   const tax = changeAmount * (3.54 / 100)
   const clubDollerVal = totalDue * (5/100);

  const PageView = () => {
    switch (currentPage) {
      case "COMPS":
        return <Comps setCurrentPage={setCurrentPage} />
      case "TOTAL_DUE":
        return <TotalDue
          setCurrentPage={setCurrentPage}
          changeAmount={changeAmount}
          tipAmount={tipAmount}
          setTotalDue={setTotalDue}
          tax={tax}
          tryCreditCard={tryCreditCard}
          setTryCreditCard={setTryCreditCard}
          totalDue={totalDue}
        />
      case "AMOUNT_TIP":
        return <AmountTip
          setCurrentPage={setCurrentPage}
          changeAmount={changeAmount}
          setChangeAmount={setChangeAmount}
          tipAmount={tipAmount}
          settipAmount={settipAmount}
        />
      case "PAYMENT_COMPLETE": 
        return <PaymentComplete
          setCurrentPage={setCurrentPage}
          tipAmount={tipAmount}
          clubDollerVal={clubDollerVal}
        />
      case "PAYMENT_SWIPE_FLOW":
        return <PaymentSwipeFlow
          setCurrentPage={setCurrentPage}
          isSwipeFailed={isSwipeFailed}
          clubDollerVal={clubDollerVal}
        />
      case "SWIPE_CLUB_CARD":
        return <SwipeClubCard
          setCurrentPage={setCurrentPage}
          setIsSwipeFailed={setIsSwipeFailed}
        />
      case "SUCCESS_CLUB_DOLLAR":
        return <SuccessClubDollar
          setCurrentPage={setCurrentPage}
          clubDollerVal={clubDollerVal}
        />
    }
  }

  return (
    <>
      {
        PageView()
      }

    </>
  )
}

export default App
