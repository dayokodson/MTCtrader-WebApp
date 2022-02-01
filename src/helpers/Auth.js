 /**
  * 
  * This is an helper functions that let you login, check if user is login, and register user
  */
 
  import urllink from "../constant/urllink";  
   
 

async function UserIsLogin () {

  
  if(window.localStorage.getItem("@isLogin")){
     let value = window.localStorage.getItem("@isLogin");
     console.log(value);
    return  value;
  }else{
    return  false;
  }
  
 
     
   

}

const saveLoginDetails = (data) => {
 
            console.log(data);
            
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

  
 async function regUser(userEmail, userPassword,userName,userPhone){

    
    let message = {}
    let uri = urllink.registerUrl;
    const requestOptions = {
          method: 'POST',
          headers: {
              'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
              'Content-Type': 'application/json'
            },
          body: JSON.stringify({ 
              email: userEmail, 
              password: userPassword, 
              fullname: userName,
              phone: userPhone, 
               
          })
      };
       
    
     

      const result = fetch(uri, requestOptions)
      .then(async response => {
          const isJson = response.headers.get('content-type')?.includes('application/json');
          const data = isJson && await response.json();

                  // check for error response
                    if (!response.ok) {
                        // get error message from body or default to response status
                         message = { 
                              error: 1,
                              msg: (data && data.message) || response.status
                              
                          }
                        
                        return message;
                    }

                  
                  if(data.error){
                      
                        message = { 
                          error: data.error,
                          msg:  data.message
                          
                      }
                      
                      return message;

                  }

                  
                     message = { 
                          error: 0,
                          msg:  data.message
                          
                      }

                   window.localStorage.setItem('@registered', 'true');  
                   return message;
      
       })
        .catch(error => {
            
              message = { 
                  error: 1,
                  msg:  "Invalid request"
               }
              
              return message;
             
        });


   return await result;


}

 
async function logMeIn (userEmail, userPassword) {


  let message = {}
    let uri = urllink.loginUrl;
    let puk = urllink.puk;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ email: userEmail, pass: userPassword, puk: puk })
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

          //save the email 

          window.localStorage.setItem('@email', userEmail);
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

 






  async function toVairt (cryptoAmount, wallet) {


    let userId =  window.localStorage.getItem("@userId");

    let message = {}
      let uri = urllink.depositCrypto;
      let puk = urllink.puk;
      const requestOptions = {
          method: 'POST',
          headers: {
              'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
              'Content-Type': 'application/json'
            },
          body: JSON.stringify({ 
            //user_id: userId, 
            amount: cryptoAmount, 
            crypto: wallet,
            puk: puk })
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
                  
                    
                }
              return message;
              
          }
  
          
          if(data.error){
                  message = { 
                        error: data.error,
                        msg: data.message
                     }
              return message;
  
          }else{
  
              message = { error: data.error,
                            msg: data.message,
                            balance: data.balance
                        }
  
                return message;
   
          }
              
      })
      .catch(error => {
           message = { 
                  error: true,
                  msg: "Network fail. Please try again."
                  
              }
          return message;
  
      });
  
  
  return await result;
  
    }



async function depostCrypto (cryptoAmount, tHash, symbol) {


      let userId =  window.localStorage.getItem("@userId");
  
      let message = {}
        let uri = urllink.depositCrypto;
        let puk = urllink.puk;
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({ 
              user_id: userId, 
              amount: cryptoAmount, 
              t_hash: tHash,
              symbol: symbol,
              puk: puk })
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
                    
                      
                  }
                return message;
                
            }
    
            
            if(data.error){
                    message = { 
                          error: data.error,
                          msg: data.message
                       }
                return message;
    
            }else{
    
                message = { error: data.error,
                              msg: data.message,
                              balance: data.balance
                          }
    
                  return message;
     
            }
                
        })
        .catch(error => {
             message = { 
                    error: true,
                    msg: "Network fail. Please try again."
                    
                }
            return message;
    
        });
    
    
    return await result;
    
}
  
  
async function signout  () {

  
  
  if(window.localStorage.getItem("@isLogin")){
    window.localStorage.removeItem('@isLogin'); 
    return  true;
  }else{
    return  false;
  }
 
 
}
  




   
  export const Auth = {
  
    isLogin: UserIsLogin,
    login: logMeIn,
    register: regUser,
    logout: signout,
    
 
  }

 

 

  



   