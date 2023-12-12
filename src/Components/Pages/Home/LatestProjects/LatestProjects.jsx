// import React from 'react';
// import PropTypes from 'prop-types';

import { useState } from "react";
import Title from "../../Shared/Title";
import LatestProject from "./LatestProject";

const LatestProjects = () => {
    const [projects , SetProjects] = useState([])
    fetch('/public/projects.json')
    .then(res => res.json())
    .then(data => SetProjects(data))
    return (
        <div>
            <Title title={"Latest Projects"}></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-3 gap-5 mb-6">
                {
                    projects.map(project => <LatestProject key={project.id} project={project}></LatestProject>)
                }
            </div>

        </div>
    );
};

LatestProjects.propTypes = {

};

export default LatestProjects;