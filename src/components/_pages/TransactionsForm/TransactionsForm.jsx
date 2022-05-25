import PropTypes from "prop-types";
import { Component } from "react";

import LabelInput from "../../shared/LabelInput/LabelInput";
import s from "./TransactionsForm.module.scss";

class TransactionsForm extends Component {
  state = {
    date: "",
    time: "",
    category: "",
    sum: "",
    currency: "",
    comment: "",
  };

  getInputValue = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: [value] });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    console.log(this.state);
    onSubmit(this.state);
  };

  render() {
    const { openCategoryList } = this.props;

    return (
      <form onSubmit={this.handleSubmitForm} className={s.form}>
        <div className={s.time__container}>
          <LabelInput
            onGetValue={this.getInputValue}
            name="date"
            type="date"
            title="День"
          />
          <LabelInput
            onGetValue={this.getInputValue}
            name="time"
            type="time"
            title="Время"
          />
        </div>
        <div className={s.time__container}>
          <LabelInput
            onGetValue={this.getInputValue}
            name="category"
            type="button"
            title="Категория"
            handleClick={openCategoryList}
          />
        </div>
        <LabelInput
          onGetValue={this.getInputValue}
          name="sum"
          type="text"
          title="Сумма"
          placeholder="Введите сумму"
        />
        <LabelInput
          onGetValue={this.getInputValue}
          name="currency"
          type="button"
          title="Валюта"
        />
        <LabelInput
          onGetValue={this.getInputValue}
          name="comment"
          type="text"
          title="Коментарий"
          placeholder="Комментарий"
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
