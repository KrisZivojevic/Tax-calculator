import { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import { BsBrightnessHigh } from 'react-icons/bs';
import { MdBrightness2 } from 'react-icons/md';
import classes from './ToggleButton.module.css';

const ToggleButton = () => {
  const [theme, setTheme] = useContext(ThemeContext)
  const myStaticClass = 'dark'
  return (
    <button
    className={classes['toggle-button']}

      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "dark" ? <BsBrightnessHigh size="25px" color="#fff" /> : <MdBrightness2 size="25px" />}
    </button>
  );
};

export default ToggleButton;