import React from 'react';
import { useState } from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [cor, setCor] = useState([]);
    fetch('http://localhost:5000/courses-categories')
        .then(res => res.json())
        .then(data => setCor(data));


    return (
        <div>
            {
                cor.map(c =>

                    <Card className="text-center mb-4">
                        <Card.Header>{c.heading}</Card.Header>
                        <Card.Body>
                            <Card.Title>{c.name}</Card.Title>
                            <Card.Img variant="top" src={c.img} />
                            <Card.Text>
                                {
                                    c.description.length > 150 ?
                                        <p>{c.description.slice(0, 150) + '...'} <Link to={`/courses/${c.id}`}>Read More</Link></p>
                                        :
                                        <p>{c.description}</p>
                                }
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>)
            }


        </div>

    );
};

export default Courses;