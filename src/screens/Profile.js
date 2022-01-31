import React from "react";
import  { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer"; 
import Header from "../components/Header";
 
import {ReactComponent as Svg2} from "../constant/logo2.svg";


const Profile = () => {
 return (
    <>

    <div className="body-scroll" data-page="index">
        <Nav />
        <main className="h-100">
                <Header />
                <div className="main-container container">
            <div className="row">
                <div className="col-12 profile-page">
                    <div className="clearfix"></div>
                    <div className="circle small one"></div>
                    <div className="circle small two"></div>
                     
                     
                    <div className="row my-3 py-4">
                        <div className="col-7 align-self-center">
                            <h1 className="mb-2"><span className="fw-light text-secondary">Hello!</span><br />John</h1>
                            <p className="text-muted size-12">New York City,<br />United States</p>
                        </div>

                        <div className="col align-self-center">
                            <figure className="avatar avatar-100 rounded-20 p-1 bg-white shadow-sm">
                                <img src="assets/img/user1.jpg" alt="" className="rounded-18" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

         
            <div className="row mb-4">
                <div className="col">
                    <a href="#" className="btn btn-light btn-lg shadow-sm w-100">Invite</a>
                </div>
                <div className="col">
                    <a href="message.html" className="btn btn-default btn-lg shadow-sm w-100">Message</a>
                </div>
            </div>
 
          

             
             

            
            
            

        </div>
    


        </main>
        <Footer />
        
    </div>
    </>
 );
}

export default Profile;
