// import React from 'react';
// import PropTypes from 'prop-types';

import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Aboutme from "./AboutME/Aboutme";
import Banner from "./Banner/Banner";
import LatestProjects from "./LatestProjects/LatestProjects";
import MyServices from "./MyServices/MyServices";
import TeachIKnow from "./TeachIKnow/TeachIKnow";

const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <LatestProjects></LatestProjects>
           <TeachIKnow></TeachIKnow>
           <Aboutme></Aboutme>
           <MyServices></MyServices>
           <Footer></Footer>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;