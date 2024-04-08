import React from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';

const SignUp = () => {


    return (
        <>
            <Navbar />
            <div className='container h-screen relative'>

                <div className='form-container bg-black bg-opacity-40 md:max-w-[500px] p-12 absolute md:right-40'>
                    <h1 className='text-white text-5xl text-center mb-10 font-rancho'>Sign <span className='text-[#E3B577]'>Up!</span></h1>

                    <form >
                        <input
                            type="text"
                            name='firstName'
                            className='w-full mb-4 py-2 pl-3 rounded-lg'
                            placeholder='Enter Your First name'
                        // value={values?.firstName}
                        // onChange={handleChange}
                        />

                        <input
                            type="text"
                            name='lastName'
                            className='w-full mb-4 py-2 pl-3 rounded-lg'
                            placeholder='Enter Your Last name'
                        // value={values?.lastName}
                        // onChange={handleChange}
                        />

                        <input
                            type="text"
                            name='email'
                            className='w-full mb-4 py-2 pl-3 rounded-lg'
                            placeholder='Enter Your Email'
                        // value={values?.email}
                        // onChange={handleChange}
                        />

                        <input
                            type="text"
                            name='password'
                            className='w-full mb-4 py-2 pl-3 rounded-lg'
                            placeholder='Enter Password'
                        // value={values?.password}
                        // onChange={handleChange}
                        />

                        <input
                            type="text"
                            name='password'
                            className='w-full mb-4 py-2 pl-3 rounded-lg'
                            placeholder='Confirm Password'
                        // value={values?.password}
                        // onChange={handleChange}
                        />

                        <button type='submit' className='common-button bg-[#E3B577] w-full py-3 rounded-lg'>Submit</button>

                        <div className="divider">OR</div>


                        <div className='flex justify-center items-center gap-2'>
                            <button><AiFillGoogleCircle className='text-white text-3xl' /></button>
                            {/* <button><FaFacebook className='text-white text-2xl' /></button> */}
                        </div>


                    </form>

                    <div>
                        <p className='text-white text-center mt-4'>Already have an account? <Link to='/login' className='text-[#E3B577]'>Login</Link></p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default SignUp;