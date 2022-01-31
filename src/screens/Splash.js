
import React from 'react'; 
import  { Link } from "react-router-dom";
import {ReactComponent as SplashSvg} from "../constant/splashsvg.svg";
const Splash = () => {
 return (
    <>
           
           <section data-page="splash">
           <main class="container-fluid h-100 bg-1">
            <SplashSvg />
                <img src="assets/img/logo.png" alt="" class="bg-2-splash" />

                <div class="row h-100">
                    <div class="col-10 col-md-6 col-lg-4 text-left align-self-center mx-auto">
                        <Link to="/start" class="logo-splash">
                            <div class="logo-wallet">
                                <div class="wallet-bottom">
                                </div>
                                <div class="wallet-cards"></div>
                                <div class="wallet-top">
                                </div>
                            </div>
                            <h1 class="mt-4 mb-2">
                                <span class="text-secondary fw-light">Millennial</span><br/>
                                Traders Circle
                            </h1>
                            <p class="text-secondary">Trade, Invest, Learn</p>
                        </Link>
                    </div>
                </div>
            </main>

         </section >   
     
    
    
    
    </>
 );
}

export default Splash;
