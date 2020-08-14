import React, { useContext } from "react";
import { GlobalContext } from "../context/AppState";
import { ScreenContext } from "../context/ScreenState";

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const { visibility } = useContext(ScreenContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  if (visibility) {
    return null;
  } else {
    return (
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">{expense}</p>
        </div>
      </div>
    );
  }
};
