import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {

    const handleSubmit = event => {
        event.preventDefault();
    }


    return (
        <Form onSubmit={handleSubmit} className='mx-3'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Full Name</Form.Label>
                <Form.Control name='name' type="name" placeholder="Enter name" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Photo URL</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Enter photoURL" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>

            <Button className='mx-3' variant="primary" type="submit">
                Register
            </Button>

            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form>
    );
};

export default Register;