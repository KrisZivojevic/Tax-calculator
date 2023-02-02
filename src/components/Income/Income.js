import classes from "./Income.module.css";

const Income = ({
  income,
  incomeType,
  frequency,
  incomeHandler,
  incomeTypeHandler,
  frequencyHandler,
  calculateHandler,
}) => {
  return (
    <div>
      <p className="padding">What is your total income?</p>
      <div className={classes.currency_wrapper}>
        <span className={classes.currency_symbol}>$</span>
        <input
          type="number"
          placeholder="e.g. 12000"
          min="1"
          className={classes.currency__input}
          value={income}
          onChange={incomeHandler}
        />
        <select value={frequency} onChange={frequencyHandler}>
          <option>Weekly</option>
          <option>Fortnightly</option>
          <option>Monthly</option>
          <option>Annually</option>
        </select>
      </div>
      <p className="padding">Please choose the income type:</p>
      <div className={classes.btn_container}>
        <button className={`${classes.btn__gross} ${incomeType === 'gross' ? classes.btn__active : ''}`} onClick={() => incomeTypeHandler('gross')}>Gross Income</button>
        <button className={`${classes.btn__net} ${incomeType === 'net' ? classes.btn__active : ''}`} onClick={() => incomeTypeHandler('net')}>Net Income</button>
        <button className={classes.btn__calc} onClick={calculateHandler}>Calculate</button>
      </div>
    </div>
  );
};

export default Income;
