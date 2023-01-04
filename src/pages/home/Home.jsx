import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <section className="home">
      <div className="home___card">
        <div className="home___card---title">
          <h2 className="title">Select an account</h2>
        </div>
        <div className="home___card--list">
          <ul>
            <li>
              <Link to="/profile" className="home___card--list___link">
                <img src="" alt="" />
                <h3>shail hussain</h3>
              </Link>
            </li>
            <li>
              <img src="" alt="" />
              <h3>shail hussain</h3>
            </li>
            <li>
              <img src="" alt="" />
              <h3>shail hussain</h3>
            </li>
            <li>
              <img src="" alt="" />
              <h3>shail hussain</h3>
            </li>
            <li>
              <img src="" alt="" />
              <h3>shail hussain</h3>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Home;
