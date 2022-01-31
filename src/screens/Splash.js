
import React from 'react'; 
import  { Link } from "react-router-dom";
import {ReactComponent as SplashSvg} from "../constant/splashsvg.svg";
const Splash = () => {
 return (
    <>
           
           <section data-page="splash">
           <main class="container-fluid h-100 bg-1">
            <SplashSvg />
                <img src="assets/img/splash2.png" alt="" class="bg-2-splash" />

                <div class="row h-100">
                    <div class="col-10 col-md-6 col-lg-4 text-left align-self-center mx-auto">
                        <a href="landing.html" class="logo-splash">
                            <div class="logo-wallet">
                                <div class="wallet-bottom">
                                </div>
                                <div class="wallet-cards"></div>
                                <div class="wallet-top">
                                </div>
                            </div>
                            <h1 class="mt-4 mb-2">
                                <span class="text-secondary fw-light">Finance</span><br/>
                                Wallet
                            </h1>
                            <p class="text-secondary">Mobile HTML template</p>
                        </a>
                    </div>
                </div>
            </main>

         </section >   
     
    
    
    
    </>
 );
}

export default Splash;
