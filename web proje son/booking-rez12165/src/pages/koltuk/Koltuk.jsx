import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import FlightsData from "../flights/FlightsInfo";

import "./Koltuk.css";

const Airlines = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [ucusunId, setUcusunId] = useState(location.state.ucusId);

  const seats = [];

  FlightsData.find((seat) => {
    if (seat.id === ucusunId) {
      seats.push(seat.koltukar);
    }
  });
  console.log(ucusunId);
  console.log(seats);

  const onClicked = () => {
    navigate("/payment", { state: { ucusunId } });
  };

  return (
    <div className="airlinesFullPage">
      <>
        <Navbar />
      </>

      <div className="formContainer">
        <form className="formKoltuk">
          <div className="formFirst">
            <div className="seatContainer">
              {seats[0].map((koltuk) => (
                <div onClick={onClicked} className="asd">
                  <li key={koltuk.id}>
                    <div>
                      {" "}
                      {/* <input type="radio"></input> */}
                      <h2 className="seatId">{koltuk.id}</h2>
                    </div>
                  </li>
                </div>
              ))}
            </div>
          </div>

          <div className="formSecond">
            <h1 className="onaylaBtn">KOLTUK SEÇİNİZ</h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Airlines;
