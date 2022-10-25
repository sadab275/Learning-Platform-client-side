import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Courses from '../../Courses/Courses/Courses';
import SideNav from '../../Shared/SideNav/SideNav';

const Category = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <h2>This is Category has courses: {allCourses.length}</h2>
            <Container>

                <Row>
                    <Col lg="2">
                        <SideNav></SideNav>
                    </Col>
                    <Col >
                        {
                            allCourses.map(courses => <Courses key={courses.id}
                                courses={courses}></Courses>)
                        }

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Category;