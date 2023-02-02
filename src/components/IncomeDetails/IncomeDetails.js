import classes from "./IncomeDetails.module.css";

const freqConsts = {
  Weekly: 1,
  Fortnightly: 2,
  Monthly: 4,
  Annually: 48,
};

const IncomeDetails = ({ saveIncomeData }) => {
  const { netWeekly, frequency } = saveIncomeData;

  const netFort = netWeekly * 2;
  const netMonthly = netWeekly * 4;
  const netAnnually = netWeekly * 48;

  return (
    <section className={classes.details__section}>
      <div className={classes.details__header}>
        <span className={classes.details__income}>
          {netWeekly * freqConsts[frequency]}
        </span>
        <p>is your net {frequency} income</p>
      </div>

      <div className={classes.details__table}>
        <table>
          <tr>
            <th>Frequency</th>
            <th>Gross Income</th>
            <th>Tax</th>
            <th>Net Income</th>
          </tr>
          <tr>
            <td>Weekly</td>
            <td>$ {(netWeekly / 0.7).toFixed(2)}</td>
            <td>$ {(netWeekly / 0.3).toFixed(2)}</td>
            <td>$ {netWeekly.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Fortnightly</td>
            <td>$ {(netFort / 0.7).toFixed(2)}</td>
            <td>$ {(netFort / 0.3).toFixed(2)}</td>
            <td>$ {netFort.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Monthly</td>
            <td>$ {(netMonthly / 0.7).toFixed(2)}</td>
            <td>$ {(netMonthly / 0.3).toFixed(2)}</td>
            <td>$ {netMonthly.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Annually</td>
            <td>$ {(netAnnually / 0.7).toFixed(2)}</td>
            <td>$ {(netAnnually / 0.3).toFixed(2)}</td>
            <td>$ {netAnnually.toFixed(2)}</td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default IncomeDetails;
