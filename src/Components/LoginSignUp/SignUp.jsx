import React, { useContext } from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from "yup";
import ErrorTooltip from '../ErrorTooltip/ErrorTooltip';
import { AuthContext } from '../../Providers/AuthProvider';

const SignUp = () => {
    const navigate = useNavigate()

    const { createUserWithEmail } = useContext(AuthContext);

    const { values, setValues, handleSubmit, handleBlur, handleChange, errors, setErrors, touched } = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required("Name is Required"),
            email: Yup.string().required("Email is Required"),
            password: Yup.string()
                .required("Password is Required")
                .min(6, "Password must be at least 6 characters long"),
            confirmPassword: Yup.string()
                .required("Confirm Password is Required")
                .oneOf([Yup.ref('password'), null], 'Passwords must match'),

        }),
        onSubmit: (values) => {
            createUserWithEmail(values?.email, values?.password)
                .then(result => {
                    console.log(result.user);
                    navigate('/')
                })
                .catch(error => console.log(error))
        }
    });

    return (
        <>
            <div className='container h-screen relative'>

                <div className='form-container bg-black bg-opacity-40 md:max-w-[500px] p-12 absolute md:right-40'>
                    <h1 className='text-white text-5xl text-center mb-10 font-rancho'>Sign <span className='text-[#E3B577]'>Up!</span></h1>

                    <form onSubmit={handleSubmit}>

                        <div>
                            <input
                                type="text"
                                name='fullName'
                                className='w-full mb-4 py-2 pl-3 rounded-lg'
                                placeholder='Enter Your Name'
                                value={values?.fullName}
                                onChange={handleChange}
                            />
                            {touched.fullName && errors.fullName && (
                                <ErrorTooltip
                                    content={errors.fullName}
                                    placement="right"
                                />
                            )}
                        </div>

                        <input
                            type="text"
                            name='email'
                            className='w-full mb-4 py-2 pl-3 rounded-lg'
                            placeholder='Enter Your Email'
                            value={values?.email}
                            onChange={handleChange}
                        />
                        {touched.email && errors.email && (
                            <ErrorTooltip
                                content={errors.email}
                                placement="right"
                            />
                        )}

                        <input
                            type="text"
                            name='password'
                            className='w-full mb-4 py-2 pl-3 rounded-lg'
                            placeholder='Enter Password'
                            value={values?.password}
                            onChange={handleChange}
                        />
                        {touched.password && errors.password && (
                            <ErrorTooltip
                                content={errors.password}
                                placement="right"
                            />
                        )}

                        <input
                            type="text"
                            name='confirmPassword'
                            className='w-full mb-4 py-2 pl-3 rounded-lg'
                            placeholder='Confirm Password'
                            value={values?.confirmPassword}
                            onChange={handleChange}
                        />
                        {touched.confirmPassword && errors.confirmPassword && (
                            <ErrorTooltip
                                content={errors.confirmPassword}
                                placement="right"
                            />
                        )}

                        <button type='submit' className='common-button bg-[#E3B577] w-full py-3 rounded-lg'>Submit</button>

                    </form>

                    <div className="divider">OR</div>


                    <div className='flex justify-center items-center gap-2'>
                        <button><AiFillGoogleCircle className='text-white text-3xl' /></button>
                        {/* <button><FaFacebook className='text-white text-2xl' /></button> */}
                    </div>

                    <div>
                        <p className='text-white text-center mt-4'>Already have an account? <Link to='/login' className='text-[#E3B577]'>Login</Link></p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default SignUp;