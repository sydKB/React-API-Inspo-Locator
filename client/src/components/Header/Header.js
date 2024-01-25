import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Auth from "../../utils/auth";
import "./Header.css"

function Header() {
    return(
        <header>
            <div className='titleheader'>
                <Link to="/"> LineWork </Link>
            </div>

            <div>
                <nav className='nav'>
                    <Link to="/search"> Search </Link>
                    <Link to="/map"> Maps </Link>
                    <Link to="/profile"> Profile </Link>
                    {Auth.loggedIn() ? (
                        <Link to="/login">
                            <button
                            className="logout-btn"
                            onClick={Auth.logout}>
                            Log out
                            </button>
                        </Link>
                        ) : (
                        <Link to="/login">
                            <button className="login-button">
                            Login
                            </button>
                        </Link>
                    )}
                </nav>
            </div>
            <Outlet />
        </header>
    );
}

export default Header;