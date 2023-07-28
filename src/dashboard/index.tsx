import { useEffect, useState } from "react";
import { transactions } from "../assets/constants";
import { Eye, Pencil } from "lucide-react";
import ViewTransaction from "./viewtransaction";
import EditTransaction from "./edittransaction";
import AddTransaction from "./addtransaction";

const DashboardPage = () => {
    const [dtransactions, setDtransactions] = useState<any>(null);
    const [viewOpen, setViewOpen] = useState(false);
    const [viewIndex, setViewIndex] = useState(-1);
    const [editOpen, setEditOpen] = useState(false);
    const [editIndex, setEditIndex] = useState(-1);
    const [addOpen, setAddOpen] = useState(false);

    useEffect(() => {
        let trans = window.localStorage.getItem("transactions");
        if(trans) {
        setDtransactions(JSON.parse(trans));
        }
        else{
            setDtransactions(transactions);
            window.localStorage.setItem("transactions", JSON.stringify(transactions));
        }
    }, []);


    const handleView = (index: number) => {
        setViewIndex(index);
        setViewOpen(true);
    }
    const handleEdit = (index: number) => {
        setEditIndex(index);
        setEditOpen(true);
    }
    const handleAdd = () => {
        setAddOpen(true);
    }
    return (
        <div className="flex flex-col w-full h-full gap-4 p-6 bg-zinc-300">
            <div className="flex justify-end items-center">
                <button type="button" className="btn btn-primary btn-sm" onClick={() => handleAdd()}>Add</button>
            </div>
            <div className="overflow-x-auto">
                <h1 className="text-xl text-center py-4">Your Transactions</h1>
                <table className="table  border-primary bg-white shadow-lg py-4">
                    <thead>
                        <tr className="py-4">
                            <th></th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Acc No</th>
                            <th className="hidden sm:table-cell">Address</th>
                            <th className="hidden sm:table-cell">Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {dtransactions?.map((d: any, i: number) => (
                            <tr key={`transactions${i}`}>
                                <td></td>
                                <td>{d.customerName}</td>
                                <td>{d.customerType}</td>
                                <td>{d.customerNumber}</td>
                                <td className="hidden sm:table-cell" >{d.customerAddress}</td>
                                <td className="hidden sm:table-cell">{d.customerPhone}</td>
                                <td>
                                    <div className="flex gap-4">
                                        <button type="button" className="btn btn-ghost btn-sm" onClick={() => handleView(i)} ><Eye size={20} /></button>
                                        <button type="button" className="btn btn-ghost btn-sm" onClick={() => handleEdit(i)} ><Pencil size={20} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {addOpen && <AddTransaction open={addOpen} setOpen={setAddOpen} transactions={dtransactions} setTransactions={setDtransactions} />}
            {viewOpen && viewIndex > -1 && <ViewTransaction open={viewOpen} setOpen={setViewOpen} transactions={dtransactions} index={viewIndex} setIndex={setViewIndex} />}
            {editOpen && editIndex > -1 && <EditTransaction open={editOpen} setOpen={setEditOpen} transactions={dtransactions} setTransactions={setDtransactions} index={editIndex} setIndex={setViewIndex} />}
        </div>
    );
}
export default DashboardPage;