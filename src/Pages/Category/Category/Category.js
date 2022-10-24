import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Courses from '../../Courses/Courses/Courses';
import SideNav from '../../Shared/SideNav/SideNav';

const Category = () => {
    return (
        <div>
            <h2>This is Category</h2>
            <Container>

                <Row>
                    <Col lg="2">
                        <SideNav></SideNav>
                    </Col>
                    <Col >
                        <Courses></Courses>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Category;