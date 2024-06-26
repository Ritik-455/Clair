import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from "react-slick";
import full from '../assets/images/Webp/fully-img.webp'
import Coin from '../assets/images/Webp/coinbase.webp'
import Kar from '../assets/images/Webp/kraken.webp'
import Ku from '../assets/images/Webp/ku.webp'
import Dk from '../assets/images/Webp/Dk.webp'
import Uni from '../assets/images/Webp/uniswap.webp'
import Gok from '../assets/images/Webp/Gecko.webp'
import Behind from '../assets/images/Webp/fully-behind-img.webp'

function Fully() {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 3000,
        autoplaySpeed: 0,
        slidesToShow: 1.5,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className="bg-fully position-relative" id="audit">
                <Container className=' py-fully'>
                    <Row>
                        <Col xs={12} lg={6} className=' d-lg-flex justify-content-center' data-aos="fade-down">
                            <div className="position-relative d-flex justify-content-center d-sm-block"><img src={full} alt="fully" className='w-170' />
                                <div className="position-absolute img-pos d-none d-lg-block">
                                    <img src={Behind} alt="Behind" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} lg={6} className=' d-flex flex-column justify-content-center mt-3 mt-lg-0' data-aos="fade-down">
                            <p className=' ff-maro fw-normal text-20 lh-30 mb-0 color-grey'>Rest easy knowing that $CLAIR is </p>
                            <p className=' ff-maro fw-semibold text-32 lh-48 color-yellow mb-0 mt-10'>Fully Audited and 100% Secure.</p>
                            <p className=' ff-maro fw-normal text-20 lh-30 color-lightgrey mb-0 mt-10'>Zero Room for Rug Pulls: Invest with Confidence.</p>
                            <button className=' hero-btn ff-maro fw-bold text-16 lh-24 color-lightblack mt-32 w-content'>Audit</button>
                        </Col>
                    </Row>
                    <div className=' full-line w-100 mt-line'></div>
                    <Row className=' mt-3 mt-lg-5'>
                        <Col xs={12} lg={6} className=' d-lg-flex justify-content-center' data-aos="fade-up">
                            <div className="">
                                <p className=' ff-maro fw-semibold text-32 lh-48 mb-0 text-white'>Listing on<span className=' color-yellow'> Major Exchanges</span></p>
                                <p className=' ff-maro fw-normal text-20 lh-30 color-grey mb-0 max-w-475 mt-lg-3'>Baby Sinclair’s Team is in action to secure the<span className=' color-yellow'> $CLAIR </span>listing on major exchanges. Exciting milestones ahead.</p>
                            </div>
                        </Col>
                        <Col xs={12} lg={6} className='mt-3 mt-lg-0' data-aos="fade-up">
                            <div className="slider-box">
                                <Slider {...settings}>
                                    <div className="slider-inner-box">
                                        <img src={Coin} alt="Coin" />
                                    </div>
                                    <div className="slider-inner-box">
                                        <img src={Kar} alt="Coin" />
                                    </div>
                                    <div className="slider-inner-box">
                                        <img src={Ku} alt="Coin" />
                                    </div>
                                    <div className="slider-inner-box">
                                        <img src={Dk} alt="Coin" />
                                    </div>
                                    <div className="slider-inner-box">
                                        <img src={Uni} alt="Coin" />
                                    </div>
                                    <div className="slider-inner-box">
                                        <img src={Gok} alt="Coin" />
                                    </div>
                                </Slider>
                                <div className="d-flex gap-3 mt-25">
                                    <div className="line-1"></div>
                                    <div className="line-2"></div>
                                    <div className="line-3"></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="ylw_ellips position-absolute fullly_bottom_ellips_pos d-none d-lg-block"></div>
            </div>
        </>
    )
}

export default Fully