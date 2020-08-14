import React, { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const deleteTransaction = function (id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  };
  const addTransaction = function (transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
