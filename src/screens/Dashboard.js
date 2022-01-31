import React, {useEffect, useState} from "react"; 
import  { useNavigate, Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import QuickLinkModal from "../components/QuickLinkModal";
import Header from "../components/Header";
import LoadWrapper from "../components/LoadWrapper"; 
import TransactionList from "../components/TransactionList";
import CryptoList from "../components/CryptoList";
import Banner from "../components/Banner";
import MarketReviewList from "../components/MarketReviewList";



const Dashboard = () => {

  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState("");
  const [toggleAlert, setToggleAlert] = useState(false);
  const [showProcess, setShowProcess] = useState(false);
  const [fullname, setFullname] = useState("Dayo Kodson");
  const [wallet, setWallet] = useState(200);
  const [gas, setGas] = useState(40);
  const [totalBalance, setTotalBalance] = useState(gas + wallet);
  const [phone, setPhone] = useState("+2347039416382");
  const [cryptoList, setCryptoList] = useState([]);
  const [transList, setTransList] = useState([]);
  const [reviewList, setReviewList] = useState([]);


 useEffect(() => {
		document.title = `MTCtrader - Wallet`;  
        let value = window.localStorage.getItem("@isLogin");
        if(value !== "true"){
           // navigate("/");
            
        }

        if(fullname == ""){
             
            setFullname(window.localStorage.getItem("@name"));
            setPhone(window.localStorage.getItem("@phone"));
        }

        if(window.localStorage.getItem("@wallet")){

            let wallet = window.localStorage.getItem("@wallet") * 1;
            setWallet(wallet);

        }
        if(window.localStorage.getItem("@gas")){

            let gas = window.localStorage.getItem("@gas") * 1;
            setWallet(gas);
        }
        if(window.localStorage.getItem("@cryptoList")){

            let list = JSON.parse(window.localStorage.getItem("@cryptoList"));
            setCryptoList(list);
        }

        if(window.localStorage.getItem("@transList")){

            let list = JSON.parse(window.localStorage.getItem("@transList"));
            setTransList(list);
        }

        if(window.localStorage.getItem("@reviewsList")){

            let list = JSON.parse(window.localStorage.getItem("@reviewsList"));
            setReviewList(list);
        }



        
	  
});





 return (
    <>
        <section data-page="dashboard">


                    <LoadWrapper  msg="Preparing your wallet..."/>
                    <div className="body-scroll" >
                        <Nav fullname={fullname} phone={phone}/>
                        <main className="h-100">
                                <Header fullname={fullname} phone={phone}/>
                                <div className="main-container container">
                                
                                    <div className="row my-4 text-center">
                                        <div className="col-12">
                                            <h1 className="fw-light mb-2">$ {totalBalance}</h1>
                                            <p className="text-secondary">Total Balance</p>
                                        </div>
                                    </div>

                                    
                                    <div className="row mb-4">
                                        <div className="col-6">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-auto">
                                                            <div className="avatar avatar-40 p-1 shadow-sm shadow-success rounded-15">
                                                                <div className="icons bg-success text-white rounded-12">
                                                                    <i className="bi bi-arrow-down-left"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col align-self-center ps-0">
                                                            <p className="size-10 text-secondary mb-0">Wallet</p>
                                                            <p>${wallet}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-auto">
                                                            <div className="avatar avatar-40 p-1 shadow-sm shadow-danger rounded-15">
                                                                <div className="icons  text-white rounded-12">
                                                                    <img src="assets/img/gas_red.png" style={{ width: 30, height: 30 }}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col align-self-center ps-0">
                                                            <p className="size-10 text-secondary mb-0">Gas</p>
                                                            <p>${gas}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
 
                                    <div className="row mb-4">
                                        <div className="col-12">
                                            <div className="card shadow-sm">
                                                <div className="card-body">
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" id="darkmodeswitch" />
                                                        <label className="form-check-label text-muted px-2 " htmlFor="darkmodeswitch">Dark mode view</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                   
                                   <CryptoList cryptos={cryptoList}/>
                                
                                    
                                    
                                    <div className="row mb-4">
                                        <div className="col-12">
                                            <div className="card shadow-sm">
                                                <div className="card-body">
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox"  />
                                                        <label className="form-check-label text-muted px-2 " >Activate Notification</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                  <Banner />
                                
                                   
                                  
                                    <TransactionList trans={transList} />
                                  
                                    <MarketReviewList reviews={reviewList}/>
                                
                                   

                                </div>
                    


                        </main>
                        <Footer />
                        <QuickLinkModal />
                    </div>

        </section>

    </>
 );
}

export default Dashboard;
