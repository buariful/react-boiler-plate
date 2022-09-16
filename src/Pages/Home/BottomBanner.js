import React from 'react';
import { FaHandshake } from 'react-icons/fa'
import { GiClover, GiLovers } from 'react-icons/gi'

const BottomBanner = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 capitalize" >
                <div className="card bg-[#d80041c7] text-white rounded-none text-center">
                    <div className="card-body px-5 py-8">
                        <FaHandshake className='text-4xl w-full' />
                        <p className='text-2xl'>#1 TRUSTED DATING APP</p>
                        <small className='text-xs'>2020 Survey of 1,067 Respondents from BD</small>
                    </div>
                </div>
                <div className="card bg-accent text-white rounded-none text-center">
                    <div className="card-body px-5 py-8">
                        <GiClover className='text-4xl w-full' />
                        <p className='text-xl'>EVERY 14 MINUTES, SOMEONE
                            FINDS LOVE ON EHARMONY</p>
                        <small className='text-xs'>2020 Survey of 1,067 Respondents from BD</small>
                    </div>
                </div>

                <div className="card bg-[#d80041c7] text-white rounded-none text-center">
                    <div className="card-body px-5 py-8">
                        <GiLovers className='text-4xl w-full' />
                        <p className='text-2xl'>HIGHEST QUALITY DATING POOL</p>
                        <small className='text-xs'>2020 Survey of 1,067 Respondents from BD</small>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BottomBanner;