// import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const LatestProject = ({project_name , project_details , project_img , project_git , livelink}) => {
  
    return (
        <motion.div
        whileHover={{scale : 1.1}}
        className="card w-auto bg-base-100 shadow-xl border-2 border-[#FF444A] mb-3 mx-2">
            <Link target='_blank'  to={livelink}> <figure className='rounded-t-2xl h-40 hover:bg-bottom duration-[4000ms] '  style={{ backgroundImage: `url(${project_img})`, backgroundSize: 'cover'}}></figure></Link>
            <div className="card-body">
                <h2 className="card-title">{project_name}</h2>
                <p>{project_details}...</p>
                <div className="card-actions justify-end text-[#FF444A] ">
                    <Link className='text-2xl' to={project_git}><FaGithub /></Link>
                    {/* <Link to={`/projectDetails/${id}`}><button className="btn btn-xs sm:btn-sm md:btn-md">Details</button></Link> */}  
                </div>
            </div>
        </motion.div>
    );
};

LatestProject.propTypes = {
    project_name : PropTypes.string,
    project_details : PropTypes.string,
    project_img : PropTypes.string,
    project_git : PropTypes.string,
    livelink : PropTypes.string
};

export default LatestProject;