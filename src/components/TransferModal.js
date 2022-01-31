import React from 'react'; 
const TransferModal = () => {
 return (
    <>
          <div className="modal fade" id="menumodal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content shadow">
                <div className="modal-body">
                    <h1 className="mb-4"><span className="text-secondary fw-light">Quick</span><br />Actions!</h1>
                    <div className="text-center">
                        <img src="assets/img/QRCode.png" alt="" className="mb-2" />
                        <p className="small text-secondary mb-4">Ask to scan this QR-Code<br />to accept money</p>
                    </div>
                    <div className="row justify-content-center mb-4">
                        <div className="col-auto text-center">
                            <a href="bills.html" className="avatar avatar-70 p-1 shadow-sm shadow-danger rounded-20 bg-opac mb-2"  data-bs-dismiss="modal">
                                <div className="icons text-danger">
                                    <i className="bi bi-receipt-cutoff size-24"></i>
                                </div>
                            </a>
                            <p className="size-10 text-secondary">Pay Bill</p>
                        </div>

                        <div className="col-auto text-center">
                            <a href="sendmoney.html" className="avatar avatar-70 p-1 shadow-sm shadow-purple rounded-20 bg-opac mb-2"  data-bs-dismiss="modal">
                                <div className="icons text-purple">
                                    <i className="bi bi-arrow-up-right size-24"></i>
                                </div>
                            </a>
                            <p className="size-10 text-secondary">Send Money</p>
                        </div>

                        <div className="col-auto text-center">
                            <a href="receivemoney.html" className="avatar avatar-70 p-1 shadow-sm shadow-success rounded-20 bg-opac mb-2"  data-bs-dismiss="modal">
                                <div className="icons text-success">
                                    <i className="bi bi-arrow-down-left size-24"></i>
                                </div>
                            </a>
                            <p className="size-10 text-secondary">Receive Money</p>
                        </div>
                    </div>
                    <div className="row justify-content-center mb-2">
                        <div className="col-auto text-center">
                            <a href="withdraw.html" className="avatar avatar-70 p-1 shadow-sm shadow-secondary rounded-20 bg-opac mb-2"  data-bs-dismiss="modal">
                                <div className="icons text-secondary">
                                    <i className="bi bi-bank size-24"></i>
                                </div>
                            </a>
                            <p className="size-10 text-secondary">Withdraw</p>
                        </div>

                        <div className="col-auto text-center">
                            <a href="addmoney.html" className="avatar avatar-70 p-1 shadow-sm shadow-warning rounded-20 bg-opac mb-2"  data-bs-dismiss="modal">
                                <div className="icons text-warning">
                                    <i className="bi bi-wallet2 size-24"></i>
                                </div>
                            </a>
                            <p className="size-10 text-secondary">Add Money</p>
                        </div>

                        <div className="col-auto text-center">
                            <div className="avatar avatar-70 p-1 shadow-sm shadow-info rounded-20 bg-opac mb-2"  data-bs-dismiss="modal">
                                <div className="icons text-info">
                                    <i className="bi bi-tv size-24"></i>
                                </div>
                            </div>
                            <p className="size-10 text-secondary">Recharge</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
 );
}

export default TransferModal;
