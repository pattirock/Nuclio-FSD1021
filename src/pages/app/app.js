import React, { useState } from 'react';
import Sidebar from './sidebar/sidebar';
import List from '../list/list';
import styles from './app.module.css'

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className={styles.container}>
      <Sidebar onSearch={setSearchValue} />
      <div className={styles.content}>
        <List searchValue={searchValue} />
      </div>
    </div>
  );
};

export default App;
