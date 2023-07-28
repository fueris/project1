import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { users } from "../assets/constants";
import toast from "react-hot-toast";
import {  NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../App";

const LoginPage = () => {
    const session= useContext(authContext);
    const navigate = useNavigate();
    const LoginSchema = Yup.object().shape({
        username: Yup.string().required('Username is Required'),
        password: Yup.string().required('Password is Required'),
    });

    const LoginInitialValues = { username: '', password: '' };

    const handleSubmit = (values: any, { setSubmitting }: { setSubmitting: any }) => {
        setSubmitting(true);

        let lusers = window.localStorage.getItem('users');
        if (lusers) {
            let l:any[] = JSON.parse(lusers);
            const user = l.filter(u => u.username === values.username && u.password === values.password);
            if (user?.length > 0) {
                toast.success('User logged in successfully');
                session?.setUser(user);
                navigate('/dashboard');
            }
            else {
                toast.error('Invalid username or password');
            }
        }
        else{
            window.localStorage.setItem('users',JSON.stringify(users));
            const user = users.filter(u => u.username === values.username && u.password === values.password);
            if (user?.length > 0) {
                toast.success('User logged in successfully');
                navigate('/dashboard');
            }
            else {
                toast.error('Invalid username or password');
            }
        }


        setSubmitting(false);
    }
    return (
        <div className="h-screen w-full flex flex-col justify-center bg-gradient-to-b from-sky-100 to-sky-300">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h1 className="mt-6 text-center text-xl font-bold text-gray-900">Company Logo</h1>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                <p className="mt-2 text-center text-sm text-gray-600 max-w">
                    Or&nbsp;
                    <NavLink to="/signup" className="font-medium text-sky-900 hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Sign Up</NavLink>
                </p>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                    <Formik initialValues={LoginInitialValues} validationSchema={LoginSchema} onSubmit={handleSubmit} >
                        {({ isSubmitting }) => (
                            <Form className="flex justify-between w-full h-full flex-col min-h-[300px]">
                                <div className="py-4">
                                    <h1 className="text-2xl md:text-4xl">Sign in</h1>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-3xl mt-6 ">
                                        <div className="col-span-2 form-control">
                                            <label className="label label-text">UserName</label>
                                            <Field type="text" name="username" placeholder=" " className="input input-primary input-sm w-full" />
                                            <ErrorMessage name="username" component="label" className="label label-text-alt text-red-600" />
                                        </div>
                                        <div className="col-span-2 form-control">
                                            <label className="label label-text">Password</label>
                                            <Field type="password" name="password" placeholder=" " className="input input-primary input-sm w-full" />
                                            <ErrorMessage name="password" component="label" className="label label-text-alt text-red-600" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center w-full h-full">
                                        <button className="btn btn-primary btn-md text-white" type="submit" disabled={isSubmitting}>
                                            {isSubmitting ? (
                                                <>
                                                    <span className="loading loading-spinner"></span>
                                                    <span>Logging in...</span>
                                                </>

                                            ) : (<span>Sign in</span>)}
                                        </button>
                                        {/* <a href="/" className="btn btn-ghost text-primary">Forgot Password?</a> */}
                                    </div>
                                </div>
                            </Form>

                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}
export default LoginPage;