import React, {useEffect, useState} from 'react'; 
import  { Link } from "react-router-dom";
import SubTrans from './SubTrans';
const TransactionList = (props) => {

     

 return (
    <>
          {
            props.trans.length > 0 ? 
            
            <>
                <div className="main-container container">
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-12">
                                    <div className="card shadow-sm mb-4">
                                        <div className="card-header">
                                            <h6 className="my-1">Transactions</h6>
                                        </div>
                                        <div className="card-body bg-light">
                                            <ul className="list-group list-group-flush w-100 bubble-sheet log-information">

                                                {

                                                    
                                                    props.trans ? 
                                                    
                                                    props.trans.map((function(item) {
                                                           
                                                              
                                                               
                                                            
                                                               return (
                                                                        <>
                                                                        
                                                                            <SubTrans item={item} id={item.id}/>
                                                                          
                                                                        </>
                                                                        
                                                                    
                                                                    )
                                                               
                                                               
                                                            
                                                        }))

                                                    : <></>
                                                }
                
                                                
                                                
                                            </ul>
                                        </div>
                                        <div className="card-footer">
                                            <div className="row">
                                                <div className="col">
                                                    
                                                </div>
                                                <div className="col-auto">
                                                    <p className="text-muted small">More</p>
                                                </div>
                                            </div>
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

export default TransactionList;
