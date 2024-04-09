import React, { useContext } from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import { AuthContext } from '../../Providers/AuthProvider';
import { useFormik } from 'formik';
import * as Yup from "yup";


const Login = () => {
    const navigate = useNavigate();
    const { signInWithEmail, googleSignIn } = useContext(AuthContext);

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
            signInWithEmail(values?.email, values?.password)
                .then(result => {
                    console.log(result.user);
                    navigate('/')
                })
                .catch(error => console.log(error))
        }
    });

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(error => console.log(error))
    };

    return (
        <>
            <div className='container h-screen relative'>

                <div className='form-container bg-black bg-opacity-40 md:max-w-[500px] p-12 absolute md:right-40'>
                    <h1 className='text-white text-5xl text-center mb-10 font-rancho'>Log <span className='text-[#E3B577]'>In!</span></h1>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name='email'
                            className='w-full mb-4 p-2'
                            placeholder='Enter Your Email'
                            value={values?.email}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name='password'
                            className='w-full mb-4 p-2'
                            placeholder='Enter Password'
                            value={values?.password}
                            onChange={handleChange}
                        />

                        <button type='submit' className='common-button bg-[#E3B577] w-full py-3 '>Submit</button>

                    </form>

                    <div className="divider">OR</div>

                    <div className='flex justify-center items-center gap-2'>
                        <button>
                            <AiFillGoogleCircle
                                className='text-white text-3xl'
                                onClick={handleGoogleSignIn}

                            />
                        </button>

                        {/* <button><FaFacebook className='text-white text-2xl' /></button> */}
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