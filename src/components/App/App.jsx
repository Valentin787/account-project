import React, { Component } from "react";
import TransactionPage from "../_pages/ TransactionPage/TransactionPage";
import MainPage from "../_pages/MainPage/MainPage";

class App extends Component {
  state = {
    activePage: "main",
    data: [],
    categories: [],
  };

  handleChangePage = (type) => {
    this.setState({ activePage: type });
  };
  addCategories = (newCategory) => {
    this.setState((prevState) => ({
      categories: [...prevState.categories, newCategory],
    }));
  };
  addData = (newArr) => {
    this.setState((prevState) => {
      return { data: [...prevState.data, newArr] };
    });
  };

  render() {
    const { activePage, categories } = this.state;
    return (
      <div>
        {activePage === "main" && (
          <MainPage onChangePage={this.handleChangePage} />
        )}
        {activePage === "costs" && (
          <TransactionPage
            onChangePage={this.handleChangePage}
            addData={this.addData}
            transtype="costs"
            title="Расходы"
            addCategories={this.addCategories}
            categories={categories}
          />
        )}
        {activePage === "incomes" && (
          <TransactionPage
            onChangePage={this.handleChangePage}
            addData={this.addData}
            transtype="incomes"
            title="Доходы"
            addCategories={this.addCategories}
            categories={categories}
          />
        )}
        {activePage === "balance" && <h1>Balance</h1>}
      </div>
    );
  }
}

export default App;
