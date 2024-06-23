import React from 'react'
import { Container } from 'react-bootstrap'
import card1ellips from '../assets/images/SVG/card-1.svg'
import card2ellips from '../assets/images/SVG/card-2.svg'
import card3ellips from '../assets/images/SVG/card-3.svg'
import graph from '../assets/images/Webp/roadmap-bottom-layer.webp'

function Roadmap() {
    return (
        <>
            <div className="bg-road position-relative overflow_hidden" id="roadmap">
                <Container className=' py-roadmap'>
                    <h5 className=' ff-maro fw-semibold text-48 lh-md-57 text-center color-lightwhite mb-0'>Roadmap</h5>
                    <div className="d-flex mt-road justify-content-center gap-3 gap-md-5 justify-content-lg-between justify-content-xl-around flex-wrap flex-lg-nowrap">
                        <div className="roadmap-card mt-card-1">
                            <p className=' ff-maro fw-medium text-32 lh-48 text-white mb-0'>Phase 1</p>
                            <div className="d-flex flex-column gap-2">
                                <div className="d-flex gap-2 align-items-center mt-2 mt-md-3">
                                    <div className=" card-dots"></div>
                                    <p className=' ff-maro fw-medium text-16 lh-24 color-grey mb-0'>Team Recruitment</p>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    <div className=" card-dots"></div>
                                    <p className=' ff-maro fw-medium text-16 lh-24 color-grey mb-0'>Social Media</p>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    <div className=" card-dots"></div>
                                    <p className=' ff-maro fw-medium text-16 lh-24 color-grey mb-0'>Audit Smart Contract</p>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    <div className=" card-dots"></div>
                                    <p className=' ff-maro fw-medium text-16 lh-24 color-grey mb-0'>Whitepaper</p>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    <div className=" card-dots"></div>
                                    <p className=' ff-maro fw-medium text-16 lh-24 color-grey mb-0'>Presale Launch</p>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    <div className=" card-dots"></div>
                                    <p className=' ff-maro fw-medium text-16 lh-24 color-grey mb-0'>Community Growth</p>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    <div className=" card-dots"></div>
                                    <p className=' ff-maro fw-medium text-16 lh-24 color-grey mb-0'>AI Avatars Release</p>
                                </div>
                            </div>
                            <div className="position-absolute line-1-pos d-none d-lg-block"><img src={card1ellips} alt="card1ellips" /></div>
                        </div>
                        <div className="roadmap-card mt-card-2 position-relative">
                            <p className=' ff-maro fw-medium text-32 lh-48 text-white mb-0'>Phase 2</p>
                            <div className="d-flex flex-column gap-2">
                                <div className="d-flex gap-2 align-items-center mt-2 mt-md-3">
                                    <div className=" card-dots"></div>
                                    <p className=' ff-maro fw-medium text-16 lh-24 color-grey mb-0'>Official Launch</p>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    <div className=" card-dots"></div>
                                    <p className=' ff-maro fw-medium text-16 lh-24 color-grey mb-0'>Burns 5%</p>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    <div className=" card-dots"></div>
                                    <p className=' ff-maro fw-medium text-16 lh-24 color-grey mb-0'>Major DEX & CEX Listings</p>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    <div className=" card-dots"></div>
                                    <p className=' ff-maro fw-medium text-16 lh-24 color-grey mb-0'>Coinmarketcap</p>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    <div className=" card-dots"></div>
                                    <p className=' ff-maro fw-medium text-16 lh-24 color-grey mb-0'>CoinGecko</p>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    <div className=" card-dots"></div>
                                    <p className=' ff-maro fw-medium text-16 lh-24 color-grey mb-0'>Influencers Marketing</p>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    <div className=" card-dots"></div>
                                    <p className=' ff-maro fw-medium text-16 lh-24 color-grey mb-0'>More AI Avatars Release</p>
                                </div>
                            </div>
                            <div className="position-absolute line-2-pos d-none d-lg-block"><img src={card2ellips} alt="card2ellips" /></div>
                        </div>
                        <div className="roadmap-card position-relative">
                            <p className=' ff-maro fw-medium text-32 lh-48 text-white mb-0'>Phase 3</p>
                            <div className="d-flex flex-column gap-2">
                                <div className="d-flex gap-2 align-items-center mt-2 mt-md-3">
                                    <div className=" card-dots"></div>
                                    <p className=' ff-maro fw-medium text-16 lh-24 color-grey mb-0'>Burns (5% quarterly)</p>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    <div className=" card-dots"></div>
                                    <p className=' ff-maro fw-medium text-16 lh-24 color-grey mb-0'>Rewards Program</p>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    <div className=" card-dots"></div>
                                    <p className=' ff-maro fw-medium text-16 lh-24 color-grey mb-0'>Multiple Partnerships</p>
                                </div>
                                <div className="d-flex gap-2 align-items-start">
                                    <div className=" card-dots mt-2"></div>
                                    <p className=' ff-maro fw-medium text-16 lh-24 color-grey mb-0 max-w-226'>Create your own AI Avatar Voiceover.</p>
                                </div>
                                <div className="d-flex gap-2 align-items-start">
                                    <div className=" card-dots mt-2"></div>
                                    <p className=' ff-maro fw-medium text-16 lh-24 color-grey mb-0 max-w-178'>AI Metaverse Avatar Play-to-Earn</p>
                                </div>
                            </div>
                            <div className="position-absolute line-3-pos d-none d-lg-block"><img src={card3ellips} alt="card3ellips" /></div>
                        </div>
                    </div>
                </Container>
                <div className="position-absolute layer-pos d-none d-lg-block">
                    <img src={graph} alt="graph" className=' w-100'/>
                </div>
            </div>
        </>
    )
}

export default Roadmap