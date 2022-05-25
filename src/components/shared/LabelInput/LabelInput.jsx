import PropTypes from "prop-types";
import s from "./LabelInput.module.scss";

const LabelInput = ({
  type,
  title,
  placeholder = null,
  name,
  onGetValue,
  handleClick,
}) => {
  return (
    <>
      <label className={s.label}>
        {title && <p className={s.title}>{title}</p>}
        {title === "Время" && (
          <input
            onChange={onGetValue}
            name={name}
            className={s.input}
            type={type}
            placeholder={placeholder}
          />
        )}
        {title === "День" && (
          <input
            onChange={onGetValue}
            name={name}
            className={s.input}
            type={type}
            placeholder={placeholder}
          />
        )}
      </label>
      <label>
        {title.includes("Категория") && (
          <>
            <input onClick={handleClick} type="button" />
            <select>
              <option value="Зарплата">Зарплата</option>
              <option value="Депозит">Депозит</option>
              <option value="Левак">Левак</option>
            </select>
          </>
        )}
      </label>
      <label>
        {title === "Сумма" && (
          <input
            onChange={onGetValue}
            name={name}
            placeholder={placeholder}
            type={type}
          />
        )}
      </label>
      <label>
        {title === "Валюта" && (
          <div>
            <input onChange={onGetValue} name={name} type={type} />{" "}
            <select>
              <option value="Зарплата">Зарплата</option>
              <option value="Депозит">Депозит</option>
              <option value="Левак">Левак</option>
            </select>{" "}
          </div>
        )}
      </label>
      <label>
        {title === "Коментарий" && (
          <input
            onChange={onGetValue}
            name={name}
            type={type}
            placeholder={placeholder}
          />
        )}
      </label>
    </>
  );
};

LabelInput.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
};

export default LabelInput;
