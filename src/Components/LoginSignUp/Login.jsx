import React, { useContext, useState } from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { useFormik } from 'formik';
import * as Yup from "yup";
import ErrorTooltip from '../ErrorTooltip/ErrorTooltip';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub } from 'react-icons/fa';


const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [loaderVisible, setloaderVisible] = useState(false);
    const [authError, setAuthError] = useState(false);

    const { signInWithEmail, googleSignIn, githubSignIn } = useContext(AuthContext);

    const { values, setValues, handleSubmit, handleBlur, handleChange, errors, setErrors, touched } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Email is Required"),
            password: Yup.string().required("Password is Required")
        }),
        onSubmit: (values) => {
            setloaderVisible(true);
            signInWithEmail(values?.email, values?.password)
                .then(result => {
                    setloaderVisible(false);
                    toast.success('Log in successfull', {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        onClose: () => {
                            navigate(location?.state ? location?.state : '/');
                        }
                    });

                })
                .catch(error => {
                    setloaderVisible(false);
                    setAuthError(true);
                })
        }
    });

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                navigate(location?.state ? location?.state : '/');
            })
            .catch(error => console.log(error))
    };

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                navigate(location?.state ? location?.state : '/');
            })
            .catch(error => console.log(error))
    };


    return (
        <>
            <ToastContainer />

            <div className='container py-20'>

                <div className='form-container bg-black bg-opacity-40 md:max-w-[500px] p-12 mx-auto'>
                    <h1 className='text-white text-5xl text-center mb-10 font-rancho'>Log <span className='text-[#E3B577]'>In!</span></h1>

                    {authError &&
                        <p className='text-red-600 font-medium mb-3'>Invalid Email or Password </p>}

                    <form onSubmit={handleSubmit}>
                        <div className='relative'>
                            <input
                                type="text"
                                name='email'
                                className={`w-full mb-4  py-2 pl-3  rounded-lg ${touched.email && errors.email ? 'border-2 border-red-500' : ''}`}
                                placeholder='Enter Your Email'
                                value={values?.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.email && errors.email && (
                                <ErrorTooltip
                                    content={errors.email}
                                    placement="right"
                                />
                            )}
                        </div>

                        <div className='relative'>
                            <input
                                type={showPassword ? "text" : "password"}
                                name='password'
                                className={`w-full mb-4  py-2 pl-3  rounded-lg ${touched.password && errors.password ? 'border-2 border-red-500' : ''}`}
                                placeholder='Enter Password'
                                value={values?.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <span className='absolute top-2.5 right-2.5' onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ?
                                    <GoEyeClosed /> :
                                    <RxEyeOpen />
                                }
                            </span>

                            {touched.password && errors.password && (
                                <ErrorTooltip
                                    content={errors.password}
                                    placement="right"
                                />
                            )}
                        </div>

                        <button type='submit' className='common-button bg-[#E3B577] w-full py-3 rounded-lg'>Submit</button>

                        {loaderVisible && <span className="loading loading-dots loading-lg"></span>}

                    </form>

                    <div className="divider">OR</div>

                    <div className='flex justify-center items-center gap-2'>
                        <button>
                            <AiFillGoogleCircle
                                className='text-white text-3xl'
                                onClick={handleGoogleSignIn}

                            />
                        </button>

                        <button>
                            <FaGithub
                                className='text-white text-2xl'
                                onClick={handleGithubSignIn}
                            />
                        </button>
                    </div>

                    <div>
                        <p className='text-white text-center mt-4'>New here? Please <Link to='/sign-up' className='text-[#E3B577]'>Register</Link></p>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Login;