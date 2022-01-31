import React from 'react'; 
import  { Link } from "react-router-dom";

const Footer = () => {
 return (
    <>
         <footer className="footer">
            <div className="container">
                <ul className="nav nav-pills nav-justified">
                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link active" href="index.html">
                            <span>
                                <i className="nav-icon bi bi-house"></i>
                                <span className="nav-text">Home</span>
                            </span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/mtcforecast" className="nav-link" href="stats.html">
                            <span>
                                <i className="nav-icon bi bi-binoculars"></i>
                                <span className="nav-text">Forecast</span>
                            </span>
                        </Link>
                    </li>
                    <li className="nav-item centerbutton">
                        <button type="button" className="nav-link" data-bs-toggle="modal" data-bs-target="#menumodal"
                            id="centermenubtn">
                            <span className="theme-radial-gradient">
                                <i className="bi bi-grid size-22"></i>
                            </span>
                        </button>
                    </li>
                    <li className="nav-item">
                        <Link to="mtcfund" className="nav-link" href="shop.html">
                            <span>
                                <i className="nav-icon bi bi-bag"></i>
                                <span className="nav-text">MTC AI</span>
                            </span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/setting" className="nav-link" href="wallet.html">
                            <span>
                                <i className="nav-icon bi bi-wallet2"></i>
                                <span className="nav-text">Settings</span>
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    </>
 );
}

export default Footer;
