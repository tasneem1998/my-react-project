import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <nav className="container-fluid shadow mt-5 mb-0 border-top">
            <div
                className="d-flex justify-content-between align-items-center mx-auto py-4 flex-wrap"
                style={{ width: '80%' }}
            >
                <div className='row align-items-center'>
                    <Link to="/" className="d-flex align-items-center p-0 text-dark">
                        <span className="ml-4 h5 mb-0 font-weight-bold">Tech</span>
                    </Link>
                    <small className="ml-2">&copy; Tech, 2022. All rights reserved.</small>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="p-2 text-secondary">
                        <i className="fa fa-facebook"></i>
                    </div>
                    <div className="mx-3 p-2 text-secondary">
                        <i className="fa fa-instagram"></i>
                    </div>
                    <div className="p-2 text-secondary">
                        <i className="fa fa-twitter"></i>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Footer;