import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <div className="navbar bg-accent text-white py-3 z-20">
                <div className="navbar-start">
                    {/* mobile */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/home' className='text-xl'>Home</Link></li>
                            <li><Link to='/login' className='text-xl'>Log/Reg</Link></li>

                        </ul>
                    </div>

                    {/* desktop */}

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/home' className='text-xl'>Home</Link></li>
                        {user ? <li><Link to='/login' className='text-xl' onClick={() => signOut(auth)}>Signout</Link></li> : <li><Link to='/login' className='text-xl'>Log/Reg</Link></li>}

                        {/* user.displayName */}
                    </ul>
                </div>

                <div>
                    {user && <small className='text-sm'>{user.displayName}</small>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;