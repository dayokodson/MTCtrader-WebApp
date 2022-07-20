import React, {useState, useEffect} from 'react'; 
import  { Link } from "react-router-dom";
import  Modal  from 'react-bootstrap/Modal';
import LoadWrapper from "../components/LoadWrapper"; 
import {Myalert, SendRequest} from "../helpers";
import { Button, Card } from 'react-bootstrap'; 
import urllink from "../constant/urllink";  

const PayfricPayment = () => {

    const userId =  window.localStorage.getItem("@userId");
    const [isValidating, setIsValidating] = useState(false);
    const [paymentCode, setPaymentCode] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [toggleAlert, setToggleAlert] = useState(false);
    const [showProcess, setShowProcess] = useState(false);
    const [show, setShow] = useState(false);
 
    const handleClose = () => setShow(false);
    

    function showModal (item){
      
      setShow(true)
       
  
   }
  
     

 function validatePayment(){

    //check if the value is less than 5
   

    if(paymentCode.length < 10){

        setAlertMessage("Enter valid signature code");
        setToggleAlert(true);
        return false;
    }

     
    //now process the funding 
    setIsValidating(true);
    let requestData = {
      url: urllink.payfric,
      user_id: JSON.parse(window.localStorage.getItem("@userId")),
      signature: paymentCode,
      }
 
      
  SendRequest(requestData)
  .then(function (res){
      if(res.error){

        setAlertMessage(res.message);
        setToggleAlert(true);
        setIsValidating(false);
        console.log(res);
        return false;
     

      }else{

        setAlertMessage(res.message);
        let wallet = JSON.stringify(res.balance);
        let activity = JSON.stringify(res.activity);
        window.localStorage.setItem('@wallet', wallet);
        window.localStorage.setItem('@transList', activity);
        
        setToggleAlert(true);
        setIsValidating(false); 
        return false;
        
          
      }
   

   })

     
 }
    
 return (
    <>
            <div className="main-container container">
                       

                        <div className="row">
                        <div className="col-12">
                        <div style={{ textAlign: "center" }}>
                              <h3><b>With Payfric </b> </h3>
                              <h5>Deposit to your wallet with Payfric payment signature</h5>
                              <br/>
                        </div>

                              <h3>Pay To: </h3>
                              <div className="card mb-4">
                                    <div className="card-body">
                                    <div className="row">
                                          <div className="col-auto">
                                                <div className="card">
                                                <div className="card-body p-1">
                                                      <div className="form-check avatar">
                                                            
                                                            <label className="avatar avatar-44 shadow-sm rounded-15">
                                                            <img src="assets/img/logo.png" alt="" />
                                                            </label>
                                                      </div>
                                                </div>
                                                </div>
                                          </div>
                                          <div className="col align-self-center ps-0">
                                                <p className="mb-1 text-color-theme">MTC Trader : payment@mtctraders.com </p>
                                                 
                                          </div>
                                    </div>
                                    </div>
                              </div>
                        
                              
                              
                        </div>
                        </div>

                        <div className="row">
                        <div className="col-12 text-center mb-4" >
                              <input type="text" onChange={(e) => setPaymentCode(e.target.value)} className="form-control text-center" placeholder="Enter Payment Signature" />
                              <div className="text-center">
                                    <span className="btn text-secondary" onClick={() => showModal()}>How it work?</span>
                              </div>
                        </div>
                        </div>
                        <Myalert message={alertMessage} toggle={toggleAlert}  />
                        {
                              isValidating ? <>
                                    <LoadWrapper  msg="Connecting and validating your payment with Payfric..."/>
                              </>: <>
                                    <div className="row mb-4">
                                          <div className="col-12 ">
                                          <button onClick={() => validatePayment() } className="btn btn-default btn-lg shadow-sm w-100">
                                                Validate Payment
                                          </button>
                                          </div>
                                    </div>
                              </>
                        }


            </div>


            <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                  <Modal.Title><b>Payfric Payment Signature</b> </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                   <h3>How it work?</h3>
                  <hr />

                        <p>
                         Visit www.payfric.com, login to your wallet account, click signature, then click create signature. 
                         Type the amount you want to deposit, type our email as beneficiary (payment@mtctraders.com), 
                         a string code will be generated upon successful. That is your payment signature to deposit fund on our platform.
                        </p>
                        <p>
                              Please note that payment signature generated for other platform can not be use on our platform. Thank you.
                        </p>
                  </Modal.Body>
                  <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                        Close
                  </Button>
                  
                  </Modal.Footer>
            </Modal> 


    </>
 );
}

export default PayfricPayment;
