import React from 'react';
import Card from './card/card';
import data from '../../assets/response.json';
import styles from './list.module.css';

const List = () => (
  <div className={styles.container}>
    {data.map(item => <Card item={item} />)}
  </div>
);

export default List;
