import React, {useState, useEffect} from 'react'; 
import  { Link } from "react-router-dom";
const BalanceBoard = () => {

    const [wallet, setWallet] = useState(0);
    const [gas, setGas] = useState(0);
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {

        if(!isUpdate){

            let walletBalance = JSON.parse(window.localStorage.getItem("@wallet")) * 1;
            setWallet(walletBalance);
            let gasBalance = JSON.parse(window.localStorage.getItem("@gas")) * 1;
            setGas(gasBalance);

        }
        

    })
 return (
    <>
         <div className="main-container container">
                <div className="row mb-4">
                                            <div className="col-6">
                                                <Link to="/deposit" >
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="avatar avatar-40 p-1 shadow-sm shadow-success rounded-15">
                                                                        <div className="icons bg-success text-white rounded-12">
                                                                            <i className="bi bi-arrow-down-left"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col align-self-center ps-0">
                                                                    <p className="size-10 text-secondary mb-0">Wallet</p>
                                                                    <p>${wallet}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-6">
                                            <Link to="/gas" >
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="row">

                                                            <div className="col-auto">
                                                                <div className="avatar avatar-40 p-1 shadow-sm shadow-danger rounded-15">
                                                                    <div className="icons  text-white rounded-12">
                                                                   
                                                                        {
                                                                            gas > 5 ? 
                                                                            <>
                                                                                <img src="assets/img/gas_green.png" style={{ width: 30, height: 30 }}/>
                                                                            </> : 
                                                                            <>
                                                                            <img src="assets/img/gas_red.png" style={{ width: 30, height: 30 }}/>
                                                                            </>
                                                                        }
                                                                    
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col align-self-center ps-0">
                                                                <p className="size-10 text-secondary mb-0">Gas</p>
                                                                <p>${gas}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </Link>                               
                                            </div>
                </div>
            </div>
    </>
 );
}

export default BalanceBoard;
