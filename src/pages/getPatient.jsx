import { useState, useEffect } from "react";



export function GetPatient() {

    const [patientCount, setPatientCount] = useState();
    const [patientIDs, setPatientIDs] = useState([]);
    const [Patients, setPatients] = useState([]);

    useEffect(() => {
        setPatients([]);
        viewPatients();
    }, [])

    window.Buffer = window.Buffer || require("buffer").Buffer;

    const Web3 = require('web3');
    const web3 = new Web3("HTTP://127.0.0.1:7545");

    const artifact = require("../contracts/DonorContract.json");

    const deployedContract = artifact.networks[5777];
    const contractAddress = deployedContract.address;

    let accounts = null;
    let contractInstance = null;

    const viewPatients = async () => {

        accounts = await web3.eth.getAccounts();
        contractInstance = new web3.eth.Contract(
            artifact.abi,
            contractAddress
        );
        console.log(contractInstance);
        const _patientCount = await contractInstance.methods.getCountOfPatients().call();
        setPatientCount(_patientCount)
        console.log(_patientCount);
        const _patientIDs = await contractInstance.methods.getAllPatientIDs().call();
        setPatientIDs(_patientIDs);
        console.log(_patientIDs);



        for (let i = 0; i < patientCount; i++) {
            await contractInstance.methods.getPatient(patientIDs[i]).call().then(function (result) {

                let Patient =
                    [{ Index: i + 1, "FullName": result[0], Age: result[1], Gender: result[2], "MedicalID": patientIDs[i], "BloodType": result[3], "Organ": result[4], "Weight": result[5], "Height": result[6] }];

                Patients.push(Patient)
                setPatients(Patients);

            });
        }
        console.log(Patients)
    }



    return (
        <div className="GetPatient">
            <p onClick={viewPatients}>Bug to be fixed: Please Double click on this text to get Data</p>
            <table>
                <tr>
                    <th>Full Name</th>
                    <th>Age</th>
                    <th>Medical ID</th>
                    <th>Blood Type</th>
                    <th>Organ(s)</th>
                    <th>Weight(kg)</th>
                    <th>Height(cm)</th>
                </tr>
                {Patients.map((data) => (
                    <tr>
                        <td>{data[0].FullName}</td>
                        <td>{data[0].Age}</td>
                        <td>{data[0].MedicalID}</td>
                        <td>{data[0].BloodType}</td>
                        <td>{data[0].Organ}</td>
                        <td>{data[0].Weight}</td>
                        <td>{data[0].Height}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default GetPatient;
