import React, { useEffect, useState } from 'react';
import { TbSquareAsterisk } from "react-icons/tb";
import { useNavigate } from 'react-router-dom'


const EstateRoot = () => {
    const [allEstates, setAllEstates] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('./fakeData.json')
            .then(response => response.json())
            .then(data => setAllEstates(data));
    }, [])


    return (
        <div className='my-16'>
            <h1 className='text-center text-5xl'>Explore Apartment Types</h1>
            <p className='text-center my-3'>Explore all the different types of apartments so you can choose the best option for you
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[90%] mx-auto'>
                {allEstates.map(estate =>
                    <div className="card card-compact  bg-base-100 shadow-xl">
                        <figure><img src={estate?.image} className='w-full h-64' alt="Shoes" /></figure>
                        <div className="p-4 text-sm" >
                            <p>{estate?.price}</p>
                            <div className='flex items-center justify-between'>
                                <h2 className="card-title">{estate?.estate_title}</h2>
                                <p>{estate?.segment_name}</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <TbSquareAsterisk />
                                <p>{estate?.area}</p>
                            </div>
                            <p>{estate?.description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={() => navigate(`details/${estate?.id}`)}>View Property</button>
                            </div>
                        </div>
                    </div>
                )
                }

            </div>
        </div>
    );
};

export default EstateRoot;