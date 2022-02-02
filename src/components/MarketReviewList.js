import React, {useState} from 'react'; 
import  { Link } from "react-router-dom";
import ReviewReader from './ReviewReader';
const MarketReviewList = (props) => {

    const [docs, setDocs] = useState([]);


 
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
                                    <div  key={item.id} className="col-12 col-md-6 col-lg-4">
                                        <div onClick={() => {setDocs(item)}} className="card mb-3" data-bs-toggle="modal" data-bs-target="#readreview">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-auto">
                                                        <div className="avatar avatar-60 shadow-sm rounded-10 coverimg">
                                                            <img src={item.picture} alt={item.id} />
                                                        </div>
                                                    </div>
                                                    <div className="col align-self-center ps-0">
                                                        <p className="mb-1"><b>{item.title}</b></p>
                                                        <p className="text-muted size-12" style={{ textAlign: "justify" }}>
                                                            {item.summary}...
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })) : <></>
                        }

                        


                    <ReviewReader  items={docs} />                 
                </div>
            </>
            : <></>

       }
    </>
 );
}

export default MarketReviewList;
