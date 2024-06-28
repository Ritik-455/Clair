import React from 'react'
import { Container } from 'react-bootstrap'

function Footer() {
    return (
        <>
            <div className="bg-footer d-flex position-relative">
                <Container className=' d-flex flex-column align-items-center justify-content-end'>
                    <h5 className=' ff-maro fw-semibold text-60 lh-md-72 color-yellow mb-0 text-center cursor-pointer'>$CLAIR</h5>
                    <p className=' ff-maro fw-normal text-16 lh-24 color-darkgrey mb-0 max-w-626 text-center mt-20'>In this meme-driven world, laughter is not just a reaction; it's a powerful tool for chang
                        and Baby Sinclair is wielding it with style. The bad players better watch out;
                        the crypto defender is here, armed with memes and ready to act.</p>
                    <ul className=' d-flex gap-32 mt-50 flex-wrap justify-content-center'>
                        <li><a href="#about" className='ff-maro  fw-medium text-16 lh-24 color-lightgrey nav_link position-relative'>About</a></li>
                        <li><a href="#token" className='ff-maro  fw-medium text-16 lh-24 color-lightgrey nav_link position-relative'>Tokenomics</a></li>
                        <li><a href="#audit" className='ff-maro  fw-medium text-16 lh-24 color-lightgrey nav_link position-relative'>Audit</a></li>
                        <li><a href="#roadmap" className='ff-maro  fw-medium text-16 lh-24 color-lightgrey nav_link position-relative'>Roadmap</a></li>
                        <li><a href="#white" className='ff-maro  fw-medium text-16 lh-24 color-lightgrey nav_link position-relative'>White Paper</a></li>
                        <li><a href="#privacy" className='ff-maro  fw-medium text-16 lh-24 color-lightgrey nav_link position-relative'>Privacy</a></li>
                        <li><a href="#cookies" className='ff-maro  fw-medium text-16 lh-24 color-lightgrey nav_link position-relative'>Cookies</a></li>
                        <li><a href="#disclaimer" className='ff-maro  fw-medium text-16 lh-24 color-lightgrey nav_link position-relative'>Disclaimer</a></li>
                    </ul>
                    <div className="full-line my-40 w-100"></div>
                </Container>
                <div className="ylw_ellips position-absolute footer_ellips_pos d-none d-lg-block"></div>
            </div>
        </>
    )   
}

export default Footer