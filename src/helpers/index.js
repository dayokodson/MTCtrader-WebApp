  
//import { Alert } from "react-bootstrap";

import {Auth} from "./Auth"; 

import {Wallet} from "./Wallet"; 
 
 
function Myalert (message, toggle){

    if(toggle){
        return (

            <div className="form-group form-floating is-invalid mb-3" style={{backgroundColor: "red", padding: "2px", color: "white", fontWeight: "bold"}}>
                <div className="col-12 chat-list scroll-y mb-3">
                    <div className="col-12">
                        <div className="chat-block">
                            <div className="row">
                                <div className="col">
                                    Hi!<br />{message}.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    
    }else{

        return (
            <>
            </>
        );
    }
    

}
 

 
export {
     
    Auth,
    Myalert,
    Wallet
    
     
     
}