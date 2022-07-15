import React, {useEffect, useState}  from "react";
import  { Link } from "react-router-dom"; 
import LoadWrapper from "../components/LoadWrapper"; 
import BalanceBoard from "../components/BalanceBoard";
import QuickLinkModal from "../components/QuickLinkModal";
import Header from "../components/Header";
import MarketReviewList from "../components/MarketReviewList";
import Footer from "../components/Footer";
import {SendRequest, Myalert} from "../helpers"; 
import urllink from "../constant/urllink";  

 
const Review = () => {

    const [isLoading, setIsLoading] = useState(false);

    
    const [reviewList, setReviewList] = useState([]);
    useEffect(() => {

        if(reviewList.length < 1){

            let reviewlist = JSON.parse(window.localStorage.getItem("@reviewsList"));
            setReviewList(reviewlist);

        }
        

    },[])



 function refresh(){

     //get cashback sellers list
     let requestData = {
        url: urllink.marketreviewlink,
        paged: 1
    }
     
    setIsLoading(true);
    SendRequest(requestData)
    .then(function (res){
        if(res.error){

        
           setIsLoading(false);
           return false;

        }else{

            window.localStorage.setItem('@reviewsList', JSON.stringify(res.review));
            setReviewList(res.review);
            setIsLoading(false);  
            
        }
     

     }).catch((e) => {
             setIsLoading(false);
    })
 

 }
 

 return (
    <>
     <section className="body-scroll" data-page="" msg="Checking your gas">
            
                    <main className="h-100" style={{ marginBottom: "80px" }}>

                       <Header title="Market Review"/>
                       <div  style={{ marginTop: "100px" }}>
                            <div className="main-container container">
                            <div className="row mb-3">
                                <div className="col">
                                    <h6 className="title">Market Review</h6>
                                </div>
                                <div className="col-auto align-self-center">

                                    {
                                        isLoading == true ?<>
                                            <span>loading...</span>
                                        </>:<>
                                            <span onClick={() => refresh()} className="small btn btn-primary" style={{ borderRadius: "4 solid", margin: "4" }}>Refresh</span>
                                        </>
                                    } 
                                    
                                </div>
                            </div>
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
