import React, {useEffect, useState}  from "react";
import  { Link } from "react-router-dom";  
import BalanceBoard from "../components/BalanceBoard";
import Header from "../components/Header";
import {Myalert} from "../helpers";
import LoadWrapper from "../components/LoadWrapper"; 
import Footer from "../components/Footer";
import QuickLinkModal from "../components/QuickLinkModal";


const Withdraw = () => {

    const [isProcessing, setIsProcessing] = useState(false);
    const [email, setEmail] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [toggleAlert, setToggleAlert] = useState(false);
    const [showProcess, setShowProcess] = useState(false); 
    const [amount, setAmount] = useState(false); 
     

 function validatePayment(){

    //check if the value is less than 5
   
    

    if(!email){

        setAlertMessage("Enter valid payfric email");
        setToggleAlert(true);
        return false;
    }

      
   
     
 }
 

 return (
    <>
     <section className="body-scroll" data-page="" msg="Checking your gas">
            
                    <main className="h-100">

                        <Header  title={"Withdraw"}/>
                        <div  style={{ marginTop: "80px" }}>
                        
                            <BalanceBoard />
                            <div className="main-container container">
                                 
                                
                            <div className="main-container container">
                       

                            <div className="row">
                                <div className="col-12 text-center mb-4">
                                    <input type="number" onChange={(e) => setAmount(e.target.value)} className="trasparent-input text-center" placeholder="100.0" />
                                    <div className="text-center">
                                        <span className="text-secondary">Amount from wallet balance</span>
                                    </div>
                                </div>
                            </div>
                            
                       <div className="row">
                       <h4>Withdraw To: <br/><br/> </h4>
                            <div className="col-12 text-center mb-4" >
                            
                                    <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control text-center" placeholder="Your Payfric Email" />
                                    <div className="text-center">
                                        <span className="text-secondary">Enter Payfric Email</span>
                                    </div>
                            </div>
                       </div>
                       { Myalert(alertMessage, toggleAlert)  }  
                       {
                             isProcessing ? <>
                                   <LoadWrapper  msg="Connecting and validating your payment with Payfric..."/>
                             </>: <>
                                   <div className="row mb-4">
                                         <div className="col-12 ">
                                         <button onClick={() => validatePayment() } className="btn btn-default btn-lg shadow-sm w-100">
                                               Withdraw Fund
                                         </button>
                                         </div>
                                   </div>
                             </>
                       }


                       <p style={{ color: "blue" }}>
                           Don't have Payfric wallet? visit https://payfric.com/ to create wallet.
                       </p>




           </div>
                                 
                            </div>

 
                        </div>
                        
                        
                        
                       


                    </main>

        <Footer /> 
        <QuickLinkModal />         
     </section>
    </>
 );
}

export default Withdraw;
