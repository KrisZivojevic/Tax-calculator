import classes from './IncomeDetails.module.css';

const IncomeDetails = () => {
  return (
    <section className={classes.details__section}>
      <div className={classes.details__header}>
        <span className={classes.details__income}>$ 9 078</span>
        <p>is your net fortnightly income</p>
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
            <td>$ 7 500</td>
            <td>$ 1 178</td>
            <td>$ 4 539</td>
          </tr>
          <tr>
            <td>Fortnightly</td>
            <td>$ 15 000</td>
            <td>$ 2 428</td>
            <td>$ 9 078</td>
          </tr>
          <tr>
            <td>Monthly</td>
            <td>$ 32 500</td>
            <td>$ 5 611</td>
            <td>$ 19 669</td>
          </tr>
          <tr>
            <td>Annually</td>
            <td>$ 390 000</td>
            <td>$ 153 967</td>
            <td>$ 236 033</td>
          </tr>
        </table>

      </div>
    </section>
  )
}

export default IncomeDetails;