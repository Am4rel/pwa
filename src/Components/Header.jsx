import React from "react";
import { Outlet, NavLink } from 'react-router-dom';

const Header = () => (
    <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/home">
                    <img src="icon.png" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to='/home' className={({isActive}) => (isActive ? "nav-link active" : 'nav-link')} aria-current="page">Home</NavLink>
                        <NavLink to='/calculator' className={({isActive}) => (isActive ? "nav-link active" : 'nav-link')}>Calculator</NavLink>
                    </div>
                </div>
            </div>
        </nav>
        <Outlet />
    </div>
)

export default Header