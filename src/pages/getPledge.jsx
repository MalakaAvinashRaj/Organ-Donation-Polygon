import { useState, useEffect } from "react";



export function GetPledge() {

    const [pledgeCount, setPledgeCount] = useState();
    const [pledgeIDs, setPledgeIDs] = useState([]);
    const [Pledges, setPledges] = useState([]);

    useEffect(() => {
        setPledges([]);
        viewPledges();
    }, [])

    window.Buffer = window.Buffer || require("buffer").Buffer;

    const Web3 = require('web3');
    const web3 = new Web3("HTTP://127.0.0.1:7545");

    const artifact = require("../contracts/DonorContract.json");

    const deployedContract = artifact.networks[5777];
    const contractAddress = deployedContract.address;

    let accounts = null;
    let contractInstance = null;

    const viewPledges = async () => {

        accounts = await web3.eth.getAccounts();
        contractInstance = new web3.eth.Contract(
            artifact.abi,
            contractAddress
        );
        console.log(contractInstance);
        const _pledgeCount = await contractInstance.methods.getCountOfPledges().call();
        setPledgeCount(_pledgeCount)
        console.log(_pledgeCount);
        const _pledgeIDs = await contractInstance.methods.getAllPledgeIDs().call();
        setPledgeIDs(_pledgeIDs);
        console.log(_pledgeIDs);



        for (let i = 0; i < pledgeCount; i++) {
            await contractInstance.methods.getPledge(pledgeIDs[i]).call().then(function (result) {

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
