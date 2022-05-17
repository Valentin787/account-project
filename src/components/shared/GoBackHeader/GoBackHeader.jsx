import PropTypes from "prop-types";
import s from "./GoBackHeader.module.scss";

const GoBackHeader = ({ title, onChangePage, mainPage }) => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <button onClick={() => onChangePage(mainPage)} className={s.btn}>
          GoBack
        </button>
        <h2 className={s.title}>{title}</h2>
      </div>
    </header>
  );
};

GoBackHeader.propTypes = {
  title: PropTypes.string,
};

export default GoBackHeader;
