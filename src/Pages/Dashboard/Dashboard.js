import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-gray-900 text-white">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard' className='text-2xl font-bold'>My profile</Link></li>
                        <li><Link to='/dashboard/addreview' className='text-2xl font-bold'>Review</Link></li>
                        <li><Link to='/dashboard/search' className='text-2xl font-bold'>Search</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;