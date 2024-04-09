// import React from 'react';
// import PropTypes from 'prop-types';

import { useState } from "react";
import Title from "../../Shared/Title";
import LatestProject from "./LatestProject";


const LatestProjects = () => {
    const [projects, SetProjects] = useState([])
    fetch('projects.json')
        .then(res => res.json())
        .then(data => SetProjects(data))
    return (
            <div>
                <Title title={"Latest Projects"}></Title>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-3 gap-5 mb-6">
                    <LatestProject project_name={"Tech Vibe"} project_details={"This latest tech product promoting website. In this website users can post new tech products and affiliate link. Modaretor can review post , admin can see site statisitics. Anyone can buy productsand give review of them."} project_img={".././../../../../public/tech-product.png"}></LatestProject>
                    <LatestProject project_name={"Hotel Management"} project_details={"This a hotel management website. This website is for hotel owners. Here hotel owners can show what type of rooms are available and how many rooms are available. User can see room details and can book room of their choice on the available date."} project_img={".././../../../../public/hotel-management.png"}></LatestProject>
                    <LatestProject project_name={"Tech Vibe"} project_details={"This latest tech product promoting website. In this website users can post new tech products and affiliate link. Modaretor can review post , admin can see site statisitics. Anyone can buy productsand give review of them."} project_img={".././../../../../public/tech-product.png"}></LatestProject>
                </div>


            </div>
    );
};

LatestProjects.propTypes = {

};

export default LatestProjects;