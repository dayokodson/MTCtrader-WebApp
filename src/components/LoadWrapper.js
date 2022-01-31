import React from 'react'; 
const LoadWrapper = (props) => {
 return (
    <>
        <div className="container-fluid loader-wrap">
                        <div className="row h-100">
                            <div className="col-10 col-md-6 col-lg-5 col-xl-3 mx-auto text-center align-self-center">
                                <div className="logo-wallet">
                                    <div className="wallet-bottom">
                                    </div>
                                        <div className="wallet-cards"></div>
                                        <div className="wallet-top">
                                    </div>
                                </div>
                                <p className="mt-4">
                                    <span className="text-secondary">MTCtrader</span>
                                    <br /><strong>{props.msg}</strong>
                                </p>
                            </div>
                        </div>
        </div>
    </>
 );
}

export default LoadWrapper;
