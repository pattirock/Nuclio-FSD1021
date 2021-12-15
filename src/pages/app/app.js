import React, { useState } from 'react';
import Sidebar from './sidebar/sidebar';
import List from '../list/list';
import Details from '../details/details';
import styles from './app.module.css'
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className={styles.container}>
      <Sidebar onSearch={setSearchValue} />
      <div className={styles.content}>
        <Routes>
          <Route path="/" exact element={<List searchValue={searchValue} />} />
          <Route path="/photo/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
