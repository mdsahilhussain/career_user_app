import React, { useState, useEffect } from "react";
import "./chat.css";
import {
  MdExpandMore,
  MdExpandLess,
  MdOutlineChatBubbleOutline,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { selectAllDetail } from "../../features/userSlice";
function Chat({ isChatShow, toogleChat }) {
  const allData = useSelector(selectAllDetail);
  const [user, setUser] = useState();
  const active = [1, 5, 6, 7];
  return (
    <section className="chat">
      <div className="chat___header">
        <div className="chat___header--title">
          <MdOutlineChatBubbleOutline style={{ fontSize: "3rem" }} />
          <h3>Chats</h3>
        </div>
        {isChatShow ? (
          <MdExpandMore
            style={{ fontSize: "2.2rem", cursor: "pointer" }}
            onClick={(e) => toogleChat()}
          />
        ) : (
          <MdExpandLess
            style={{ fontSize: "2.2rem", cursor: "pointer" }}
            onClick={(e) => toogleChat()}
          />
        )}
      </div>
      <div
        className="chat___box"
        style={isChatShow ? { display: "block" } : { display: "none" }}
      >
        <ul>
          {allData?.users?.map((item, index) => (
            <li key={index}>
              <div className="chat__box--username">
                <img src={item?.profilepicture} alt="profilepicture" />
                <h4>{item?.name}</h4>
              </div>
              <span></span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Chat;
