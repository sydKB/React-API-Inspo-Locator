import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Footer() {
    return(    
        <Header>
            <div className='tattoo-tips'>
                <Link to="/tips"> Tatoo Tips! </Link>
            </div>
        </Header>
    );
}

export default Footer;