import React from 'react';
import "./Error.css";
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <section>
            <Link to='/' className="text-shadow">Click here to open</Link>
        </section>
    );
};

export default Error;