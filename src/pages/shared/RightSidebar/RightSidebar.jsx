import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import Qzone from '../Qzone/Qzone';


const RightSidebar = () => {
    return (
        <aside>
            <section>
                <div className='mb-4'>
                    <h1 className='mb-3' style={{ color: '#403F3F', fontSize: '20px', fontWeight: '600' }}>Login With</h1>
                    <div>
                        <Button className='w-100 mb-2' variant="outline-primary"><FaGoogle /> Login With Google</Button>{' '}
                        <Button className='w-100' variant="outline-secondary"><FaGithub /> Login With GitHub</Button>{' '}
                    </div>
                </div>
                <div className='mb-4'>
                    <h1 className='mb-3' style={{ color: '#403F3F', fontSize: '20px', fontWeight: '600' }}>Find Us On</h1>
                    <div>
                        <ListGroup>
                            <ListGroup.Item>
                                <FaFacebook /><span className='ms-1'>Facebook</span>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <FaTwitter /><span className='ms-1'>Twitter</span>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <FaInstagram /><span className='ms-1'>Instagram</span>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
                <Qzone></Qzone>
                <div style={{ backgroundImage: "url(bg.png)" }} className='mt-3 py-5 px-4'>
                    <h1 style={{ fontSize: '30px', fontWeight: '700', lineHeight: "45px" }} className='text-white text-center mb-4'>Create an Amazing Newspaper</h1>
                    <p className='text-center text-white mb-4' style={{ fontSize: '18px', lineHeight: '26px' }}>
                        Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                    </p>
                    <div className='d-flex justify-content-center'>
                        <Button className='px-4 py-3' variant="danger">Danger</Button>{' '}
                    </div>
                </div>
            </section>
        </aside>
    );
};

export default RightSidebar;