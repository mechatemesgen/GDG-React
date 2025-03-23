import React from 'react';
import { Link } from 'react-router-dom';

function SubNav() {

   
    return (
        <nav className="bg-blue-500 p-4">
            <ul className="flex space-x-4 text-white">
                <li>
                    <Link to="/home" className="hover:underline">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="hover:underline">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="hover:underline">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default SubNav;

