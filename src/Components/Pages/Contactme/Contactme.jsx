// import React from 'react';
// import PropTypes from 'prop-types';


import Navbar from "../Shared/Navbar";
import Title from "../Shared/Title";
import { useForm, ValidationError } from '@formspree/react';
const Contactme = () => {
    const [state, handleSubmit] = useForm("mdoqawba");
    if (state.succeeded) {
        return <div>
            <Navbar></Navbar>
            <Title title={'Contact Me'}></Title>
            <p className="text-2xl md:text-3xl font-extrabold mt-5 text-center">Thanks For Contacting</p>
        </div>
    }

    return (
        <div>
            <Navbar></Navbar>
            <Title title={'Contact Me'}></Title>
            <div className="max-w-5xl mx-auto ">
                <div className="flex flex-col md:flex-row px-4 mt-5 gap-4 border-4">
                    <div>
                        <h1>Contact</h1>
                    </div>
                    {/* login form */}
                    <div>
                        <form onSubmit={handleSubmit} className="text-center">
                            <input id="email"
                                type="email"
                                name="email"
                                placeholder="Type your email"
                                className="input input-bordered input-error w-full max-w-xs my-2"
                                required />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            /><br />
                            <textarea id="message"
                                name="message"
                                className="textarea textarea-error w-full max-w-xs my-2 " placeholder="message" required></textarea>
                            <br />
                            <input type="submit" disabled={state.submitting} className="btn text-[#FF444A] border-[#FF444A]" value="Send" />
                        </form>
                    </div>

                </div>

            </div>

        </div>
    );
};

Contactme.propTypes = {

};

export default Contactme;