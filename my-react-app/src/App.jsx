import { useState } from 'react'
import { AmountTip } from './components/tip_page/AmountTip'
import TotalDue from './components/comps_page/TotalDue'
import Comps from './components/comps_page/Comps'
import PaymentComplete from './components/tip_page/PaymentComplete'
import PaymentSwipeFlow from './components/tip_page/PaymentSwipeFlow'

function App() {

  const [currentPage, setCurrentPage] = useState('AMOUNT_TIP')
  const [changeAmount, setChangeAmount] = useState(100)
  const [tipAmount, settipAmount] = useState(0.00)

  const [totalDue, setTotalDue] = useState(0)
  // const [tax, setTax] = useState(0)

   const [tryCreditCard, setTryCreditCard] = useState(0)

   const tax = changeAmount * (3.54 / 100)

   console.log('tax', tax);
   

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
          totalDue={totalDue}
        />
      case "PAYMENT_SWIPE_FLOW":
        return <PaymentSwipeFlow
          setCurrentPage={setCurrentPage}
          // tipAmount={tipAmount}
          // totalDue={totalDue}
        />
    }
  }

  console.log('changeAmount', changeAmount);
  console.log('tipAmount', tipAmount);
  

  return (
    <>
      {
        PageView()
      }

    </>
  )
}

export default App
