import React, { useReducer, createContext } from "react";
import ScreenReducer from "./ScreenReducer";

const initialState = {
  visibility: false
};

export const ScreenContext = createContext(initialState);

export const ScreenProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ScreenReducer, initialState);
  const showForm = function () {
    dispatch({
      type: "SHOW_FORM"
    });
  };
  const hideForm = function () {
    dispatch({
      type: "HIDE_FORM"
    });
  };

  return (
    <ScreenContext.Provider
      value={{
        visibility: state.visibility,
        showForm,
        hideForm
      }}
    >
      {children}
    </ScreenContext.Provider>
  );
};
