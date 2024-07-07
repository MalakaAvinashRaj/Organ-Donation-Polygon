import React, { useState, useEffect } from "react";
import { myContract } from "../connection/connect.js";

export function GetPledge() {
  const [pledgeCount, setPledgeCount] = useState();
  const [pledgeIDs, setPledgeIDs] = useState([]);
  const [Pledges, setPledges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // eslint-disable-next-line no-restricted-globals
        console.log(`${pledgeCount} ${pledgeIDs}`);
        // Fetch pledge count and IDs
        const _pledgeCount = await myContract.methods.getCountOfPledges().call();
        setPledgeCount(_pledgeCount);

        const _pledgeIDs = await myContract.methods.getAllPledgeIDs().call();
        setPledgeIDs(_pledgeIDs);

        // Fetch pledge details based on IDs
        const fetchedPledges = [];

        for (let i = 0; i < _pledgeCount; i++) {
          const result = await myContract.methods.getPledge(_pledgeIDs[i]).call();
          fetchedPledges.push({
            Index: i + 1,
            FullName: result[0],
            Age: result[1],
            Gender: result[2],
            MedicalID: _pledgeIDs[i],
            BloodType: result[3],
            Organ: result[4],
            Weight: result[5],
            Height: result[6],
          });
        }

        setPledges(fetchedPledges);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="GetPledge">
      <table className="table">
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
        <tbody>
          {!loading &&
            Pledges.map((data) => (
              <tr key={data.Index}>
                <td>{data.FullName}</td>
                <td>{data.Age}</td>
                <td>{data.Gender}</td>
                <td>{data.MedicalID}</td>
                <td>{data.BloodType}</td>
                <td>{data.Organ}</td>
                <td>{data.Weight}</td>
                <td>{data.Height}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      {loading && (
        <div className="text-center my-5">
          <p className="h5">Fetching pledge data...</p>
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default GetPledge;
