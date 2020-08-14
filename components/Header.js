import React, { useContext } from "react";
import { ScreenContext } from "../context/ScreenState";

export const Header = () => {
  const { showForm, visibility } = useContext(ScreenContext);
  return (
    <>
      <h2>Expense Tracker</h2>
      {visibility ? null : (
        <button className="btn" onClick={showForm}>
          Add new Transaction
        </button>
      )}
    </>
  );
};
