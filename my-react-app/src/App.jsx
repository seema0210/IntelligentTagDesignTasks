import { useEffect, useState } from 'react'
import { AmountTip } from './components/tip_page/AmountTip'
import TotalDue from './components/comps_page/TotalDue'
import Comps from './components/comps_page/Comps'
import PaymentComplete from './components/tip_page/PaymentComplete'
import PaymentSwipeFlow from './components/tip_page/PaymentSwipeFlow'
import SwipeClubCard from './components/tip_page/SwipeClubCard'
import SuccessClubDollar from './components/tip_page/SuccessClubDollar'
import RootPayApplyComps from './components/tip_page/RootPayApplyComps'
import SwipeCardProcess from './components/tip_page/SwipeCardProcess'
import SwipeFailed from './components/tip_page/SwipeFailed'
import WelcomePage from './components/tip_page/WelcomePage'
import CompsAndCardHandle from './components/tip_page/CompsAndCardHandle'

function App() {

  const [currentPage, setCurrentPage] = useState('ROOT_PAY_APPLY_COMPS')
  const [changeAmount, setChangeAmount] = useState(100)
  const [tipAmount, settipAmount] = useState(0.00)
  const [openCalculator, setOpenCalculator] = useState(false)
  const [isSwipeFailed, setIsSwipeFailed] = useState(null)

  const [totalDue, setTotalDue] = useState(0)
  const [tryCreditCard, setTryCreditCard] = useState(0)

   const tax = changeAmount * (3.54 / 100)
   const clubDollerVal = totalDue * (5/100);

  const PageView = () => {
    switch (currentPage) {
      case "ROOT_PAY_APPLY_COMPS":
        return <RootPayApplyComps
         setCurrentPage={setCurrentPage} 
         />
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
          setOpenCalculator={setOpenCalculator}
          openCalculator={openCalculator}
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
      case "SWIPE_CARD_PROCESS":
        return <SwipeCardProcess
          setCurrentPage={setCurrentPage}
          // clubDollerVal={clubDollerVal}
          setIsSwipeFailed={setIsSwipeFailed}
        />
      case "SWIPE_FAILED":
        return <SwipeFailed
          setCurrentPage={setCurrentPage}
          setIsSwipeFailed={setIsSwipeFailed}
        />
      case "WELCOME_PAGE":
        return <WelcomePage
          setCurrentPage={setCurrentPage}
        />
      case "HAS_NO_COMPS":
        return <CompsAndCardHandle
          setCurrentPage={setCurrentPage}
          setOpenCalculator={setOpenCalculator}
          openCalculator={openCalculator}
          page="no_comps"
        />
      case "DISABLED_CARD":
        return <CompsAndCardHandle
          setCurrentPage={setCurrentPage}
          setOpenCalculator={setOpenCalculator}
          openCalculator={openCalculator}
          page="disabled_card"
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
