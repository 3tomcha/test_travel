import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from './Header';
import Searchform from './Searchform';

const Home = () => {
    return (
        <div>
            <Row>
                <Col><Header/></Col>
            </Row>
            <Row>
                <Col><Searchform/></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col></Col>
            </Row>
        </div>
    );
};

export default Home;