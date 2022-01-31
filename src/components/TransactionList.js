import React from 'react'; 
import  { Link } from "react-router-dom";
const TransactionList = () => {
 return (
    <>
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <ul className="list-group list-group-flush bg-none">
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
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-auto">
                                            <div className="avatar avatar-60 shadow-sm card rounded-15 p-1">
                                                <img src="assets/img/company5.png" alt="" className="rounded-15" />
                                            </div>
                                        </div>
                                        <div className="col align-self-center ps-0">
                                            <p className="text-secondary size-10 mb-0">Travel</p>
                                            <p>Uber</p>
                                        </div>
                                        <div className="col align-self-center text-end">
                                            <p className="text-secondary text-muted size-10 mb-0">15-10-2021 | 10:20am</p>
                                            <p>-26.00</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-auto">
                                            <div className="avatar avatar-60 shadow-sm card rounded-15 p-1">
                                                <img src="assets/img/company2.png" alt="" className="rounded-15" />
                                            </div>
                                        </div>
                                        <div className="col align-self-center ps-0">
                                            <p className="text-secondary size-10 mb-0">Food</p>
                                            <p>Starbucks</p>
                                        </div>
                                        <div className="col align-self-center text-end">
                                            <p className="text-secondary text-muted size-10 mb-0">15-10-2021 | 10:20am</p>
                                            <p>-18.00</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-auto">
                                            <div className="avatar avatar-60 shadow-sm card rounded-15 p-1">
                                                <img src="assets/img/company3.jpg" alt="" className="rounded-15" />
                                            </div>
                                        </div>
                                        <div className="col align-self-center ps-0">
                                            <p className="text-secondary size-10 mb-0">Clothing</p>
                                            <p>Walmart</p>
                                        </div>
                                        <div className="col align-self-center text-end">
                                            <p className="text-secondary text-muted size-10 mb-0">15-10-2021 | 10:20am</p>
                                            <p>-105.00</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
     </>
 );
}

export default TransactionList;
