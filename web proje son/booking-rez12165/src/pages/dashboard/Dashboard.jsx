import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [nereden, setNereden] = useState();
  const [nereye, setNereye] = useState();
  const [tarih, setTarih] = useState();

  const tarihSec = (e) => {
    setTarih(e.target.value);
  };

  const clicked = () => {
    console.log(nereden);
    console.log(nereye);
    console.log(tarih);
  };

  const quit = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="topSide">
        <div className="tsContainer">
          <span className="logo">REZ</span>
          <div className="tsItem">
            <button className="tsButton" onClick={quit}>
              ÇIKIŞ YAP
            </button>
          </div>
        </div>
      </div>
      <form className="ucus">
        <div className="ucusBilgileri">
          <div className="ucusKaydet">
            <div>
              <div className="ucusBilgiForm">
                <div className="pTitleMain">UÇUŞ KAYDET</div>
                <div>
                  <p className="pTitle"> Nereden </p>
                  <input
                    className="textUcus"
                    placeholder="Nereden"
                    type="text"
                    onChange={(e) => setNereden(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <p className="pTitle"> Nereye </p>
                  <input
                    className="textUcus"
                    placeholder="Nereye"
                    type="text"
                    onChange={(e) => setNereye(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <p className="pTitle"> Tarih </p>
                  <input
                    type="date"
                    className="textUcus"
                    min={new Date().toLocaleDateString("fr-CA")}
                    defaultValue={new Date().toLocaleDateString("fr-CA")}
                    onChange={tarihSec}
                  />
                </div>
                <div>
                  <h1 className="textUcus" onClick={clicked}>
                    KAYDET
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
