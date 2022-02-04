
import React, {useEffect} from 'react'; 
import  { useNavigate, Link } from "react-router-dom";
import {ReactComponent as SplashSvg} from "../constant/splashsvg.svg";
const Splash = () => {
 
    const navigate = useNavigate();


 useEffect(() => {
    
    let value = window.localStorage.getItem("@isLogin");
    if(value == "true"){
         navigate("/dashboard");
         window.location.reload(true);
    }
  
});


 return (
    <>
           
           <section data-page="splash">
            <main className="container-fluid h-100 bg-3">
            <SplashSvg />
                <img src="assets/img/logo.png" alt="" className="bg-2-splash" />

                <div className="row h-100">
                    <div className="col-10 col-md-6 col-lg-4 text-left align-self-center mx-auto">
                        <Link to="/start" className="logo-splash">
                            <div className="logo-wallet">
                                <div className="wallet-bottom">
                                </div>
                                <div className="wallet-cards"></div>
                                <div className="wallet-top">
                                </div>
                            </div>
                            <h1 className="mt-4 mb-2">
                                <span className="text-secondary fw-light">Millennial</span><br/>
                                Traders Circle
                            </h1>
                            <p className="text-secondary">Trade, Invest, Learn</p>
                        </Link>
                    </div>
                </div>
            </main>

 </section >   
     
     
    
    
    
    </>
 );
}

export default Splash;
