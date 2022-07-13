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
const MarketFundPassive = () => {

   const [forecastList, setForecastList] = useState([]);
   

   const [message, setMessage] = useState('');
   const [toggleAlert, setToggleAlert] = useState(false);
   const [showProcess, setShowProcess] = useState(false);

   useEffect(() => {

      refresh();
       
  }, []);
    
 
   function refresh(){

      //get cashback sellers list
     let requestData = {
         url: urllink.marketfundpassive,
         user_id: JSON.parse(window.localStorage.getItem("@userId")),
         page: 1
     }
         
     SendRequest(requestData)
     .then(function (res){
         if(res.error){
 
            return false;
 
         }else{
              // setForecastList(res.passive);
          }
      
 
      }).catch((e) => {
          console.log(e);
          
             //setShowProcess(false);
 
      })
  
 
 }
 

 return (
    <>
     <section className="body-scroll" data-page=""  style={{ marginBottom: "80px" }}>
            
                    <main className="h-100">

                       <Header title="Passive Assets"/>
                        <div style={{ marginTop: "100px" }}>
                            <BalanceBoard />
                        </div>
                        
                        <div className="main-container container">
                           
                        <div className="main-container container">
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-12">
                                    <div className="card shadow-sm mb-4">
                                        <div className="card-header" style={{ textAlign: 'center' }}>
                                            <h6 className="my-1">Passive Asset</h6>
                                            <p>
                                            <Link to="/marketfund">Open Asset</Link> 
                                             | <Link to="/marketfund/myassets"> My Asset </Link>
                                                | <span className='text-muted'> Passive Asset </span> 
                                            </p>
                                             
                                        </div>
                                        <div className="card-body bg-light">

                                        <Myalert message={message} toggle={ toggleAlert} /> 

                                            <ul className="list-group list-group-flush w-100 bubble-sheet log-information">

                                                {

                                                    
                                                        forecastList !== null ? 
                                                                                                            
                                                        forecastList.map((function(item) {
                                                           
                                                              
                                                               
                                                            
                                                               return (
                                                                        <>
                                                                        
                                                                        <li key={item.asset_id} className="list-group-item"> 

                                                                        <div className="avatar avatar-15 border-success rounded-circle"></div>
                                                                            <p>
                                                                                <span className="text-color-theme">ASSET : {item.asset}  
                                                                                
                                                                                 | <small className="" style={{textAlign: "left", color: "red"}}> {item.remaining_days} days left</small>
                                                                            
                                                                                </span>

                                                                                <br/>
                                                                                
                                                                                <small className="text-muted">Start Date: {item.start_date}</small> 
                                                                                <br/>
                                                                                <small className="text-muted">Total Investors: {item.total_number_of_stakers}</small>  <br/>
                                                                                <small className="text-muted" style={{textAlign: "left"}}> Total Invested: USD{item.total_stake}</small><br/>
                                                                                <small className="text-muted" style={{textAlign: "left"}}> Yield: USD{item.outcome} | {item.percent_profit}</small><br/>

                                                                              </p>

                                                                        </li>
                                                                          
                                                                        </>
                                                                    )
                                                               
                                                            }))

                                                    : <></>
                                                }
                
                                                
                                                
                                            </ul>
                                        </div>
                                        
                                    </div>
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

export default MarketFundPassive;
