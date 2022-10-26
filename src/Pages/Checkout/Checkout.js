import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const out = useLoaderData();
    console.log(out);
    return (
        <div className='container'>
            <h2>Welcome to the checkout page. </h2>
            <h1>You can now access to our course name : {out.name}</h1>
        </div>
    );
};

export default Checkout;