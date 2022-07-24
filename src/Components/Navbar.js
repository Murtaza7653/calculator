import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.jpg';

export default function Navbar() {

    return (

        <nav className="navbar navbar-dark navbar-expand-lg " style={{ backgroundColor: "#000814" }}>
            <div className="container-fluid">
                <img className=' mx-2' src={logo} alt="logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ fontSize: "20px" }}>
                        <li className="nav-item mx-2 my-3">
                            <Link className="nav-link active" aria-current="page" to="/">Calculator</Link>
                        </li>
                        <li className="nav-item mx-2 my-3">
                            <Link className="nav-link active" to="/about">About Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )

}