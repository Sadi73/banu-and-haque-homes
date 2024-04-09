import React, { useContext } from 'react';
import { Outlet } from "react-router-dom";
import '../../AllStyles.css'
import Navbar from '../NavBar/Navbar';
import { AuthContext } from '../../Providers/AuthProvider';

const Root = () => {
    const { loading } = useContext(AuthContext);

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
                </>
            }
        </div>
    );
};

export default Root;