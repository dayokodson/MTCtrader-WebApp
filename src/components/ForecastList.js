import React, {useEffect, useState} from 'react'; 
import  { Link } from "react-router-dom";
import SubForecast from './SubForecast';
const ForecastList = (props) => {

     

 return (
    <>
          {
            props.list.length > 0 ? 
            
            <>
                <div className="main-container container">
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-12">
                                    <div className="card shadow-sm mb-4">
                                        <div className="card-header">
                                            <h6 className="my-1">Market Forecast</h6>
                                             
                                        </div>
                                        <div className="card-body bg-light">
                                            <ul className="list-group list-group-flush w-100 bubble-sheet log-information">

                                                {

                                                    
                                                    props.list ? 
                                                    
                                                    props.list.map((function(item) {
                                                           
                                                              
                                                               
                                                            
                                                               return (
                                                                        <>
                                                                        
                                                                        <li key={item.id} className="list-group-item"> 

                                                                        <div className="avatar avatar-15 border-success rounded-circle"></div>
                                                                            <p>
                                                                                <span className="text-color-theme">R.O.I: {item.roi} %  | ASSETS: {item.assets} </span>

                                                                                <br/>
                                                                                <small className="text-muted">BUY/SELL: {item.trade_type}</small> | 
                                                                                <small className="text-muted">DURATION: {item.duration}</small> |   
                                                                                <br/>
                                                                                <small className="text-muted">ENTRY: {item.entry}</small> |
                                                                                <small className="text-muted" style={{textAlign: "left"}}> TARGET: {item.target}</small>
                                                                                <br/>
                                                                                <small className="text-muted" style={{textAlign: "left"}}> Date: {item.date}</small>
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
            </> : <></>
         }

     </>
 );
}

export default ForecastList;
