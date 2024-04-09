// import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const LatestProject = ({project_name , project_details , project_img}) => {
  
    return (
        <div className="card w-auto bg-base-100 shadow-xl">
            <figure className='h-40'><img className='bg-cover hover:bg-bottom' src={project_img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{project_name}</h2>
                <p>{project_details}...</p>
                <div className="card-actions justify-end">
                    {/* <Link to={`/projectDetails/${id}`}><button className="btn btn-xs sm:btn-sm md:btn-md">Details</button></Link> */}  
                </div>
            </div>
        </div>
    );
};

LatestProject.propTypes = {
    project_name : PropTypes.string,
    project_details : PropTypes.string,
    project_img : PropTypes.string
};

export default LatestProject;