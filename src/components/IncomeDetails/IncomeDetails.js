import { shortenDecimal } from "../../helpers/helpers";
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
          $ {shortenDecimal(netWeekly * freqConsts[frequency])}
        </span>
        <p>is your net <b>{frequency}</b> income</p>
      </div>

      <div className={classes.details__table}>
        <table>
          <thead>
            <tr>
              <th>Frequency</th>
              <th>Gross</th>
              <th>Tax (30%)</th>
              <th>Net</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Weekly</td>
              <td>{shortenDecimal(netWeekly / 0.7)}</td>
              <td>{shortenDecimal(netWeekly / 0.3)}</td>
              <td>{shortenDecimal(netWeekly)}</td>
            </tr>
            <tr>
              <td>Fortnightly</td>
              <td>{shortenDecimal(netFort / 0.7)}</td>
              <td>{shortenDecimal(netFort / 0.3)}</td>
              <td>{shortenDecimal(netFort)}</td>
            </tr>
            <tr>
              <td>Monthly</td>
              <td>{shortenDecimal(netMonthly / 0.7)}</td>
              <td>{shortenDecimal(netMonthly / 0.3)}</td>
              <td>{shortenDecimal(netMonthly)}</td>
            </tr>
            <tr>
              <td>Annually</td>
              <td>{shortenDecimal(netAnnually / 0.7)}</td>
              <td>{shortenDecimal(netAnnually / 0.3)}</td>
              <td>{shortenDecimal(netAnnually)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default IncomeDetails;
