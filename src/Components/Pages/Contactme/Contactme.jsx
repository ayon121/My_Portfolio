// import React from 'react';
// import PropTypes from 'prop-types';

import Swal from "sweetalert2";
import Navbar from "../Shared/Navbar";
import Title from "../Shared/Title";

const Contactme = () => {
    const handleContact = () => {
        Swal.fire({
            title: "Message Send",
            text: "I will Contact you soon",
            icon: "success"
          });
    }
    return (
        <div>
            <Navbar></Navbar>
            <Title title={'Contact Me'}></Title>
            <div className="max-w-5xl mx-auto">
                <form onSubmit={handleContact} className="text-center">
                    <input type="email" name='email' placeholder="Type your email" className="input input-bordered input-error w-full max-w-xs my-2" required /><br />
                    <textarea className="textarea textarea-error w-full max-w-xs my-2 " placeholder="message" required></textarea>
                    <br />
                    <input className="btn text-[#FF444A] border-[#FF444A]" type="submit" value="Send" />
                </form>
            </div>

        </div>
    );
};

Contactme.propTypes = {

};

export default Contactme;