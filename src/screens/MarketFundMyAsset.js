import React, {useEffect, useState}  from "react"; 
import BalanceBoard from "../components/BalanceBoard"; 
import Header from "../components/Header";
import MarketFundAssetList from "../components/MarketFundAssetList";
//import  { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";
import QuickLinkModal from "../components/QuickLinkModal"; 



const MarketFundMyAsset = () => {
 
    
 
    

 return (
    <>
     <section className="body-scroll" data-page=""  style={{ marginBottom: "80px" }}>
            
                    <main className="h-100">

                       <Header title="Market Fund"/>
                        <div  style={{ marginTop: "100px" }}>
                            <BalanceBoard />
                        </div>
                        
                        <div className="main-container container">
                           
                           <MarketFundAssetList list={[]}/>

                        </div>


                    </main>

            <Footer />  
            <QuickLinkModal />  
     </section>
    </>
 );
}

export default MarketFundMyAsset;
