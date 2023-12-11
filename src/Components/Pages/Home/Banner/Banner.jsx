// import React from 'react';
// import PropTypes from 'prop-types';
import "../Banner/Banner.css"
const Banner = () => {
    return (
        <div className="featuredimage bg-fixed mb-5  h-screen">
            <div className="max-w-6xl">
                <div>
                    <h1>Ayon Saha</h1>
                    <h2>MERN Stack Developer</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur error ullam numquam dignissimos ipsa porro quos doloribus! Recusandae magni illo, dolor veritatis non culpa voluptatibus laudantium ullam cumque reprehenderit dicta.</p>
                    <button className="btn">Download CV</button>
                </div>
                <div>
                    <img src="" alt="profile img" />
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {

};

export default Banner;