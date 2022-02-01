import React, {useEffect, useState}  from "react";
import  { Link } from "react-router-dom"; 
import LoadWrapper from "../components/LoadWrapper"; 
import BalanceBoard from "../components/BalanceBoard";
import {Myalert, Wallet} from "../helpers";
import Header from "../components/Header";
 
const CreditGas = () => {


    const [isFunding, setIsFunding] = useState(false);
    const [amount, setAmount] = useState(0);
    const [alertMessage, setAlertMessage] = useState("");
    const [toggleAlert, setToggleAlert] = useState(false);
    const [showProcess, setShowProcess] = useState(false);

     

 function fundGas(){

    //check if the value is less than 5
    let fundValue = amount * 1;
    

    if(fundValue < 1){

        setAlertMessage("Minimum of $10");
        setToggleAlert(true);
        return false;
    }

    let walletBalance = JSON.parse(window.localStorage.getItem("@wallet")) * 1;
    
    if(fundValue > walletBalance){

        setAlertMessage("Your wallet balance is low ");
        setToggleAlert(true);
        return false;
    }


    //now process the funding 
    setIsFunding(true);
    Wallet.creditGas(fundValue).then(function (res){

        setAlertMessage( res.msg );
        setToggleAlert(true);
        setIsFunding(false);
        return false;

    })




 }

 return (
    <>
     <section className="body-scroll" data-page="" msg="Checking your gas">
            
                    <main className="h-100">

                       <Header title="Gas"/>
                        <div  style={{ marginTop: "100px" }}>
                            <BalanceBoard />
                        </div>
                        
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
                                <div className="col-12">

                                    
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
                                                    <p className="mb-1 text-color-theme">Market Forecast</p>
                                                    <p className="text-secondary size-12">{JSON.parse(window.localStorage.getItem("@phone"))}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                    
                                    
                                </div>
                            </div>
                            { Myalert(alertMessage, toggleAlert)  }  
                            {
                                isFunding ? <>
                                    <LoadWrapper  msg="Funding your gas..."/>
                                </>: <>
                                    <div className="row mb-4">
                                        <div className="col-12 ">
                                            <button onClick={() => fundGas() } className="btn btn-default btn-lg shadow-sm w-100">
                                                Fund Gas
                                            </button>
                                        </div>
                                    </div>
                                </>
                            }
                        

                        </div>


                    </main>

               
     </section>
    </>
 );
}

export default CreditGas;
