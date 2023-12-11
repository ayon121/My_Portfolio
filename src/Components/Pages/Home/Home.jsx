// import React from 'react';
// import PropTypes from 'prop-types';

import Navbar from "../Shared/Navbar";
import Banner from "./Banner/Banner";
import LatestProjects from "./LatestProjects/LatestProjects";

const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <LatestProjects></LatestProjects>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;