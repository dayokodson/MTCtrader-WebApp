import React from 'react'; 
import  { Link } from "react-router-dom";
const MarketReviewList = (props) => {
 return (
    <>
        {

       
          props.reviews.length > 0 ?   
            <>
                <div className="row mb-3">
                            <div className="col">
                                <h6 className="title">Market Review</h6>
                            </div>
                            <div className="col-auto align-self-center">
                                <Link to="mtcreview" className="small">Read more</Link>
                            </div>
                </div>
                <div className="row">

                    {
                            props.reviews ? 
                            props.reviews.map((function(item) {
                                return (
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <Link to="" className="card mb-3">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-auto">
                                                        <div className="avatar avatar-60 shadow-sm rounded-10 coverimg">
                                                            <img src={item.picture} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col align-self-center ps-0">
                                                        <p className="mb-1">{item.title}</p>
                                                        <p className="text-muted size-12">
                                                            {item.summary}...
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })) : <></>
                        }

                        


                                    
                </div>
            </>
            : <></>

       }
    </>
 );
}

export default MarketReviewList;
