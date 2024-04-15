import React from 'react';
import Slider from '../Slider/Slider';
import EstateRoot from '../EstateRoot/EstateRoot';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Banu & Haque</title>
            </Helmet>
            <Slider />
            <EstateRoot />
        </div>
    );
};

export default Home;