import React, { useRef } from 'react'
import { Container } from 'react-bootstrap'
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";

function Address() {
    const textRef = useRef();

    const copyToClipboard = () => {
        let copyText = textRef.current.value;
        let isCopy = copy(copyText);
        if (isCopy) {
            toast.success("Copied to Clipboard");
        }
    };
    return (
        <>
            <div className="bg-address position-relative" id="white">
                <Container className='py-address d-flex flex-column align-items-center'>
                    <p className=' ff-maro fw-semibold text-48 lh-md-57 text-center text-white mb-0'><span className=' color-yellow'>$CLAIR</span> Smart Contract Address</p>
                    <div className="input-box mt-4">
                        <div className="d-flex justify-content-between">
                            <input type="text" className=' input-properties w-100 ff-maro fw-normal text-16 lh-24 color-grey' ref={textRef} value='0xFD1929755F73f974648daD00ab491a7C44a00eeD' />
                            <button onClick={copyToClipboard} className='hero-btn ff-maro fw-bold text-16 lh-24 color-lightblack'>Copy</button>
                        </div>
                    </div>
                    <p className=' ff-maro fw-normal text-16 lh-sm-24 text-center color-darkgrey mb-0 max-w-806 mt-32 '>Built on the Ethereum blockchain and powered by the most advanced AI technology, Baby Sinclair has the potential to make millions in both early stages and long-term investment. Our strategic burn system, which will burn millions of $CLAIR quarterly, aims to increase its value significantly. Don't miss out! Get in early and secure your chance to become the next millionaire.</p>
                </Container>
                <div className="ylw_ellips position-absolute address_bottom_ellips_pos d-none d-lg-block"></div>
            </div>
        </>
    )
}

export default Address