import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-primary text-secondary" >
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar">
                <div className="navbar-nav flex-row">
                    <Link to="/" className="nav-item nav-link text-secondary">Home</Link>
                    <Link to="/menu/resume" className="nav-item nav-link text-secondary">Resume</Link>
                    <Link to="/menu/portfolio" className="nav-item nav-link text-secondary">Portfolio</Link>
                    <Link to="/menu/contact" className="nav-item nav-link text-secondary">Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;