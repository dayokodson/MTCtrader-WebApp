import React from 'react'; 
 


const ReviewReader = (props) => {
 return (
    <>

        
            <div className="modal fade" id="readreview" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content shadow">
                        <div className="modal-body">
                            <div className="main-container container">
                                <div className='row'>
                                    <div className='col-12' >
                                        <h5 className="mb-12 lg-12" style={{ marginBottom: "20px" }}> <b>{props.items.title}</b> </h5>

                                    </div>

                                </div>
                                <div className='row' >
                                    <div className='lg-12 avatar avatar-500 shadow-sm rounded-10 coverimg' >
                                        <img src={props.items.picture} alt='hello'/>
                                         
                                    </div>
                                    <br/><br/>

                                </div>
                                <div className="row  mb-12 lg-12">
                                    
                                    <div className='lg-12'  style={{ textAlign: "justify", marginTop: "30px" }}>
                                        <p ><span className="text-secondary fw-light">{props.items.title}</span></p>
                                        {props.items.content}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      


    </>
 );
}

export default ReviewReader;
