import React, {useEffect, useState} from "react"; 
import  { useNavigate, Link } from "react-router-dom";
 import {Auth, Myalert} from "../helpers";
import LoadWrapper from "../components/LoadWrapper"; 



const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [toggleAlert, setToggleAlert] = useState(false);
  const [showProcess, setShowProcess] = useState(false);

 useEffect(() => {
		document.title = `MTCtrader - Signin`;  
        let value = window.localStorage.getItem("@isLogin");
       
        if(value == "true"){

            //console.log(window.localStorage);
              navigate("/dashboard");
              window.location.reload(true);
        }
	  
});


  const submitHandler = (e) => {
    e.preventDefault();
     
    if(password.length == "" || email.length  == ""){
      setAlertMessage( "Email and password required");
      setToggleAlert(true); 
      return false;
    } 
    
    setToggleAlert(false);
    setShowProcess(true);

     Auth.login(email, password).then(function (res){


      
        if(res.error){

          
          setAlertMessage( res.msg );
          setToggleAlert(true);
          setShowProcess(false);
          return false;

        }else{

             
           
            setAlertMessage( res.msg );
            setToggleAlert(true);
            setShowProcess(false);
             navigate('/dashboard');
             window.location.reload(true);
          
            
        }
     

     }).catch((e) => {
         console.log(e);
         
        setShowProcess(false);

     })

 
    
  };


  function loading(){

      if(showProcess){
          return (
              <><LoadWrapper msg="Please wait while we are checking your account"/></>
          );
      }

  }

    
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
 
                        <form onSubmit={(e) => submitHandler(e)}>  
                            <div className="col-11 col-sm-11 col-md-6 col-lg-5 col-xl-3 mx-auto align-self-center py-4">
                                <h1 className="mb-4"><span className="text-secondary fw-light">Sign in to</span><br/>your account</h1>
                                <div className="form-group form-floating mb-3 is-valid">
                                    <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} id="email" placeholder="Enter Email" />
                                    <label className="form-control-label"  >Email</label>
                                </div>

                                <div className="form-group form-floating is-invalid mb-3">
                                    <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} id="password" placeholder="Password" />
                                    <label className="form-control-label" >Password</label>
                                    <button type="button" className="text-danger tooltip-btn" data-bs-toggle="tooltip"
                                        data-bs-placement="left" title="Enter valid Password" id="passworderror">
                                        <i className="bi bi-info-circle"></i>
                                    </button>
                                </div>
                                <p className="mb-3 text-end">
                                    <Link to="/recover" className="">
                                        Forgot your password?
                                    </Link>
                                </p>

                            { Myalert(alertMessage, toggleAlert)  }  

                            </div>
                            <div className="col-11 col-sm-11 mt-auto mx-auto py-4">
                                <div className="row ">
                                    <div className="col-12 d-grid">
                                         {  
                                            !showProcess ? <button
                                            type="submit"
                                            className="btn btn-default btn-lg shadow-sm"
                                        >
                                           Sign In
                                        </button> :  <> {loading()} </>
                                        }
                                         
                                    </div>
                                </div>
                            </div>
                        </form>


                    </div>
            </main>
         


    </>

    
  );
};

export default Login;
