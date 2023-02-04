import React, { Children } from "react";

const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [data, setData] = React.useState([]);
  const [isAuth, setisAuth] = React.useState(false);
  return (
    <Context.Provider value={{ data, setData, isAuth, setisAuth }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
