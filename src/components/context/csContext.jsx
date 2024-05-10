import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';
const MyCsContext = createContext();

const MyProvider = ({ children }) => {
  const [title, setTitle] = useState("AiMrk");
  const [mailTo, setMailTo] = useState(false);
  
  return <MyCsContext.Provider value={{title, setTitle, mailTo, setMailTo}}>{children}</MyCsContext.Provider>;
};

const useTitleData = () => {
  return useContext(MyCsContext);
}
MyProvider.propTypes = {
  children: PropTypes.node
}
export {MyProvider, useTitleData}