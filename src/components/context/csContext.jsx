import React, { createContext, useContext, useState } from "react";

const MyCsContext = createContext();

const MyProvider = ({ children }) => {
  const [title, setTitle] = useState("AiMrk");
  const [mailTo, setMailTo] = useState(false);
  
  return <MyCsContext.Provider value={{title, setTitle, mailTo, setMailTo}}>{children}</MyCsContext.Provider>;
};

const useTitleData = () => {
  return useContext(MyCsContext);
}
export {MyProvider, useTitleData}