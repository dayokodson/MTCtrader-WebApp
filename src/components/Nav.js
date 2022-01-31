import React from 'react';
import {ReactComponent as NavSvg} from "../constant/navsvg.svg";
import  { Link } from "react-router-dom";


const Nav = (props) => {
 return (
    <>
        <div className="sidebar-wrap  sidebar-overlay">
         
        <div className="closemenu text-muted">Close Menu</div>
        <div className="sidebar ">
            
            <div className="row my-3">
                <div className="col-12 profile-sidebar">
                    <div className="clearfix"></div>
                    <div className="circle small one"></div>
                    <div className="circle small two"></div>
                    <NavSvg />

                    <div className="row mt-3">
                        <div className="col-auto">
                            <figure className="avatar avatar-80 rounded-20 p-1 bg-white shadow-sm">
                                <img src="assets/img/logo.png" alt="" className="rounded-18" />
                            </figure>
                        </div>
                        <div className="col px-0 align-self-center">
                            <h5 className="mb-2">{props.fullname}</h5>
                            <p className="text-muted size-12">{props.phone} </p>
                        </div>
                    </div>
                </div>
            </div>

           
            <div className="row">
                <div className="col-12">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a href="/dashboard" className="nav-link active" aria-current="page" >
                                <div className="avatar avatar-40 icon"><i className="bi bi-house-door"></i></div>
                                <div className="col">Home</div>
                                <div className="arrow"><i className="bi bi-chevron-right"></i></div>
                            </a>
                        </li>
 
                        <li className="nav-item">
                            <Link to="/mtcai" className="nav-link"  tabIndex="-1">
                                <div className="avatar avatar-40 icon"><i className="bi bi-chat-text"></i></div>
                                <div className="col">MTC AI</div>
                                <div className="arrow"><i className="bi bi-chevron-right"></i></div>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="mtcforecast" className="nav-link"   tabIndex="-1">
                                <div className="avatar avatar-40 icon"><i className="bi bi-bell"></i></div>
                                <div className="col">Market Forecast</div>
                                <div className="arrow"><i className="bi bi-chevron-right"></i></div>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="mtcreview" className="nav-link"  tabIndex="-1">
                                <div className="avatar avatar-40 icon"><i className="bi bi-newspaper"></i></div>
                                <div className="col">Market Review</div>
                                <div className="arrow"><i className="bi bi-chevron-right"></i></div>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/deposit" className="nav-link"   tabIndex="-1">
                                <div className="avatar avatar-40 icon"><i className="bi bi-palette"></i></div>
                                <div className="col">Deposit </div>
                                <div className="arrow"><i className="bi bi-chevron-right"></i></div>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/withdraw" className="nav-link" tabIndex="-1">
                                <div className="avatar avatar-40 icon"><i className="bi bi-file-earmark-text"></i></div>
                                <div className="col">Withdraw  </div>
                                <div className="arrow"><i className="bi bi-chevron-right"></i></div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/logout" className="nav-link"  tabIndex="-1">
                                <div className="avatar avatar-40 icon"><i className="bi bi-box-arrow-right"></i></div>
                                <div className="col">Logout</div>
                                <div className="arrow"><i className="bi bi-chevron-right"></i></div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    </>
 );
}

export default Nav;
