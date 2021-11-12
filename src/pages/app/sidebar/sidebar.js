import React from 'react';
import logo from '../../../assets/logo.png';
import styles from './sidebar.module.css'

const Sidebar = ({ onSearch = (value) => {} }) => {
  return (
    <div className={styles.container}>
      <img src={logo} width={100} />

      <div className={styles.searchbar}>
        <input onChange={event => {
          const value = event.target.value;
          onSearch(value);
        }} placeholder="Search" />
      </div>

    </div>
  );
};

export default Sidebar;
