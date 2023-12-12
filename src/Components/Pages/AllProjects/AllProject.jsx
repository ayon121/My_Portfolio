
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllProject = ({project}) => {
    const {id ,project_name , project_details , project_img5} = project
    return (
        <div className="card w-auto bg-base-100 shadow-xl">
            <figure><img src={project_img5} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{project_name}</h2>
                <p>{project_details.slice(0,99)}...</p>
                <div className="card-actions justify-end">
                <Link to={`/projectDetails/${id}`}><button className="btn btn-xs sm:btn-sm md:btn-md">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

AllProject.propTypes = {
    project : PropTypes.object
};

export default AllProject;