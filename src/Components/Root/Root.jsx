import React, { useContext, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import '../../AllStyles.css'
import Navbar from '../NavBar/Navbar';
import { AuthContext } from '../../Providers/AuthProvider';
import Footer from '../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Root = () => {
    const { loading } = useContext(AuthContext);

    useEffect(() => {
        AOS.init({
            // Global settings:
            disable: false,
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: false,
            disableMutationObserver: false,
            debounceDelay: 50,
            throttleDelay: 99,

            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120,
            delay: 0,
            duration: 400,
            easing: 'ease',
        });
    }, []);

    return (
        <div>
            {loading &&
                <div>
                    <span className="loading loading-ball loading-xs"></span>
                    <span className="loading loading-ball loading-sm"></span>
                    <span className="loading loading-ball loading-md"></span>
                    <span className="loading loading-ball loading-lg"></span>
                </div>
            }
            {!loading &&
                <>
                    <Navbar />
                    <Outlet />
                    <Footer/>
                </>
            }
        </div>
    );
};

export default Root;