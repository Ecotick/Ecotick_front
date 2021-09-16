import React, { useContext } from "react";
/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
// import { useState } from "react";
// import logo from '../utilisateur.png';
import { SidebarData } from "./SidebarData";
import "./Nav.css";
import "./Sidebar.css";
import { IconContext } from "react-icons";
import { NavbarData } from "./NavbarData";
import * as FaIcons from 'react-icons/fa';
import { SidebarContext } from "../../context/SidebarContext";


function Nav() {
  // const [sidebar, setSidebar] = useState(false);
  // const showSidebar = () => setSidebar(!sidebar);
  const { showSidebar, sidebar } = useContext(SidebarContext);


  return (
    <IconContext.Provider
      value={{ style: { color: "#fff", fontSize: "30px" } }}
    >
      <nav className="navBottom">
        <ul className="nav-list">
          <li className="nav-text">
            <Link to='/' onClick={showSidebar}>
              <FaIcons.FaUser />
            </Link>
          </li>
          {NavbarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path} className="nav-text">{item.icon}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

export default Nav;
