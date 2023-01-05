import React, { useState } from "react";
import Button from "../button/Button";
import "./card.css";
function Card(props) {
  const { isCardShow } = props;
  return (
    <section
      className="card"
      style={isCardShow ? { display: "block" } : { display: "none" }}
    >
      <div className="card___container">
        <div className="card___container--currentInfo">
          <img src="" alt="" />
          <h4>Sahil huusain</h4>
          <span>msahil.hussain@gmail.com</span>
        </div>
        <ul className="card___container--accountList">
          <li>
            <img src="" alt="" />
            <h4>Bittu Khan</h4>
          </li>
          <li>
            <img src="" alt="" />
            <h4>Bittu Khan</h4>
          </li>
          <li onClick={undefined}>
            <Button name="Sing out" color="#D55151" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Card;
