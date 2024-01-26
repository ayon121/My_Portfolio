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
            <div className="max-w-6xl mx-auto font-poppins border-4 py-4 my-4 border-[#FF444A] rounded-3xl">
                <div className="flex flex-col md:flex-row px-4 mt-5 gap-4 ">
                    <div className="w-1/2 px-2">

                        <p>Welcome to my contact page, where ideas meet expertise. Let's create something extraordinary together – reach out and let the collaboration begin</p>
                    </div>
                    {/* login form */}

                    <div className=" w-2/4">
                        <h1 className="text-2xl md:text-3xl px-3 my-3">Unlocking Digital Potential with Innovative Solutions</h1>
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