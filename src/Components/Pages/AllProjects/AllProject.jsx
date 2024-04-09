
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllProject = ({project_name , project_details , project_img , project_git , livelink}) => {
    return (
        <div className="card w-auto bg-base-100 shadow-xl border-2 border-[#FF444A]">
        <Link target='_blank' to={livelink}> <figure className='h-40 hover:bg-bottom duration-[4000ms] '  style={{ backgroundImage: `url(${project_img})`, backgroundSize: 'cover'}}></figure></Link>
        <div className="card-body">
            <h2 className="card-title">{project_name}</h2>
            <p>{project_details}...</p>
            <div className="card-actions justify-end text-[#FF444A] ">
                <Link className='text-2xl' to={project_git}><FaGithub /></Link>
                {/* <Link to={`/projectDetails/${id}`}><button className="btn btn-xs sm:btn-sm md:btn-md">Details</button></Link> */}  
            </div>
        </div>
    </div>
    );
};

AllProject.propTypes = {
    project_name : PropTypes.string,
    project_details : PropTypes.string,
    project_img : PropTypes.string,
    project_git : PropTypes.string,
    livelink : PropTypes.string
};

export default AllProject;