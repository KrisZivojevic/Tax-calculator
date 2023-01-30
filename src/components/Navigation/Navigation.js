import { useState } from "react";
import Tab from "./Tab";
import classes from './Navigation.module.css';

const Navigation = ({activeTab, activeHandler}) => {
  

  return (
    <nav>
      <ul className={classes.nav__list}>
        <Tab tabId={0} activeTab={activeTab} activeHandler={activeHandler} name="Income" />
        <Tab tabId={1} activeTab={activeTab} activeHandler={activeHandler} name="Income Details" />
      </ul>
    </nav>
  );
};

export default Navigation;
