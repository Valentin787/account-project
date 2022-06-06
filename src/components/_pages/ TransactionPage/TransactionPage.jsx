import React, { Component } from "react";
import PropTypes from "prop-types";
import CategoriesList from "../../CategoriesList/CategoriesList";
import GoBackHeader from "../../shared/GoBackHeader/GoBackHeader";
import LabelInput from "../../shared/LabelInput/LabelInput";
import TransactionsForm from "../TransactionsForm/TransactionsForm";
import s from "./TransactionPage.module.css";

class TransactionPage extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onChangePage: PropTypes.func,
    addData: PropTypes.func,
    addCategories: PropTypes.func,
    categories: PropTypes.array,
  };
  state = {
    date: "2022-05-28",
    time: "18:12",
    category: this.props.categories[0],
    sum: "",
    currency: "EUR",
    comment: "",
    isOpenCategoryList: false,
  };

  getInputValue = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: [value] });
  };

  openCategoryList = () => {
    this.setState({ isOpenCategoryList: true });
  };
  closeCategoryList = () => this.setState({ isOpenCategoryList: false });

  resetInputs = () => {
    this.setState({
      date: "2022-05-28",
      time: "18:12",
      category: this.props.categories[0],
      sum: "",
      currency: "EUR",
      comment: "",
      isOpenCategoryList: false,
    });
  };

  render() {
    const { isOpenCategoryList, ...dataForm } = this.state;
    const {
      onChangePage,
      addData,
      title,
      addCategories,
      categories,
      transtype,
      setError,
    } = this.props;

    return (
      <section className={s.section}>
        <GoBackHeader
          onChangePage={
            isOpenCategoryList ? this.closeCategoryList : onChangePage
          }
          mainPage="main"
          title={isOpenCategoryList ? "Категории" : title}
        />
        {isOpenCategoryList ? (
          <CategoriesList
            addCategories={addCategories}
            categories={categories}
          />
        ) : (
          <TransactionsForm
            getInputValue={this.getInputValue}
            openCategoryList={this.openCategoryList}
            addData={addData}
            categories={categories}
            dataForm={dataForm}
            transtype={transtype}
            resetInputs={this.resetInputs}
            setError={setError}
          />
        )}
      </section>
    );
  }
}

export default TransactionPage;
