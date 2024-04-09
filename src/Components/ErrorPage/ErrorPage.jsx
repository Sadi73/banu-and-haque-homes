import React from 'react';
import errorImage from '../../assets/404.gif';
import backIcon from '../../assets/GoBack.svg';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className='flex justify-center text-center'>
            <div>
                <div className='flex items-center '>
                    <div className='flex cursor-pointer mr-[40%]' onClick={() => navigate(-1)}>
                        <img src={backIcon} alt="" />
                        <p>Go Back</p>
                    </div>
                    <div>
                        <h1 className='text-5xl my-5'>Oopp!!</h1>
                        <p className='text-lg'>Page Not Found</p>
                    </div>
                </div>
                <img src={errorImage} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;