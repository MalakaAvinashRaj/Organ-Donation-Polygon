import '../css/bootstrap.css';
import '../css/fontawesome-all.css';
import '../css/style-home.css';
import '../css/styles.css';
import { Link } from 'react-router-dom';


export function Navbar() {

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav>
                            <ul>
                                <Link to={'/'} >
                                    <button className="btn btn-sm btn-primary homepage"> Home Page </button>
                                </Link>
                            </ul>
                            <ul>
                                <Link to={'/Organ-Donation-Polygon'} >
                                    <button className="btn btn-sm btn-primary homepage"> Website </button>
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
