import React from "react";
import "./home.css";
import Dashbord from "./Dashboard";
import { FaPowerOff } from "react-icons/fa6";

function Home() {
  const menuItems = [
    {
      name: "Dashboard",
      component: "Dashboard",
      icon: "fa-solid fa-table-columns",
    },
    {
      name: "Perks",
      component: "Perks",
      icon: "fa-solid fa-hand-holding-heart",
    },
    { name: "Addons", component: "Addons", icon: "fa-solid fa-puzzle-piece" },
    { name: "FAQ", component: "FAQ", icon: "fa-solid fa-clipboard-question" },
    { name: "Support", component: "Support", icon: "fa-solid fa-comment-dots" },
  ];

  return (
    <div className="main">
      <div className="header">
        <div className="logo">
          <h1 className="">P</h1>
        </div>
        <div className="dropdown">        
          <span className="dropdown-span">XYZ Company Pvt Ltd </span>
          <select className="dropdown-button">
            <option value=""></option>
            <option value="">Logout</option>
          </select>
        </div>
      </div>
      <div className="section">
        <div className="nav">
          <div className="profile">
            <img
              src="https://img.freepik.com/premium-vector/vector-man-suit-tie-with-cityscape-background_176841-4143.jpg?w=740"
              alt=""
            ></img>
            <h3 className="profile-name">Ram Mohan</h3>
            <p>rammohan2@gmail.com</p>
          </div>
          <div className="menuItems">
            {menuItems.map((menu, key) => (
              <div className="menu" key={key}>
                <i className={` menuicon ${menu.icon}`}></i>
                <p className="menu-name">{menu.name}</p>
              </div>
            ))}
          </div>
          <div className="logout">
            <p>Logout</p>
            <FaPowerOff />
          </div>
        </div>
        <div className="section1">
          <Dashbord />
        </div>
        <div className="rigth-navbar">
          <span className="notification">
            <i className="fa-solid fa-bell"></i>
          </span>
          <div className="emptydiv"></div>
          <span className="plus-icon">
            <i className="fa-solid fa-plus"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;