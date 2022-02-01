import React, {useEffect} from "react";
 
import {ReactComponent as Svg1} from "../constant/logo1.svg";
import  { Link ,useNavigate} from "react-router-dom";

const ThankYou = () => {

    const navigate = useNavigate();
    useEffect(() => {
    
        let value = window.localStorage.getItem("@isLogin");
        if(value == "true"){
             navigate("/dashboard");
             window.location.reload(true);
        }

        let registered = window.localStorage.getItem("@registered");
        if(registered !== "true"){
            navigate("/register");
           
       }
      
    });
 return (
    <>
       <main className="container-fluid h-100 ">
        <div className="row h-100">
            <div className="col-11 col-sm-11 mx-auto">
               
                <div className="row">
                    <header className="header">
                        <div className="row">
                            <div className="col">
                                <div className="logo-small">
                                    <img src="assets/img/logo.png" alt="" />
                                    <h5><span className="text-secondary fw-light">MTC</span><br />Sign Up</h5>
                                </div>
                            </div>
                            <div className="col-auto align-self-center">
                                
                            </div>
                        </div>
                    </header>
                </div>
                
            </div>
            <div className="col-12 align-self-center pb-3">
                <div className="row h-100">
                    <div className="col-12 px-0 align-self-center">
                        <div className="row mx-0">
                            <div className="col-ld-6 position-relative thankyouimg2">
                                <Svg1 />
                                  
                                  
                                <div className="text">Registered</div>
                                <div className="circle small one"></div>
                                <div className="circle two"></div>
                                <div className="circle small three"></div>                                              
                                <img src="assets/img/checkmark.svg" alt="Successful" className="slideimg" />
                            </div>
                            <div className="col-11 col-md-8 col-lg-4  col-ld-6 mx-auto">
                                <h1 className="mb-4"><span className="text-secondary fw-light">Successfully</span><br/>Sign Up!</h1>
                                <p className="text-secondary">Your MTC account has been created successfully. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-11 col-sm-11 mt-auto mx-auto py-4">
                <div className="row ">
                    <div className="col-12 d-grid">
                        <Link to="/login" className="btn btn-default btn-lg shadow-sm">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    </main>

    </>
 );
}

export default ThankYou;
