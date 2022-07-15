import React, {useEffect, useState} from 'react'; 
import  { Link } from "react-router-dom"; 
import  Modal  from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import {SendRequest, Myalert} from "../helpers";
import LoadWrapper from "./LoadWrapper"; 
import urllink from "../constant/urllink";  
var numeral = require('numeral');

const MarketFundPassiveList = (props) => {

    const [market, setMarket] = useState(false); 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
   // const handleShow = () => setShow(true);
    const walletBalance = JSON.parse(window.localStorage.getItem("@wallet")) * 1;
    const [insureTrade, setInsureTrade] = useState(0);
    const [investAmount, setInvestAmount] = useState(0);
    const [message, setMessage] = useState('');
    const [toggleAlert, setToggleAlert] = useState(false);
    const [showProcess, setShowProcess] = useState(false);
    const [page, setPage] = useState(2);
    const [forecastList, setForecastList] = useState(props.list);
    useEffect(() => {

        refresh();
         
    }, []);


function nextpage(nextpage){

    if(nextpage){
        setPage(page + 1);
        
    }else{

        if(page > 1){
            
            setPage(page - 1);

        } 
    }
console.log(page);
    refresh();

}
 
function refresh(){

         //get cashback sellers list
        let requestData = {
            url: urllink.marketfundpassive,
            user_id: JSON.parse(window.localStorage.getItem("@userId")),
            paged: page
        }
            
        SendRequest(requestData)
        .then(function (res){
            if(res.error){
    
               return false;
    
            }else{

                //setLoadForecast(true);
                setForecastList(res.passive);

  
                
            }
         
    
         }).catch((e) => {
              
                //setShowProcess(false);
    
         })
     
    
    }

 
 

    

 return (
    <>
           
                        <div className="main-container container">
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-12">
                                    <div className="card shadow-sm mb-4">
                                        <div className="card-header" style={{ textAlign: 'center' }}>
                                            <h6 className="my-1">Passive Asset</h6>
                                            <p>
                                            <Link to="/marketfund">Open Asset</Link> 
                                             | <Link to="/marketfund/myassets"> My Potfolio </Link>
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
                                                                                
                                                                                 
                                                                            
                                                                                </span>

                                                                                <br/>
                                                                                
                                                                                <small className="text-muted">Start Date: {item.start_date}</small> 
                                                                                <br/>
                                                                                <small className="text-muted">Total Investors: {item.total_number_of_stakers}</small>  <br/>
                                                                                <small className="text-muted" style={{textAlign: "left"}}> Total Invested: USD{item.total_stake}</small><br/>
                                                                                {
                                                                                    item.outcome_status === "gain" ?<>
                                                                                        <small className="" style={{textAlign: "left", color: "green"}}> Yield: USD{item.outcome} | {numeral(item.percent_profit).format("0.00")}%</small><br/>

                                                                                    </>:<>
                                                                                    <small className="" style={{textAlign: "left", color: "red"}}> Yield: USD{item.outcome} | {numeral(item.percent_profit).format("0.00")}%</small><br/>

                                                                                    </>
                                                                                }
                                                                                
                                                                              </p>

                                                                        </li>
                                                                          
                                                                        </>
                                                                    )
                                                               
                                                            }))

                                                    : <></>
                                                }
                
                                                 
                                            </ul>
                                            <p>
                                                <button onClick={() => nextpage(false)}>Previous</button>
                                                <button onClick={() => nextpage(true)}>Next</button>
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>
                                

                            </div>
                        </div>


                                       

 
     </>
 );
}

export default MarketFundPassiveList;
