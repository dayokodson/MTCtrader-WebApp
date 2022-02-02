import React, {useEffect, useState} from 'react'; 
 
const SubTrans = (props) => {

    const [transType, setTransType] = useState("avatar avatar-15 border-danger rounded-circle")
    const [itemKey, setItemKey] = useState(1);
    useEffect(() => {
		 
        if(props.item.type == "debit"){
            setTransType("avatar avatar-15 border-danger rounded-circle")
        }else{
            setTransType("avatar avatar-15 border-success rounded-circle");
        }

         
	  
});
  

 return (
    <>
                  <div className={transType}></div>
                    <p>
                        <span className="text-color-theme">{props.item.title} | {props.item.note} </span>

                        <br/>
                        <small className="text-muted">Amount: ${props.item.amount}</small> |   
                         
                        <small className="text-muted" style={{textAlign: "left"}}> Date: {props.item.date}</small>
                    </p>
     </>
 );


 }

export default SubTrans;
