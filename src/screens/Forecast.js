import React, {useEffect, useState}  from "react"; 
import BalanceBoard from "../components/BalanceBoard"; 
import Header from "../components/Header";
import ForecastList from "../components/ForecastList";
import  { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";
import QuickLinkModal from "../components/QuickLinkModal";

import {SendRequest, Myalert} from "../helpers"; 
import urllink from "../constant/urllink";  




const Forecast = () => {

    const [isLoading, setIsLoading] = useState(false);

    const [forecastList, setForecastList] = useState([]);
    useEffect(() => {

        if(!window.localStorage.getItem("@forecastList")){

            refresh();
            
        }else{
            let list = JSON.parse(window.localStorage.getItem("@forecastList"));
            setForecastList(list);
             
        }
        

    }, []);
 


    function refresh(){

        //get cashback sellers list
        let requestData = {
           url: urllink.forecastList,
           user_id: JSON.parse(window.localStorage.getItem("@userId")),
           paged: 1
       }
        
       setIsLoading(true);
       SendRequest(requestData)
       .then(function (res){
           if(res.error){
   
           
              setIsLoading(false);
              return false;
   
           }else{
   
            console.log(res.forecast);
               //window.localStorage.setItem('@forecastList', JSON.stringify(res.review));
               setForecastList(res.forecast);
               setIsLoading(false);  
               return false;
               
           }
        
   
        }).catch((e) => {
                setIsLoading(false);
                return false;
       })
    
   
    }


 return (
    <>
     <section className="body-scroll" data-page=""  style={{ marginBottom: "80px" }}>
            
                    <main className="h-100">

                       <Header title="Market Forecast"/>
                        <div  style={{ marginTop: "100px" }}>
                            <BalanceBoard />
                        </div>
                        
                        <div className="main-container container">
                        <div className="row mb-3">
                                <div className="col">
                                    <h6 className="title">Market Forecast</h6>
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
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-12">
                                    <div className="card shadow-sm mb-4">
                                          
                                        <ForecastList list={forecastList}/>

                                        
                                    </div>
                                </div>
                                

                            </div>
                            
                        </div>


                    </main>

            <Footer />  
            <QuickLinkModal />  
     </section>
    </>
 );
}

export default Forecast;
