import React from 'react'; 
import  { Link } from "react-router-dom";
const Banner = () => {
 return (
    <>
        <Link to="/gas" >
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card theme-bg overflow-hidden">
                         <div className="card-body py-4">
                            <div className="row">
                                <div className="col-9 align-self-center">
                                    <h1 className="mb-3"><span className="fw-light">Trade crypto </span><br />like a pro</h1>
                                    <p>
                                        Access the best crypto-currency forecast service. 95% accuracy!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </>
 );
}

export default Banner;
