import React from 'react';
import Sidebar from './sidebar/sidebar';
import List from '../list/list';
import styles from './app.module.css'

const App = () => (
  <div className={styles.container}>
    <Sidebar />
    <div className={styles.content}>
      <List />
    </div>
  </div>
);

export default App;
