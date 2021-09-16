import React, { createContext, useState } from "react";

export const SidebarContext = createContext();

const SidebarContextProvider = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar((sidebar) => !(sidebar));
    gridUpdate(sidebar);
  };

  const gridUpdate = () => {
    let gridLocation = document.getElementById("app");
    if (!sidebar) {
      gridLocation.classList.add("sidebarActive");
    } else {
      gridLocation.classList.remove("sidebarActive");
    }
  }
  return (
    <SidebarContext.Provider value={{ showSidebar, sidebar }}>
      {props.children}
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;
