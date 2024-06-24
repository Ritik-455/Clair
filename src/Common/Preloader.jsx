import React from 'react';
import logo from '../assets/images/SVG/logo.svg'

const Preloader = () => {
    return (
        <div className="preloader-container d-flex justify-content-center align-items-center min-vh-100">
            <div className="">
                <div className=" d-flex gap-2">
                    <img src={logo} alt="logo" className='cursor-pointer' />
                    <p className=' ff-mano fw-semibold text-32 lh-48 color-yellow mb-0 cursor-pointer'>$CLAIR</p>
                </div>
                <div className=" d-flex justify-content-center">
                    <div className="preloader"></div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;