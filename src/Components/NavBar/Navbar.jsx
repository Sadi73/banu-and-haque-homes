import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import './Navbar.css';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navList =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/update-profile'>Update Profile</NavLink></li>
        </>;

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    };

    return (
        <div className="navbar bg-base-100 bg-opacity-80 fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navList}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl" to='/'><span className='text-green-700'>Banu</span> N <span className='text-green-700'>Haque</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navList}
                </ul>
            </div>

            {user ?
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar placeholder">
                            <div className="bg-neutral text-neutral-content rounded-full w-10">
                                {user?.photoURL ? <img src={user?.photoURL} alt="" /> : <span className="text-xl">{user?.email[0].toUpperCase()}</span>}
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='px-3 font-bold'> {user?.email}</li>
                            <li><a className='font-bold' onClick={handleLogOut}>Logout</a></li>
                        </ul>
                    </div>
                </div> : <div className="navbar-end"><Link to='/login' className="btn">Login</Link></div>

            }

        </div>

    );
};

export default Navbar;