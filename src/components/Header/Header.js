import classes from './Header.module.css';
import { GiReceiveMoney } from 'react-icons/gi';

const Header = () => {
  return (
    <header className={classes.header__title}>
      <GiReceiveMoney size="40px" />
      <h1>Income Tax Calculator</h1>
    </header>
  )
}

export default Header;