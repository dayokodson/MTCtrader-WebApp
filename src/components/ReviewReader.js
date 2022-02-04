import React, {useState, useEffect} from 'react'; 
import  Modal  from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

const ReviewReader = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
   
    useEffect(() => {

        setShow(props.show);

    })


    function handleHide (){

        
        console.log(show);

    }

 return (
    <>

        
          

            <Modal show={show} onHide={handleHide()}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
      


    </>
 );
}

export default ReviewReader;
