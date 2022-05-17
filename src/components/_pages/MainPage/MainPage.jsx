import PropTypes from "prop-types";
import MainInfo from "../../MainInfo/MainInfo";
import mainInfo from "../../../mainInfoOptions.json";
import OpenHistoryBtn from "../../OpenHistoryBtn";
import s from "./MainPage.module.css";

const { costsInfoOptions, balanceInfoOptions, incomesInfoOptions } = mainInfo;

const MainPage = ({ onChangePage }) => {
  return (
    <section className={s.section}>
      <h1>Журнал расходов</h1>
      <MainInfo
        onChangePage={onChangePage}
        btnTitle="+"
        activePage="costs"
        title="Расходы"
        options={costsInfoOptions}
      />
      <MainInfo
        onChangePage={onChangePage}
        btnTitle="+"
        activePage="incomes"
        title="Доходы"
        options={incomesInfoOptions}
      />
      <MainInfo
        onChangePage={onChangePage}
        activePage="balance"
        btnTitle="..."
        title="Баланс"
        options={balanceInfoOptions}
      />
      <OpenHistoryBtn />
    </section>
  );
};

export default MainPage;
