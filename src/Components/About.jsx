import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Coin, Dots, Group, Time, Tlogo, Triangle } from '../Common/Icon'
import whiteline from '../assets/images/SVG/white-line.svg'
import Yellowline from '../assets/images/SVG/yellow-line.svg'
import dino from '../assets/images/Webp/dino-ellips.png'

function About() {
    const initialTime = { hours: 12, minutes: 49, seconds: 19 };
    const [timeLeft, setTimeLeft] = useState(initialTime);
    useEffect(() => {
        const countdown = setInterval(() => {
            if (timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
                clearInterval(countdown);
            } else {
                if (timeLeft.seconds > 0) {
                    setTimeLeft(prevTime => ({
                        ...prevTime,
                        seconds: prevTime.seconds - 1
                    }));
                } else {
                    if (timeLeft.minutes > 0) {
                        setTimeLeft(prevTime => ({
                            hours: prevTime.hours,
                            minutes: prevTime.minutes - 1,
                            seconds: 59
                        }));
                    } else {
                        setTimeLeft(prevTime => ({
                            hours: prevTime.hours - 1,
                            minutes: 59,
                            seconds: 59
                        }));
                    }
                }
            }
        }, 1000);

        return () => clearInterval(countdown);
    }, [timeLeft]);

    return (
        <>

            <div className=" position-relative">
                <Container className=' d-flex flex-column align-items-center pb-about'>
                    <div className="about-box mt-2 mt-xl-5">
                        <div className="d-flex gap-about-box flex-wrap flex-md-nowrap justify-content-center justify-content-lg-start">
                            <div className="">
                                <div className=" d-flex gap-28 align-items-center">
                                    <div className="">
                                        <p className=' ff-maro fw-normal text-16 lh-24 color-grey mb-0'>1 $Clair</p>
                                        <p className=' ff-maro fw-semibold text-16 lh-24 color-yellow mb-0'>0.00387 $</p>
                                    </div>
                                    <div className="about-line"></div>
                                    <div className="">
                                        <p className=' ff-maro fw-normal text-16 lh-24 color-grey mb-0'>Raised Amount</p>
                                        <p className=' ff-maro fw-semibold text-16 lh-24 color-yellow mb-0'>332,123$</p>
                                    </div>
                                </div>
                                <div className="d-flex gap-14  mt-3">
                                    <div className="icon-box d-flex justify-content-center align-items-center">
                                        <Coin />
                                    </div>
                                    <div className="icon-box d-flex justify-content-center align-items-center">
                                        <Tlogo />
                                    </div>
                                    <div className="icon-box d-flex justify-content-center align-items-center">
                                        <Triangle />
                                    </div>
                                    <div className="icon-box d-flex justify-content-center align-items-center">
                                        <Group />
                                    </div>
                                </div>
                                <button className="buy-btn ff-maro fw-bold text-16 lh-24 color-lightblack mt-32">Buy Now</button>
                            </div>
                            <div className="" id="down">
                                <div className="max-w-364 d-flex justify-content-between w-100 position-relative">
                                    <div className="">
                                        <p className=' ff-maro fw-normal text-16 lh-24 color-grey mb-0'>Tokens are Sold</p>
                                        <p className=' ff-maro fw-semibold text-16 lh-24 color-yellow mb-0'>98,212,738</p>
                                    </div>
                                    <div className="">
                                        <p className=' ff-maro fw-normal text-16 lh-24 color-grey mb-0'>Tokens Remaining</p>
                                        <p className=' ff-maro fw-semibold text-16 lh-24 text-white mb-0'>80,212,738 </p>
                                    </div>
                                    <div className="position-absolute white-pos d-none d-sm-block d-md-none d-xl-block">
                                        <img src={whiteline} alt="whiteline" />
                                    </div>
                                    <div className="position-absolute ylw-pos d-none d-sm-block">
                                        <img src={Yellowline} alt="Yellowline" />
                                    </div>
                                </div>
                                <input type="range" className=' mt-3' />
                                <p className=' ff-maro fw-normal text-14 lh-21 color-darkgrey mb-0 mt-neg-10 mt-1'>Purchase $Clair fast until the price increase.</p>
                                <div className="d-flex justify-content-between gap-3 align-items-center mt-3 flex-wrap">
                                    <div className="">
                                        <div className="d-flex gap-10 align-items-center">
                                            <Time />
                                            <p className=' ff-maro fw-normal text-16 lh-208 color-lightwhite mb-0'>Price
                                                <span className="d-md-block">increase in</span></p>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-1 align-items-center mt-3 mt-sm-0">
                                        <div className="w_50">
                                            <p className=' ff-maro fw-normal text-14 lh-21 color-darkgrey mb-0 text-center'>Days</p>
                                            <div className="time-box d-flex align-items-center justify-content-center">
                                                <p className=' ff-maro fw-normal text-24 lh-36 color-lightwhite mb-0'>00</p>
                                            </div>
                                        </div>
                                        <Dots />
                                        <div className="w_50">
                                            <p className=' ff-maro fw-normal text-14 lh-21 color-darkgrey mb-0 text-center'>Hours</p>
                                            <div className="time-box d-flex align-items-center justify-content-center">
                                                <p className=' ff-maro fw-normal text-24 lh-36 color-lightwhite mb-0'>{timeLeft.hours}</p>
                                            </div>
                                        </div>
                                        <Dots />
                                        <div className="w_50">
                                            <p className=' ff-maro fw-normal text-14 lh-21 color-darkgrey mb-0 text-center'>Mins</p>
                                            <div className="time-box d-flex align-items-center justify-content-center">
                                                <p className=' ff-maro fw-normal text-24 lh-36 color-lightwhite mb-0'>{timeLeft.minutes}</p>
                                            </div>
                                        </div>
                                        <Dots />
                                        <div className="w_50">
                                            <p className=' ff-maro fw-normal text-14 lh-21 color-darkgrey mb-0 text-center'>Secs</p>
                                            <div className="time-box d-flex align-items-center justify-content-center">
                                                <p className=' ff-maro fw-normal text-24 lh-36 color-lightwhite mb-0'>{timeLeft.seconds}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 className=' ff-maro fw-semibold text-48 lh-57 text-white mb-0 mt-about'>About <span className=' color-yellow'>$CLAIR</span></h3>
                    <p className=' ff-maro fw-normal text-16 lh-24 text-center color-darkgrey mb-0 text-center mt-lg-3'>As you navigate through the avatars, you'll find each one has a unique voice, bringing laughter and a touch <span className="d-lg-block">of sarcasm to the otherwise serious discussions in the crypto space.</span></p>
                    <p className=' ff-maro fw-normal text-16 lh-24 text-center color-darkgrey mb-0 text-center mt-12'>In a landscape where tensions can run high, Baby Sinclair’s memes serve as a reminder that, sometimes, <span className="d-lg-block">the best way to confront challenges is with a good laugh.</span></p>
                    <p className=' ff-maro fw-normal text-16 lh-24 text-center color-darkgrey mb-0 text-center mt-12'>In this meme-driven world, laughter is not just a reaction; it's a powerful tool for change, and Baby Sinclair is wielding  <span className="d-lg-block">it with style.The bad players better watch out; the crypto defender is here, armed with memes and ready to act.</span></p>
                    <button className=' hero-btn ff-maro fw-bold text-16 lh-24 color-lightblack mt-32'>Learn More</button>
                </Container>
                <div className="position-absolute dino-about-pos d-none d-lg-block">
                    <img src={dino} alt="dino" />
                </div>
            </div>
        </>
    )
}

export default About