import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/login");
  };

  const returnHome = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">REZ</span>
        <div className="navItem">
          {/* <button className="navButton">About</button>
          <button className="navButton">Discover</button> */}
          <button className="navButton" onClick={onSubmit}>
            Login
          </button>
          <button className="navButton" onClick={returnHome}>
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
