import styles from './Navigation.module.css';

const Tab = ({activeTab, tabId, activeHandler, name}) => {
  return (
    <li className={activeTab === tabId ? `${styles.nav__item} ${styles.active}` : `${styles.nav__item}`} onClick={() => activeHandler(tabId)}>{name}</li>
  )
}

export default Tab;