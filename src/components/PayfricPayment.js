import React, {useState, useEffect} from 'react'; 
import  { Link } from "react-router-dom";
import LoadWrapper from "../components/LoadWrapper"; 
import {Myalert} from "../helpers";

const PayfricPayment = () => {

    const [isValidating, setIsValidating] = useState(false);
    const [paymentCode, setPaymentCode] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [toggleAlert, setToggleAlert] = useState(false);
    const [showProcess, setShowProcess] = useState(false); 

     

 function validatePayment(){

    //check if the value is less than 5
   
    

    if(paymentCode.length < 10){

        setAlertMessage("Enter valid payment code");
        setToggleAlert(true);
        return false;
    }

    setAlertMessage("Sorry, the method of payment is not available yet, kindly check back later.");
    setToggleAlert(true);
    return false; 


    //now process the funding 
    //setIsValidating(true);
     
 }
    
 return (
    <>
            <div className="main-container container">
                       

                        <div className="row">
                        <div className="col-12">

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
                              <input type="text" onChange={(e) => setPaymentCode(e.target.value)} className="form-control text-center" placeholder="Enter Payment Code" />
                              <div className="text-center">
                                    <span className="text-secondary">Enter Payfric Payment Code</span>
                              </div>
                        </div>
                        </div>
                        { Myalert(alertMessage, toggleAlert)  }  
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
    </>
 );
}

export default PayfricPayment;
