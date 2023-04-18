import { Link } from 'react-router-dom';
import '../css/bootstrap.css';
import '../css/fontawesome-all.css';
import '../css/style-home.css';
import '../css/styles.css';

export function Home() {
    return (
        <>
            <div className="container">
                <div className="row center-box">
                    <div className="col-sm-3">
                        <div className="left-content width">
                            <Link to='/SetDonor'>
                                <button className="btn btn-lg btn-primary custom">Register Donor</button>
                            </Link>

                            <Link to='/GetDonor'>
                                <button className="btn btn-lg btn-primary custom">View Donors</button>
                            </Link>

                        </div>
                    </div>


                    <div className="col-sm-3">
                        <div className="right-content width">
                            <Link to='/SetPatient'>
                                <button className="btn btn-lg btn-primary custom">Register Patient</button>
                            </Link>

                            <Link to='/GetPatient'>
                                <button className="btn btn-lg btn-primary custom">View Patients</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row center-box">
                        <div className="col-md-4">
                            <div className="transplant-btn" id="size">
                                <Link to='/GetPledge'>
                                    <button className="btn btn-lg btn-primary custom">View Pledges</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
