import React from 'react';
import About from './About';
import Banner from './Banner';
import BottomBanner from './BottomBanner';
import Notes from './Notes';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BottomBanner></BottomBanner>
            <About></About>
            <Notes></Notes>
        </div>
    );
};

export default Home;