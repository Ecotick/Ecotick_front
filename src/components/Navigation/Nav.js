import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Nav.css";
import { IconContext } from "react-icons";
import { NavbarData } from "./NavbarData";
import * as HeroIcons from "react-icons/hi";
import { SidebarContext } from "../../context/SidebarContext";


function Nav() {
  const { showSidebar, sidebar } = useContext(SidebarContext);


  return (
    <IconContext.Provider
      value={{ style: { color: "#fff", fontSize: "30px" } }}
    >
      <nav className="navBottom">
        <ul className="nav-list">
          <li className="nav-text" style={{"width": "50%"}}>
            <Link to='#' onClick={showSidebar}>
              {sidebar ? <HeroIcons.HiChevronDoubleDown /> : <HeroIcons.HiChevronDoubleUp />}
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

      <nav className={sidebar ? "side-menu active" : "side-menu"}>
        <ul className="side-menu-items">
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
