
import PropTypes from 'prop-types';
// import { Cursor, useTypewriter } from 'react-simple-typewriter';
const MyService = ({ service, details }) => {
  
    return (
        <div className="card w-auto bg-[#231f20] font-poppins  shadow-xl border-2 border-[#FF444A]">
            <div className="card-body text-center">
                <h2 className=" text-2xl text-[#FF444A]">{service}</h2>
                <p className='text-white'>{details}</p>
            </div>
        </div>
    );
};

MyService.propTypes = {
    service: PropTypes.string,
    details: PropTypes.string
};

export default MyService;