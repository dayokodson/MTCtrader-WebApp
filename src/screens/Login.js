import React from 'react'; 
import  { Link } from "react-router-dom";
import LoadWrapper from "../components/LoadWrapper"; 



const Login = () => {

    
 return (
    <>
         <section data-page="login">
            <LoadWrapper />
            <main className="container-fluid h-100 ">
                    <div className="row h-100">
                        <div className="col-11 col-sm-11 mx-auto">
                            
                            <div className="row">
                                <header className="header">
                                    <div className="row">
                                        <div className="col">
                                            <div className="logo-small">
                                                <img src="assets/img/logo.png" alt="" />
                                                <h5><span className="text-secondary fw-light">MTC</span><br />Trader</h5>
                                            </div>
                                        </div>
                                        <div className="col-auto align-self-center">
                                            <Link to="/register">Sing up</Link>
                                        </div>
                                    </div>
                                </header>
                            </div>
                            
                        </div>
                        <div className="col-11 col-sm-11 col-md-6 col-lg-5 col-xl-3 mx-auto align-self-center py-4">
                            <h1 className="mb-4"><span className="text-secondary fw-light">Sign in to</span><br/>your account</h1>
                            <div className="form-group form-floating mb-3 is-valid">
                                <input type="text" className="form-control" onChange={(e) => console.log(e)} id="email" placeholder="Username" />
                                <label className="form-control-label"  >Username</label>
                            </div>

                            <div className="form-group form-floating is-invalid mb-3">
                                <input type="password" className="form-control" onChange={(e) => console.log(e)} id="password" placeholder="Password" />
                                <label className="form-control-label" >Password</label>
                                <button type="button" className="text-danger tooltip-btn" data-bs-toggle="tooltip"
                                    data-bs-placement="left" title="Enter valid Password" id="passworderror">
                                    <i className="bi bi-info-circle"></i>
                                </button>
                            </div>
                            <p className="mb-3 text-end">
                                <a href="forgot-password.html" className="">
                                    Forgot your password?
                                </a>
                            </p>
                        </div>
                        <div className="col-11 col-sm-11 mt-auto mx-auto py-4">
                            <div className="row ">
                                <div className="col-12 d-grid">
                                    <Link to="/" className="btn btn-default btn-lg shadow-sm">Sign In</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
        </section>


    </>

    
  );
};

export default Login;
