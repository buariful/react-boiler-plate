import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    const [gender, setGender] = useState('Men')
    const navigate = useNavigate();

    const handleSearch = event => {
        event.preventDefault();
        const review = {
            ab: gender,
            age: event.target.age.value,
        }
        navigate('/dashboard');

    }
    return (
        <div>
            <div className="hero min-h-screen banner text-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">START free TODAY</h1>
                        <p className="py-6 text-2xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">

                            <form className='text-accent' onSubmit={handleSearch}>
                                <label className="label">
                                    <span className="label-text">You are looking for</span>
                                </label>

                                <select className="select select-bordered w-full max-w-xs" value={gender} onChange={(e) => setGender(e.target.value)} >
                                    <option name='gender' value='men'>Men</option>
                                    <option name='gender' value='women'>women</option>
                                </select>

                                <label className="label">
                                    <span className="label-text">Age below</span>
                                </label>
                                <input type="Number" name='age' placeholder="Age" className="input input-bordered w-full max-w-xs" />

                                <input type="submit" className='btn btn-primary text-white mt-5' value='search' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    );
};

export default Banner;