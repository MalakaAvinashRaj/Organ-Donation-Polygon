import '../css/bootstrap.css';
import '../css/fontawesome-all.css';
import '../css/style-home.css';
import '../css/styles.css';
import { useState } from 'react';

function SetPatient() {

    const [fullName, setFullName] = useState('');
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');
    const [medicalID, setMedicalID] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [organ, setOrgan] = useState([]);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);

    const Web3 = require('web3');
    const web3 = new Web3("HTTP://127.0.0.1:7545");

    const artifact = require("../contracts/DonorContract.json");

    const deployedContract = artifact.networks[5777];
    const contractAddress = deployedContract.address;

    let accounts = null;
    let contractInstance = null;

    let MAX_GAS = 200000000;

    const handleRegister = async () => {

        console.log(fullName, age, gender, medicalID, bloodType, organ, weight, height)

        accounts = await web3.eth.getAccounts();
        contractInstance = new web3.eth.Contract(
            artifact.abi,
            contractAddress
        );

        const validate = await contractInstance.methods.validatePatient(medicalID).call();
        console.log(validate);

        const gas = await contractInstance.methods.setPatients(fullName, age, gender, medicalID, bloodType, organ, weight, height).estimateGas({ from: accounts[0] })

        MAX_GAS = gas
        console.log(gas)

        contractInstance.methods.setPatients(fullName, age, gender, medicalID, bloodType, organ, weight, height).send({ from: accounts[0], gas: MAX_GAS }).then(function (response) {
            console.log(response);
        })

    }

    const handleOrgon = (e) => {
        organ.push(e.target.value);
        setOrgan(organ);
    }

    return (
        <>
            <div className="container">
                <div className="row center-box">
                    <h3>Register a Patient</h3>
                    <p>Bug to be fixed: Please dont unselect Organ(s)</p>
                    <div className="col-md-4 form-bg">

                        <p>Full Name: <input type="text" id="PatientFullName" placeholder="Full name" value={fullName} onChange={(e) => { setFullName(e.target.value) }} /></p>
                        <p>Age: <input type="text" id="PatientAge" placeholder="Age" value={age} onChange={(e) => { setAge(e.target.value) }} /></p>

                        <form>
                            <label><p>Gender:</p></label>
                            <div id="group">
                                <label>
                                    <input type="radio" name="gender" value="Male" onChange={(e) => { setGender(e.target.value) }} />
                                    <span>Male</span>
                                </label>
                                <label>
                                    <input type="radio" name="gender" value="Female" onChange={(e) => { setGender(e.target.value) }} />
                                    <span>Female</span>
                                </label>
                                <label>
                                    <input type="radio" name="gender" value="Others" onChange={(e) => { setGender(e.target.value) }} />
                                    <span>Others</span>
                                </label>
                            </div>
                        </form>

                        <p>Medical ID: <input type="text" id="PatientMedicalID" placeholder="Patient Medical ID" value={medicalID} onChange={(e) => { setMedicalID(e.target.value) }} /></p>
                        <form>
                            <label><p>Blood Type:</p></label>
                            <select name="bloodtype" id="PatientBloodType" onChange={(e) => { setBloodType(e.target.value) }}>
                                <option value="A-">A-</option>
                                <option value="A+">A+</option>
                                <option value="B-">B-</option>
                                <option value="B+">B+</option>
                                <option value="AB-">AB-</option>
                                <option value="AB+">AB+</option>
                                <option value="O-">O-</option>
                                <option value="O+">O+</option>
                            </select>
                        </form>

                        <form>
                            <div id="checkbox">
                                <label><p>Organ(s):</p></label>
                                <div id="group">
                                    <label>
                                        <input type="checkbox" name="Organ" value="kidney" onChange={handleOrgon} />
                                        <span>Kidney</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="Organ" value="liver" onChange={handleOrgon} />
                                        <span>Liver</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="Organ" value="heart" onChange={handleOrgon} />
                                        <span>Heart</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="Organ" value="eyes" onChange={handleOrgon} />
                                        <span>Eyes</span>
                                    </label>
                                </div>
                            </div>
                        </form>

                        <p>Weight (kg): <input type="text" id="PatientWeight" placeholder="Weight" value={weight} onChange={(e) => { setWeight(e.target.value) }} /></p>
                        <p>Height (cm): <input type="text" id="PatientHeight" placeholder="Height" value={height} onChange={(e) => { setHeight(e.target.value) }} /></p>

                        <div id="register">
                            <button type="submit" className="btn btn-primary register" onClick={handleRegister} >Register</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default SetPatient;
