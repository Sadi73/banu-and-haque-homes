import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Reviews = () => {

    const [allReviews, setAllReviews] = useState([]);

    useEffect(() => {
        fetch('/Reviews.json')
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, [])

    return (
        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-5 pt-32 md:w-[60%] mx-auto'>
            <Helmet>
                <title>Reviews - Banu & Haque</title>
            </Helmet>

            {allReviews.map((review, index) =>
                <div
                    key={review?.id}
                    data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div className="card  bg-base-100 shadow-xl mb-5">
                        <figure
                            // className="px-10 pt-10"
                        >
                            <img src={review?.image} alt="Shoes" className="rounded-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{review?.customer_name}</h2>
                            <p>{review?.review_text}</p>
                        </div>
                    </div>
                </div>


            )}

        </div>
    );
};

export default Reviews;