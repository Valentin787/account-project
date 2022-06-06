import PropTypes from "prop-types";
import { Component } from "react";

import LabelInput from "../../shared/LabelInput/LabelInput";
import s from "./TransactionsForm.module.scss";

import * as api from "../../../utils/api";

class TransactionsForm extends Component {
  handleSubmitForm = (e) => {
    e.preventDefault();
    const { addData, dataForm, transtype, resetInputs, setError } = this.props;
    api
      .postTransactions(transtype, dataForm)
      .then((transaction) => addData({ dataForm: transaction, transtype }))
      .catch((error) => setError(error));

    resetInputs();
  };

  render() {
    const { openCategoryList, getInputValue, dataForm, transtype } = this.props;
    const { date, time, category, currency, sum, comment } = dataForm;

    return (
      <form onSubmit={this.handleSubmitForm} className={s.form}>
        <div className={s.time__container}>
          <LabelInput
            onGetValue={getInputValue}
            name="date"
            type="date"
            title="День"
            value={date}
          />
          <LabelInput
            onGetValue={getInputValue}
            name="time"
            type="time"
            title="Время"
            value={time}
          />
        </div>
        <div className={s.time__container}>
          <LabelInput
            onGetValue={getInputValue}
            // value={}
            name="category"
            type="button"
            title="Категория"
            handleClick={openCategoryList}
            value={category.title}
          />
        </div>
        <LabelInput
          onGetValue={getInputValue}
          name="sum"
          type="text"
          title="Сумма"
          placeholder="Введите сумму"
          value={sum}
        />
        <LabelInput
          onGetValue={getInputValue}
          name="currency"
          type="button"
          title="Валюта"
          value={currency}
        />
        <LabelInput
          onGetValue={getInputValue}
          name="comment"
          type="text"
          title="Коментарий"
          placeholder="Комментарий"
          value={comment}
        />
        <button className={s.btn}>ok</button>
      </form>
    );
  }
}

// const TransactionsForm = () => {
//   return (
//     <form className={s.form}>
//       <div className={s.time__container}>
//         <LabelInput type="date" title="День" />
//         <LabelInput type="time" title="Время" />
//       </div>
//         <div className={s.time__container}>
//         <LabelInput type="button" title="Категория" />
//         </div>
//         <LabelInput type="text" title="Сумма" placeholder="Введите сумму"/>
//         <LabelInput type="button" title="Валюта" />
//         <LabelInput type="text" title="Коментарий" placeholder="Комментарий" />
//         <button className={s.btn}>ok</button>
//     </form>
//   )
// }

// TransactionsForm.propTypes = {}

export default TransactionsForm;
