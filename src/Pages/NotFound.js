import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='m-auto text-accent'>
            <h1 className='font-bold text-4xl text-center'> There is nothint to show</h1>
            <Link to='/home' className='text-2xl font-semibold'>Home</Link>
            <img src="https://i.ibb.co/SJX5bXT/404-img.jpg" alt="" />
        </div>
    );
};

export default NotFound;