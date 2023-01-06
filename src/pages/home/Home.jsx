import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { useSelector, useDispatch } from "react-redux";
import profileImage from "../../assest/profileImage.png";
import { fetchSingleUser, fetchData } from "../../features/userSlice";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(
    (e) => {
      e?.preventdefault();
      dispatch(fetchData());
    },
    [dispatch]
  );

  const state = useSelector((state) => state);

  const fetchSingleDataHandler = (id) => {
    console.log("id", id);
    dispatch(fetchSingleUser(id));
    navigate("/profile", { replace: true });
  };
  return (
    <section className="home">
      <div className="home___card">
        <div className="home___card---title">
          <h2 className="title">Select an account</h2>
        </div>
        <div className="home___card--list">
          <ul>
            {state.user.allUserData?.users?.map((item, index) => (
              <li key={index} onClick={(e) => fetchSingleDataHandler(item.id)}>
                <img src={item.profilepicture} alt="profilepicture" />
                {/*// ! ================================= */}
                {/* <img src={profileImage} alt="profilepicture" /> */}
                <h3>{item.name}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Home;
