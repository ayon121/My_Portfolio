// import React from 'react';
// import PropTypes from 'prop-types';


import Navbar from "../Shared/Navbar";
import Title from "../Shared/Title";

import ContactForm from "./ContactForm";
import contactAnimation from "../../../../public/contactus.json"
import Lottie from "lottie-react";
const Contactme = () => {


    return (
        <div>
            <Navbar></Navbar>
            <Title title={'Contact Me'}></Title>
            <div className="max-w-6xl mx-auto font-poppins     px-4 ">
                <div className="flex flex-col md:flex-row px-4 mt-5 gap-4 items-center  my-4 py-4 border-[#FF444A] rounded-3xl border-4">
                    <div className="w-full md:w-1/2 px-2 text-center">
                        <div className="hidden md:block">
                            <Lottie animationData={contactAnimation} loop={true} className="w-full md:w-4/5 lg:w-4/6 h-2/3"></Lottie>
                        </div>
                        
                    </div>
                    {/* login form */}

                    <div className=" w-full md:w-2/4">
                        <h1 className="text-2xl md:text-3xl text-center md:text-start px-1 md:px-3 my-3">Unlocking Digital Potential with Innovative Solutions</h1>
                        <div className=" md:hidden block">
                            <Lottie animationData={contactAnimation} loop={true} className="w-full md:w-4/5 lg:w-4/6 h-2/3"></Lottie>
                        </div>
                        <p className="w-full md:w-4/5  px-3 my-3">Welcome to my contact page, where ideas meet expertise. Let's create something extraordinary together – reach out and let the collaboration begin</p>
                        <ContactForm></ContactForm>

                    </div>

                </div>

            </div>

        </div>
    );
};

Contactme.propTypes = {

};

export default Contactme;