import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { shortenDecimal } from "../../helpers/helpers";
import classes from "./IncomeDetails.module.css";
import Row from "./Row/Row";

const freqConsts = {
  Weekly: 1,
  Fortnightly: 2,
  Monthly: 4,
  Annually: 48,
};

const IncomeDetails = ({ saveIncomeData }) => {
  const [theme] = useContext(ThemeContext);
  const { netWeekly, frequency } = saveIncomeData;

  const netFort = netWeekly * 2;
  const netMonthly = netWeekly * 4;
  const netAnnually = netWeekly * 48;

  const rows = [
    {title: "Weekly", income: netWeekly},
    {title: "Fortnightly", income: netFort},
    {title: "Monthly", income: netMonthly},
    {title: "Annually", income: netAnnually},
  ]

  return (
    <section className={classes.details__section}>
      <div className={classes.details__header}>
        <span className={classes.details__income}>
          $ {shortenDecimal(netWeekly * freqConsts[frequency])}
        </span>
        <p>is your net <b>{frequency}</b> income</p>
      </div>

      <div>
        <table className={theme === "light" ? classes.table : `${classes.table} dark`}>
          <thead>
            <tr>
              <th>Frequency</th>
              <th>Gross</th>
              <th>Tax (30%)</th>
              <th>Net</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => <Row key={row.title} title={row.title} income={row.income} />)}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default IncomeDetails;
