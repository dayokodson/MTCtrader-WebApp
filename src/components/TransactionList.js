import React from 'react'; 
import  { Link } from "react-router-dom";
const TransactionList = (props) => {
 return (
    <>
        {
            props.trans.length > 0 ? 


            <>
                <div className="row mb-3">
                <div className="col">
                    <h6 className="title">Transactions<br /><small className="fw-normal text-muted">Today, 24 Aug 2021</small>
                    </h6>
                </div>
                <div className="col-auto align-self-center">
                    <Link to="/transaction" className="small">View all</Link>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <ul className="list-group list-group-flush bg-none">
                                    {

                                    
                                    props.trans ? 
                                    props.trans.map((function(item) {
                                                return (
                                                        <li className="list-group-item">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="avatar avatar-60 shadow-sm card rounded-15 p-1">
                                                                        <img src="assets/img/company4.jpg" alt="" className="rounded-15" />
                                                                    </div>
                                                                </div>
                                                                <div className="col align-self-center ps-0">
                                                                    <p className="text-secondary size-10 mb-0">Food</p>
                                                                    <p>Zomato</p>
                                                                </div>
                                                                <div className="col align-self-center text-end">
                                                                    <p className="text-secondary text-muted size-10 mb-0">15-10-2021 | 10:20am</p>
                                                                    <p>-25.00</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                )
                                        }))

                                    : <></>
                                }
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>

            : <></>
        }

     </>
 );
}

export default TransactionList;
