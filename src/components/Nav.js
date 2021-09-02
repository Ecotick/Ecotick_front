/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import { useState } from "react";
// import logo from '../utilisateur.png';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "./Nav.css";
import "./Sidebar.css";
import { IconContext } from "react-icons";

function Nav() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="nav-list">
        <Link to="/">
          <img
            src="https://image.flaticon.com/icons/png/512/483/483361.png"
            style={{ width: "50px", height: "50px" }}
            onClick={showSidebar}
          />
          {/* <li>Home</li> */}
        </Link>
        <Link to="/Messagerie">
          <img
            src="https://image.flaticon.com/icons/png/512/482/482948.png"
            style={{ width: "50px", height: "50px" }}
          />
          {/*<li>Messagerie</li>*/}
        </Link>
        <Link to="/MonFil">
          <img
            src="https://image.flaticon.com/icons/png/512/522/522511.png"
            style={{ width: "50px", height: "50px" }}
          />
          {/*<li>Mon Fil</li>*/}
        </Link>
        <Link to="/Carte">
          <img
            src="https://image.flaticon.com/icons/png/512/484/484175.png"
            style={{ width: "50px", height: "50px" }}
          />
          {/*<li>Carte</li>*/}
        </Link>
        <Link to="/Parametres">
          <img
            src="https://image.flaticon.com/icons/png/512/483/483390.png"
            style={{ width: "50px", height: "50px" }}
          />
          {/*<li>Parametres</li>*/}
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
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
