import React, { useState } from "react";
import { myContract, address } from "../connection/connect.js";
import '../css/bootstrap.css';
import '../css/fontawesome-all.css';
import '../css/style-home.css';
import '../css/styles.css';

function SetDonor() {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [medicalID, setMedicalID] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [organs, setOrgans] = useState([]);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const handleRegister = async () => {
    console.log(fullName, age, gender, medicalID, bloodType, organs, weight, height);

    const validate = await myContract.methods.validateDonor(medicalID).call();
    console.log(validate);

    if (!validate) {
      myContract.methods.setDonors(fullName, age, gender, medicalID, bloodType, organs, weight, height).send({ from: address }).then(function (response) {
        console.log(response);
        console.log(`https://mumbai.polygonscan.com/tx/${response.transactionHash}`);
      });
    } else {
      console.log(`Donor with the medical ID ${medicalID} already exists`);
    }
  };

  const handleOrgon = (e) => {
    const selectedOrgans = e.target.checked
      ? [...organs, e.target.value]
      : organs.filter((organ) => organ !== e.target.value);
    setOrgans(selectedOrgans);
  };

  return (
    <>
      <div className="container">
        <div className="row center-box">
          <h3>Register an organ donor</h3>
          <div className="col-md-6 form-bg">
            <p>Full Name: <input type="text" id="DonorFullName" placeholder="Full name" value={fullName} onChange={(e) => setFullName(e.target.value)} /></p>
            <p>Age: <input type="text" id="DonorAge" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} /></p>

            <form>
              <label><p>Gender:</p></label>
              <div id="group">
                <label>
                  <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} />
                  <span>Male</span>
                </label>
                <label>
                  <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} />
                  <span>Female</span>
                </label>
                <label>
                  <input type="radio" name="gender" value="Others" onChange={(e) => setGender(e.target.value)} />
                  <span>Others</span>
                </label>
              </div>
            </form>

            <p>Medical ID: <input type="text" id="DonorMedicalID" placeholder="Donor Medical ID" value={medicalID} onChange={(e) => setMedicalID(e.target.value)} /></p>

            <form>
              <label><p>Blood Type:</p></label>
              <select name="bloodtype" id="DonorBloodType" placeholder='--select--' value={bloodType} onChange={(e) => setBloodType(e.target.value)}>
                <option value="">select blood group</option>
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
                <label><p>Organ(s): </p></label>
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

            <p>Weight (kg): <input type="text" id="DonorWeight" placeholder="Weight" value={weight} onChange={(e) => setWeight(e.target.value)} /></p>
            <p>Height (cm): <input type="text" id="DonorHeight" placeholder="Height" value={height} onChange={(e) => setHeight(e.target.value)} /></p>

            <div id="register">
              <button type="submit" className="btn submit-btn register" onClick={handleRegister} >Register</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SetDonor;
