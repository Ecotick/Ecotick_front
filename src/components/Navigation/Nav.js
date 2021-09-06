/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import { useState } from "react";
// import logo from '../utilisateur.png';
import { SidebarData } from "./SidebarData";
import "./Nav.css";
import "./Sidebar.css";
import { IconContext } from "react-icons";
import { NavbarData } from "./NavbarData";


function Nav() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider
      value={{ style: { color: "#fff", fontSize: "30px" } }}
    >

      <ul className="nav-list">
        {NavbarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path} onClick={item.func ? showSidebar : ()=>{}}>
                {item.icon}
              </Link>
            </li>
          );
        })}
      </ul>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>{item.icon}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

export default Nav;
