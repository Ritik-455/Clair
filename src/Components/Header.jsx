import React from 'react'
import { useState } from 'react';
import { Drop, Lang, Navcross, Navline } from '../Common/Icon';
import logo from '../assets/images/SVG/logo.svg'
import { Container, Nav } from 'react-bootstrap';


function Header() {
    const [show, setfirst] = useState(false);

    if (show === true) {
        document.body.classList.add('overflow_hidden')
    }
    else {
        document.body.classList.remove('overflow_hidden')
    }

    return (
        <>
            <Nav className='nav_box d-flex align-items-center'>
                <Container>
                    <nav className='d-flex justify-content-between align-items-center'>
                        <div className="d-flex gap-12">
                            <img src={logo} alt="logo" className='cursor-pointer' />
                            <p className=' ff-mano fw-semibold text-32 lh-48 color-yellow mb-0 cursor-pointer'>$CLAIR</p>
                        </div>
                        <div className=" d-flex align-items-center gap-60">
                            <div className={`${show ? "end-0" : "right_100"} d-flex gap-5 mobile-view`}>
                                <ul className="d-flex flex-column flex-lg-row gap-4 align-items-center">
                                    <li><a href="#about" className=' ff-maro fw-medium text-16 lh-24 color-grey nav_link position-relative' onClick={() => {
                                        setfirst(!show);
                                    }}>About</a></li>
                                    <li><a href="#token" className=' ff-maro fw-medium text-16 lh-24 color-grey nav_link position-relative' onClick={() => {
                                        setfirst(!show);
                                    }}>Tokenomics</a></li>
                                    <li><a href="#audit" className=' ff-maro fw-medium text-16 lh-24 color-grey nav_link position-relative' onClick={() => {
                                        setfirst(!show);
                                    }}>Audit</a></li>
                                    <li><a href="#roadmap" className=' ff-maro fw-medium text-16 lh-24 color-grey nav_link position-relative' onClick={() => {
                                        setfirst(!show);
                                    }}>Roadmap</a></li>
                                    <li><a href="#white" className=' ff-maro fw-medium text-16 lh-24 color-grey nav_link position-relative' onClick={() => {
                                        setfirst(!show);
                                    }}>White Paper</a></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <div className="d-flex gap-12 align-items-center cursor-pointer">
                                    <Lang />
                                    <Drop />
                                </div>
                                <div class="dropdown-content">
                                    <p className=' ff-maro fw-medium text-16 lh-24 color-grey mb-0 cursor-pointer'>Spanish</p>
                                </div>
                            </div>
                        </div>
                        <div className="menu z-5 d-lg-none" onClick={() => {
                            setfirst(!show);
                        }}>
                            <span>{show === false ? <Navline /> : <Navcross />}</span>
                        </div>
                    </nav>
                </Container>
            </Nav>
        </>
    )
}

export default Header