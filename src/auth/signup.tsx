import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { users } from "../assets/constants";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
    const navigate = useNavigate();
    const SignupSchema = Yup.object().shape({
        username: Yup.string().required('User Name is Required'),
        firstName: Yup.string().required('First Name is Required'),
        lastName: Yup.string().required('First Name is Required'),
        password: Yup.string().required('Password is Required').matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
        cpassword: Yup
            .string()
            .oneOf([Yup.ref('password')], 'Passwords do not match')
            .required('Password and confirm password do not match'),
        userType: Yup.string()
            .required('Please select your User type'),
        mobileNumber: Yup.string().required('Phone number is Required'),
    });

    const SignupInitialValues = { username: '', password: '', userType: -1, firstName: '', lastName: '', mobileNumber: '' };

    const handleSubmit = (values: any, { setSubmitting }: { setSubmitting: any }) => {
        setSubmitting(true);

        const lusers = window.localStorage.getItem('users');
        if (lusers) {
            let l = JSON.parse(lusers);
            l.push(values);
            window.localStorage.setItem('users', JSON.stringify(l));
        }
        else {
            let l = users;
            l.push(values);
            window.localStorage.setItem('users', JSON.stringify(l));
        }
        toast.success('User created successfully');
        navigate('/login');
        setSubmitting(false);
    }
    return (
        <div className="h-screen w-full flex flex-col justify-center bg-gradient-to-b from-sky-100 to-sky-300">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h1 className="mt-6 text-center text-xl font-bold text-gray-900">Company Logo</h1>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
                <p className="mt-2 text-center text-sm text-gray-600 max-w">
                    Already registered?&nbsp;
                    <Link to="/login" className="font-medium text-sky-900 hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Sign In</Link>
                </p>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
                <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                    <Formik initialValues={SignupInitialValues} validationSchema={SignupSchema} onSubmit={handleSubmit} >
                        {({ isSubmitting }) => (
                            <Form className="flex justify-between w-full h-full flex-col min-h-[300px]">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                                    <div className="col-span-2 lg:col-span-1 form-control">
                                        <label className="label label-text">UserName</label>
                                        <Field type="text" name="username" placeholder=" " className="input input-primary input-sm w-full" />
                                        <ErrorMessage name="username" component="label" className="label label-text-alt text-red-600" />
                                    </div>
                                    <div className="col-span-2 lg:col-span-1 form-control">
                                        <label className="label"><span className="label-text">UserType</span></label>
                                        <Field as="select" name="userType" className="select select-primary select-sm w-full ">
                                            <option value=""></option>
                                            <option value="Admin">Admin</option>
                                            <option value="Vendor">Vendor</option>
                                        </Field>
                                        <ErrorMessage name="userType" component="label" className="label label-text-alt text-red-600" />
                                    </div>
                                    <div className="col-span-2 lg:col-span-1 form-control">
                                        <label className="label label-text">First Name</label>
                                        <Field type="text" name="firstName" placeholder=" " className="input input-primary input-sm w-full" />
                                        <ErrorMessage name="firstName" component="label" className="label label-text-alt text-red-600" />
                                    </div>
                                    <div className="col-span-2 lg:col-span-1 form-control">
                                        <label className="label label-text">Last Name</label>
                                        <Field type="text" name="lastName" placeholder=" " className="input input-primary input-sm w-full" />
                                        <ErrorMessage name="lastName" component="label" className="label label-text-alt text-red-600" />
                                    </div>

                                    <div className="col-span-2 lg:col-span-1 form-control">
                                        <label className="label label-text">Password</label>
                                        <Field type="password" name="password" placeholder=" " className="input input-primary input-sm w-full" />
                                        <ErrorMessage name="password" component="label" className="label label-text-alt text-red-600" />
                                    </div>
                                    <div className="col-span-2 lg:col-span-1 form-control">
                                        <label className="label label-text">Confirm Password</label>
                                        <Field type="password" name="cpassword" placeholder=" " className="input input-primary input-sm w-full" />
                                        <ErrorMessage name="cpassword" component="label" className="label label-text-alt text-red-600" />
                                    </div>
                                    <div className="col-span-2 lg:col-span-1 form-control">
                                        <label className="label label-text">Mobile Number</label>
                                        <Field type="text" name="mobileNumber" placeholder=" " className="input input-primary input-sm w-full" />
                                        <ErrorMessage name="mobileNumber" component="label" className="label label-text-alt text-red-600" />
                                    </div>
                                </div>
                                <div className="py-4">
                                    <>
                                        <div className="flex items-center">
                                            <input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" className="" />
                                            <label htmlFor="terms-and-privacy" className="ml-2 block text-sm text-gray-900">I agree to the&nbsp;
                                                <a href="#" className="link link-primary">Terms</a>&nbsp;and&nbsp;
                                                <a href="#" className="link link-primary">Privacy Policy</a>.
                                            </label>
                                        </div>

                                        <div className="form-control py-4">
                                            <button type="submit" className="btn btn-primary btn-md text-white" disabled={isSubmitting}>
                                                {isSubmitting ? (
                                                    <>
                                                        <span className="loading loading-spinner"></span>
                                                        <span>Creating...</span>
                                                    </>

                                                ) : (<span>Sign Up</span>)}
                                            </button>
                                        </div>
                                    </>
                                </div>

                            </Form>

                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}
export default SignupPage;