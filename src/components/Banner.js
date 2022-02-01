import React from 'react'; 
import  { Link } from "react-router-dom";
const Banner = () => {
 return (
    <>
        <Link to="/gas" >
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
                                    <p>Fund Gas and start getting Market Forecase alert right in your inbox. Happy trading</p>
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
