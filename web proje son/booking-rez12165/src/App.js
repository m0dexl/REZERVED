import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Koltuk from "./pages/koltuk/Koltuk";
import Login from "./components/Login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Flights from "./pages/flights/Flights";
import Payment from "./pages/payment/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/koltuk" element={<Koltuk />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/flights" element={<Flights />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
