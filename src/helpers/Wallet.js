 /**
  * 
  * This is an helper functions that let you login, check if user is login, and register user
  */
 
 
  import urllink from "../constant/urllink"; 
 
 
 

  const saveLoginDetails = (data) => {
 
            
            
    let fullname = data.fullname;
     
   
    
    let userId = data.user_id * 1; 
     
    let wallet = JSON.stringify(data.wallet_balance);
    
    let gas = JSON.stringify(data.gas_balance);
    
    let transactions = JSON.stringify(data.trans);
    
    let reviewsList = JSON.stringify(data.review_list);
     
    let trendingCrypto = JSON.stringify(data.trending_crypto);
    let phone = JSON.stringify(data.phone);
    
     
     
     
    window.localStorage.setItem('@wallet', wallet);
    window.localStorage.setItem('@gas', gas);
    window.localStorage.setItem('@userId', JSON.stringify(userId));
    window.localStorage.setItem('@name', fullname);
   
    window.localStorage.setItem('@isLogin', 'true');
    window.localStorage.setItem('@transList', transactions);
    window.localStorage.setItem('@reviewsList', reviewsList);
    window.localStorage.setItem('@cryptolist', trendingCrypto);
    window.localStorage.setItem('@phone', phone);

    
   


}


async function  AddWallet(address, privateKey, pukKey){
    

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


async function Withdraw (userAmount, userID, userEmail){
  let message = {}
  let uri = urllink.withdraw;
  let puk = urllink.puk;
  let user = window.localStorage.getItem("@userId");
  
  const requestOptions = {
      method: 'POST',
      headers: {
          'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({ amount: userAmount, user_id: user})
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
                msg: (data && data.message) || response.status
                
            }
          return message;
          
      }

      console.log(data);
      if(data.error){
              message = { 
                    error: data.error,
                    msg: data.message
                 }
                

      }else{

        //save the login details
       
        saveLoginDetails(data)
            message = { 
                        error: 0,
                        msg: data.message
                    }
      }

      return message;
          
  })
  .catch(error => {
       message = { 
              error: true,
              msg: error
              
          }
      return message;

  });

  return await result;
}


async function CreditGas  (userAmount) {

  let message = {}
  let uri = urllink.creditGas;
  let puk = urllink.puk;
  let user = JSON.parse(window.localStorage.getItem("@userId"));
  console.log(window.localStorage);
  console.log(user);
  const requestOptions = {
      method: 'POST',
      headers: {
          'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({ amount: userAmount, user_id: user})
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
                msg: (data && data.message) || response.status
                
            }
          return message;
          
      }

      
      if(data.error){
              message = { 
                    error: data.error,
                    msg: data.message
                 }
                

      }else{

        //save the login details
       
        saveLoginDetails(data)
            message = { 
                        error: 0,
                        msg: data.message
                    }
      }

      return message;
          
  })
  .catch(error => {
       message = { 
              error: true,
              msg: error
              
          }
      return message;

  });

  return await result;




}


async function validatePaymentCode (paymentCode) {}

  
   
  export const Wallet = {
  
    addWallet: AddWallet,
    creditGas : CreditGas,
    validatePayfricPayment: validatePaymentCode,
    withdraw : Withdraw
     
  }

 

 

  



   