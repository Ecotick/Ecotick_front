import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { NavbarData } from "./NavbarData";
import "./Nav.css";
// import { IconContext } from "react-icons";
// import * as HeroIcons from "react-icons/hi";
import * as FaIcons from "react-icons/fa";
import { SidebarContext } from "../../context/SidebarContext";
import { AuthContext } from "../Firebase/AuthContext";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import KeyboardDoubleArrowUpOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowUpOutlined";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";

function Nav() {
  const { showSidebar, sidebar } = useContext(SidebarContext);
  const { user } = useContext(AuthContext);
  const history = useHistory();

  const [navTab, setNavTab] = React.useState(0);

  const handleNavTabs = (event, newTab) => {
    setNavTab(newTab);
  };

  return (
    // <IconContext.Provider
    //   value={{ style: { color: "#fff", fontSize: "30px" } }}
    // >
    <>
      <nav className="navBottom">
        <Tabs
          className="nav-list"
          value={navTab}
          onChange={handleNavTabs}
          variant="fullWidth"
        >
          <Tab
            className="nav-text"
            onClick={showSidebar}
            icon={
              sidebar ? (
                <KeyboardDoubleArrowDownOutlinedIcon fontSize="large" />
              ) : (
                <KeyboardDoubleArrowUpOutlinedIcon fontSize="large" />
              )
            }
            sx={{ minWidth: `calc(100% / ${NavbarData.length + 1})` }}
          />
          {NavbarData.map((item, index) => (
            <Tab
              key={index}
              className={item.cName}
              onClick={() => history.push(item.path)}
              icon={item.icon}
              sx={{ minWidth: `calc(100% / ${NavbarData.length + 1})` }}
            />
          ))}
        </Tabs>
      </nav>

      <nav className={sidebar ? "side-menu active" : "side-menu"}>
        <ul className="side-menu-items">
          <li className="nav-text">
            <Link to="/logout">
              {user ? <FaIcons.FaSignOutAlt /> : <FaIcons.FaSignInAlt />}
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path} className="nav-text">
                  {item.icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
    // </IconContext.Provider>
  );
}

export default Nav;
