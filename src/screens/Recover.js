
import React from 'react'; 
import  { Link } from "react-router-dom";
const Recover = () => {
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
                                        <h5><span className="text-secondary fw-light">Finance</span><br />Wallet</h5>
                                    </div>
                                </div>
                                <div className="col-auto align-self-center">
                                    <a href="signin.html">Sing in</a>
                                </div>
                            </div>
                        </header>
                    </div>
                
                </div>
                <div className="col-11 col-sm-11 col-md-6 col-lg-5 col-xl-3 mx-auto align-self-center py-4">
                    <h1 className="mb-3"><span className="text-secondary fw-light">Forget your</span><br/>Password?</h1>
                    <p className="text-secondary mb-4">Provide your registered email address to change password.</p>
                    <div className="form-group form-floating mb-3 is-valid">
                        <input type="text" className="form-control" onClick={(e) => console.log(e)} id="email" placeholder="Username" />
                        <label className="form-control-label" htmlFor="email">Username</label>
                    </div>
                </div>
                <div className="col-11 col-sm-11 mt-auto mx-auto py-4">
                    <div className="row ">
                        <div className="col-12 d-grid">
                            <Link to="/" className="btn btn-default btn-lg shadow-sm">Reset Password</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>


    </>

    
  );
};

export default Recover;
