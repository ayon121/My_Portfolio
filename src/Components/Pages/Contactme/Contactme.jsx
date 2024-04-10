// import React from 'react';
// import PropTypes from 'prop-types';


import Navbar from "../Shared/Navbar";
import Title from "../Shared/Title";

import ContactForm from "./ContactForm";


const Contactme = () => {


    return (
        <div>
            <Navbar></Navbar>
            <Title title={'Contact Me'}></Title>
            <div className="max-w-2xl mx-auto font-poppins     px-4 ">
                <div className="flex flex-col md:flex-row px-4 mt-5 items-center  my-4 py-4 border-[#FF444A] rounded-3xl border-4">
                    {/* login form */}

                    <div className=" w-full">
                        <h1 className="text-2xl md:text-3xl text-center md:text-start px-1 md:px-3 ">Unlocking Digital Potential with Innovative Solutions</h1>
                        <p className="w-full md:w-4/5  px-3 my-3">Welcome to my contact page, where ideas meet expertise. Lets create something extraordinary together – reach out and let the collaboration begin</p>
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