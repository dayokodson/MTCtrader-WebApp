import React, {useEffect, useState} from "react"; 
import  { useNavigate, Link } from "react-router-dom";
import {Auth, Myalert} from "../helpers";
import LoadWrapper from "../components/LoadWrapper"; 





const Register = () => {

const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [toggleAlert, setToggleAlert] = useState(false);
  const [showProcess, setShowProcess] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState("Validating your wallet...")


  
  useEffect(() => {
    
    let value = window.localStorage.getItem("@isLogin");
    if(value == "true"){
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

     Auth.register(email, password, fullname, phone ).then(function (res){


      
        if(res.error || res.error == null){

           
          setAlertMessage( res.msg);
          setToggleAlert(true);
          setShowProcess(false);
           console.log(res);
          
          return false;

        }else{

            setShowProcess(false);
            
             
            setAlertMessage("successful");
            setToggleAlert(true);
            setShowProcess(false);
            setLoadingMsg("Setting up your account...")
            navigate('/thankyou');
            
            
        }
     

     }) 

 
    
  };


  function loading(){

      if(showProcess){
          return (
              <><LoadWrapper msg={loadingMsg}/></>
          );
      }

  }


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
                                            <h5><span className="text-secondary fw-light">MTC</span><br />trader</h5>
                                        </div>
                                    </div>
                                    <div className="col-auto align-self-center">
                                        <Link to="/login">Sing in</Link>
                                    </div>
                                </div>
                            </header>
                        </div>
        
                    </div>


                        <form onSubmit={(e) => submitHandler(e)}> 
                            <div className="col-11 col-sm-11 col-md-6 col-lg-5 col-xl-3 mx-auto align-self-center py-4">        
                                <h1 className="mb-4"><span className="text-secondary fw-light">Create</span><br/>new account</h1>            
                                    <div className="form-floating  mb-3">
                                        <input type="text" className="form-control" onChange={(e) => setPhone(e.target.value)}
                                            placeholder="+2348123456789"   />
                                        <label>Enter Valid Phone (+234)</label>
                                    </div>
                                    <div className="form-floating   mb-3">
                                        <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter Valid Email"   />
                                        <label>Email</label>
                                    </div>
                                    <div className="form-floating   mb-3">
                                        <input type="text" className="form-control" onChange={(e) => setFullname(e.target.value)} placeholder="Full Name"
                                            />
                                        <label>Full Name</label>
                                    </div>
                                    <div className="form-floating  mb-3">
                                        <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password"
                                            />
                                        <label>Password</label>
                                    </div>
                                     
                                    <p className="mb-3"><span className="text-muted">By clicking on Sign up button, you are agree to the our </span> 
                                    <Link to="/terms">Terms and Conditions</Link></p>

                                    <Myalert message={alertMessage} toggle={ toggleAlert} /> 

                            </div>
                            <div className="col-11 col-sm-11 mt-auto mx-auto py-4">
                                <div className="row ">
                                    <div className="col-12 d-grid">
                                        {  
                                            !showProcess ? <button
                                                    type="submit"
                                                    className="btn btn-default btn-lg shadow-sm"
                                           >
                                           Sign Up
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

export default Register;
