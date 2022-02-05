import React, {useState, useEffect} from 'react'; 

import {Wallet, Myalert} from "../helpers";
import { Button } from "react-bootstrap";
import LoadWrapper from "../components/LoadWrapper"; 


const ConfirmPayment = (props) => {

   const [isProcessing, setIsProcessing] = useState(false);
   const [toggleAlert, setToggleAlert] = useState(false);  
   const [message, setMessage] = useState(""); 


   const confirm = () => {

   setIsProcessing(true);

   Wallet.confirmDeposit(props.depositType).then((res) => {

        setMessage(res.msg);
        setIsProcessing(false);
        setToggleAlert(true);

   })

}
     
 return (
    <>

         {
            isProcessing ? <>

               <><LoadWrapper msg="Confirming your payment"/></>

            </>: <>
               <Myalert toggle={toggleAlert} message={message}/>
               <Button onClick={() => confirm() } title="Confirm Payment"  >Check Payment</Button>
            </>
         }
        
    </>
 );
}

export default ConfirmPayment;
