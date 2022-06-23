import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import Airlines from "../../components/airlines/Airlines";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">HAVA YOLU ŞİRKETLERİ</h1>
        <Airlines />
      </div>
    </div>
  );
};

export default Home;
