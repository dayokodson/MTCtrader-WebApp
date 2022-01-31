import React from 'react'; 
import  { Link } from "react-router-dom";
const MarketReviewList = () => {
 return (
    <>
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
     </>
 );
}

export default MarketReviewList;
