import React, {useState, useEffect} from 'react'; 
import { Modal, Button } from 'react-bootstrap';
import  { Link } from "react-router-dom";
import ConfirmPayment from './ConfirmPayment';

import {Wallet, Myalert} from "../helpers";
import LoadWrapper from "../components/LoadWrapper"; 

const LocalPayment = () => {

     
       const [hasPendingDeposit, setHasPendingDeposit] = useState(window.localStorage.getItem('@bankPendingDeposit'));
       const [showForm, setShowForm] = useState("none");
       const [show, setShow] = useState(false);
       const handleClose = () => setShow(false);
       const handleShow = () => setShow(true);
       const txId = "txid";
       const [amount, setAmount] = useState(0);
       const [bank, setBank] = useState("");
       const [depositorName, setDepositName] = useState("");
       const [message, setMessage] = useState("");
       const [toggleAlert, setToggleAlert] = useState(false);
       const [isSaving, setIsSaving] = useState(false);
       const [savingRun, setSavingRun] = useState(false);
       useEffect(() => {
              
              if(savingRun){
                     setHasPendingDeposit(window.localStorage.getItem('@bankPendingDeposit'));
                     setSavingRun(false);
              }

       })


function saveDeposit(){

       setShow(false);

       let depositAmount = amount * 1;
       if(amount < 1){

              setMessage("Sorro, invalid amount");
              setToggleAlert(true);
              return false;
       }

       if(bank.length < 3) {

              setMessage("Sorro, invalid bank");
              setToggleAlert(true);
              return false;
       }


       if(depositorName.length < 3){

              setMessage("Sorry, invalid depositor name");
              setToggleAlert(true);
              return false;
       }

       setIsSaving(true);

       Wallet.saveDeposit(depositAmount, "bank", txId, bank, depositorName)
       .then((res) => {

              setSavingRun(true);
              setMessage(res.msg);
              setIsSaving(false);
              setToggleAlert(true);

       });

}



    
 return (
    <>
      <div style={{ textAlign: "center" }}>
            <h3><b>Bank Transfer </b> </h3>
            <h5>Deposit to the account bellow and click confirm payment</h5>
            <br/>
            <p className='form-control'>
                   Account Name: The Traders Circle Tech LTD 
            </p>
             <p className='form-control' >
                  Account Number: 0642324260 
            </p>
            <p className='form-control'>
                   Bank Name: Zenith Bank
            </p>
            <hr/>

             
             

            {
                hasPendingDeposit === "true" ? <>

                    <ConfirmPayment depositType="bank" message={message} />
                
                </>:<>
                <Myalert toggle={toggleAlert} message={message} />
                {
                       isSaving ? <>
                       <LoadWrapper msg="Confirming your payment"/>
                           
                       </> : <>
                            
                            <button className="btn btn-success" onClick={() => setShow(true)} >
                                   <b>Confirm Payment</b>
                            </button>
                       
                       </>
                }
                


                     <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton style={{ textAlign: "center" }}>
                            <Modal.Title><b>Transfer Confirmation</b> </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <p className='textMute' style={{ textAlign: "center" }}>
                                   Make sure you have transfered the fund
                            </p>
                            
                            <div className="form-group form-floating mb-3 ">
                                   <input type="number" className="form-control" onChange={e => setAmount(e.target.value)} id="email" placeholder="Enter Email" />
                                   <label className="form-control-label"  >Amount</label>
                            </div>

                            <div className="form-group form-floating mb-3">
                                   <input type="text" className="form-control" onChange={e => setDepositName(e.target.value)} id="txid" placeholder="Depositor Name" />
                                   <label className="form-control-label" >Depositor Name</label>
                                   
                            </div>

                            <div className="form-group form-floating mb-3">
                                   <input type="text" className="form-control" onChange={e => setBank(e.target.value)} id="txid" placeholder="From Bank" />
                                   <label className="form-control-label" >From Bank</label>
                                   
                            </div>
                            
                            
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={() => saveDeposit()}>
                                   Submit
                            </Button>
                            
                            </Modal.Footer>
                     </Modal> 
                      
                 
                </>
            }
            
             
      </div>
      <br/>
      <br/>
         
    </>
 );
}

export default LocalPayment;
