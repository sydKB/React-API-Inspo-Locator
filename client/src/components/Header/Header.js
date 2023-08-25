import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Header() {
    return(
        <header>
            <div>
                <Link to="/"> LineWork </Link>
            </div>

            <div>
                <nav>
                    <Link to="/search"> Search </Link>
                    <Link to="/maps"> Maps </Link>
                    <Link to="/profile"> Profile </Link>
                    <Link to="/login"> 
                        <button className="btn btn-lg btn-danger">
                            Login
                        </button>
                    </Link>
                </nav>
            </div>
            <Outlet />
        </header>
    );
}

export default Header;