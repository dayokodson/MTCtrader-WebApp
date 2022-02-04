import React, {useState, useEffect} from 'react'; 
import  { Link } from "react-router-dom";
import ValidateCryptoPayment from './ValidateCryptoPayment';
import CryptoDepositForm from './CryptoDepositForm';


const CryptoPayment = () => {

    const [hasPendingDeposit, setHasPendingDeposit] = useState(false);
    const [showForm, setShowForm] = useState("none");


    useEffect(() => {


        if(window.localStorage.getItem('@cryptoPendingDeposit')){
            setHasPendingDeposit(true);
        }


    });
  
 
    
 return (
    <>
        <div style={{ textAlign: "center" }}>
            <h3><b>USDT (TETHER) </b></h3>
            <h5>
                 
                Deposit to the USDT wallet bellow and click get support now 
                 
            </h5>
            <br/>
            <p className='form-control' style={{ overflow: "scroll" }}>
                0xd0112187f079cf831a13d865d10cd164a86c80f4 
            </p>
             <p className='form-control' >
                 Network: Binance Smart Chain (BEP20) 
            </p>
            <hr/>


            {
                hasPendingDeposit ? <>

                    <ValidateCryptoPayment />
                
                </>:<>
                
                    <CryptoDepositForm />
                 
                </>
            }
            
             
            
        </div>
      <br/>
      <br/>
    </>
 );
}

export default CryptoPayment;
