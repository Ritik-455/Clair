import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Container } from 'react-bootstrap'

function Frequent() {
    return (
        <>
            <div className="bg-freq">
                <Container className=' py-freq'>
                    <h3 className=' ff-maro fw-semibold text-48 lh-md-57 text-center color-lightwhite mb-0'>Frequently Asked<span className=' color-yellow'> Questions</span></h3>
                    <Accordion className=' d-flex flex-column gap-4 align-items-center mt-60'>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className=' ff-maro fw-semibold text-16 lh-24 color-lightwhite'>WHAT IS $CLAIR?</Accordion.Header>
                            <Accordion.Body>
                                <p className='ff-maro fw-normal text-16 lh-24 color-darkgrey max-w-510 mb-0'>
                                    Built on the Ethereum blockchain and powered by the most advanced
                                    AI technology, Baby Sinclair has the potential to make millions.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className=' ff-maro fw-semibold text-16 lh-24 color-lightwhite'>Arcu in pellentesque sit odio.</Accordion.Header>
                            <Accordion.Body>
                            <p className='ff-maro fw-normal text-16 lh-24 color-darkgrey max-w-510 mb-0'>
                                    Built on the Ethereum blockchain and powered by the most advanced
                                    AI technology, Baby Sinclair has the potential to make millions.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header className=' ff-maro fw-semibold text-16 lh-24 color-lightwhite'>Lorem gravida feugiat aliquet arcu porttitor sodales tellus habitant sed.</Accordion.Header>
                            <Accordion.Body>
                            <p className='ff-maro fw-normal text-16 lh-24 color-darkgrey max-w-510 mb-0'>
                                    Built on the Ethereum blockchain and powered by the most advanced
                                    AI technology, Baby Sinclair has the potential to make millions.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header className=' ff-maro fw-semibold text-16 lh-24 color-lightwhite'>Metus augue dictumst sit amet.</Accordion.Header>
                            <Accordion.Body>
                            <p className='ff-maro fw-normal text-16 lh-24 color-darkgrey max-w-510 mb-0'>
                                    Built on the Ethereum blockchain and powered by the most advanced
                                    AI technology, Baby Sinclair has the potential to make millions.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header className=' ff-maro fw-semibold text-16 lh-24 color-lightwhite'>Elementum viverra tellus tincidunt nunc odio at id ipsum.</Accordion.Header>
                            <Accordion.Body>
                            <p className='ff-maro fw-normal text-16 lh-24 color-darkgrey max-w-510 mb-0'>
                                    Built on the Ethereum blockchain and powered by the most advanced
                                    AI technology, Baby Sinclair has the potential to make millions.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header className=' ff-maro fw-semibold text-16 lh-24 color-lightwhite'>Sagittis morbi aliquam facilisis ornare lacus tempus massa.</Accordion.Header>
                            <Accordion.Body>
                            <p className='ff-maro fw-normal text-16 lh-24 color-darkgrey max-w-510 mb-0'>
                                    Built on the Ethereum blockchain and powered by the most advanced
                                    AI technology, Baby Sinclair has the potential to make millions.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header className=' ff-maro fw-semibold text-16 lh-24 color-lightwhite'>Elementum at dui varius consequat fringilla.</Accordion.Header>
                            <Accordion.Body>
                            <p className='ff-maro fw-normal text-16 lh-24 color-darkgrey max-w-510 mb-0'>
                                    Built on the Ethereum blockchain and powered by the most advanced
                                    AI technology, Baby Sinclair has the potential to make millions.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </div>
        </>
    )
}

export default Frequent