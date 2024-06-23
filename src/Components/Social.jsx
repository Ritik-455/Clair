import React from 'react'
import { Container } from 'react-bootstrap'
import { Discord, Telegram, Twitter } from '../Common/Icon'
import dino from '../assets/images/Webp/dino-ellips.png'


function Social() {
    return (
        <>
            <div className=" position-relative">
                <Container className=' d-flex justify-content-center py-social'>
                    <div className="social-box">
                        <p className=' ff-maro fw-semibold text-48 lh-md-57 text-white mb-0 text-center'>Our<span className=' color-yellow'> Socials</span></p>
                        <p className=' ff-maro fw-normal text-16 lh-24 text-center color-darkgrey mb-0 mt-3'>Join us on social media for exclusive giveaways and stay connected!</p>
                        <p className=' ff-maro fw-normal text-20 lh-30 color-yellow mb-0 text-center mt-2 mt-lg-4'>“Exciting Releases of 'Bad Players' Avatars Coming Soon: Be Ready for the Fun!"</p>
                        <div className="d-flex gap-3 justify-content-center mt-32">
                            <a href="https://discord.com/" target='blank'>
                                <div className="social-icon d-flex justify-content-center align-items-center cursor-pointer position-relative z-2">
                                    <Discord />
                                </div>
                            </a>
                            <a href="https://x.com/?lang=en" target="blank">
                                <div className="social-icon d-flex justify-content-center align-items-center cursor-pointer position-relative z-2">
                                    <Twitter />
                                </div>
                            </a>
                            <a href="https://telegram.org/" target='blank'>
                                <div className="social-icon d-flex justify-content-center align-items-center cursor-pointer position-relative z-2">
                                    <Telegram />
                                </div>
                            </a>
                        </div>
                    </div>
                </Container>
                <div className="position-absolute dino-about-pos2"><img src={dino} alt="dino" className='opacity-50' /></div>
            </div>
        </>
    )
}

export default Social