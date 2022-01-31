 /**
  * 
  * This is an helper functions that let you login, check if user is login, and register user
  */
 
 
  import {urllink} from "../constant/urlLink"; 
  import { useHistory } from "react-router-dom";
 
 




const  AddWallet = (address, privateKey, pukKey) => {
    

  //console.log(pukKey);
  //console.log(address);
  //console.log(privateKey);
    let message = {}
      let uri = urllink.addwallet;
      
       
      const requestOptions = {
          method: 'POST',
          headers: {
              'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
              'Content-Type': 'application/json'
            },
          body: JSON.stringify({ 
            
            address: address, 
            private_key: privateKey,
            puk: pukKey })
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
                    msg: (data && data.message) || response.status,
                    logout: false,
                    puk: (data && data.puk) || pukKey
                  
                    
                }
              return message;
              
          }
  
          
          message = { 
            error: data.error,
            msg: data.message,
            logout: data.logout,
            puk: data.puk,
        }

        return message;
              
      })
      .catch(error => {
           message = { 
                  error: true,
                  msg: error,
                  puk: pukKey

                  
              }

          return message;
  
      });
  
  
  return result;
  
}

 
  




   
  export const Wallet = {
  
    addWallet: AddWallet,
     
  }

 

 

  



   