import PropTypes from "prop-types";
import MainInfo from "../../MainInfo/MainInfo";
import mainInfo from "../../../mainInfoOptions.json";
import OpenHistoryBtn from "../../OpenHistoryBtn";

const { costsInfoOptions, balanceInfoOptions, incomesInfoOptions } = mainInfo;

const MainPage = () => {
  return (
    <>
      <h1>Журнал расходов</h1>
      <MainInfo btnTitle="+" title="Расходы" options={costsInfoOptions} />
      <MainInfo btnTitle="+" title="Доходы" options={incomesInfoOptions} />
      <MainInfo btnTitle="..." title="Баланс" options={balanceInfoOptions} />
      <OpenHistoryBtn />
    </>
  );
};

export default MainPage;
