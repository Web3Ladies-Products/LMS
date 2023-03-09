import React, { createContext, useState, useContext } from "react";

export const AppContext = createContext();

const AppStateContext = ({ children }) => {
  const [active, setActive] = useState("Dashboard");
  const [isAdmin, setIsAdmin] = useState(true);
  const [manual, setManual] = useState(true)
  return (
    <AppContext.Provider value={{ 
      active, 
      setActive, 
      isAdmin, 
      setIsAdmin,
      manual,
      setManual
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppStateContext;
export const useAppStateContent = () => useContext(AppContext);
