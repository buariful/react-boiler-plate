import React from 'react';

const Notes = () => {
    return (
        <div>
            {/* https://i.ibb.co/b3vw9BS/aboutMe.png */}
            <div className="hero text-accent">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/b3vw9BS/aboutMe.png" className="max-w-sm rounded-lg" alt='' />
                    <div>
                        <h1 className="text-3xl font-semibold mb-4">4 EASY STEPS TO FIND THE RIGHT MATCH</h1>
                        <ul className='text-xl font-mono'>
                            <li className='mb-1'>Complete our compatibility quiz to get quality connections based on key areas of personality.
                                Answer some basics to help us narrow down people who meet your personal criteria.
                                Review the profiles of everyone who we've determined to be a right match for you
                                Pick a membership that fits your needs and start communicating at your own pace..</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notes;