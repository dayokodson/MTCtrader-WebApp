
import React from 'react'; 
import  { Link } from "react-router-dom";



const Register = () => {
 return (
    <>
            <main className="container-fluid h-100">
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
                                <a href="/login">Sing in</a>
                            </div>
                        </div>
                    </header>
                </div>
 
            </div>
            <div className="col-11 col-sm-11 col-md-6 col-lg-5 col-xl-3 mx-auto align-self-center py-4">        
                <h1 className="mb-4"><span className="text-secondary fw-light">Create</span><br/>new account</h1>            
                    <div className="form-floating is-valid mb-3">
                        <select className="form-control" id="country">
                            <option >United States (+1)</option>
                            <option>United Kingdoms (+44)</option>
                        </select>
                        <label htmlFor="country">Phone</label>
                    </div>
                    <div className="form-floating is-valid mb-3">
                        <input type="text" className="form-control" onChange={(e) => console.log(e)}
                            placeholder="Email " id="emailphone" />
                        <label >Email</label>
                    </div>
                    <div className="form-floating is-valid mb-3">
                        <input type="text" className="form-control" onChange={(e) => console.log(e)} placeholder="Full Name"
                            id="username" />
                        <label  >Full Name</label>
                    </div>
                    <div className="form-floating is-valid mb-3">
                        <input type="password" className="form-control" onChange={(e) => console.log(e)} placeholder="Password"
                            id="password" />
                        <label  >Password</label>
                    </div>
                    <div className="form-floating is-invalid mb-3">
                        <input type="password" className="form-control" placeholder="Confirm Password" id="confirmpassword" />
                        <label htmlFor="confirmpassword">Confirm Password</label>
                        <button type="button" className="btn btn-link text-danger tooltip-btn" data-bs-toggle="tooltip"
                            data-bs-placement="left" title="Enter valid Password" id="passworderror" onChange={(e) => console.log(e)}>
                            <i className="bi bi-info-circle"></i>
                        </button>
                    </div>
                    <p className="mb-3"><span className="text-muted">By clicking on Sign up button, you are agree to the our </span> 
                    <Link to="/terms">Terms and Conditions</Link></p>
            </div>
            <div className="col-11 col-sm-11 mt-auto mx-auto py-4">
                <div className="row ">
                    <div className="col-12 d-grid">
                        <a href="/dashboard" className="btn btn-default btn-lg shadow-sm">Sign Up</a>
                    </div>
 
                </div>
            </div>
        </div>
    </main>


    </>

    
  );
};

export default Register;
