// import '../pages-css/navbar.css';
import '../css/bootstrap.css';
import '../css/fontawesome-all.css';
import '../css/style-home.css';
import '../css/styles.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export function Navbar() {

    const logo = require('../images/nav-logo.png')

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav>
                            <Link to={'/'} ><button class="btn btn-sm btn-primary homepage">
                                <a class="hover" href="html/homepage.html">Home Page</a>
                            </button></Link>
                            <ul>
                                <li>
                                    <Link to={'/website'} ><button class="btn btn-sm btn-primary homepage">
                                        <a class="hover" href="html/homepage.html">Visit Website</a>
                                    </button></Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
