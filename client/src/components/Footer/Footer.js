import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Footer() {
    return(    
        <footer>
            <div className='tattoo-tips'>
                <Link to="/tips"> Tatoo Tips! </Link>
            </div>
            <Outlet />
        </footer>
    );
}

export default Footer;