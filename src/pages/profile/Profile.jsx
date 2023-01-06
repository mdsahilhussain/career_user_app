import React from "react";
import "./profile.css";
import { useSelector } from "react-redux";
import { selectUserDetail } from "../../features/userSlice";
function Profile() {
  const data = useSelector(selectUserDetail);
  // console.log("data", data);

  return (
    <section className="profile">
      <div className="profile___container">
        <div className="profile___ueser--info">
          <div className="profile___ueser--info___personalDetail">
            <img src={data?.profilepicture} alt="profilepicture" />
            <h2>{data?.name}</h2>
            <ul>
              <li>
                <span>Username</span> <span>:</span>
                <h3>{data?.username}</h3>
              </li>
              <li>
                <span>e-mail</span>
                <span>:</span>
                <h3>{data?.email}</h3>
              </li>
              <li>
                <span>phone</span>
                <span>:</span>
                <h3>{data?.phone}</h3>
              </li>
              <li>
                <span>Website</span>
                <span>:</span>
                <h3>{data?.website}</h3>
              </li>
            </ul>
          </div>
          <div className="line">
            <hr />
          </div>
          <div className="profile___ueser--info___companeyDetail">
            <h3>Companey</h3>
            <ul>
              <li>
                <span>Name</span>
                <span>:</span>
                <h3>{data?.company?.name}</h3>
              </li>
              <li>
                <span>catchPhrase</span>
                <span>:</span>
                <h3>{data?.company?.bs}</h3>
              </li>
              <li>
                <span>bs</span>
                <span>:</span>
                <h3>{data?.company?.bs}</h3>
              </li>
            </ul>
          </div>
        </div>
        <div className="profile___ueser--info___address">
          <h3>Address:</h3>
          <ul>
            <li>
              <span>street</span>
              <span>:</span>
              <h3>{data?.address?.street}</h3>
            </li>
            <li>
              <span>suite</span>
              <span>:</span>
              <h3>{data?.address?.suite}</h3>
            </li>
            <li>
              <span>city</span>
              <span>:</span>
              <h3>{data?.address?.city}</h3>
            </li>
            <li>
              <span>zipcode</span>
              <span>:</span>
              <h3>{data?.address?.zipcode}</h3>
            </li>
            <img src="" alt="" />
            <li>
              <p>
                <span>Lat:</span> {data?.address?.geo?.lat}
              </p>
              <p>
                <span>Long:</span> {data?.address?.geo?.lng}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Profile;
