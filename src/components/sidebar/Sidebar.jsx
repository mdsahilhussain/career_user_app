import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  const linkArray = [
    {
      linkName: "Profile",
      linkUrl: "/profile",
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
              to={item.linkUrl}
              key={index}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
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
