import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSidebar from '../shared/LeftSidebar/LeftSidebar';
import RightSidebar from '../shared/RightSidebar/RightSidebar';

const Home = () => {
    return (
        <main>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftSidebar></LeftSidebar>
                    </Col>
                    <Col lg={6}>
                        <h1 className='text-center'>this is main</h1>
                    </Col>
                    <Col lg={3}>
                        <RightSidebar></RightSidebar>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default Home;