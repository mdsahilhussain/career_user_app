import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import "./card.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectNavDetail,
  selectAllDetail,
  fetchSingleUser,
} from "../../features/userSlice";
function Card({ isCardShow, toogleButton }) {
  // const { isCardShow, toogleButton } = props;
  const allData = useSelector(selectAllDetail);
  const navData = useSelector(selectNavDetail);
  const uniqueID = navData?.id;
  const [randomData, setRandomData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const randomDataFeatch = (randomID) => {
    console.log("randomId", randomID);
    const tempData = allData?.users?.find((user) => user?.id === randomID);
    setRandomData((prevRandomData) => [
      ...prevRandomData,
      {
        id: tempData?.id,
        name: tempData?.name,
        profileImage: tempData?.profilepicture,
      },
    ]);
  };

  useEffect(() => {
    async function fetchData() {
      for (let i = 0; i < 1; i++) {
        let randomID = Math.floor(Math.random() * 10) + 1;
        console.log("randomId", randomID);
        await randomDataFeatch(randomID);
      }
    }
    fetchData();
  }, []);

  const fetchSingleDataHandler = (id) => {
    const tempData = allData?.users?.find((user) => user?.id === uniqueID);
    setRandomData((prevRandomData) => [
      ...prevRandomData,
      {
        id: tempData?.id,
        name: tempData?.name,
        profileImage: tempData?.profilepicture,
      },
    ]);
    dispatch(fetchSingleUser(id));
    navigate("/profile", { replace: true });
  };

  const logOutHandler = () => {
    navigate("/", { replace: true });
  };

  console.log("randomData", randomData);
  return (
    <section
      className="card"
      style={isCardShow ? { display: "block" } : { display: "none" }}
      onClick={(e) => toogleButton()}
    >
      <div className="card___container">
        <div className="card___container--currentInfo">
          <img src={navData?.profileImage} alt="profileImage" />
          <h4>{navData?.name}</h4>
          <span>{navData?.email}</span>
        </div>
        <ul className="card___container--accountList">
          {randomData.map((item, index) => (
            <li key={index} onClick={(e) => fetchSingleDataHandler(item.id)}>
              <img src={item.profileImage} alt="" />
              <h4>{item.name}</h4>
            </li>
          ))}
          <li onClick={(e) => logOutHandler()}>
            <Button name="Sing out" color="#D55151" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Card;
