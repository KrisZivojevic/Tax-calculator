import { shortenDecimal } from "../../../helpers/helpers";

const Row = ({ title, income }) => (
  <tr>
    <td>{title}</td>
    <td>{shortenDecimal(income / 0.7)}</td>
    <td>{shortenDecimal(income / 0.3)}</td>
    <td>{shortenDecimal(income)}</td>
  </tr>
);

export default Row;
