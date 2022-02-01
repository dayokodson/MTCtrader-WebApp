import React, {useEffect, useState}  from "react";
import  { Link } from "react-router-dom"; 
import PayfricPayment from "../components/PayfricPayment";
import LocalPayment from "../components/LocalPayment";
import CryptoPayment from "../components/CryptoPayment";
import MetaMaskPayment from "../components/MetaMaskPayment";
import BalanceBoard from "../components/BalanceBoard";
import Header from "../components/Header";

const Deposit = () => {

    const [boardType, setBoardType] = useState("payfric"); 
    const [title, setTitle] = useState("payfric");

 function selectPaymentMethod(type = "payfric"){

    setTitle(type);
    setBoardType(type);
    

 }
 

 return (
    <>
     <section className="body-scroll" data-page="" msg="Checking your gas">
            
                    <main className="h-100">

                        <Header  title={"Deposit - " + title}/>
                        <div  style={{ marginTop: "50px" }}>
                        
                            <BalanceBoard />
                            <div className="main-container container">
                                <div className="row mb-3">
                                    <div className="col">
                                        <h6 className="title">Select Payment Method</h6>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-12 px-0">
                                        <div className="swiper-container connectionwiper">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide text-center">
                                                     
                                                    <button onClick={()=> selectPaymentMethod("payfric")} className="card bg-opac-50 mb-2">
                                                        <div className="card-body p-1">
                                                            <div className="avatar avatar-70 bg-white text-color-theme rounded-18 shadow-sm">
                                                            <img src="/assets/img/payfricp.png" />
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <p className="mb-1 small">Payfric</p>
                                                     
                                                </div>
                                                <div className="swiper-slide text-center">
                                                     
                                                    <button onClick={()=> selectPaymentMethod("crypto")} className="card bg-opac-50 mb-2">
                                                        <div className="card-body p-1">
                                                            <div className="avatar avatar-70 bg-white text-color-theme rounded-18 shadow-sm">
                                                            <img src="/assets/img/usdtp.png" />
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <p className="mb-1 small">Crypto</p>
                                                     
                                                </div>
                                                <div className="swiper-slide text-center">
                                                     
                                                    <button onClick={()=> selectPaymentMethod("transfer")} className="card bg-opac-50 mb-2">
                                                        <div className="card-body p-1">
                                                            <div className="avatar avatar-70 bg-white text-color-theme rounded-18 shadow-sm">
                                                                 <img src="/assets/img/bankt.png" />

                                                            </div>
                                                        </div>
                                                    </button>
                                                    <p className="mb-1 small">Bank Transfer</p>
                                                     
                                                </div>
                                                <div className="swiper-slide text-center">
                                                     
                                                    <button onClick={()=> selectPaymentMethod("metamask")} className="card bg-opac-50 mb-2">
                                                        <div className="card-body p-1">
                                                            <div className="avatar avatar-70 bg-white text-color-theme rounded-18 shadow-sm">
                                                            <img src="/assets/img/metamask.png" />
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <p className="mb-1 small">Meta Mask</p>
                                                     
                                                </div>
                                                 
                                                 
                                                 
                                                 
                                                
                                                
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {
                                    {
                                    'payfric': <PayfricPayment />,
                                    'crypto': <CryptoPayment />,
                                    'transfer': <LocalPayment />,
                                    'metamask' : <MetaMaskPayment />
                                    }[boardType]
                                }
                            </div>

 
                        </div>
                        
                        
                        
                       


                    </main>

               
     </section>
    </>
 );
}

export default Deposit;
