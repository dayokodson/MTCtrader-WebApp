
import React from 'react'; 
 
const NotFound = () => {
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
                                    <h5><span className="text-secondary fw-light">MTC</span><br />trader</h5>
                                </div>
                            </div>
                            <div className="col-auto align-self-center">
                                
                            </div>
                        </div>
                    </header>
                </div>
                 
            </div>
            <div className="col-12 align-self-center pb-3">
                <div className="row h-100">
                    <div className="col-12 px-0 align-self-center">
                        <div className="row mx-0">
                            <div className="col-ld-6 position-relative thankyouimg2">
                                 
                                  
                                  
                                  
                                <div className="text">ERROR</div>
                                <div className="circle small one"></div>
                                <div className="circle two"></div>
                                <div className="circle small three"></div>                                              
                                <img src="assets/img/404.svg" alt="" className="slideimg404" />
                            </div>
                            <div className="col-11 col-md-8 col-lg-4  col-ld-6 mx-auto">
                                <h1 className="mb-4"><span className="text-secondary fw-light">Error</span><br/>404</h1>
                                <p className="text-secondary">Page your are looking for is not available. Kindly check URL or try after sometime</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-11 col-sm-11 mt-auto mx-auto py-4">
                <div className="row ">
                    <div className="col-12 d-grid">
                        <a href="/dashboard" className="btn btn-default btn-lg shadow-sm">Back Home</a>
                    </div>
                </div>
            </div>
        </div>
    </main>


    </>

    
  );
};

export default NotFound;
