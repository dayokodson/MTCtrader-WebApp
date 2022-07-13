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
 
async function  SendRequest(data){
    
 
    let message = {}
      let uri = data.url;
      
       
      const requestOptions = {
          method: 'POST',
          headers: {
              'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
              'Content-Type': 'application/json'
            },
          body: JSON.stringify(data)
      };
     
      
       
      const result = fetch(uri, requestOptions)
      .then( async response => {
          const isJson = response.headers.get('content-type')?.includes('application/json');
          const data = isJson && await response.json();
          // check for error response
          if (!response.ok) {
              // get error message from body or default to response status
               message = { 
                    error: data.error,
                    message: (data && data.message) || response.status,
                     
                }
              return message;
              
          }
  
          
           

        return data;
              
      })
      .catch(error => {
           message = { 
                  error: true,
                  message: error,
                   
                  
              }

          return message;
  
      });
  
  
  return result;
  
}
 
export {
     
    Auth,
    Myalert,
    Wallet,
    SendRequest
    
     
     
}