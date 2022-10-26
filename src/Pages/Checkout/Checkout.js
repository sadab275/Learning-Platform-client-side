import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const out = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(out);
    return (
        <div className='container'>
            <h2>Welcome to the checkout page. </h2>
            <h1>You can now access to our course name : {out.name}</h1>
            <p>Thanks for enrolling this course- <h3>{user?.displayName}</h3></p>
        </div>
    );
};

export default Checkout;