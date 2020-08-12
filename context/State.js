import React, { useReducer, createContext } from 'react';
import AppReducer from './AppReducer'

const initialState = {
  transactions: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  deleteTransaction = function (id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    })
  }
  addTransaction = function (transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    })
  }

  return (
    <GlobalContext.Provider value={{
      transaction: state.transactions,
      addTransaction,
      deleteTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  )
}