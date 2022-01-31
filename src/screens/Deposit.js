import React from "react";
import  { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
 
import Header from "../components/Header";
import LoadWrapper from "../components/LoadWrapper"; 


const Deposit = () => {
 return (
    <>
        <section data-page="dashboard">


                    <LoadWrapper />
                    <div className="body-scroll" >
                        <Nav />
                        <main className="h-100">
                                <Header />
                                <div className="main-container container">
                                
                                    <div className="row my-4 text-center">
                                        <div className="col-12">
                                            <h1 className="fw-light mb-2">$ 1,050.00</h1>
                                            <p className="text-secondary">Total Balance</p>
                                        </div>
                                    </div>

                                    
                                    <div className="row mb-4">
                                        <div className="col-6">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-auto">
                                                            <div className="avatar avatar-40 p-1 shadow-sm shadow-success rounded-15">
                                                                <div className="icons bg-success text-white rounded-12">
                                                                    <i className="bi bi-arrow-down-left"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col align-self-center ps-0">
                                                            <p className="size-10 text-secondary mb-0">Wallet</p>
                                                            <p>$1,030.00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-auto">
                                                            <div className="avatar avatar-40 p-1 shadow-sm shadow-danger rounded-15">
                                                                <div className="icons  text-white rounded-12">
                                                                    <img src="assets/img/gas_red.png" style={{ width: 30, height: 30 }}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col align-self-center ps-0">
                                                            <p className="size-10 text-secondary mb-0">Gas</p>
                                                            <p>$20</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <div className="row mb-4">
                                        <div className="col-12">
                                            <div className="card bg-theme text-white">
                                                <div className="card-body pb-0">
                                                    <div className="row justify-content-between gx-0 mx-0 pb-3">
                                                        <div className="col-auto text-center">
                                                            <a href="pay.html" className="avatar avatar-60 p-1 shadow-sm rounded-15 bg-opac mb-2">
                                                                <div className="icons bg-success text-white rounded-12 bg-opac">
                                                                    <i className="bi bi-receipt-cutoff size-22"></i>
                                                                </div>
                                                            </a>
                                                            <p className="size-10">Deposit</p>
                                                        </div>

                                                        <div className="col-auto text-center">
                                                            <a href="sendmoney.html" className="avatar avatar-60 p-1 shadow-sm rounded-15 bg-opac mb-2">
                                                                <div className="icons bg-success text-white rounded-12 bg-opac">
                                                                    <i className="bi bi-arrow-up-right size-22"></i>
                                                                </div>
                                                            </a>
                                                            <p className="size-10">MTC AI</p>
                                                        </div>

                                                        <div className="col-auto text-center">
                                                            <a href="receivemoney.html" className="avatar avatar-60 p-1 shadow-sm rounded-15 bg-opac mb-2">
                                                                <div className="icons bg-success text-white rounded-12 bg-opac">
                                                                    <i className="bi bi-arrow-down-left size-22"></i>
                                                                </div>
                                                            </a>
                                                            <p className="size-10">MTC Forecast</p>
                                                        </div>

                                                        <div className="col-auto text-center">
                                                            <a href="withdraw.html" className="avatar avatar-60 p-1 shadow-sm rounded-15 bg-opac mb-2">
                                                                <div className="icons bg-success text-white rounded-12 bg-opac">
                                                                    <i className="bi bi-bank size-22"></i>
                                                                </div>
                                                            </a>
                                                            <p className="size-10">MTC Review</p>
                                                        </div>
                                                    </div>

                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                
                                    

                                
                                

                                    <div className="row mb-4">
                                        <div className="col-12">
                                            <div className="card shadow-sm">
                                                <div className="card-body">
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" id="darkmodeswitch" />
                                                        <label className="form-check-label text-muted px-2 " htmlFor="darkmodeswitch">Dark mode view</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col">
                                            <h6 className="title">Trading Cryptos</h6>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-12 px-0">
                                        
                                            <div className="swiper-container connectionwiper">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <a href="paybill.html" className="card text-center">
                                                            <div className="card-body p-1">
                                                                <figure className="avatar avatar-80 shadow-sm rounded-18">
                                                                    <img src="assets/img/company2.png" alt="" />
                                                                </figure>
                                                            </div>
                                                        </a>
                                                    </div>

                                                    <div className="swiper-slide">
                                                        <a href="paybill.html" className="card text-center">
                                                            <div className="card-body p-1">
                                                                <figure className="avatar avatar-80 shadow-sm rounded-20">
                                                                    <img src="assets/img/company3.jpg" alt="" />
                                                                </figure>
                                                            </div>
                                                        </a>
                                                    </div>

                                                    <div className="swiper-slide">
                                                        <a href="paybill.html" className="card text-center">
                                                            <div className="card-body p-1">
                                                                <figure className="avatar avatar-80 shadow-sm rounded-20">
                                                                    <img src="assets/img/company4.jpg" alt="" />
                                                                </figure>
                                                            </div>
                                                        </a>
                                                    </div>

                                                    <div className="swiper-slide">
                                                        <a href="paybill.html" className="card text-center">
                                                            <div className="card-body p-1">
                                                                <figure className="avatar avatar-80 shadow-sm rounded-20">
                                                                    <img src="assets/img/company5.png" alt="" />
                                                                </figure>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <a href="paybill.html" className="card text-center">
                                                            <div className="card-body p-1">
                                                                <figure className="avatar avatar-80 shadow-sm rounded-20">
                                                                    <img src="assets/img/company2.png" alt="" />
                                                                </figure>
                                                            </div>
                                                        </a>
                                                    </div>

                                                    <div className="swiper-slide">
                                                        <a href="paybill.html" className="card text-center">
                                                            <div className="card-body p-1">
                                                                <figure className="avatar avatar-80 shadow-sm rounded-20">
                                                                    <img src="assets/img/company3.jpg" alt="" />
                                                                </figure>
                                                            </div>
                                                        </a>
                                                    </div>

                                                    <div className="swiper-slide">
                                                        <a href="paybill.html" className="card text-center">
                                                            <div className="card-body p-1">
                                                                <figure className="avatar avatar-80 shadow-sm rounded-20">
                                                                    <img src="assets/img/company4.jpg" alt="" />
                                                                </figure>
                                                            </div>
                                                        </a>
                                                    </div>

                                                    <div className="swiper-slide">
                                                        <a href="paybill.html" className="card text-center">
                                                            <div className="card-body p-1">
                                                                <figure className="avatar avatar-80 shadow-sm rounded-20">
                                                                    <img src="assets/img/company5.png" alt="" />
                                                                </figure>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                    
                                    
                                    <div className="row mb-4">
                                        <div className="col-12">
                                            <div className="card shadow-sm">
                                                <div className="card-body">
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox"  />
                                                        <label className="form-check-label text-muted px-2 " >Activate Notification</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <div className="row mb-4">
                                        <div className="col-12">
                                            <div className="card theme-bg overflow-hidden">
                                                <figure className="m-0 p-0 position-absolute top-0 start-0 w-100 h-100 coverimg right-center-img">
                                                    <img src="assets/img/offerbg.png" alt="" />
                                                </figure>
                                                <div className="card-body py-4">
                                                    <div className="row">
                                                        <div className="col-9 align-self-center">
                                                            <h1 className="mb-3"><span className="fw-light">Trade crypto </span><br />like pro</h1>
                                                            <p>Fund Gas and start getting Market Forecase alert right in your imbox. Happy trading</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                
                                    <div className="row mb-3">
                                        <div className="col">
                                            <h6 className="title">Transactions<br /><small className="fw-normal text-muted">Today, 24 Aug 2021</small>
                                            </h6>
                                        </div>
                                        <div className="col-auto align-self-center">
                                            <a href="#" className="small">View all</a>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-12">
                                            <div className="card">
                                                <div className="card-body p-0">
                                                    <ul className="list-group list-group-flush bg-none">
                                                        <li className="list-group-item">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="avatar avatar-60 shadow-sm card rounded-15 p-1">
                                                                        <img src="assets/img/company4.jpg" alt="" className="rounded-15" />
                                                                    </div>
                                                                </div>
                                                                <div className="col align-self-center ps-0">
                                                                    <p className="text-secondary size-10 mb-0">Food</p>
                                                                    <p>Zomato</p>
                                                                </div>
                                                                <div className="col align-self-center text-end">
                                                                    <p className="text-secondary text-muted size-10 mb-0">15-10-2021 | 10:20am</p>
                                                                    <p>-25.00</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="avatar avatar-60 shadow-sm card rounded-15 p-1">
                                                                        <img src="assets/img/company5.png" alt="" className="rounded-15" />
                                                                    </div>
                                                                </div>
                                                                <div className="col align-self-center ps-0">
                                                                    <p className="text-secondary size-10 mb-0">Travel</p>
                                                                    <p>Uber</p>
                                                                </div>
                                                                <div className="col align-self-center text-end">
                                                                    <p className="text-secondary text-muted size-10 mb-0">15-10-2021 | 10:20am</p>
                                                                    <p>-26.00</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="avatar avatar-60 shadow-sm card rounded-15 p-1">
                                                                        <img src="assets/img/company2.png" alt="" className="rounded-15" />
                                                                    </div>
                                                                </div>
                                                                <div className="col align-self-center ps-0">
                                                                    <p className="text-secondary size-10 mb-0">Food</p>
                                                                    <p>Starbucks</p>
                                                                </div>
                                                                <div className="col align-self-center text-end">
                                                                    <p className="text-secondary text-muted size-10 mb-0">15-10-2021 | 10:20am</p>
                                                                    <p>-18.00</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="avatar avatar-60 shadow-sm card rounded-15 p-1">
                                                                        <img src="assets/img/company3.jpg" alt="" className="rounded-15" />
                                                                    </div>
                                                                </div>
                                                                <div className="col align-self-center ps-0">
                                                                    <p className="text-secondary size-10 mb-0">Clothing</p>
                                                                    <p>Walmart</p>
                                                                </div>
                                                                <div className="col align-self-center text-end">
                                                                    <p className="text-secondary text-muted size-10 mb-0">15-10-2021 | 10:20am</p>
                                                                    <p>-105.00</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                
                                    <div className="row mb-3">
                                        <div className="col">
                                            <h6 className="title">Market Review</h6>
                                        </div>
                                        <div className="col-auto align-self-center">
                                            <a href="blog.html" className="small">Read more</a>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <a href="blogdetails.html" className="card mb-3">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-auto">
                                                            <div className="avatar avatar-60 shadow-sm rounded-10 coverimg">
                                                                <img src="assets/img/news.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="col align-self-center ps-0">
                                                            <p className="mb-1">Do share and Earn a lot</p>
                                                            <p className="text-muted size-12">Get $10 instant as reward while your friend or invited
                                                                member join finwallapp</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <a href="blogdetails.html" className="card mb-3">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-auto">
                                                            <div className="avatar avatar-60 shadow-sm rounded-10 coverimg">
                                                                <img src="assets/img/news1.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="col align-self-center ps-0">
                                                            <p className="mb-1">Walmart news latest picks</p>
                                                            <p className="text-muted size-12">Get $10 instant as reward while your friend or invited
                                                                member join finwallapp</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <a href="blogdetails.html" className="card mb-3">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-auto">
                                                            <div className="avatar avatar-60 shadow-sm rounded-10 coverimg">
                                                                <img src="assets/img/news2.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="col align-self-center ps-0">
                                                            <p className="mb-1">Do share and Help us</p>
                                                            <p className="text-muted size-12">Get $10 instant as reward while your friend or invited
                                                                member join finwallapp</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                    


                        </main>
                        <Footer />
                        
                    </div>

        </section>

    </>
 );
}

export default Deposit;
