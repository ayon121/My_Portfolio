// import React from 'react';
// import PropTypes from 'prop-types';

import Navbar from "../Shared/Navbar";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;