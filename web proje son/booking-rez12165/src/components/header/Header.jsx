import {
  faBed,
  faCalendarDays,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [nereden, setNereden] = useState("");
  const [nereye, setNereye] = useState("");

  const [selectedDate, setSelectedDate] = useState(new Date());
  const tarihSec = (e) => {
    setSelectedDate(e.target.value);
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/flights", { state: { nereden, nereye, selectedDate } });
  };
  return (
    <div className="header">
      <div
        className={
          type === "ucaklar"
            ? "headerContainer ucak"
            : "headerContainer" && type === "ucuslar"
            ? "headerContainer ucus"
            : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
        </div>
        {type !== "ucaklar" && type !== "ucuslar" && (
          <div>
            {" "}
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPlane} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Nereden"
                  className="headerSearchInput"
                  onChange={(e) => setNereden(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPlane} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Nereye"
                  className="headerSearchInput"
                  onChange={(e) => setNereye(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <input
                  type="date"
                  min={new Date().toLocaleDateString("fr-CA")}
                  defaultValue={new Date().toLocaleDateString("fr-CA")}
                  onChange={tarihSec}
                />
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Uçuş ara
                </button>
              </div>
            </div>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
