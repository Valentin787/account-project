import React, { Component } from "react";
import PropTypes from "prop-types";

class CategoriesList extends Component {
  state = {
    inputValue: "",
    checkedValue: null,
  };

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({ inputValue: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { inputValue } = this.state;
    const { addCategories } = this.props;
    const id = Date.now();

    addCategories({
      title: inputValue,
      id,
    });

    this.resetInput();
  };

  handleChecked = (e) => {
    const { value } = e.target;
    this.setState({ checkedValue: value });
  };

  resetInput = () => this.setState({ inputValue: "" });

  render() {
    const { inputValue, checkedValue } = this.state;
    const { categories } = this.props;

    console.log(categories);
    return (
      <div>
        <ul>
          {categories.map(({ title, id }) => {
            return (
              <li key={id}>
                <label>
                  <p>{title}</p>
                  <input
                    type="radio"
                    value={id}
                    name="category"
                    checked={id === +checkedValue}
                    onChange={this.handleChecked}
                  />
                </label>
              </li>
            );

            // <li key={index + 1}>
            //   <p>{category}</p>
            // </li>
          })}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Новая категория ..."
            value={inputValue}
          />
          <button>Отправить</button>
        </form>
      </div>
    );
  }
}

CategoriesList.propTypes = {};

export default CategoriesList;
