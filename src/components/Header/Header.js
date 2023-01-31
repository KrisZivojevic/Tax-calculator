import classes from './Header.module.css';
import { GiReceiveMoney } from 'react-icons/gi';

const Header = () => {
  return (
    <header className={classes.header__title}>
      <GiReceiveMoney size="30px" />
      <h2>Income Tax Calculator</h2>
    </header>
  )
}

export default Header;