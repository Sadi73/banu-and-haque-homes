import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useFormik } from 'formik';
import * as Yup from "yup";
import ErrorTooltip from '../ErrorTooltip/ErrorTooltip';
import { updateProfile } from 'firebase/auth';
import auth from '../../firebase/firebase.config';

const UpdateProfile = () => {

    const { user } = useContext(AuthContext);

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
            // console.log(values);
            updateProfile(auth.currentUser, {
                displayName: values?.fullName,
                photoURL: values?.photoURL
            })
                .then(result => console.log(result))
                .catch(error => console.log(error))
        }
    });

    // console.log(user)

    return (
        <div className='container h-screen relative py-20'>

            <div className='form-container bg-black bg-opacity-40 md:max-w-[500px] p-12 absolute md:right-40'>
                <h1 className='text-white text-5xl text-center mb-10 font-rancho'>Update <span className='text-[#E3B577]'>Profile</span></h1>

                <form onSubmit={handleSubmit}>

                    <div>
                        <input
                            type="text"
                            name='fullName'
                            className='w-full mb-4 py-2 pl-3 rounded-lg'
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

                    <input
                        type="text"
                        name='photoURL'
                        className='w-full mb-4 py-2 pl-3 rounded-lg'
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


                    <button type='submit' className='common-button bg-[#E3B577] w-full py-3 rounded-lg'>Submit</button>

                </form>
            </div>

        </div>
    );
};

export default UpdateProfile;