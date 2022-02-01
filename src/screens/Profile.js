import React from "react";
import  { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer"; 
import Header from "../components/Header";
import QuickLinkModal from "../components/QuickLinkModal";
import {ReactComponent as Svg2} from "../constant/logo2.svg";
 


const Profile = () => {
 return (
    <>

<main className="h-100 body-scroll"   >

 
        <Header title="Profile"/>

        <div className="main-container container">
            <div  style={{ marginTop: "50px" }}>
                <div className="row my-4">
                    <div className="col-12 col-md-6 mx-auto">
                        <h1 className="mb-3"><span className="fw-light text-secondary">Profile</span><br/>Update</h1>
                        <p className="text-secondary mb-4">Profile information!</p>

                        <div className="form-floating mb-3 is-valid">
                            <input type="text" className="form-control" id="emailaddress"  value={window.localStorage.getItem("@name")} />
                            <label for="emailaddress">Display Name</label>
                             
                        </div>
                        <div className="form-floating mb-3 is-valid">
                            <input type="email" className="form-control" id="emailaddress"  value={window.localStorage.getItem("@email")} />
                            <label for="emailaddress">Email</label>
                            <button type="button" className="btn btn-link text-success tooltip-btn valid-tooltip"
                                data-bs-toggle="tooltip" data-bs-placement="left" title="Email is valid">
                                <i className="bi bi-check-circle"></i>
                            </button>
                        </div> 
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" value={JSON.parse(window.localStorage.getItem("@phone"))} />
                            <label for="emailaddress">Phone number</label>
                             
                        </div>
                         
                        
                    </div>
                </div>
            </div>
            
             
            
             
        </div>

</main>
    
    </>
 );
}

export default Profile;
