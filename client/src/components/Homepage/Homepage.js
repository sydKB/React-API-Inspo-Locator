import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import "./Homepage.css"
function Homepage() {
    return(
        <section className='homepage'>
            <h2 className='title'>LineWork</h2>
            <div className='buttons-container'>
            <Link to="/search"> 
                <button className="buttons">Search for inspiration</button>
            </Link>
            <Link to="/map"> 
                <button className="buttons">Look for shops nearby</button>
            </Link>
            <Link to="/profile"> 
                <button className="buttons">Profile</button>
            </Link>
            </div>
            <Outlet />
        </section>
    );
}

export default Homepage;



