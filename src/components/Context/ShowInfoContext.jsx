import React, { createContext, useState, useContext } from "react";

const ShowInfoContext = createContext();

export const useShowInfo = () => useContext(ShowInfoContext);

export const ShowInfoProvider = ({ children }) => {
  const [startShowInfo, setStartShowInfo] = useState(false);

  return (
    <ShowInfoContext.Provider value={{ startShowInfo, setStartShowInfo }}>
      {children}
    </ShowInfoContext.Provider>
  );
};

export default ShowInfoContext;
