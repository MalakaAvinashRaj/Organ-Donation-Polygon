import { Link } from 'react-router-dom';
// import "../pages-css/home.css";
import '../css/bootstrap.css';
import '../css/fontawesome-all.css';
import '../css/style-home.css';
import '../css/styles.css';

export function Home() {
    return (
        <>
            <div class="container">
                <div class="row center-box">
                    <div class="col-sm-3">
                        <div class="left-content width">
                            <Link to='/SetDonor'><a href="donor-registration.html">
                                <button class="btn btn-lg btn-primary custom">Register Donor</button>
                            </a></Link>

                            <Link to='/GetDonor'><a href="view-donors.html">
                                <button class="btn btn-lg btn-primary custom">View Donors</button>
                            </a></Link>

                        </div>
                    </div>


                    <div class="col-sm-3">
                        <div class="right-content width">
                            <Link to='/SetPatient'><a href="patient-registration.html">
                                <button class="btn btn-lg btn-primary custom">Register Patient</button>
                            </a></Link>

                            <Link to='/GetPatient'><a href="view-patients.html">
                                <button class="btn btn-lg btn-primary custom">View Patients</button>
                            </a></Link>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row center-box">
                        <div class="col-md-4">
                            <div class="transplant-btn" id="size">
                                <Link to='/GetPledge'><a href="view-pledges.html">
                                    <button class="btn btn-lg btn-primary custom">View Pledges</button>
                                </a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
