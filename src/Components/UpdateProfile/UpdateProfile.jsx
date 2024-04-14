import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useFormik } from 'formik';
import * as Yup from "yup";
import ErrorTooltip from '../ErrorTooltip/ErrorTooltip';
import { updateProfile } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const { values, setValues, handleSubmit, handleBlur, handleChange, errors, setErrors, touched } = useFormik({
        initialValues: {
            fullName: user?.displayName ? user?.displayName : '',
            email: user?.email,
            photoURL: user?.photoURL ? user?.photoURL : ''
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required("Name is Required"),
            photoURL: Yup.string().required("Photo is Required"),

        }),
        onSubmit: (values) => {
            updateProfile(auth.currentUser, {
                displayName: values?.fullName,
                photoURL: values?.photoURL
            })
                .then(result => {
                    toast.success('Successfully Updated Profile', {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        // transition: Bounce,
                        onClose: () => {
                            navigate('/');
                        }
                    });


                })
                .catch(error => console.log(error))
        }
    });


    return (
        <>
            <ToastContainer />

            <div className='container py-20'>

                <div className='form-container bg-black bg-opacity-40 md:max-w-[500px] p-12 mx-auto'>
                    <h1 className='text-white text-5xl text-center mb-10 font-rancho'>Update <span className='text-[#E3B577]'>Profile</span></h1>

                    <form onSubmit={handleSubmit}>

                        <div className='relative'>
                            <input
                                type="text"
                                name='fullName'
                                className={`w-full mb-4 py-2 pl-3 rounded-lg ${touched.fullName && errors.fullName && 'border-2 border-red-500'}`}
                                placeholder='Enter Your Name'
                                value={values?.fullName}
                                onChange={handleChange}
                                onBlur={handleBlur}
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
                            disabled
                        />

                        <div className='relative'>
                            <input
                                type="text"
                                name='photoURL'
                                className={`w-full mb-4 py-2 pl-3 rounded-lg ${touched.photoURL && errors.photoURL && 'border-2 border-red-500'}`}
                                placeholder='Enter photoURL'
                                value={values?.photoURL}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.photoURL && errors.photoURL && (
                                <ErrorTooltip
                                    content={errors.photoURL}
                                    placement="right"
                                />
                            )}
                        </div>

                        <button type='submit' className='common-button bg-[#E3B577] w-full py-3 rounded-lg'>Update</button>

                    </form>
                </div>

            </div>
        </>
    );
};

export default UpdateProfile;