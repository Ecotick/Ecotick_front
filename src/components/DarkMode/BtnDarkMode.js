import React, { useContext } from "react";
import "./BtnDarkMode.css";
import { ThemeContext } from "../../context/ThemeContext";

function BtnDarkMode() {
  const { toggleDarkMode, darkMode } = useContext(ThemeContext);

  return (
    <button onClick={toggleDarkMode} className="btn-darkmode">
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default BtnDarkMode;
