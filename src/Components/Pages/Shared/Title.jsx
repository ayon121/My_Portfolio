
import PropTypes from 'prop-types';

const Title = ({title}) => {
    return (
        <div className='flex justify-center mb-10 mt-3'>
            <div className='text-center max-w-3xl font-poppins border-y-2 border-[#FF444A] rounded'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl py-2'>{title}</h1>
            </div>
        </div>
    );
};

Title.propTypes = {
    title : PropTypes.string
};

export default Title;