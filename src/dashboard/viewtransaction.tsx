const ViewTransaction = ({ open, setOpen, transactions, index, setIndex }: { open: boolean, setOpen: any, transactions: any[], index: number, setIndex: any }) => {
    const transaction: any = transactions[index];
    const handleClose = () => {
        setOpen(false);
        setIndex(-1);
    }
    return (
        <>
            {transaction &&
                <dialog open={open ? true : undefined} className="modal">
                    <form method="dialog" className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-bold text-lg">Transaction - {transaction?.id}</h3>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>{transaction?.customerName}</td>
                                </tr>
                                <tr>
                                    <th>Type</th>
                                    <td>{transaction?.customerType}</td>
                                </tr>
                                <tr>
                                    <th>Acc Number</th>
                                    <td>{transaction?.customerNumber}</td>
                                </tr>
                                <tr>
                                    <th>Address</th>
                                    <td>{transaction?.customerAddress}</td>
                                </tr>
                                <tr>
                                    <th>Phone</th>
                                    <td>{transaction?.customerPhone}</td>
                                </tr>
                                <tr>
                                    <th>Transfer Amount</th>
                                    <td>{transaction?.transferAmount}</td>
                                </tr>
                                <tr>
                                    <th>Transfer Currency</th>
                                    <td>{transaction?.transferCurrency}</td>
                                </tr>
                                <tr>
                                    <th>Beneficiary Bank</th>
                                    <td>{transaction?.beneficiaryBank}</td>
                                </tr>
                                <tr>
                                    <th>Beneficiary AC Number</th>
                                    <td>{transaction?.beneficiaryAccountNumber}</td>
                                </tr>
                                <tr>
                                    <th>Payment Details</th>
                                    <td>{transaction?.paymentDetails}</td>
                                </tr>
                                <tr>
                                    <th>Card Details</th>
                                    <td>{transaction?.cardDetails}</td>
                                </tr>
                                <tr>
                                    <th>Region</th>
                                    <td>{transaction?.region}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="modal-action">
                            <button className="btn" onClick={() => handleClose()} >Close</button>
                        </div>
                    </form>
                </dialog>
            }
        </>
    )
}

export default ViewTransaction;