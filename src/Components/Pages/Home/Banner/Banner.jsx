// import React from 'react';
// import PropTypes from 'prop-types';
import "../Banner/Banner.css"
// import mypic from "../../../../assets/images/Ayon.gif"
import { Cursor, useTypewriter } from "react-simple-typewriter";
import ayonsign from "../../../../assets/images/logo/AyonSaha.svg"
import { motion } from 'framer-motion'
const Banner = () => {
    const [text] = useTypewriter({
        words: ['MERN Stack Developer', 'Full Stack Developer', 'Frontend Developer', 'React Developer'],
        loop: 6
    })
    return (
        <div className="featuredimage bg-fixed mb-5  h-auto font-poppins">
            <div className="max-w-6xl mx-auto flex justify-center pt-2 pb-4">
                <div className="px-2 text-center ">
                    <motion.img
                        initial={{ y: -300, opacity: 0 }}
                        animate={{ y: 10, opacity: 1 }}
                        transition={{ delay: 1.7, duration: 2 ,type : 'spring', stiffness : 400 }}

                        className="w-full h-80 " src={ayonsign} alt="ayon saha" />
                    <motion.div 
                    initial={{opacity : 0}}
                    animate={{opacity : 1}}
                    transition={{ delay: 3, duration: 0.5 }}>
                        <h2 className="text-white text-sm md:text-lg  -mt-16">{text}<Cursor cursorColor='red' /></h2>
                        <p className="py-4 text-xs md:text-sm w-2/4  mx-auto text-white">A MERN Stack Developer with expertise in building dynamic web applications. Skilled in frontend technologies.Proficient in MongoDB for database management. Adept at delivering user-friendly interfaces and responsive designs.</p>
                    </motion.div>
                    <a href="https://drive.google.com/file/d/1M6jvZz1VobEJCzJfCGYM6i7ZFzrfrrq1/view?usp=drive_link" target="blank"><motion.button
                        initial={{ x: '-120vh' }}
                        animate={{ x: 0 }}
                        transition={{ delay: 5, duration: 1 }}
                        className="btn">Download CV</motion.button></a>

                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {

};

export default Banner;