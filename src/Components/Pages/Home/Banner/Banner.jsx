// import React from 'react';
// import PropTypes from 'prop-types';
import "../Banner/Banner.css"
import mypic from "../../../../assets/images/mypic2.jpg"
import { Cursor, useTypewriter } from "react-simple-typewriter";
const Banner = () => {
    const [text] = useTypewriter({
        words: ['MERN Stack Developer', 'Full Stack Developer', 'Frontend Developer' , 'React Developer'],
        loop : 6
      })
    return (
        <div className="featuredimage bg-fixed mb-5  h-auto font-poppins">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center">
                <div className="px-4">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl text-white py-2 ">Ayon Saha</h1>
                    <h2 className="text-[#FF444A] text-sm md:text-lg">{text}<Cursor cursorColor='red' /></h2>
                    <p className="py-2 text-xs md:text-sm w-3/4 text-white">I am a web developer. I always try to turn creative ideas into responsive and user-friendly websites. My goal is to be an expert developer.</p>
                    <button className="btn">Download CV</button>
                </div>
                <div>
                    <img className="rounded-full h-3/6" src={mypic} alt="profile img" />
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {

};

export default Banner;