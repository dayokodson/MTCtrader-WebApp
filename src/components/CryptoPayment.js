import React, {useState, useEffect} from 'react'; 
import  { Link } from "react-router-dom";
const CryptoPayment = () => {

     
    
 return (
    <>
        <div style={{ textAlign: "center" }}>
            <h3><b>USDT (TETHER) </b></h3>
            <h5>
                 
                Deposit to the USDT wallet bellow and click get support now 
                 
            </h5>
            <br/>
            <p className='form-control'>
                0xd0112187f079cf831a13d865d10cd164a86c80f4 
            </p>
             <p className='form-control' >
                 Network: Binance Smart Chain (BSC) 
            </p>

            <p>
            Make sure you have transfer from your USDT wallet to the USDT wallet above before contacting us. Thank you 
            </p>
            
        </div>
      <br/>
      <br/>
    </>
 );
}

export default CryptoPayment;
