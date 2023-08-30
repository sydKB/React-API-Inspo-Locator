import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import "./Footer.css"

function Footer() {
    return(    
        <footer className='footer'>
            <div className='tattoo-tips'>
                <Link to="/tips"> Tattoo Tips! </Link>
            </div>
            <Outlet />
        </footer>
    );
}

export default Footer;