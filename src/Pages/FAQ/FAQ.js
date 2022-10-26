import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is the courses duration</Accordion.Header>
                    <Accordion.Body>
                        Every courses has different duration containing 3 months to 6 months.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Do you provide certificate after the completion of course?</Accordion.Header>
                    <Accordion.Body>
                        Yes, we provide certificate of course completion.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Do you provide job placement after the course?</Accordion.Header>
                    <Accordion.Body>
                        Yes, for certain poeple who can qualify according to our requirements.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Any support session for this course?</Accordion.Header>
                    <Accordion.Body>
                        Yes, we have daily support session in 3 different slots.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;