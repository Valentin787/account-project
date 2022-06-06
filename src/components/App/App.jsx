import React, { Component } from "react";
import TransactionPage from "../_pages/ TransactionPage/TransactionPage";
import MainPage from "../_pages/MainPage/MainPage";
import * as api from "../../utils/api";

const STORAGE_COSTS_KEY = "costs";

const STORAGE_INCOMES_KEY = "incomes";

class App extends Component {
  state = {
    activePage: "main",
    costs: [],
    incomes: [],
    categories: [
      {
        id: "diff",
        title: "Разное",
      },
    ],
    error: null,
  };
  async componentDidMount() {
    // LOCAL STORAGE

    // const costs = JSON.parse(localStorage.getItem(STORAGE_COSTS_KEY));

    // const incomes = JSON.parse(localStorage.getItem(STORAGE_INCOMES_KEY));

    // costs && this.setState({ costs });
    // incomes && this.setState({ incomes });
    try {
      const costs = await api.getTransactions("costs");
      const incomes = await api.getTransactions("incomes");
      this.setState({ costs, incomes });
    } catch (error) {
      this.setError(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // LOCAL STORAGE
    // if (prevState.costs !== this.state.costs) {
    //   // localStorage.setItem(STORAGE_COSTS_KEY, JSON.stringify(this.state.costs));
    //   api.getTransactions("costs")
    // }
    // if (prevState.incomes !== this.state.incomes) {
    //   // localStorage.setItem(
    //   //   STORAGE_INCOMES_KEY,
    //   //   JSON.stringify(this.state.incomes)
    //   // );
    // }

    if (this.state.error && prevState.error !== this.state.error) {
      alert(this.state.error.message);
      this.setError();
    }
  }

  handleChangePage = (type) => {
    this.setState({ activePage: type });
  };
  addCategories = (newCategory) => {
    this.setState((prevState) => ({
      categories: [...prevState.categories, newCategory],
    }));
  };
  addTransaction = ({ dataForm, transtype }) => {
    this.setState((prevState) => {
      return { [transtype]: [...prevState[transtype], dataForm] };
    });
  };

  setError = (error = null) => {
    this.setState({ error });
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
            addData={this.addTransaction}
            transtype="costs"
            title="Расходы"
            addCategories={this.addCategories}
            categories={categories}
            setError={this.setError}
          />
        )}
        {activePage === "incomes" && (
          <TransactionPage
            onChangePage={this.handleChangePage}
            addData={this.addTransaction}
            transtype="incomes"
            title="Доходы"
            addCategories={this.addCategories}
            categories={categories}
            setError={this.setError}
          />
        )}
        {activePage === "balance" && <h1>Balance</h1>}
      </div>
    );
  }
}

export default App;
