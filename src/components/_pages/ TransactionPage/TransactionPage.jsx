import { useState } from "react";
import PropTypes from "prop-types";
import CategoriesList from "../../CategoriesList/CategoriesList";
import GoBackHeader from "../../shared/GoBackHeader/GoBackHeader";
import LabelInput from "../../shared/LabelInput/LabelInput";
import TransactionsForm from "../TransactionsForm/TransactionsForm";
import s from "./TransactionPage.module.css";

const TransactionPage = ({
  categories,
  title,
  addCategories,
  addData,
  transtype,
  setError,
  onChangePage,
}) => {
  // const [date, setDate] = useState("2022-05-28");
  // const [time, setTime] = useState("18:12");
  // const [category, setCategory] = useState(categories[0]);
  // const [sum, setSum] = useState("");
  // const [currency, setCurrency] = useState("EUR");
  // const [comment, setComment] = useState("");
  const [isOpenCategoryList, setIsOpenCategoryList] = useState(false);
  const [dataForm, setDataForm] = useState({
    date: "2022-05-28",
    time: "18:12",
    category: categories[0],
    sum: "",
    currency: "EUR",
    comment: "",
  });

  const getInputValue = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({ ...prev, [name]: value }));
  };

  const openCategoryList = () => setIsOpenCategoryList(true);

  const closeCategoryList = () => setIsOpenCategoryList(false);

  const resetInputs = () => {
    setDataForm({
      date: "2022-05-28",
      time: "18:12",
      category: categories[0],
      sum: "",
      currency: "EUR",
      comment: "",
    });
    setIsOpenCategoryList(false);
  };

  return (
    <section className={s.section}>
      <GoBackHeader
        onChangePage={isOpenCategoryList ? closeCategoryList : onChangePage}
        mainPage="main"
        title={isOpenCategoryList ? "Категории" : title}
      />
      {isOpenCategoryList ? (
        <CategoriesList
          addCategories={addCategories}
          categories={categories[0]}
        />
      ) : (
        <TransactionsForm
          getInputValue={getInputValue}
          openCategoryList={openCategoryList}
          addData={addData}
          categories={categories}
          dataForm={dataForm}
          transtype={transtype}
          resetInputs={resetInputs}
          setError={setError}
        />
      )}
    </section>
  );
};

TransactionPage.propTypes = {
  title: PropTypes.string,
  onChangePage: PropTypes.func,
  addData: PropTypes.func,
  addCategories: PropTypes.func,
  categories: PropTypes.array,
};

export default TransactionPage;
