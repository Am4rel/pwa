import React from "react";
import { Outlet, NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <div className="navbar-wrapper">
        <nav className="navbar navbar-expand-sm bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/home">
                    <img src="icon.png" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to='/home' className={({isActive}) => (isActive ? "nav-link active" : 'nav-link')} aria-current="page">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/calculator' className={({isActive}) => (isActive ? "nav-link active" : 'nav-link')}>Calculator</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
        <Outlet />
    </div>
)

export default Header