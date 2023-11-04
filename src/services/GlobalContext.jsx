/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { reducer, initialState, actions } from "./reducer";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </GlobalContext.Provider>
  );
};

// custom hook
const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
};

export { GlobalContextProvider, useGlobalContext };
