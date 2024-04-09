import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'


const Details = () => {

    const params = useParams();
    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch('/fakeData.json')
            .then(response => response.json())
            .then(data => {
                const matchedData = data.find(eachData => eachData?.id == params?.id);
                setDetails(matchedData);
            });
    }, [])

    console.log(details)

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={details?.image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{details?.estate_title}</h2>
                <p>{details?.description}</p>
                <p>Location: {details?.location}</p>
                <p>Area: {details?.area}</p>
                <p>Price: {details?.price}</p>

            </div>
        </div>
    );
};

export default Details;