import React, {useEffect, useState} from 'react'; 
 
const SubForecast = (props) => {

    const [transType, setTransType] = useState("avatar avatar-15 border-danger rounded-circle")
    const [itemKey, setItemKey] = useState(1);
    useEffect(() => {
		 
        if(props.item.type == "debit"){
            setTransType("avatar avatar-15 border-danger rounded-circle")
        }else{
            setTransType("avatar avatar-15 border-success rounded-circle");
        }

        if(props.id  > 0){
            setItemKey(props.id);
             
        }
	  
});
  

 return (
    <>
                 <li  key={itemKey} className="list-group-item"> 

                        <div class={transType}></div>
                        <span className="text-color-theme">{props.item.title} | {props.item.note} </span>
                        
                        <br/>
                        <p className="text-muted">Amount: ${props.item.amount}</p>
                        <small className="text-muted">{props.item.date}</small>
                    
                </li>

     </>
 );


 }

export default SubForecast;
