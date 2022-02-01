import React from 'react'; 
import  { Link } from "react-router-dom";
const Header = (props) => {
 return (
    <>
          <header className="header position-fixed">
                            <div className="row">
                                <div className="col-auto">
                                    <a href="/dashboard" type="button" className="btn btn-light btn-44 back-btn">
                                        <i className="bi bi-arrow-left"></i>
                                    </a>
                                </div>
                                <div className="col text-center">
                                    <div className="logo-small">
                                        <img src="assets/img/logo.png" alt="" />
                                        <h5><span className="text-secondary fw-light">MTC</span><br /> {props.title}</h5>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <Link to="/profile" target="_self" className="btn btn-light btn-44">
                                        <i className="bi bi-person-circle"></i>
                                        <span className="count-indicator"></span>
                                    </Link>
                                </div>
                            </div>
          </header>
    
    </>
 );
}

export default Header;
