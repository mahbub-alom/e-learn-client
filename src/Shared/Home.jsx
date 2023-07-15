import React from 'react';
import Navbar from '../Pages/Navbar';
import Banner from '../Pages/Banner';
import Award from '../Pages/Award';
import PopularCourse from '../Pages/PopularCourse';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Award></Award>
            <PopularCourse></PopularCourse>
        </div>
    );
};

export default Home;