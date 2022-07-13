import React, {useState} from 'react'; 
import  { Link } from "react-router-dom";
import ReviewReader from './ReviewReader';
import  Modal  from 'react-bootstrap/Modal';
import { Button, Card } from 'react-bootstrap';


const MarketReviewList = (props) => {

    const [docs, setDocs] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

 function showModal (item){
    setDocs(item);
    setShow(true)
     

 }

 return (
    <>
        {

       
          props.reviews !== null ?   
            <>
                <div className="row mb-3">
                            <div className="col">
                                <h6 className="title">Market Forecast Update</h6>
                            </div>
                            <div className="col-auto align-self-center">
                                <Link to="/marketreview" className="small">Read more</Link>
                            </div>
                </div>
                <div className="row">

                    {
                            props.reviews !== null ? 
                            props.reviews.map((function(item) {
                                return (
                                    <>
                                    
                                    <div  key={item.id} className="col-12 col-md-6 col-lg-4">
                                        <div onClick={() => {showModal(item)}} className="card mb-3" data-bs-toggle="modal" data-bs-target="#readreview">
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
                                    </>
                                )
                            })) : <></>
                        }

                        


                    { 
                        //<ReviewReader  items={docs} show={handleShow} />  
                   } 

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title><b> {docs.title}</b> </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <Card>
                                <Card.Img variant="top" src={docs.picture} />
                                     
                            </Card>
                            <hr />
                                {docs.content}
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                             
                            </Modal.Footer>
                        </Modal>      
                   

                </div>
            </>
            : <></>

       }
    </>
 );
}

export default MarketReviewList;
