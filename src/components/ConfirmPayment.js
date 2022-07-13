import React, {useState, useEffect} from 'react'; 

import {Wallet, Myalert} from "../helpers";
import { Button } from "react-bootstrap";
import LoadWrapper from "../components/LoadWrapper"; 
import  { useNavigate } from "react-router-dom";

const ConfirmPayment = (props) => {

   const navigate = useNavigate();
   const [isProcessing, setIsProcessing] = useState(false);
   const [toggleAlert, setToggleAlert] = useState(true);  
   const [message, setMessage] = useState(props.message); 


   const confirm = () => {

   setIsProcessing(true);

   Wallet.confirmDeposit(props.depositType).then((res) => {

        setMessage(res.msg);
        setIsProcessing(false);
        setToggleAlert(true);

        if(res.reload){
            window.location.reload(true);
           
        }
       

   })

}
     
 return (
    <>

         {
            isProcessing ? <>

               <><LoadWrapper msg="Confirming your payment"/></>

            </>: <>
               <Myalert toggle={toggleAlert} message={message} />
               <Button onClick={() => confirm() } title="Confirm Payment"  >Check Payment</Button>
            </>
         }
        
    </>
 );
}

export default ConfirmPayment;
