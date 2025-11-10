
import React from 'react'
import './comps.css'

const Comps = () => {

    return (
        <div className="home">
            <nav>
                <i className="fa-solid fa-angle-left"></i>
            </nav>

            <h1>Allocate Your Comps</h1>
            <div className="navbar">
                <h1>Comp-Eligible Total :</h1>
                <input type="text"
                    value="$59.50"
                />
            </div>

            <div className='comps-body'>
                <h2 className='your-comps'>Apply Your Comps:</h2>
                <p className='adjust'>Adjusted</p>
                <div className='comps-easy-dine'>
                    <div className='comps-easy'>
                        <h2>EasyDine</h2>
                        <p>Available Balance: $24.00</p>
                    </div>
                    <input type="text"
                        value="$9.50"
                    />
                </div>

                <div className='e-comp'>
                    <div className='e-comp-first'>
                        <div className='e-comp-val'>
                            <h2>eComp</h2>
                            <p>$50.00</p>
                        </div>
                        <div className='e-comp-title'>
                            <p className='date'>Expiration Date: 02/20/24</p>
                            <p className='btn'>Applied</p>
                        </div>
                    </div>

                    <div className='e-comp-second'>
                        <h2>eComp</h2>
                        <p>Expiration Date :  02</p>
                    </div>
                </div>


                <div className='club-dollars'>
                    <div className='dollars'>
                        <h2>Club Dollars</h2>
                        <p>Available Balance: $65.00</p>
                    </div>
                    <input type="text"
                        value="$0.00"
                    />
                </div>

                <div className='buttons'>
                    {/* <div> */}
                    <button className='btn1'><i class="fas fa-lightbulb"></i> Smart Allocate</button>
                    <button className='btn2'> <i className="fas fa-redo"></i>Reset</button>
                    {/* </div> */}
                </div>

            </div>

            <div className='total-comps'>
                <div className='charged-t0-comps'>
                    <p className='title'>Changed to Comps:</p>
                    <p>$59.50</p>
                </div>
                <div className='after-comps'>
                    <p className='title'>Remaining After Comps:</p>
                    <p>$0.00</p>
                </div>
            </div>

            <div className="show-amount">
                <h1>CONTINUE</h1>
            </div>

            <footer>
                <div className="recet">
                    <i className="fa-solid fa-calculator"></i>
                    <p>[RECET]</p>
                </div>

                <div className="comps-apply">
                    <p>(Full Comps applied)</p>
                    <i className="fa-solid fa-file-invoice"></i>
                </div>
            </footer>

        </div>
    )
}

export default Comps;
