import React from "react";  
import { Alert } from "react-bootstrap";

import {Auth} from "./Auth"; 

import {Wallet} from "./Wallet"; 
import { render } from "@testing-library/react";
 
 
const Myalert = (props) => {

    return    (
        <>

                {
                    props.toggle ?  <>
                
                <Alert variant="success">
                    <Alert.Heading>Hi,</Alert.Heading>
                    <p>
                       {props.message}
                    </p>
                     
                     
                    </Alert>
                    
                    </>: <>
                    
                    
                    </>
                }
                
            </>
    )  
        
    
    

}
 

 
export {
     
    Auth,
    Myalert,
    Wallet
    
     
     
}