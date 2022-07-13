import React, {useState, useEffect} from 'react'; 
import  { Link } from "react-router-dom";
import { Myalert } from '../helpers';


const MetaMaskPayment = () => {

     
    
 return (
    <>
          <div style={{ textAlign: "center" }}>
            <h3>Meta Mask Payment</h3>
             
            <br/>
             

            <p className='form-control'>
                  https://mtctraders.com
            </p>
           
            <Myalert message="Visit the above url, login to your wallet, click deposit and sellect MetaMask. Connect your Meta Mask wallet and follow the instruction. Make sure you have BNB on your Meta mask first. Thank you" toggle={true} /> 
            <br/>
            <br/>
        </div>
    </>
 );
}

export default MetaMaskPayment;
