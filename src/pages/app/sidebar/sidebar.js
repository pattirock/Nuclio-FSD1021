import React from 'react';
import logo from '../../../assets/logo.png';
import styles from './sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={styles.container}>
        <img src={logo} width={100} />
      </div>
  );
};

export default Sidebar;
