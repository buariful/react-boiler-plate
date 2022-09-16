import React from 'react';
import { GiEternalLove, GiRoyalLove } from "react-icons/gi";
import { AiFillMessage } from "react-icons/ai";

const About = () => {
    return (
        <div className='text-center'>
            <h1 className='text-accent font-semibold text-3xl lg:text-4xl mt-8 mb-4'>Our dating site helps millions find real love</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 w-8/12 mx-auto gap-8">

                <div className="card text-accent rounded-none text-center">
                    <div className="card-body px-5 py-8">
                        <GiEternalLove className='text-orange-600 text-7xl w-full' />
                        <p className='text-xl'>OVER 2 MILLION HAVE FOUND LOVE</p>
                        <small className='text-xs'>could you be next?</small>
                    </div>
                </div>
                <div className="card text-accent rounded-none text-center">
                    <div className="card-body px-5 py-8">
                        <GiRoyalLove className='text-orange-600 text-7xl w-full' />
                        <p className='text-xl'>SITE MOST LIKELY TO LEAD TO HAPPY RELATIONSHIPS</p>
                        <small className='text-xs'>the right one may be waiting for you!</small>
                    </div>
                </div>
                <div className="card text-accent rounded-none text-center">
                    <div className="card-body px-5 py-8">
                        <AiFillMessage className='text-orange-600 text-7xl w-full' />
                        <p className='text-xl'>TONS OF MESSAGES SENT WEEKLY</p>
                        <small className='text-xs'>See who wants to talk to you!</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;