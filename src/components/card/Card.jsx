import React from "react";
import Button from "../button/Button";
import "./card.css";
import { useSelector } from "react-redux";
import { selectNavDetail } from "../../features/userSlice";
function Card(props) {
  const { isCardShow } = props;
  const data = useSelector(selectNavDetail);
  return (
    <section
      className="card"
      style={isCardShow ? { display: "block" } : { display: "none" }}
    >
      <div className="card___container">
        <div className="card___container--currentInfo">
          <img src={data?.profileImage} alt="profileImage" />
          <h4>{data?.name}</h4>
          <span>{data?.email}</span>
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
