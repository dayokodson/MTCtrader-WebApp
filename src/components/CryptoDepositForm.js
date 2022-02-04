import React, {useState, useEffect} from 'react'; 
 
import  Modal  from 'react-bootstrap/Modal';
import { Button, Card } from 'react-bootstrap';


const CryptoDepositForm = () => {

   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const [txId, setTxId] = useState("");
   const [amount, setAmount] = useState(0);


function showModal(){

   setShow(true);



}

     
 return (
     <>


        <button className="btn btn-success" onClick={() => showModal()} >
           <b>Confirm Payment</b>
        </button>

        <Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton style={{ textAlign: "center" }}>
               <Modal.Title><b>Transfer Confirmation</b> </Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <p className='textMute' style={{ textAlign: "center" }}>
                     Make sure you have transfered USDT
                  </p>
                
                  <div className="form-group form-floating mb-3 ">
                     <input type="number" className="form-control" onChange={e => setAmount(e.target.value)} id="email" placeholder="Enter Email" />
                     <label className="form-control-label"  >Amount (USDT)</label>
                  </div>

                  <div className="form-group form-floating mb-3">
                     <input type="text" className="form-control" onChange={e => setTxId(e.target.value)} id="txid" placeholder="TRX ID" />
                     <label className="form-control-label" >Transaction ID (Txid)</label>
                      
                  </div>
                  
               </Modal.Body>
               <Modal.Footer>
                  <Button variant="secondary" onClick={() => ""}>
                    Submit
                  </Button>
               
               </Modal.Footer>
         </Modal>     
     
     
     </>
 );
}

export default CryptoDepositForm;
