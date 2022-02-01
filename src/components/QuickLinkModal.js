import React from 'react'; 
import  { Link } from "react-router-dom";


const QuickLinkModal = () => {
 return (
    <>
          <div className="modal fade" id="menumodal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content shadow">
                    <div className="modal-body">
                        <h1 className="mb-4"><span className="text-secondary fw-light">Quick</span><br />Actions!</h1>
                        
                         
                        <div className="row justify-content-center mb-2">
                            <div className="col-auto text-center">
                                <Link to="/withdraw" className="avatar avatar-70 p-1 shadow-sm shadow-secondary rounded-20 bg-opac mb-2"  data-bs-dismiss="modal">
                                    <div className="icons text-secondary">
                                        <i className="bi bi-bank size-24"></i>
                                    </div>
                                </Link>
                                <p className="size-10 text-secondary">Withdraw</p>
                            </div>

                            <div className="col-auto text-center">
                                <Link to="/Deposit" className="avatar avatar-70 p-1 shadow-sm shadow-warning rounded-20 bg-opac mb-2"  data-bs-dismiss="modal">
                                    <div className="icons text-warning">
                                        <i className="bi bi-wallet2 size-24"></i>
                                    </div>
                                </Link>
                                <p className="size-10 text-secondary">Deposit</p>
                            </div>

                             <div className="col-auto text-center">
                                <Link to="/gas" className="avatar avatar-70 p-1 shadow-sm shadow-purple rounded-20 bg-opac mb-2"  data-bs-dismiss="modal">
                                    <div className="icons text-purple">
                                        <i className="bi bi-arrow-up-right size-24"></i>
                                    </div>
                                </Link>
                                <p className="size-10 text-secondary">Gas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
 );
}

export default QuickLinkModal;
