import { format } from "date-fns/esm";
import { useState } from "react";
import { Calendar } from "react-calendar";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./flights.css";
import FlightsData from "../../pages/flights/FlightsInfo";
import { useEffect } from "react";

const Flights = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);

  const [nereye, setNereye] = useState(location.state.nereye);
  const [nereden, setNereden] = useState(location.state.nereden);
  const [selectedDate, setSelectedDate] = useState(location.state.selectedDate);
  // const [options, setOptions] = useState(location.state.options);

  // const [openCalendar, setOpenCalendar] = useState(false);

  // FlightsData.forEach((flight) => {
  //   if (flight.from.toLowerCase().includes(nereye.toLowerCase())) {
  //     if (flight.to.toLowerCase().includes(nereden.toLowerCase())) {
  //       if (flight.tarih.includes(selectedDate.toLocaleDateString("en-GB"))) {
  //         criteria.push(flight);
  //       }
  //     }
  //   }
  // });
  const criteria = [];
  FlightsData.forEach((flight) => {
    if (flight.from === nereden) {
      if (flight.to === nereye) {
        if (flight.tarih === selectedDate) {
          criteria.push(flight);
        } else {
        }
      } else {
      }
    }
  });
  const [ucusId, setUcusId] = useState("");

  const KoltukSec = () => {
    navigate("/koltuk", { state: { ucusId } });
  };
  // üstteki calisiyo

  // FlightsData.forEach((flight) => {
  //   if (flight.tarih === selectedDate.toLocaleDateString("en-US")) {
  //     criteria.push(flight);
  //   }
  // });
  console.log(selectedDate);
  console.log(criteria);

  // const onClicked = () => {
  //   navigate("/payment", { state: { nereden, nereye, selectedDate } });
  // };

  return (
    <div>
      <Navbar />
      <Header type="ucuslar" />
      <div className="fContainer">
        <div className="fWrapper">
          <div className="fSearch">
            {/* <h1 className="fSearchTitle">Search</h1>
            <div className="fSearchItem">
              <label>{setSelectedDate}</label>
              <input type="text" placeholder={nereden} />
            </div>
            <div className="fSearchItem">
              <label>Nereye</label>
              <input type="text" placeholder={nereye} />
            </div>
            <div className="fSearchItem">
              <label>Tarih</label>
              <span
                onClick={() => setOpenCalendar(!openCalendar)}
                className=""
              >{`${format(selectedDate, "dd/MM/yyyy")}`}</span>
              {openCalendar && (
                <Calendar
                  value={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="fSearchItem">
              <label>Kaç kişi</label>
              <div className="fsOptions">
                <div className="fsOptionItem">
                  <span className="fsOptionText">Yetişkin</span>
                  <input
                    type="number"
                    min={1}
                    className="fsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="fsOptionItem">
                  <span className="fsOptionText">Çocuk</span>
                  <input
                    type="number"
                    min={0}
                    className="fsOptionInput"
                    placeholder={options.children}
                  />
                </div>
              </div>
            </div>
            <button>Uçuş ara</button> */}
          </div>
          <div className="fResult">
            <div className="searchItem">
              {/* <div>
                yer <img className="ikon" src={`${FlightsData[0].ikon}`} />
              </div>
              <div>
                pegasus <img className="ikon" src={`${FlightsData[1].ikon}`} />
              </div> */}
              <ul className="ul">
                {criteria.map((sefer) => (
                  <li key={sefer.id}>
                    <div className="ulContainer">
                      <div>
                        <img className="flatIcon" src={sefer.ikon} />
                      </div>

                      <div className="yazilar">
                        <p className="title">{sefer.from}</p>
                        <p>{sefer.kalkis_havaalani}</p>
                      </div>

                      <div>
                        <p className="cizgi">&#8594;</p>
                      </div>

                      <div className="yazilar">
                        <p className="title">{sefer.to}</p>
                        <p>{sefer.inis_havaalani}</p>
                      </div>

                      <div className="yazilar">
                        <p className="title">{sefer.tarih}</p>
                        <p>
                          {sefer.kalkis_saati} / {sefer.inis_saati}
                        </p>
                      </div>

                      <div>
                        {/* <p className="title">Fiyat</p> */}
                        <h2
                          className="fiyat"
                          onClick={
                            /*() => {
                            setUcusId(sefer.id);
                            KoltukSec();
                            console.log(ucusId);
                          }*/ KoltukSec
                          }
                        >
                          {sefer.fiyat}
                        </h2>
                      </div>

                      <button onClick={() => setUcusId(sefer.id)}>Seç</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flights;
