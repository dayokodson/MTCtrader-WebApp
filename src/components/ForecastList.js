import React, {useEffect, useState} from 'react'; 
import  { Link } from "react-router-dom";
import SubForecast from './SubForecast';
const ForecastList = (props) => {

     

 return (
    <>
          {
            props.list !== null ? 
            
            <> 

                <div className="card-body bg-light">
                                            <ul className="list-group list-group-flush w-100 bubble-sheet log-information">

                                                {

                                                    
                                                    props.list !== null ? 
                                                    
                                                    props.list.map((function(item) { 
                                                           
                                                              
                                                               
                                                            
                                                               return (
                                                                        <>
                                                                        
                                                                        <li key={item.key} className="list-group-item"> 

                                                                        <div className="avatar avatar-15 border-success rounded-circle"></div>
                                                                            <p>
                                                                                <span className="text-color-theme">R.O.I: {item.roi} %  | DURATION: {item.duration}  </span>

                                                                                <br/>
                                                                                
                                                                                <small className="text-muted">ASSETS: {item.assets}</small> |  
                                                                                <small className="text-muted">BUY/SELL: {item.trade_type}</small> |  
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
                                        
            </> : <></>
         }

     </>
 );
}

export default ForecastList;
