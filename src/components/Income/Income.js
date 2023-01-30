import classes from './Income.module.css';

const Income = () => {
  return (
    <div>
      <p className="padding">What is your total income?</p>
      <div className={classes.currency_wrapper}>
        <span className={classes.currency_symbol}>$</span>
        <input type="text" placeholder="e.g. 12000" className={classes.currency__input} />
        <select>
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Fortnightly</option>
          <option>Annually</option>
        </select>
      </div>
      <p className="padding">Please choose the income type:</p>
      <div className={classes.btn_container}>
        <button className={classes.btn__gross}>Gross Income</button>
        <button className={classes.btn__net}>Net Income</button>
        <button className={classes.btn__calc}>Calculate</button>
      </div>
    </div>
  )
}

export default Income;