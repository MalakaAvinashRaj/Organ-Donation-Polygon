import { useState, useEffect } from "react";
import { myContract } from "../connection/connect.js";



export function GetPledge() {

    const [pledgeCount, setPledgeCount] = useState();
    const [pledgeIDs, setPledgeIDs] = useState([]);
    const [Pledges, setPledges] = useState([]);

    useEffect(() => {
        setPledges([]);
        viewPledges();
    }, [])

    window.Buffer = window.Buffer || require("buffer").Buffer;

    const viewPledges = async () => {

        const _pledgeCount = await myContract.methods.getCountOfPledges().call();
        setPledgeCount(_pledgeCount)
        console.log(_pledgeCount);
        const _pledgeIDs = await myContract.methods.getAllPledgeIDs().call();
        setPledgeIDs(_pledgeIDs);
        console.log(_pledgeIDs);



        for (let i = 0; i < pledgeCount; i++) {
            await myContract.methods.getPledge(pledgeIDs[i]).call().then(function (result) {

                let Pledge =
                    [{ Index: i + 1, "FullName": result[0], Age: result[1], Gender: result[2], "MedicalID": pledgeIDs[i], "BloodType": result[3], "Organ": result[4], "Weight": result[5], "Height": result[6] }];

                Pledges.push(Pledge)
                setPledges(Pledges);

            });
        }
        console.log(Pledges)
    }



    return (
        <div className="GetPledge">
            <p onClick={viewPledges}>Bug to be fixed: Please Double click on this text to get Data</p>
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
                {Pledges.map((data) => (
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

export default GetPledge;
