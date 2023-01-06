import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  let activeStyle = {
    color: "#ffffff",
  };
  const linkArray = [
    {
      linkName: "Profile",
      linkUrl: "profile",
    },
    {
      linkName: "Post",
      linkUrl: "post",
    },
    {
      linkName: "Gallery",
      linkUrl: "gallery",
    },
    {
      linkName: "ToDo",
      linkUrl: "todo",
    },
  ];
  return (
    <section className="sidebar">
      <div className="sidebar___linkList">
        <ul>
          {linkArray.map((item, index) => (
            <NavLink
              to={{ pathname: item.linkUrl }}
              state={{ titleName: `${item.linkName}` }}
              key={index}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <li>
                <h2>{item.linkName}</h2>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Sidebar;
