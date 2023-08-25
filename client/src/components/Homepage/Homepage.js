import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Homepage() {
    return(
        <section>
            <h2>LineWork</h2>
            <Link to="/search"> 
                <button className="">Search for inspiration</button>
            </Link>
            <Link to="/maps"> 
                <button className="">Look for shops nearby</button>
            </Link>
            <Link to="/profile"> 
                <button className="">Profile</button>
            </Link>
            <Outlet />
        </section>
    );
}

export default Homepage;



