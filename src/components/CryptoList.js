import React from 'react'; 
import  { Link } from "react-router-dom";
const CryptoList = (props) => {
 return (
    <>
        {


        
            props.cryptos.length > 0 ? 
                <>        
                    <div className="row mb-3">
                        <div className="col">
                            <h6 className="title">Top Hit</h6>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12 px-0">
                        
                            <div className="swiper-container connectionwiper">
                                <div className="swiper-wrapper">
                                {
                                        props.cryptos ? 
                                        props.cryptos.map((function(item) {
                                            return (
                                                <div className="swiper-slide">
                                                    <Link to="/" className="card text-center">
                                                        <div className="card-body p-1">
                                                            <figure className="avatar avatar-80 shadow-sm rounded-18">
                                                                <img src={item.picture} alt={item.title} />
                                                            </figure>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        })) : <></>
                                    }

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            : <></>

        }
     </>
 );
}

export default CryptoList;
