// import React from 'react';
import PropTypes from 'prop-types';

const LatestProject = ({project}) => {
    const {id ,project_name , project_details , project_img5} = project
    return (
        <div className="card w-auto bg-base-100 shadow-xl">
            <figure><img src={project_img5} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{project_name}</h2>
                <p>{project_details.slice(0,99)}...</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

LatestProject.propTypes = {
    project : PropTypes.object
};

export default LatestProject;