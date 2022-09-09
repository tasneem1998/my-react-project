import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [show, setShow] = React.useState(false)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top mb-5">
            <div className="container">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={show} aria-label="Toggle navigation" onClick={()=>setShow(!show)}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={show ? "collapse" : "" +" navbar-collapse"} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;