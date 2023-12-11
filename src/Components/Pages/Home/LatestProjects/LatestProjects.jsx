// import React from 'react';
// import PropTypes from 'prop-types';

import Title from "../../Shared/Title";
import LatestProject from "./LatestProject";

const LatestProjects = () => {
    return (
        <div>
            <Title title={"Latest Projects"}></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-3 gap-5 mb-6">
                <LatestProject></LatestProject>
                <LatestProject></LatestProject>
                <LatestProject></LatestProject>
            </div>

        </div>
    );
};

LatestProjects.propTypes = {

};

export default LatestProjects;