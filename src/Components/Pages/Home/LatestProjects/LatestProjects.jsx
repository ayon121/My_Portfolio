// import React from 'react';
// import PropTypes from 'prop-types';

import Title from "../../Shared/Title";
import LatestProject from "./LatestProject";
import techproduct from "../../../../assets/images/Projects/tech-product.png"
import retrorevive from "../../../../assets/images/Projects/retrorevive.png"
import hotelmanage from "../../../../assets/images/Projects/hotel-management.png"


const LatestProjects = () => {
    return (
            <div>
                <Title title={"Latest Projects"}></Title>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-3 gap-5 mb-6">
                    <LatestProject project_name={"Retro Revive"} project_details={"Retro Revive isn't just a website; it's a portal to your fondest childhood memories. Step into a world of nostalgia and excitement, where classic games reign supreme and every victory earns you rewards. Built by passionate gamers, Retro Revive is your one-stop destination for reliving the golden age of gaming"} project_img={retrorevive} livelink={'https://game-project-7e378.web.app'} project_git={'https://github.com/ayon121/RetroRevive_Frontend.git'}></LatestProject>
                    <LatestProject project_name={"Tech Vibe"} project_details={"This latest tech product promoting website. In this website users can post new tech products and affiliate link. Modaretor can review post , admin can see site statisitics. Anyone can buy productsand give review of them."} project_img={techproduct}livelink={'https://tech-product-f57cc.web.app'} project_git={'https://github.com/ayon121/LatestTech_Website_React.git'}></LatestProject>
                    <LatestProject project_name={"Hotel Management"} project_details={"This a hotel management website. This website is for hotel owners. Here hotel owners can show what type of rooms are available and how many rooms are available. User can see room details and can book room of their choice on the available date."} project_img={hotelmanage} livelink={'https://hotel-management-beb7b.web.app'} project_git={'https://github.com/ayon121/Hotel_Management_Website_React.git'}></LatestProject>
                </div>


            </div>
    );
};

LatestProjects.propTypes = {

};

export default LatestProjects;