import React, {useEffect, useState}  from "react";
import  { Link } from "react-router-dom"; 
import LoadWrapper from "../components/LoadWrapper"; 
import BalanceBoard from "../components/BalanceBoard";
import QuickLinkModal from "../components/QuickLinkModal";
import Header from "../components/Header";
import MarketReviewList from "../components/MarketReviewList";
import Footer from "../components/Footer";
 
const Review = () => {


    
    const [reviewList, setReviewList] = useState([]);
    useEffect(() => {

        if(reviewList.length < 1){
            let reviewlist = JSON.parse(window.localStorage.getItem("@reviewsList"));
            setReviewList(reviewlist);
        }
        

    })

 function moreTransaction(){

      

 }

 return (
    <>
     <section className="body-scroll" data-page="" msg="Checking your gas">
            
                    <main className="h-100" style={{ marginBottom: "80px" }}>

                       <Header title="Market Forecast Updates"/>
                       <div  style={{ marginTop: "100px" }}>
                            <div className="main-container container">
                                
                                <MarketReviewList reviews={reviewList} />

                            </div>

                        </div>
                        
                        

                    </main>

        <Footer /> 
        <QuickLinkModal />      
     </section>
    </>
 );
}

export default Review;
