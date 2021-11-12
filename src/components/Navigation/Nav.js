import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { NavbarData } from "./NavbarData";
import "./Nav.css";
import { IconContext } from "react-icons";
import * as HeroIcons from "react-icons/hi";
import * as FaIcons from "react-icons/fa";
import { SidebarContext } from "../../context/SidebarContext";
import { AuthContext } from "../Firebase/AuthContext";

function Nav() {
  const { showSidebar, sidebar } = useContext(SidebarContext);
  const { user } = useContext(AuthContext);

  return (
    <IconContext.Provider value={{ style: { color: "#fff", fontSize: "30px" } }}>
      <nav className='navBottom'>
        <ul className='nav-list'>
          <li className='nav-text' style={{ width: "50%" }}>
            <Link to='#' onClick={showSidebar}>
              {sidebar ? <HeroIcons.HiChevronDoubleDown /> : <HeroIcons.HiChevronDoubleUp />}
            </Link>
          </li>
          {NavbarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>{item.icon}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <nav className={sidebar ? "side-menu active" : "side-menu"}>
        <ul className='side-menu-items'>
          <li className='nav-text' style={{ width: "50%" }}>
            <Link to='/logout'>{user ? <FaIcons.FaSignOutAlt /> : <FaIcons.FaSignInAlt />}</Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path} className='nav-text'>
                  {item.icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

export default Nav;
