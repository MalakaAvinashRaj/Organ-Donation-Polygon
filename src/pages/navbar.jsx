import '../css/bootstrap.css';
import '../css/fontawesome-all.css';
import '../css/style-home.css';
import '../css/styles.css';
import { Link } from 'react-router-dom';


export function Navbar() {

    return (
        <header>
            <div className="container nav-container">
                <div className="row">
                    <div className="col-12 row-2">
                        <nav>
                            <ul>
                                <Link to={'/'} className='btn custom-btn' >
                                     Menu
                                </Link>
                            </ul>
                            <ul>
                                <Link to={'/Organ-Donation-Polygon'} className="btn custom-btn"> 
                                    Website
                                </Link>

                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
