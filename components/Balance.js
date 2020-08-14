import React, { useContext } from "react";
import { GlobalContext } from "../context/AppState";
import { ScreenContext } from "../context/ScreenState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const { visibility } = useContext(ScreenContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  if (visibility) {
    return null;
  } else {
    return (
      <>
        <h4>Your Balance</h4>
        <h1>${total}</h1>
      </>
    );
  }
};
