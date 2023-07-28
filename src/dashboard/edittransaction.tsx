import { Formik, Field, ErrorMessage, Form } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
const EditTransaction = ({ open, setOpen, transactions, setTransactions,index,setIndex }: { open: boolean, setOpen: any, transactions: any[], setTransactions: any,index:number,setIndex:any }) => {

    const transInitialValues = transactions[index];

    const transSchema = Yup.object().shape({
        customerName: Yup.string().required('Name is Required'),
        customerType: Yup.string().required('Type is Required'),
        customerNumber: Yup.string().required('Account# is Required'),
        customerAddress: Yup.string().required('Address is Required'),
        customerPhone: Yup.string().required('Phone is Required'),
        transferAmount: Yup.string().required('Amount is Required'),
        transferCurrency: Yup.string().required('Currency is Required'),
        beneficiaryBank: Yup.string().required('Bank is Required'),
        beneficiaryAccountNumber: Yup.string().required('Bank Acc# is Required'),
        paymentDetails: Yup.string().required('Payment details is Required'),
        cardDetails: Yup.string().required('Card details is Required'),
        region: Yup.string().required('Region is Required'),
    });

    const handleSubmit = (values: any, { setSubmitting }: { setSubmitting: any }) => {
        setSubmitting(true);
        let t = transactions;
         t[index] = values;
        setTransactions(t);
        window.localStorage.setItem("transactions", JSON.stringify(t));
        toast.success("Transaction updated successfully");
        setOpen(false);
        setIndex(-1);
        setSubmitting(false);
    }
    const handleClose = () => {
        setOpen(false);
    }
    return (

        <dialog open={open ? true : undefined} className="modal">

            <Formik initialValues={transInitialValues} validationSchema={transSchema} onSubmit={handleSubmit} >
                {({ isSubmitting }) => (
                    <Form method="dialog" className="modal-box w-11/12 max-w-5xl flex justify-between w-full h-full flex-col min-h-[300px]">
                        <h3 className="font-bold text-lg">Edit Transaction - {transInitialValues.id}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                            <h1 className='text-xl text-bold col-span-3 py-2'>Customer Information</h1>
                            <div className="col-span-3 lg:col-span-1 form-control">
                                <label className="label label-text">Name</label>
                                <Field type="text" name="customerName" placeholder=" " className="input input-primary input-sm w-full" />
                                <ErrorMessage name="customerName" component="label" className="label label-text-alt text-red-600" />
                            </div>
                            <div className="col-span-3 lg:col-span-1 form-control">
                                <label className="label"><span className="label-text">Type</span></label>
                                <Field as="select" name="customerType" className="select select-primary select-sm w-full ">
                                    <option value=""></option>
                                    <option value="New">New</option>
                                    <option value="Existing">Existing</option>
                                </Field>
                                <ErrorMessage name="customerType" component="label" className="label label-text-alt text-red-600" />
                            </div>
                            <div className="col-span-3 lg:col-span-1 form-control">
                                <label className="label label-text">Account #</label>
                                <Field type="number" name="customerNumber" placeholder=" " className="input input-primary input-sm w-full" />
                                <ErrorMessage name="customerNumber" component="label" className="label label-text-alt text-red-600" />
                            </div>
                            <div className="col-span-3 lg:col-span-2 form-control">
                                <label className="label label-text">Address</label>
                                <Field type="text" name="customerAddress" placeholder=" " className="input input-primary input-sm w-full" />
                                <ErrorMessage name="customerAddress" component="label" className="label label-text-alt text-red-600" />
                            </div>
                            <div className="col-span-3 lg:col-span-1 form-control">
                                <label className="label label-text">Phone</label>
                                <Field type="number" name="customerPhone" placeholder=" " className="input input-primary input-sm w-full" />
                                <ErrorMessage name="customerPhone" component="label" className="label label-text-alt text-red-600" />
                            </div>

                            <h1 className='text-xl text-bold col-span-3 py-2'>Beneficiary Information</h1>

                            <div className="col-span-3 lg:col-span-1 form-control">
                                <label className="label label-text">Bank</label>
                                <Field as="select" name="beneficiaryBank" className="select select-primary select-sm w-full ">
                                    <option value=""></option>
                                    <option value="State Bank of India">State Bank of India</option>
                                    <option value="ICICI Bank">ICICI Bank</option>
                                    <option value="HDFC Bank">HDFC Bank</option>
                                    <option value="Axis Bank">Axis Bank</option>
                                    <option value="Punjab National Bank">Punjab National Bank</option>
                                    <option value="Bank of Baroda">Bank of Baroda</option>
                                    <option value="Canara Bank">Canara Bank</option>
                                </Field>
                                <ErrorMessage name="beneficiaryBank" component="label" className="label label-text-alt text-red-600" />
                            </div>
                            <div className="col-span-3 lg:col-span-1 form-control">
                                <label className="label label-text">Account#</label>
                                <Field type="number" name="beneficiaryAccountNumber" placeholder=" " className="input input-primary input-sm w-full" />
                                <ErrorMessage name="beneficiaryAccountNumber" component="label" className="label label-text-alt text-red-600" />
                            </div>
                            <div className="col-span-3 lg:col-span-1 form-control">
                                <label className="label label-text">Currency</label>
                                <Field as="select" name="transferCurrency" className="select select-primary select-sm w-full ">
                                    <option value=""></option>
                                    <option value="INR">Indian Rupee (INR)</option>
                                    <option value="USD">United States Dollar (USD)</option>
                                    <option value="GBP">British Pound (GBP)</option>
                                    <option value="CAD">Canadian Dollar (CAD)</option>
                                    <option value="AUD">Australian Dollar (AUD)</option>
                                    <option value="EUR">Euro (EUR)</option>
                                </Field>
                                <ErrorMessage name="transferCurrency" component="label" className="label label-text-alt text-red-600" />
                            </div>
                            <div className="col-span-3 lg:col-span-2 form-control">
                                <label className="label label-text">Card details</label>
                                <Field type="text" name="cardDetails" placeholder=" " className="input input-primary input-sm w-full" />
                                <ErrorMessage name="cardDetails" component="label" className="label label-text-alt text-red-600" />
                            </div>
                            <div className="col-span-3 lg:col-span-1 form-control">
                                <label className="label label-text">Region</label>
                                <Field as="select" name="region" className="select select-primary select-sm w-full ">
                                    <option value=""></option>
                                    <option value="India">India</option>
                                    <option value="United States">United States</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Germany">Germany</option>
                                </Field>
                                <ErrorMessage name="region" component="label" className="label label-text-alt text-red-600" />
                            </div>
                            <div className="col-span-3  form-control">
                                <label className="label label-text">Payment details</label>
                                <Field type="text" name="paymentDetails" placeholder=" " className="input input-primary input-sm w-full" />
                                <ErrorMessage name="paymentDetails" component="label" className="label label-text-alt text-red-600" />
                            </div>
                            <div className="flex col-span-2 align-center gap-2 w-full h-full">
                                <button className="btn btn-primary btn-md text-white" type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <span className="loading loading-spinner"></span>
                                            <span>Updating...</span>
                                        </>

                                    ) : (<span>Save & Continue</span>)}
                                </button>
                                <button type='button' className="btn btn-outline btn-primary" onClick={() => handleClose()}>Cancel</button>
                            </div>
                        </div>

                    </Form>

                )}
            </Formik>

        </dialog >
    )
}

export default EditTransaction;