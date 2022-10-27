import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';


const CourseDetails = () => {
    const details = useLoaderData();
    console.log(details);
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
        onAfterPrint: () => alert('Downloaded')

    })
    return (
        <div >
            <Button onClick={handlePrint}>Pdf Scan</Button>
            <Card className="text-center mb-4" ref={componentRef} style={{ width: '100%', height: window.innerHeight }}>
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