import React, { useState } from 'react'
import Comps from './Comps'
import TotalDue from './TotalDue'

const CompsRoot = () => {

    const [currentPage, setCurrentPage] = useState('COMPS')

    const PageView = () => {
        switch (currentPage) {
            case "COMPS":
                return <Comps setCurrentPage={setCurrentPage} />
            case "TOTAL_DUE":
                return <TotalDue />
        }
    }

    return (
        <div>
            {
                PageView()
            }
        </div>
    )
}

export default CompsRoot