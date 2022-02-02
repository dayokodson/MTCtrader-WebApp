import React from 'react';  
import  { useNavigate, Link } from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate();

    function logout(){


        //window.localStorage.removeItem('@isLogin'); 
        window.localStorage.clear();
        navigate("/");
        window.location.reload(true);
    

    } 

    return (
        <>
            <footer className="footer">
                <div className="container">
                    <ul className="nav nav-pills nav-justified">
                        <li className="nav-item">
                            <a href="/marketreview" className="nav-link active">
                                <span>
                                    <i className="nav-icon bi bi-house"></i>
                                    <span className="nav-text">Market Review</span>
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link to="/forecast" className="nav-link active" >
                                <span>
                                    <i className="nav-icon bi bi-binoculars"></i>
                                    <span className="nav-text">Forecast</span>
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item centerbutton">
                            <button type="button" className="nav-link active" data-bs-toggle="modal" data-bs-target="#menumodal"
                                id="centermenubtn">
                                <span className="theme-radial-gradient">
                                    <i className="bi bi-grid size-22"></i>
                                </span>
                            </button>
                        </li>
                        <li className="nav-item">
                            <Link to="/marketfund" className="nav-link active" >
                                <span>
                                    <i className="nav-icon bi bi-bag"></i>
                                    <span className="nav-text">MTC Fund</span>
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => logout()}   className="nav-link active" >
                                <span className='avatar avatar-40 icon'>
                                    <i className="bi bi-box-arrow-right"></i>
                                    <span className="nav-text">Logout</span>
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default Footer;
