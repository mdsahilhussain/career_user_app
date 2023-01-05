import React from "react";
import "./navbar.css";
function Navbar({ toogleButton }) {
  return (
    <nav>
      <div className="nav___list">
        <h1>Profile</h1>
        <div className="nav___list--info" onClick={(e) => toogleButton(1)}>
          <img src="" alt="" />
          <h4>Sahil Husain</h4>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
