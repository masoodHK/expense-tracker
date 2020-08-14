import React, { useContext } from "react";
import { Transaction } from "./Transaction";

import { GlobalContext } from "../context/AppState";
import { ScreenContext } from "../context/ScreenState";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  const { visibility } = useContext(ScreenContext);

  if (visibility) {
    return null;
  } else {
    return (
      <>
        <h3>History</h3>
        <ul className="list">
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      </>
    );
  }
};
