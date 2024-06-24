import React from 'react'
import Header from './Header'
import { Container } from 'react-bootstrap'
import { Bucket, Down } from '../Common/Icon'
import Bottom from '../assets/images/Webp/hero-bottom.webp'
import Bottomlayer from '../assets/images/Webp/hero-bottom-layer.webp'

function Herosection() {
    return (
        <>
            <div className="bg-hero position-relative">
                <Header />
                <Container>
                    <h1 className=' ff-maro fw-bold text-60 lh-md-72 text-white mb-0 text-center mt-50'>Presale is <span className=' color-yellow'>Live</span></h1>
                    <div className="d-flex flex-column align-items-center mt-3">
                        <p className=' ff-maro fw-normal text-16 lh-24 text-center color-lightgrey mb-0 max-w-702'>Led by the most advanced AI technology, with a unique burn system to potentially increase its value significantly. Secure your chance to become the next millionaire!</p>
                        <button className=' hero-btn ff-maro fw-bold text-16 lh-24 color-lightblack mt-32'>Buy $Clair <span><Bucket /></span></button>
                    </div>
                    <div className="justify-content-center mt-5 mt-xl-0 mb-neg-43 d-none d-xxl-flex"><img width={810} height={433} src={Bottom} alt="Bottom" className=' w-100 max-w-810' /></div>
                    <div className="d-flex justify-content-center mt-5 mt-xl-0 mb-neg-43 d-xxl-none"><img src={Bottom} alt="Bottom" className=' w-100 max-w-810' /></div>
                    <a href="#down">
                        <div className="scroll-down-btn d-sm-flex justify-content-center align-items-center position-absolute btn-pos cursor-pointer d-none">
                            <Down />
                        </div>
                    </a>
                    <div className="d-flex justify-content-center"><img src={Bottomlayer} alt="Bottomlayer" className=' w-100 max-w-711' /></div>
                </Container>
                <div className="ylw_ellips position-absolute hero_ellips_pos d-none d-lg-block"></div>
            </div>
        </>
    )
}

export default Herosection