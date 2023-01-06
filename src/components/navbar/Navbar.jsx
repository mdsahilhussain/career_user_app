import React from "react";
import "./navbar.css";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNavDetail } from "../../features/userSlice";
function Navbar({ toogleButton }) {
  const location = useLocation();
  const titelName = location.state?.titleName;
  const data = useSelector(selectNavDetail);
  return (
    <nav>
      <div className="nav___list">
        <h1>{titelName ? titelName : "Profile"}</h1>
        <div className="nav___list--info" onClick={(e) => toogleButton(1)}>
          <img src={data?.profileImage} alt="profileImage" />
          <h4>{data?.name}</h4>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
