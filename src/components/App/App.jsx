import React, { Component } from "react";
import TransactionPage from "../_pages/ TransactionPage/TransactionPage";
import MainPage from "../_pages/MainPage/MainPage";

class App extends Component {
  state = {
    activePage: "main",
    data: [],
  };

  handleChangePage = (type) => {
    this.setState({ activePage: type });
    console.log(type);
  };

  addData = (newArr) => {
    this.setState((prevState) => {
      console.log(prevState);
      return { data: [...prevState.data, newArr] };
    });
  };

  render() {
    const { activePage } = this.state;
    return (
      <div>
        {activePage === "main" && (
          <MainPage onChangePage={this.handleChangePage} />
        )}
        {activePage === "costs" && (
          <TransactionPage
            onChangePage={this.handleChangePage}
            onSubmit={this.addData}
            transtype="costs"
          />
        )}
        {activePage === "incomes" && (
          <TransactionPage
            onChangePage={this.handleChangePage}
            onSubmit={this.addData}
            transtype="incomes"
          />
        )}
        {activePage === "balance" && <h1>Balance</h1>}
      </div>
    );
  }
}

export default App;
