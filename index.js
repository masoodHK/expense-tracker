import React, { Component } from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import { ScreenProvider } from "./context/ScreenState";
import { GlobalProvider } from "./context/AppState";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <GlobalProvider>
        <ScreenProvider>
          <Header />
          <div className="container">
            <Balance />
            <AddTransaction />
            <IncomeExpense />
            <TransactionList />
          </div>
        </ScreenProvider>
      </GlobalProvider>
    );
  }
}

render(<App />, document.getElementById("root"));
