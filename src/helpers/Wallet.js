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
    let forecastList = JSON.stringify(data.forecast_list);
     
     
     
    window.localStorage.setItem('@wallet', wallet);
    window.localStorage.setItem('@gas', gas);
    window.localStorage.setItem('@userId', JSON.stringify(userId));
    window.localStorage.setItem('@name', fullname);
   
    window.localStorage.setItem('@isLogin', 'true');
    window.localStorage.setItem('@transList', transactions);
    window.localStorage.setItem('@reviewsList', reviewsList);
    window.localStorage.setItem('@cryptolist', trendingCrypto);
    window.localStorage.setItem('@phone', phone);
    window.localStorage.setItem('@forecastList', forecastList);
    
   


}


async function  AddWallet(address, privateKey, pukKey){
    
 
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



async function confirmdeposit  (depositType) {

  let message = {}
  let uri = urllink.confirmdeposit;
  let puk = urllink.puk;
  let user = JSON.parse(window.localStorage.getItem("@userId"));
  
  const requestOptions = {
      method: 'POST',
      headers: {
          'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({ user_id: user, type: depositType })
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
                reload: 0
                
            }
          return message;
          
      }

      
      if(data.error){
              message = { 
                    error: data.error,
                    msg: data.message,
                    reload: 0
                 }
                

      }else{

        //save the login details
       
        //saveLoginDetails(data)
        let type_name = "@" + depositType + "PendingDeposit";
        let wallet = JSON.stringify(data.wallet_balance);
        let gas = JSON.stringify(data.gas_balance);
        let transactions = JSON.stringify(data.trans);
        let reviewsList = JSON.stringify(data.review_list);
        let forecastList = JSON.stringify(data.forecast_list);
        
        let pending_deposit_result = JSON.stringify(data.pending_deposit);
        window.localStorage.setItem(type_name, pending_deposit_result);
        window.localStorage.setItem('@wallet', wallet);
        window.localStorage.setItem('@gas', gas);
        window.localStorage.setItem('@transList', transactions);
        window.localStorage.setItem('@reviewsList', reviewsList);
        window.localStorage.setItem('@forecastList', forecastList);

        
           
            message = { 
                        error: 0,
                        msg: data.message,
                        reload: data.reload
                    }
      }

      return message;
          
  })
  .catch(error => {
       message = { 
              error: true,
              msg: error,
              reload: 0
              
          }
      return message;

  });

  return await result;

}


async function savedeposit  (amount,depositType, txId, bank, depositorName) {

  let message = {}
  let uri = urllink.savedeposit;
  let puk = urllink.puk;
  let user = JSON.parse(window.localStorage.getItem("@userId"));
   
  const requestOptions = {
      method: 'POST',
      headers: {
          'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({ 
        user_id: user, amount: amount, 
        type: depositType, txid: txId,
        bank: bank, depositor_name: depositorName 
      })
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
       
        //saveLoginDetails(data)
        let type_name = "@" + depositType + "PendingDeposit";
        let wallet = JSON.stringify(data.wallet_balance);
        let gas = JSON.stringify(data.gas_balance);
        let transactions = JSON.stringify(data.trans);
        let reviewsList = JSON.stringify(data.review_list);
        let forecastList = JSON.stringify(data.forecast_list);
        
        let pending_deposit_result =  data.pending_deposit;
        window.localStorage.setItem(type_name, pending_deposit_result);
        window.localStorage.setItem('@wallet', wallet);
        window.localStorage.setItem('@gas', gas);
        window.localStorage.setItem('@transList', transactions);
        window.localStorage.setItem('@reviewsList', reviewsList);
        window.localStorage.setItem('@forecastList', forecastList);
        
        
    
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

   
  export const Wallet = {
  
    addWallet: AddWallet,
    creditGas : CreditGas,
    validatePayfricPayment: validatePaymentCode,
    withdraw : Withdraw,
    confirmDeposit: confirmdeposit,
    saveDeposit: savedeposit
     
  }

 

 

  



   