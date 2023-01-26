import React, { createContext, useState, useContext } from "react";

export const AppContext = createContext();

const AppStateContext = ({ children }) => {
  const [active, setActive] = useState("Dashboard");
  return (
    <AppContext.Provider value={{ active, setActive }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppStateContext;
export const useAppStateContent = () => useContext(AppContext);
