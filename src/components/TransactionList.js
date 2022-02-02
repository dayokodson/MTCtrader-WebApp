import React, {useEffect, useState} from 'react'; 
import  { Link } from "react-router-dom";
import SubTrans from './SubTrans';
const TransactionList = (props) => {

    const [transType, setTransType] = useState("avatar avatar-15 border-danger rounded-circle")
    useEffect(() => {
		 
        if(props.trans.type == "debit"){
            setTransType("avatar avatar-15 border-danger rounded-circle")
        }else{
            setTransType("avatar avatar-15 border-success rounded-circle");
        }

        
	  
});

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
                                            <p>
                                                <Link to='/transaction' >View</Link>
                                            </p>
                                        </div>
                                        <div class="card-body bg-light">
                                            <ul class="list-group list-group-flush w-100 bubble-sheet log-information">

                                                {

                                                    
                                                    props.trans ? 
                                                    
                                                    props.trans.map((function(item) {
                                                           
                                                              
                                                               
                                                            
                                                               return (
                                                                        <>
                                                                            
                                                                                
                                                                                <li key={item.id} className="list-group-item"> 

                                                                                    <SubTrans item={item}/>

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

export default TransactionList;
