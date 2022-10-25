import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const details = useLoaderData();
    console.log(details);
    return (
        <div>
            <Card className="text-center mb-4">
                <Card.Header>{details.heading}</Card.Header>
                <Card.Body>
                    <Card.Title>{details.name}</Card.Title>
                    <Card.Img style={{ height: '300px' }} variant="top" src={details.img} />
                    <Card.Text>
                        {
                            details.description}
                    </Card.Text>
                    <Link to={`/checkout/${details.id}`} variant="primary"><Button>Get Premium Access</Button></Link>
                </Card.Body>

            </Card>
        </div>
    );
};

export default CourseDetails;