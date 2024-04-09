// import React from 'react';
// import PropTypes from 'prop-types';

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navlinks = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-sm font-bold text-[#FF444A]' : 'text-sm bg-transparent text-[#f8f5f5]'}>Profile</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-sm  font-bold text-[#FF444A]' : 'text-sm  bg-transparent text-[#f8f5f5]'} to="/projects" >My Projects</NavLink></li>
    </>
    return (
        <div className="bg-[#231f20] font-poppins ">
            <div className=" navbar max-w-7xl  mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-[#FF444A] ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#231f20] rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    {/* logo */}
                    <h1 className="text-white text-xl md:text-3xl border-y-2 rounded-md py-1"><span className="text-3xl md:text-4xl text-[#FF444A]">A</span><span className="">S</span></h1>
                </div>
                <div className="navbar-center hidden  lg:flex">
                    <ul className="menu menu-horizontal px-1  ">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/contact"><a className="btn btn-sm sm:btn-sm md:btn-md ">Contact Me</a></Link>
                    
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {

};

export default Navbar;