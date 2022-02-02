import React, {useEffect, useState}  from "react";
import  { Link } from "react-router-dom"; 
import LoadWrapper from "../components/LoadWrapper"; 
import BalanceBoard from "../components/BalanceBoard";
import {Myalert, Wallet} from "../helpers";
import Header from "../components/Header";
import TransactionList from "../components/TransactionList";
 
const Review = () => {


    const [isFunding, setIsFunding] = useState(false);
    const [amount, setAmount] = useState(0);
    const [alertMessage, setAlertMessage] = useState("");
    const [toggleAlert, setToggleAlert] = useState(false);
    const [showProcess, setShowProcess] = useState(false);
    const [transList, setTransList] = useState([]);
    useEffect(() => {

        if(window.localStorage.getItem("@reviewsList")){
            let translist = JSON.parse(window.localStorage.getItem("@transList"));
            setTransList(translist);
        }
        

    })

 function moreTransaction(){

    //check if the value is less than 5
    let fundValue = amount * 1;
    

    if(fundValue < 1){

        setAlertMessage("Minimum of $10");
        setToggleAlert(true);
        return false;
    }

    let walletBalance = JSON.parse(window.localStorage.getItem("@wallet")) * 1;
    
    if(fundValue > walletBalance){

        setAlertMessage("Your wallet balance is low ");
        setToggleAlert(true);
        return false;
    }


    //now process the funding 
    setIsFunding(true);
    Wallet.creditGas(fundValue).then(function (res){

        setAlertMessage( res.msg );
        setToggleAlert(true);
        setIsFunding(false);
        return false;

    })




 }

 return (
    <>
     <section className="body-scroll" data-page="" msg="Checking your gas">
            
                    <main className="h-100">

                       <Header title="Transactions"/>
                        <div  style={{ marginTop: "80px" }}>
                            <BalanceBoard />
                        </div>
                        
                        <div className="main-container container">
                           
                            <TransactionList trans={transList} />

                        </div>


                    </main>

               
     </section>
    </>
 );
}

export default Review;
