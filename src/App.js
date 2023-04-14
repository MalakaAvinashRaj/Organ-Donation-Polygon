import { Routes, Route } from 'react-router-dom';
import SetDonor from "./pages/setDonor";
import GetDonor from "./pages/getDonor";
import SetPatient from "./pages/setPatient";
import GetPatient from "./pages/getPatient";
import SetPledge from "./pages/setPledge";
import GetPledge from "./pages/getPledge";
import Navbar from "./pages/navbar";
import Home from "./pages/home";
import Website from "./pages/website";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/website" element={<Website />} />
        <Route path="/SetDonor" element={<SetDonor />} />
        <Route path="/GetDonor" element={<GetDonor />} />
        <Route path="/SetPatient" element={<SetPatient />} />
        <Route path="/GetPatient" element={<GetPatient />} />
        <Route path="/SetPledge" element={<SetPledge />} />
        <Route path="/GetPledge" element={<GetPledge />} />
      </Routes>
    </>
  );
}

export default App;
