import React from "react";
import GoBackHeader from "../../shared/GoBackHeader/GoBackHeader";
import LabelInput from "../../shared/LabelInput/LabelInput";
import TransactionsForm from "../TransactionsForm/TransactionsForm";
import s from "./TransactionPage.module.css";

const TransactionPage = ({ onChangePage, onSubmit }) => {
  return (
    <section className={s.section}>
      <GoBackHeader
        onChangePage={onChangePage}
        mainPage="main"
        title="Расходы"
      />
      <TransactionsForm onSubmit={onSubmit} />
    </section>
  );
};

export default TransactionPage;
