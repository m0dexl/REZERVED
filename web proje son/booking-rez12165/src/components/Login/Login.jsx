import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/Login.css";
import SuperAdmins from "./Data";

const Login = () => {
  const Bildirim = () => {
    alert("Kullanıcı Adı veya Şifre Yanlış!!");
  };

  const navigate = useNavigate();

  const [AdminUser, setAdminUser] = useState();
  const [AdminPassword, setAdminPassword] = useState();

  const log_click = (e) => {
    e.preventDefault();
    var admin = SuperAdmins.find(
      (value) =>
        value.Admin_Password === AdminPassword &&
        value.Admin_Username === AdminUser
    );
    if (admin) {
      navigate("/dashboard");
    } else {
      Bildirim();
    }
  };

  return (
    <div className="fullPage">
      <form className="form">
        <h1 className="logTitle">GİRİŞ YAP</h1>

        <div className="firstPage">
          <label className="baslik"> Kullanıcı adı </label>
          <input
            className="TextCss"
            type="text"
            onChange={(e) => setAdminUser(e.target.value)}
            required
          ></input>

          <label className="baslik"> Şifre </label>
          <input
            className="TextCss"
            type="password"
            onChange={(e) => setAdminPassword(e.target.value)}
            required
          ></input>
        </div>

        <div className="secondPage">
          <button className="button" onClick={log_click}>
            GİRİŞ
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
