import { useState, useEffect } from "react";
import { myContract } from "../connection/connect.js";
import '../css/styles.css';

export function GetPatient() {
  const [isLoading, setIsLoading] = useState(true);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    viewPatients();
  }, []);

  const viewPatients = async () => {
    try {
      const patientCount = await myContract.methods.getCountOfPatients().call();
      const patientIDs = await myContract.methods.getAllPatientIDs().call();

      // eslint-disable-next-line no-restricted-globals
      console.log(patientCount.toString());

      const patientPromises = patientIDs.map(async (patientID, index) => {
        const result = await myContract.methods.getPatient(patientID).call();
        return {
          Index: index + 1,
          FullName: result[0],
          Age: result[1],
          Gender: result[2],
          MedicalID: patientID,
          BloodType: result[3],
          Organ: result[4],
          Weight: result[5],
          Height: result[6],
        };
      });

      const patientsData = await Promise.all(patientPromises);
      setPatients(patientsData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching patient data:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <table className="table">
            {/* Table header */}
            <thead className="thead-dark">
              <tr>
                <th>Full Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Medical ID</th>
                <th>Blood Type</th>
                <th>Organ(s)</th>
                <th>Weight(kg)</th>
                <th>Height(cm)</th>
              </tr>
            </thead>
            {/* Table body - Render only after loading is completed */}
            {!isLoading && (
              <tbody>
                {patients.map((data) => (
                  <tr key={data.MedicalID}>
                    <td>{data.FullName}</td>
                    <td>{data.Age}</td>
                    <td>{data.Gender}</td>
                    <td>{data.MedicalID}</td>
                    <td>{data.BloodType}</td>
                    <td>{data.Organ}</td>
                    <td>{data.Weight}</td>
                    <td>{data.Height}</td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
          {/* Loading indicator */}
          {isLoading && (
            <div className="text-center my-5">
              <p className="h5">Fetching patient data...</p>
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GetPatient;
