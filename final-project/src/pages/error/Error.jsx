import React, { Fragment } from 'react';
import "./Error.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import text from '../../text';

const Error = () => {
    const language = useSelector((state) => state.lang.lang);
    const projects = useSelector((state) => state.projects.projects);

    return (
        <Fragment>
            <div className='cube-div'>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
            </div>
            <section>
                <Link to='/' className="text-shadow">{text[language].errorText}</Link>
            </section>
        </Fragment>
    );
};

export default Error;