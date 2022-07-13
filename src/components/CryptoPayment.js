import React, {useState, useEffect} from 'react'; 
import  { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import ConfirmPayment from './ConfirmPayment';
import {Wallet, Myalert} from "../helpers";
import LoadWrapper from "../components/LoadWrapper"; 

const CryptoPayment = () => {

    const [hasPendingDeposit, setHasPendingDeposit] = useState(window.localStorage.getItem('@cryptoPendingDeposit'));
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [txId, setTxId] = useState("");
    const [amount, setAmount] = useState(0);
    const bank = "bank";
    const depositorName = useState("no name");
    const [message, setMessage] = useState("");
    const [toggleAlert, setToggleAlert] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [savingRun, setSavingRun] = useState(false);
    useEffect(() => {
           
           if(savingRun){
                  setHasPendingDeposit(window.localStorage.getItem('@cryptoPendingDeposit'));
                  setSavingRun(false);
           }

    })

  
    function saveDeposit(){

        setShow(false);
 
        let depositAmount = amount * 1;
        if(amount < 1){
 
               setMessage("Sorry, invalid amount");
               setToggleAlert(true);
               return false;
        }
 
        
 
        if(txId.length < 30){
 
               setMessage("Sorry, invalid transaction id");
               setToggleAlert(true);
               return false;
        }
 
        setIsSaving(true);
 
        Wallet.saveDeposit(depositAmount, "crypto", txId, bank, depositorName)
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
            <h3><b>USDT (TETHER) </b></h3>
            <h5>
                 
                Deposit to the USDT wallet bellow and click get confirm payment
                 
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
                hasPendingDeposit === "true" ? <>

                    <ConfirmPayment depositType="crypto"   message={message}/>
                
                </>:<>
                
                <Myalert toggle={toggleAlert} message={message} />
               
                        {
                            isSaving ? <>
                            <LoadWrapper msg="Processing your payment"/>
                                
                            </> : <>
                                    
                                    <button className="btn btn-success" onClick={() => setShow(true)} >
                                        <b>Confirm Payment</b>
                                    </button>
                                    <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton style={{ textAlign: "center" }}>
                                    <Modal.Title><b>Transfer Confirmation</b> </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                    <p className='textMute' style={{ textAlign: "center" }}>
                                        Make sure you have transfered the fund to our USDT wallet
                                    </p>
                                    
                                    <div className="form-group form-floating mb-3 ">
                                        <input type="number" className="form-control" onChange={e => setAmount(e.target.value)} id="email" placeholder="Enter Email" />
                                        <label className="form-control-label"  >Amount</label>
                                    </div>

                                    <div className="form-group form-floating mb-3">
                                        <input type="text" className="form-control" onChange={e => setTxId(e.target.value)} id="txid" placeholder="Depositor Name" />
                                        <label className="form-control-label" >Transaction Id (TxId)</label>
                                        
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
                        
                </>
            }
            
             
            
        </div>
      <br/>
      <br/>
    </>
 );
}

export default CryptoPayment;
