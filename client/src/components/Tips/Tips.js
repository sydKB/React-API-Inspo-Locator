import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Tips() {
    return(
        <section>
            <h2>The Needle Drop</h2>
            <h3>Tattoo Styles</h3>
            <ul>
                <li>Traditional</li>
                <li>Neo Traditional</li>
                <li>Japanese</li>
                <li>Tribal</li>
                <li>Biomech</li>
                <li>Fineline(Black & Grey)</li>
                <li>Hand Poke</li>
                <li>New School</li>
            </ul>
            <h3>Things to look for/Thing to avoid</h3>
            <ul>
                <li>Linework</li>
                <li>Shading</li>
                <li>Palete</li>
            </ul>
            <h3>Etiquette</h3>
                <li>Communication</li>
                <li>Day of getting your tattoo</li>
                <li>Tip</li>
        </section>
    );
}

export default Tips;