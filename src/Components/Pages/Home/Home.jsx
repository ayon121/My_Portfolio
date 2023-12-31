// import React from 'react';
// import PropTypes from 'prop-types';

import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner/Banner";
import LatestProjects from "./LatestProjects/LatestProjects";
import MyServices from "./MyServices/MyServices";
import Skills from "./Skills/Skills";

const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <LatestProjects></LatestProjects>
           <Skills></Skills>
           <MyServices></MyServices>
           <Footer></Footer>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;