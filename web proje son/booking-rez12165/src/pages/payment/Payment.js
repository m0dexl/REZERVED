import React, { useRef, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./payment.css";
import emailjs from "@emailjs/browser";
import { useLocation } from "react-router-dom";
import FlightsData from "../flights/FlightsInfo";

const Payment = () => {
  const [number, setNumber] = useState(""); //CrediCart Numarası İÇin//
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  // const [mail, setMail] = useState();
  // const [adi, setAdi] = useState();
  const location = useLocation();
  const [ucusId, setUcusId] = useState(location.state.ucusId);

  const [ucret, setUcret] = useState();
  FlightsData.find((para) => {
    if (para.id === ucusId) {
      setUcret(para.fiyat);
    }
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fhp3hxs",
        "template_06tmd3l",
        form.current,
        "Cm6ugQh2PwAfY6tSW"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message send");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Navbar />
      <div className="globalContainer">
        <form className="payment" ref={form} onSubmit={sendEmail}>
          <div className="paymentFirst">
            <div>
              <div className="bilgiForm">
                <div>
                  <p className="pTitle"> Adı </p>
                  <input
                    className="textCss"
                    placeholder="Adı (kimlikte yazıldığı gibi)"
                    type="text"
                    name="user_name"
                    maxLength={11}
                    required
                  ></input>
                </div>
                <div>
                  <p className="pTitle"> Soyadı </p>
                  <input
                    className="textCss"
                    placeholder="Soyadı (kimlikte yazıldığı gibi)"
                    type="text"
                    name="surname"
                    maxLength={11}
                    required
                  ></input>
                </div>
                <div>
                  <p className="pTitle">Email</p>
                  <input
                    className="textCss"
                    placeholder="E-posta adresinizi yazın"
                    type="email"
                    name="user_email"
                    maxLength={30}
                    required
                  ></input>
                </div>
                <div>
                  <p className="pTitle">Telefon Numarası</p>
                  <input
                    className="textCss"
                    placeholder="Telefon numarası"
                    type="text"
                    name="tel"
                    maxLength={11}
                    required
                  ></input>
                </div>
                <div>
                  <p className="pTitle">TC Kimlik Numarası</p>
                  <input
                    className="textCss"
                    placeholder="TC Kimlik numarası"
                    type="text"
                    name="tel"
                    maxLength={11}
                    required
                  ></input>
                </div>
              </div>
            </div>

            <div className="bilgiForm">
              <div className="cardContainer">
                <Card
                  number={number}
                  name={name}
                  expiry={expiry}
                  cvc={cvc}
                  focused={focus}
                ></Card>
              </div>
              <input
                className="textCss"
                type="text"
                name="number"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
              ></input>
              <input
                className="textCss"
                type="text"
                name="expiry"
                placeholder="MM/YY Expiry"
                maxLength={4}
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
              ></input>
              <input
                className="textCss"
                type="text"
                name="number"
                maxLength={16}
                placeholder="Card Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
              ></input>
              <input
                className="textCss"
                type="text"
                name="cvc"
                placeholder="Cvc"
                maxLength={3}
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
              ></input>
            </div>
          </div>

          <div className="paymentSecond">
            <button className="onaylaBtn" onClick={sendEmail}>
              Onayla
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
