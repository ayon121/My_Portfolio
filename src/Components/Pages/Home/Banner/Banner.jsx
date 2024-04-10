// import React from 'react';
// import PropTypes from 'prop-types';
import "../Banner/Banner.css"
// import mypic from "../../../../assets/images/Ayon.gif"
import { Cursor, useTypewriter } from "react-simple-typewriter";
import ayonsign from "../../../../assets/images/logo/AyonSaha.svg"

const Banner = () => {
    const [text] = useTypewriter({
        words: ['MERN Stack Developer', 'Full Stack Developer', 'Frontend Developer', 'React Developer'],
        loop: 6
    })
    return (
        <div className="featuredimage bg-fixed mb-5  h-auto font-poppins">
            <div className="max-w-6xl mx-auto flex justify-center pt-2 pb-4">
                <div className="px-2 text-center ">
                    <img className="w-full h-80 " src={ayonsign} alt="ayon saha" />
                    <h2 className="text-white text-sm md:text-lg  -mt-16">{text}<Cursor cursorColor='red' /></h2>
                    <p className="py-2 text-xs md:text-sm w-2/3 mx-auto text-white">A MERN Stack Developer with expertise in building dynamic web applications. Skilled in frontend technologies.Proficient in MongoDB for database management. Adept at delivering user-friendly interfaces and responsive designs.</p>
                    <a href="https://drive.google.com/file/d/1C-vJosdSAjaC8i-u_GbmEY0mrgTmZ6WA/view?usp=drivesdk" target="blank"><button className="btn">Download CV</button></a>

                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {

};

export default Banner;