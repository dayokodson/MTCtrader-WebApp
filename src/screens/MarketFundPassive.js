import React, {useEffect, useState}  from "react"; 
import BalanceBoard from "../components/BalanceBoard"; 
import Header from "../components/Header";
import MarketFundList from "../components/MarketFundList";
import  { useNavigate, Link } from "react-router-dom";
import  Modal  from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import Footer from "../components/Footer";
import QuickLinkModal from "../components/QuickLinkModal";
import {SendRequest, Myalert} from "../helpers";
import urllink from "../constant/urllink";  
import MarketFundPassiveList from "../components/MarketFundPassiveList";
const MarketFundPassive = () => {
 
  
 
  

 return (
    <>
     <section className="body-scroll" data-page=""  style={{ marginBottom: "80px" }}>
            
                    <main className="h-100">

                       <Header title="Passive Assets"/>
                        <div style={{ marginTop: "100px" }}>
                            <BalanceBoard />
                        </div>
                        
                        <MarketFundPassiveList list={[]}/>


                    </main>

            <Footer />  
            <QuickLinkModal />  
     </section>
    </>
 );
}

export default MarketFundPassive;
