import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'


const Details = () => {

    const params = useParams();
    const [details, setDetails] = useState()

    useEffect(() => {
        fetch('./fakeData.json')
            .then(response => response.json())
            .then(data => console.log(data))
    }, [])

    // console.log(details)

    return (
        <div>

        </div>
    );
};

export default Details;