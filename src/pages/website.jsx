import { Link } from 'react-router-dom';
import '../css/bootstrap.css';
import '../css/fontawesome-all.css';
import '../css/style-home.css';
import '../css/styles.css';

function Website() {
    return (
        <>
            <main>
                <div className="container">
                    <div className="row center-box">

                        <div className="col-md-7 banner">
                            <h1>Pledge To Become A Donor</h1>
                            <h3>More than 100,000 people are waiting for a lifesaving transplant. You can help.</h3>
                            <button className="btn btn-lg btn-success">
                                <Link to='/SetPledge'><a className="hover" href="donor-pledge.html">Pledge to Donate</a></Link>
                            </button>
                        </div>

                        <div className="col-md-4">
                            <div className="slider"><img src="../images/header-image-new.png" alt="" /></div>
                        </div>

                    </div>
                </div>

                <div className="container-bg-1">
                    <div className="container">
                        <h1 id="heading">FAQ's</h1>
                        <div className="row center-box">
                            <div className="col-12">
                                <div className="accordian">
                                    <div>
                                        <input type="checkbox" name="example_accordian" id="section1" className="accordian_input" />
                                        <label for="section1" className="accordian_label">Who can be a donor?</label>
                                        <div className="accordian_content">
                                            <p>Who can be a donor?</p>
                                            <p>People of all ages and medical histories should consider themselves potential donors. Your medical condition at the time of death will determine what organs and tissues can be donated.

                                                A national system matches available organs from the donor with people on the waiting list based on blood type, body size, how sick they are, donor distance, tissue type and time on the list. Sexual orientation, gender, gender identity or expression, race, income, celebrity and social status are never considered.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="example_accordian" id="section2" className="accordian_input" />
                                        <label for="section2" className="accordian_label">How does the deceased donation process work?</label>
                                        <div className="accordian_content">
                                            <p>How does the deceased donation process work?</p>
                                            <p>Deceased organ donation is the process of giving an organ or a part of an organ, at the time of the donor’s death, for the purpose of transplantation to another person. Only after all efforts to save the patient’s life have been exhausted, tests have been performed to confirm the absence of brain or brainstem activity, and brain death has been declared, is donation a possibility.

                                                The state donor registry and National Donate Life Registry are searched securely online to determine if the patient has authorized donation. If the potential donor is not found in a registry, their next of kin or legally authorized representative is offered the opportunity to authorize the donation. Donation and transplantation professionals follow national policy to determine which organs can be transplanted and to which patients on the national transplant waiting list the organs are to be allocated.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="example_accordian" id="section3" className="accordian_input" />
                                        <label for="section3" className="accordian_label">Is there a cost to be an organ, eye and tissue donor?</label>
                                        <div className="accordian_content">
                                            <p>Is there a cost to be an organ, eye and tissue donor?</p>
                                            <p>There is no cost to the donor family or estate for donation. The donor family pays only for medical expenses before death and costs associated with funeral arrangements.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="example_accordian" id="section4" className="accordian_input" />
                                        <label for="section4" className="accordian_label">Does registering as a donor change my patient care?</label>
                                        <div className="accordian_content">
                                            <p>Does registering as a donor change my patient care?</p>
                                            <p>Your life always comes first. Doctors work hard to save every patient life, but sometimes there is a complete and irreversible loss of brain function. The patient is declared clinically and legally dead. Only then is donation an option.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="example_accordian" id="section5" className="accordian_input" />
                                        <label for="section5" className="accordian_label">I want to learn more about living donation. Where should I look?</label>
                                        <div className="accordian_content">
                                            <p>I want to learn more about living donation. Where should I look?</p>
                                            <p>Living organ donation offers another choice for some transplant candidates, reducing their time on the waiting list and leading to better long term outcomes for the recipient.

                                                Living tissue donation, birth tissue, is used to promote healing and to treat burns and painful wounds.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div className="container">
                    <div className="row center-box">
                        <div className="col-4">
                            <div className="footer-logo"><img src="../images/organ-donation-platform-logo-white.svg" alt="" /></div>
                        </div>

                        <div className="col-12">
                            <div id="copyright">
                                <p>Copyright © 2023 Organ Donation Platform - All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Website;
