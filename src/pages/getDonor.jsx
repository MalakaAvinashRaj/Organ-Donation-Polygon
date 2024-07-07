import React, { useState, useEffect, useRef } from "react";
import { myContract } from "../connection/connect.js";

export function GetDonor() {
  const [donorCount, setDonorCount] = useState();
  const [donorIDs, setDonorIDs] = useState([]);
  const [Donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);

  const hasFetchedData = useRef(false);

  useEffect(() => {
    async function fetchData() {
      if (!hasFetchedData.current) {
        try {
          // eslint-disable-next-line no-restricted-globals
          console.log(`${donorCount} ${donorIDs}`);

          // Fetch donor count and IDs
          const _donorCount = await myContract.methods
            .getCountOfDonors()
            .call();
          setDonorCount(_donorCount);

          const _donorIDs = await myContract.methods.getAllDonorIDs().call();
          setDonorIDs(_donorIDs);

          // Fetch donor details based on IDs
          const fetchedDonors = [];

          for (let i = 0; i < _donorCount; i++) {
            const result = await myContract.methods
              .getDonor(_donorIDs[i])
              .call();
            fetchedDonors.push({
              Index: i + 1,
              FullName: result[0],
              Age: result[1],
              Gender: result[2],
              MedicalID: _donorIDs[i],
              BloodType: result[3],
              Organ: result[4],
              Weight: result[5],
              Height: result[6],
            });
          }

          setDonors(fetchedDonors);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(false);
        } finally {
          hasFetchedData.current = true; 
          setLoading(false);
        }
      }
    }

    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="GetDonor">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Index</th>
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
        <tbody>
          {!loading &&
            Donors.map((data) => (
              <tr key={data.Index}>
                <td>{data.Index}</td>
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
      </table>
      {loading && (
        <div className="text-center my-5">
          <p className="h5">Fetching donor data...</p>
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default GetDonor;
