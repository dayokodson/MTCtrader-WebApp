import React, {useState, useEffect} from 'react'; 
import  { Link } from "react-router-dom";
const CryptoPayment = () => {

     
    
 return (
    <>
        <div class="card mb-4">
                <div class="card-body">
                    <div class="row mb-3">
                        <div class="col">
                            <p>Transfer Amount</p>
                        </div>
                        <div class="col-auto text-end">
                            <p class="text-muted">110.00</p>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col">
                            <p>Transaction Charge</p>
                        </div>
                        <div class="col-auto text-end">
                            <p class="text-muted">8.00</p>
                        </div>
                    </div>
                    <div class="row fw-medium">
                        <div class="col-12">
                            <div class="dashed-line mb-3"></div>
                        </div>
                        <div class="col">
                            <p>Total Deduction</p>
                        </div>
                        <div class="col-auto text-end">
                            <p class="text-muted">118.00</p>
                        </div>
                    </div>
                </div>
            </div>
    </>
 );
}

export default CryptoPayment;
