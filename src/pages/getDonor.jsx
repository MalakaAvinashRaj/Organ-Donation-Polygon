import { useState, useEffect } from "react";
import { myContract } from "../connection/connect.js";


export function GetDonor() {

    const [donorCount, setDonorCount] = useState();
    const [donorIDs, setDonorIDs] = useState([]);
    const [Donors, setDonors] = useState([]);

    useEffect(() => {
        setDonors([]);
        viewDonors();
    }, [])

    window.Buffer = window.Buffer || require("buffer").Buffer;

    const viewDonors = async () => {

        const _donorCount = await myContract.methods.getCountOfDonors().call();
        setDonorCount(_donorCount)
        console.log(_donorCount);
        const _donorIDs = await myContract.methods.getAllDonorIDs().call();
        setDonorIDs(_donorIDs);
        console.log(_donorIDs);



        for (let i = 0; i < donorCount; i++) {
            await myContract.methods.getDonor(donorIDs[i]).call().then(function (result) {

                console.log(result[4]);

                let Donor =
                    [{ Index: i + 1, "FullName": result[0], Age: result[1], Gender: result[2], "MedicalID": donorIDs[i], "BloodType": result[3], "Organ": result[4], "Weight": result[5], "Height": result[6] }];


                Donors.push(Donor)
                setDonors(Donors);

            });
        }
        console.log(Donors)
    }



    return (
        <div className="GetDonor">
            <p onClick={viewDonors}>Bug to be fixed: Please Double click on this text to get Data</p>
            <table>
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
                {Donors.map((data) => (
                    <tr>
                        <td>{data[0].FullName}</td>
                        <td>{data[0].Age}</td>
                        <td>{data[0].Gender}</td>
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

export default GetDonor;
