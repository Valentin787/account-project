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
    isOpenCategoryList: false,
  };
  openCategoryList = () => {
    this.setState({ isOpenCategoryList: true });
  };
  closeCategoryList = () => this.setState({ isOpenCategoryList: false });

  render() {
    const { isOpenCategoryList } = this.state;
    const { onChangePage, addData, title, addCategories, categories } =
      this.props;

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
            openCategoryList={this.openCategoryList}
            addData={addData}
          />
        )}
      </section>
    );
  }
}

export default TransactionPage;
