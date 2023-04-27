import React from 'react';
import Logo from '/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaRegUserCircle } from 'react-icons/fa';

const Header = () => {
    return (
        <header className='container'>
            <section className='d-flex justify-content-center'>
                <div className='py-4'>
                    <div className='d-flex justify-content-center mb-2'>
                        <img style={{ width: '350px', height: '50px' }} src={Logo} alt="" />
                    </div>
                    <p className='text-center'>Journalism Without Fear or Favour</p>
                    <p className='text-center'>{moment().format('dddd, MMMM D, YYYY')}</p>
                </div>
            </section>
            <div className='bg-light p-3 d-flex align-items-center gap-2 mb-5'>
                <Button variant="danger">Latest</Button>
                <Marquee pauseOnHover={true} speed={80}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <nav className='mb-5'>
                <Navbar collapseOnSelect expand="lg" >
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="m-auto">
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Nav>
                            <div className='d-flex align-items-center gap-3'>
                                <Nav.Link href="#deets">
                                    <FaRegUserCircle style={{width:'30px',height:'30px'}} />
                                </Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    <Button variant="secondary">Login</Button>
                                </Nav.Link>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
        </header>
    );
};

export default Header;