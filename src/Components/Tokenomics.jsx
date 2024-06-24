import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Add, Arrow } from '../Common/Icon'
import Token from '../assets/images/Webp/tokenomic.webp'
import fox from '../assets/images/SVG/fox.svg'
import Hud from '../assets/images/SVG/huddy.svg'

function Tokenomics() {
    return (
        <>
            <div className="bg-token" id='token'>
                <Container className='py-token'>
                    <Row>
                        <Col xs={12} md={7}>
                            <h4 className=' ff-maro fw-semibold text-48 lh-57 color-lightwhite mb-0'>Tokenomics</h4>
                            <div className="d-flex gap-3 align-items-center mt-md-3">  
                                <p className=' ff-maro fw-normal text-24 lh-36 color-grey mb-0'>Baby Sinclair</p>
                                <div className="Clair-box ff-maro fw-normal text-24 lh-36 color-yellow">
                                    $Clair
                                </div>
                            </div>
                            <p className=' ff-maro fw-medium text-16 lh-24 color-grey mb-0 mt-md-4'>Total Tokens</p>
                            <p className=' ff-maro fw-semibold text-40 lh-48 mb-0 color-yellow'>100,000,000,000</p>
                            <div className="d-flex gap-12 flex-column">
                                <div className="d-flex gap-12 align-items-end mt-32">
                                    <Arrow />
                                    <p className=' ff-maro fw-medium text-24 lh-36 mb-0 color-grey mb-0'>1%</p>
                                    <p className=' ff-maro fw-normal text-16 lh-24 color-grey mb-0'>Presale</p>
                                </div>
                                <div className="d-flex gap-12 align-items-end">
                                    <Arrow />
                                    <p className=' ff-maro fw-medium text-24 lh-36 mb-0 color-grey mb-0'>3%</p>
                                    <p className=' ff-maro fw-normal text-16 lh-24 color-grey mb-0'>Marketing</p>
                                </div>
                                <div className="d-flex gap-12 align-items-end">
                                    <Arrow />
                                    <p className=' ff-maro fw-medium text-24 lh-36 mb-0 color-grey mb-0'>5%</p>
                                    <p className=' ff-maro fw-normal text-16 lh-24 color-grey mb-0'>Team - locked for 24 months</p>
                                </div>
                                <div className="d-flex gap-12 align-items-end">
                                    <Arrow />
                                    <p className=' ff-maro fw-medium text-24 lh-36 mb-0 color-grey mb-0'>10%</p>
                                    <p className=' ff-maro fw-normal text-16 lh-24 color-grey mb-0'>Investors - locked for 24 months</p>
                                </div>
                                <div className="d-flex gap-12 align-items-end">
                                    <Arrow />
                                    <p className=' ff-maro fw-medium text-24 lh-36 mb-0 color-grey mb-0'>21%</p>
                                    <p className=' ff-maro fw-normal text-16 lh-24 color-grey mb-0'>Exchange listings & liquidity</p>
                                </div>
                                <div className="d-flex gap-12 align-items-end">
                                    <Arrow />
                                    <p className=' ff-maro fw-medium text-24 lh-36 mb-0 color-grey mb-0'>60%</p>
                                    <p className=' ff-maro fw-normal text-16 lh-24 color-grey mb-0'>Rewards and burns</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={5} className=' d-md-flex align-items-center d-lg-block'>
                            <img src={Token} alt="Token" className=' max-w-491 w-100' />
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-center">
                        <div className="token-box mt-60">
                            <div className="d-flex flex-wrap flex-lg-nowrap gap-80 align-items-center">
                                <div className="d-flex gap-20 align-items-center">
                                    <div className="token-circle-box d-flex justify-content-center align-items-center">
                                        <img src={fox} alt="fox" />
                                    </div>
                                    <Add />
                                    <div className="token-circle-box d-flex justify-content-center align-items-center">
                                        <img src={Hud} alt="fox" />
                                    </div>
                                </div>
                                <div className="">
                                    <p className=' ff-maro fw-semibold text-20 lh-30 color-lightwhite mb-0'>Baby Sinclair Stands Strong with the Shiba Inu Community</p>
                                    <p className=' ff-maro fw-normal text-16 lh-24 color-grey mb-0'>10% of every $CLAIR token sold post-presale will be dedicated to burning SHIB.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Tokenomics