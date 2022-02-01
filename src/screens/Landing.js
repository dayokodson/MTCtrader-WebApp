
import React, {useEffect} from 'react';
import  { Link ,useNavigate} from "react-router-dom";
import {ReactComponent as Svg1} from "../constant/logo1.svg";
import {ReactComponent as Svg2} from "../constant/logo2.svg";
import {ReactComponent as Svg3} from "../constant/logo3.svg";
const Landing = () => {

    const navigate = useNavigate();
    useEffect(() => {
    
        let value = window.localStorage.getItem("@isLogin");
        if(value == "true"){
             navigate("/dashboard");
             window.location.reload(true);
        }
      
    });
    
    
 return (
    <>
       <section data-page="landing">      
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
                                    <Link to="/login">Skip</Link>

                                </div>
                            </div>
                        </header>
                    </div>
                
                </div>
                <div className="col-12 px-0 mx-auto">
                    
                    <div className="swiper-container introswiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="row h-100">
                                    <div className="col-12 px-0 align-self-center">
                                        <div className="row mx-0">
                                            <div className="col-ld-6 position-relative">
                                                <Svg1 />
                                                <div className="text">Fund</div>
                                                <div className="circle small one"></div>
                                                <div className="circle two"></div>
                                                <div className="circle small three"></div>
                                                <img src="assets/img/introimg.png" alt="" className="slideimg" />
                                            </div>
                                            <div className="col-10 col-md-8 col-lg-4  col-ld-6 mx-auto">
                                                <h1 className="mb-4"><span
                                                        className="text-secondary fw-light">Create<br />Finance</span><br />Goal
                                                    Now!</h1>
                                                <p className="text-secondary">Great interface to access small details from
                                                    components, Easy to use and Easy to develop.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide swiper-slide-two">
                                <div className="row h-100">
                                    <div className="col-12 px-0 align-self-center">
                                        <div className="row mx-0">
                                            <div className="col-ld-6 position-relative">
                                            <Svg2 />

                                                <div className="text">Training</div>
                                                <div className="circle small one"></div>
                                                <div className="circle two"></div>
                                                <div className="circle small three"></div>
                                                <img src="assets/img/intro2img.png" alt="" className="slideimg" />
                                            </div>
                                            <div className="col-10 col-md-8 col-lg-4  col-ld-6 mx-auto">
                                                <h1 className="mb-4"><span className="text-secondary fw-light">Watch<br />Closely
                                                        your</span><br />Expenses!</h1>
                                                <p className="text-secondary">Great interface to access small details from
                                                    components, Easy to use and Easy to develop.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide swiper-slide-three">
                                <div className="row h-100">
                                    <div className="col-12 px-0 align-self-center">
                                        <div className="row mx-0">
                                            <div className="col-ld-6 position-relative">
                                            <Svg3 />

                                                <div className="text">Forecast</div>
                                                <div className="circle small one"></div>
                                                <div className="circle two"></div>
                                                <div className="circle small three"></div>
                                                <img src="assets/img/hand.png" alt="" className="slideimg" />
                                                <img src="assets/img/hands2.png" alt="" className="slideimg2" />
                                            </div>
                                            <div className="col-10 col-md-8 col-lg-4  col-ld-6 mx-auto">
                                                <h1 className="mb-4"><span
                                                        className="text-secondary fw-light">Send<br />Money</span><br />Fast &
                                                    Easy!</h1>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination pagination-rightnumber"></div>
                    </div>
                </div>

                <div className="col-11 col-sm-11 mt-auto mx-auto py-4">
                    <div className="row ">
                        <div className="col-6 text-end d-grid">
                            <Link to="/register" className="btn btn-light btn-lg shadow-sm">Sign up</Link>
                        </div>
                        <div className="col-6 d-grid">
                            <Link to="/login" className="btn btn-default btn-lg shadow-sm">Sign In</Link>
                        </div>
                    </div>
                </div>
            </div>

        </main>
       </section>
    </>
 );
}

export default Landing;
