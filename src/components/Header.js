import React from 'react'; 
import  { Link } from "react-router-dom";
const Header = () => {
 return (
    <>
           <header className="header position-fixed">
                <div className="row">
                    <div className="col-auto">
                        <a href="#" target="_self" className="btn btn-light btn-44 menu-btn">
                            <i className="bi bi-list"></i>
                        </a>
                    </div>
                    <div className="col text-center">
                        <div className="logo-small">
                            <img src="assets/img/logo.png" alt="" />
                            <h5><span className="text-secondary fw-light">MTC</span><br />Trader</h5>
                        </div>
                    </div>
                    <div className="col-auto">
                        <a href="/profile"  target="_self" className="btn btn-light btn-44">
                            <i className="bi bi-person-circle"></i>
                            <span className="count-indicator"></span>
                        </a>
                    </div>
                </div>
            </header>
    
    </>
 );
}

export default Header;
